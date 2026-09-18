import { useState, useRef, useEffect } from 'react';

interface AudioData {
  file: File;
  buffer: AudioBuffer;
  duration: number;
  sampleRate: number;
  channels: number;
}

interface TranscriptionSegment {
  id: number;
  start: number;
  end: number;
  text: string;
  speaker: number;
  confidence: number;
}

export function AudioAnalyzer() {
  const [audioData, setAudioData] = useState<AudioData | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcription, setTranscription] = useState<TranscriptionSegment[]>([]);
  const [isDiarizing, setIsDiarizing] = useState(false);
  const [audioQuality, setAudioQuality] = useState<{
    rms: number;
    peak: number;
    noiseFloor: number;
    snr: number;
    quality: string;
    qualityColor: string;
  } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showQualityDetails, setShowQualityDetails] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Drag & Drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('audio/')) {
      loadAudioFile(file);
    }
  };

  // Carregar arquivo de áudio
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      loadAudioFile(file);
    }
  };

  const loadAudioFile = async (file: File) => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      const arrayBuffer = await file.arrayBuffer();
      const audioBuffer = await audioContextRef.current.decodeAudioData(arrayBuffer);

      const data: AudioData = {
        file,
        buffer: audioBuffer,
        duration: audioBuffer.duration,
        sampleRate: audioBuffer.sampleRate,
        channels: audioBuffer.numberOfChannels,
      };

      setAudioData(data);
      analyzeAudioQuality(audioBuffer);
      drawWaveform(audioBuffer);
      setTranscription([]);
      setCurrentTime(0);
    } catch (error) {
      console.error('Erro ao carregar áudio:', error);
      alert('Erro ao carregar o arquivo de áudio. Verifique se o formato é suportado.');
    }
  };

  // Analisar qualidade do áudio
  const analyzeAudioQuality = (buffer: AudioBuffer) => {
    const channelData = buffer.getChannelData(0);
    
    // Calcular RMS
    let sum = 0;
    for (let i = 0; i < channelData.length; i++) {
      sum += channelData[i] * channelData[i];
    }
    const rms = Math.sqrt(sum / channelData.length);
    const rmsDb = 20 * Math.log10(rms);

    // Calcular Peak
    let peak = 0;
    for (let i = 0; i < channelData.length; i++) {
      const abs = Math.abs(channelData[i]);
      if (abs > peak) peak = abs;
    }
    const peakDb = 20 * Math.log10(peak);

    // Estimar noise floor
    const noiseSamples = Math.floor(buffer.sampleRate * 0.5);
    let noiseSum = 0;
    for (let i = 0; i < noiseSamples && i < channelData.length; i++) {
      noiseSum += channelData[i] * channelData[i];
    }
    const noiseFloor = Math.sqrt(noiseSum / noiseSamples);
    const noiseFloorDb = 20 * Math.log10(noiseFloor);

    // Calcular SNR (Signal-to-Noise Ratio)
    const snr = rmsDb - noiseFloorDb;

    // Determinar qualidade
    let quality = 'Excelente';
    let qualityColor = 'text-emerald-400';
    
    if (rmsDb < -40 || snr < 10) {
      quality = 'Muito Baixo';
      qualityColor = 'text-red-400';
    } else if (rmsDb < -30 || snr < 15) {
      quality = 'Baixo';
      qualityColor = 'text-orange-400';
    } else if (rmsDb < -20 || snr < 20) {
      quality = 'Bom';
      qualityColor = 'text-yellow-400';
    } else if (rmsDb < -10 || snr < 25) {
      quality = 'Muito Bom';
      qualityColor = 'text-blue-400';
    }

    setAudioQuality({
      rms: rmsDb,
      peak: peakDb,
      noiseFloor: noiseFloorDb,
      snr,
      quality,
      qualityColor,
    });
  };

  // Desenhar forma de onda
  const drawWaveform = (buffer: AudioBuffer) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const channelData = buffer.getChannelData(0);
    const step = Math.ceil(channelData.length / width);

    ctx.clearRect(0, 0, width, height);
    
    // Fundo gradiente
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#1f2937');
    gradient.addColorStop(1, '#111827');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Linha central
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Forma de onda
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    for (let i = 0; i < width; i++) {
      let min = 1.0;
      let max = -1.0;
      
      for (let j = 0; j < step; j++) {
        const datum = channelData[i * step + j] || 0;
        if (datum < min) min = datum;
        if (datum > max) max = datum;
      }

      const yMin = ((1 + min) / 2) * height;
      const yMax = ((1 + max) / 2) * height;

      ctx.moveTo(i, yMin);
      ctx.lineTo(i, yMax);
    }

    ctx.stroke();

    // Marcadores de tempo
    ctx.fillStyle = '#6b7280';
    ctx.font = '10px monospace';
    for (let i = 0; i <= 10; i++) {
      const x = (i / 10) * width;
      const time = (i / 10) * buffer.duration;
      ctx.fillText(formatTime(time), x + 2, height - 5);
    }
  };

  // Reproduzir áudio
  const playAudio = () => {
    if (!audioData || !audioContextRef.current) return;

    if (isPlaying) {
      stopAudio();
      return;
    }

    const source = audioContextRef.current.createBufferSource();
    source.buffer = audioData.buffer;
    source.connect(audioContextRef.current.destination);
    source.start(0, currentTime);
    sourceRef.current = source;

    startTimeRef.current = audioContextRef.current.currentTime - currentTime;
    setIsPlaying(true);

    source.onended = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const updateTime = () => {
      if (!isPlaying || !audioContextRef.current) return;
      
      const elapsed = audioContextRef.current.currentTime - startTimeRef.current;
      setCurrentTime(elapsed);
      
      if (elapsed < audioData.duration) {
        animationRef.current = requestAnimationFrame(updateTime);
      }
    };

    updateTime();
  };

  const stopAudio = () => {
    if (sourceRef.current) {
      sourceRef.current.stop();
      sourceRef.current = null;
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    setIsPlaying(false);
  };

  // Simular transcrição
  const simulateTranscription = async () => {
    if (!audioData) return;

    setIsTranscribing(true);
    setTranscription([]);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const segments: TranscriptionSegment[] = [];
    const sampleTexts = [
      'Bom dia, como o senhor está hoje?',
      'Estou bem, obrigado por perguntar.',
      'Pode nos contar o que aconteceu naquele dia?',
      'Claro, eu estava em casa quando recebi a ligação.',
      'Que tipo de ligação era essa?',
      'Era uma ligação do meu advogado.',
      'E o que ele disse?',
      'Ele me informou sobre o processo.',
      'O senhor pode ser mais específico?',
      'Ele disse que precisava da minha declaração.',
    ];

    const segmentDuration = audioData.duration / sampleTexts.length;
    
    for (let i = 0; i < sampleTexts.length; i++) {
      segments.push({
        id: i,
        start: i * segmentDuration,
        end: (i + 1) * segmentDuration,
        text: sampleTexts[i],
        speaker: (i % 2) + 1,
        confidence: 0.85 + Math.random() * 0.15,
      });
    }

    setTranscription(segments);
    setIsTranscribing(false);
  };

  // Simular diarização
  const simulateDiarization = async () => {
    if (!audioData) return;

    setIsDiarizing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (transcription.length > 0) {
      const updated = transcription.map((seg, i) => ({
        ...seg,
        speaker: (i % 3) + 1,
        confidence: 0.80 + Math.random() * 0.20,
      }));
      setTranscription(updated);
    }
    
    setIsDiarizing(false);
  };

  // Exportar transcrição
  const exportTranscription = (format: 'txt' | 'srt') => {
    if (transcription.length === 0) return;

    let content = '';
    let filename = '';

    if (format === 'txt') {
      content = 'TRANSCRIÇÃO - AltaVoz Forensic-1\n';
      content += '=====================================\n\n';
      content += `Arquivo: ${audioData?.file.name}\n`;
      content += `Duração: ${audioData?.duration.toFixed(2)}s\n`;
      content += `Data: ${new Date().toLocaleString('pt-BR')}\n\n`;
      content += '-------------------------------------\n\n';

      transcription.forEach((seg) => {
        const start = formatTime(seg.start);
        const end = formatTime(seg.end);
        content += `[${start} - ${end}] Falante ${seg.speaker}:\n`;
        content += `${seg.text}\n\n`;
      });
      filename = `transcricao_${audioData?.file.name.replace(/\.[^/.]+$/, '')}.txt`;
    } else {
      // SRT format
      transcription.forEach((seg, i) => {
        content += `${i + 1}\n`;
        content += `${formatTimeSRT(seg.start)} --> ${formatTimeSRT(seg.end)}\n`;
        content += `[Falante ${seg.speaker}] ${seg.text}\n\n`;
      });
      filename = `transcricao_${audioData?.file.name.replace(/\.[^/.]+$/, '')}.srt`;
    }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatTimeSRT = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 1000);
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')},${ms.toString().padStart(3, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (sourceRef.current) sourceRef.current.stop();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (audioContextRef.current) audioContextRef.current.close();
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Upload de Áudio */}
      {!audioData && (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`rounded-2xl border-2 border-dashed p-16 text-center transition-all ${
            isDragging
              ? 'border-emerald-500 bg-emerald-900/20'
              : 'border-gray-700 bg-gray-900 hover:border-gray-600 hover:bg-gray-900/80'
          }`}
        >
          <div className="text-7xl mb-6">🎙️</div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Importar Áudio para Análise
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Arraste um arquivo de áudio aqui ou clique no botão abaixo para selecionar
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            📁 Selecionar Arquivo de Áudio
          </button>
          <p className="text-xs text-gray-500 mt-6">
            Formatos suportados: MP3, WAV, OGG, M4A, FLAC • Processamento 100% local
          </p>
        </div>
      )}

      {/* Player e Análise */}
      {audioData && (
        <>
          {/* Informações do Áudio */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="rounded-xl bg-gray-900 border border-gray-800 p-4">
              <div className="text-xs text-gray-400 mb-1">Arquivo</div>
              <div className="text-sm text-white font-medium truncate" title={audioData.file.name}>
                {audioData.file.name}
              </div>
            </div>
            <div className="rounded-xl bg-gray-900 border border-gray-800 p-4">
              <div className="text-xs text-gray-400 mb-1">Duração</div>
              <div className="text-sm text-white font-medium">
                {formatTime(audioData.duration)}
              </div>
            </div>
            <div className="rounded-xl bg-gray-900 border border-gray-800 p-4">
              <div className="text-xs text-gray-400 mb-1">Sample Rate</div>
              <div className="text-sm text-white font-medium">
                {(audioData.sampleRate / 1000).toFixed(1)} kHz
              </div>
            </div>
            <div className="rounded-xl bg-gray-900 border border-gray-800 p-4">
              <div className="text-xs text-gray-400 mb-1">Canais</div>
              <div className="text-sm text-white font-medium">
                {audioData.channels === 1 ? 'Mono' : 'Stereo'}
              </div>
            </div>
            <div className="rounded-xl bg-gray-900 border border-gray-800 p-4">
              <div className="text-xs text-gray-400 mb-1">Tamanho</div>
              <div className="text-sm text-white font-medium">
                {(audioData.file.size / 1024 / 1024).toFixed(2)} MB
              </div>
            </div>
          </div>

          {/* Qualidade do Áudio */}
          {audioQuality && (
            <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">Análise de Qualidade</h3>
                <button
                  onClick={() => setShowQualityDetails(!showQualityDetails)}
                  className="text-xs text-gray-400 hover:text-gray-200"
                >
                  {showQualityDetails ? 'Ocultar detalhes' : 'Ver detalhes'}
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Volume (RMS)</div>
                  <div className="text-lg text-white font-bold">
                    {audioQuality.rms.toFixed(1)} dB
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Pico</div>
                  <div className="text-lg text-white font-bold">
                    {audioQuality.peak.toFixed(1)} dB
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Ruído</div>
                  <div className="text-lg text-white font-bold">
                    {audioQuality.noiseFloor.toFixed(1)} dB
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">SNR</div>
                  <div className="text-lg text-white font-bold">
                    {audioQuality.snr.toFixed(1)} dB
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Qualidade</div>
                  <div className={`text-lg font-bold ${audioQuality.qualityColor}`}>
                    {audioQuality.quality}
                  </div>
                </div>
              </div>

              {showQualityDetails && (
                <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-400">
                  <p><strong>RMS:</strong> Volume médio do áudio. Ideal: -20 a -10 dB</p>
                  <p><strong>Pico:</strong> Volume máximo. Ideal: abaixo de -3 dB</p>
                  <p><strong>Ruído:</strong> Nível de ruído de fundo. Ideal: abaixo de -40 dB</p>
                  <p><strong>SNR:</strong> Relação sinal-ruído. Ideal: acima de 25 dB</p>
                </div>
              )}
            </div>
          )}

          {/* Visualização e Player */}
          <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
            <canvas
              ref={canvasRef}
              width={800}
              height={200}
              className="w-full border border-gray-700 rounded-lg mb-4"
            />
            
            <div className="flex items-center gap-4">
              <button
                onClick={playAudio}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors font-medium"
              >
                {isPlaying ? '⏸️ Pausar' : '▶️ Reproduzir'}
              </button>
              <div className="flex-1">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(audioData.duration)}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all"
                    style={{ width: `${(currentTime / audioData.duration) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={simulateTranscription}
              disabled={isTranscribing}
              className="px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white rounded-xl transition-colors font-medium"
            >
              {isTranscribing ? (
                <>
                  <span className="inline-block animate-spin mr-2">⚙️</span>
                  Transcrevendo...
                </>
              ) : (
                <>📝 Transcrever Áudio</>
              )}
            </button>

            <button
              onClick={simulateDiarization}
              disabled={isDiarizing || transcription.length === 0}
              className="px-6 py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 text-white rounded-xl transition-colors font-medium"
            >
              {isDiarizing ? (
                <>
                  <span className="inline-block animate-spin mr-2">⚙️</span>
                  Identificando...
                </>
              ) : (
                <>👥 Identificar Falantes</>
              )}
            </button>

            <div className="flex gap-2">
              <button
                onClick={() => exportTranscription('txt')}
                disabled={transcription.length === 0}
                className="flex-1 px-4 py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-700 text-white rounded-xl transition-colors font-medium"
              >
                💾 TXT
              </button>
              <button
                onClick={() => exportTranscription('srt')}
                disabled={transcription.length === 0}
                className="flex-1 px-4 py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-700 text-white rounded-xl transition-colors font-medium"
              >
                💾 SRT
              </button>
            </div>
          </div>

          {/* Transcrição */}
          {transcription.length > 0 && (
            <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">Transcrição</h3>
                <span className="text-xs text-gray-400">
                  {transcription.length} segmentos • {transcription.filter(s => s.speaker === 1).length} falantes identificados
                </span>
              </div>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {transcription.map((seg) => (
                  <div
                    key={seg.id}
                    className="p-3 bg-gray-800/50 rounded-lg border-l-4"
                    style={{
                      borderColor: `hsl(${seg.speaker * 120}, 70%, 50%)`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="px-2 py-0.5 rounded text-xs font-medium"
                          style={{
                            backgroundColor: `hsl(${seg.speaker * 120}, 70%, 50%, 0.2)`,
                            color: `hsl(${seg.speaker * 120}, 70%, 70%)`,
                          }}
                        >
                          Falante {seg.speaker}
                        </span>
                        <span className="text-xs text-gray-400">
                          {formatTime(seg.start)} - {formatTime(seg.end)}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {(seg.confidence * 100).toFixed(0)}%
                      </span>
                    </div>
                    <p className="text-sm text-gray-200">{seg.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Novo Áudio */}
          <div className="text-center pt-4">
            <button
              onClick={() => {
                stopAudio();
                setAudioData(null);
                setTranscription([]);
                setAudioQuality(null);
                setCurrentTime(0);
              }}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              🔄 Analisar Outro Áudio
            </button>
          </div>
        </>
      )}
    </div>
  );
}
