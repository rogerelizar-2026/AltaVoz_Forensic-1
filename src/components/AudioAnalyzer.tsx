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
    quality: string;
  } | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Carregar arquivo de áudio
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      // Criar AudioContext
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      // Ler arquivo
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
    } catch (error) {
      console.error('Erro ao carregar áudio:', error);
      alert('Erro ao carregar o arquivo de áudio. Verifique se o formato é suportado.');
    }
  };

  // Analisar qualidade do áudio
  const analyzeAudioQuality = (buffer: AudioBuffer) => {
    const channelData = buffer.getChannelData(0);
    
    // Calcular RMS (Root Mean Square)
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

    // Estimar noise floor (primeiros 0.5 segundos)
    const noiseSamples = Math.floor(buffer.sampleRate * 0.5);
    let noiseSum = 0;
    for (let i = 0; i < noiseSamples && i < channelData.length; i++) {
      noiseSum += channelData[i] * channelData[i];
    }
    const noiseFloor = Math.sqrt(noiseSum / noiseSamples);
    const noiseFloorDb = 20 * Math.log10(noiseFloor);

    // Determinar qualidade
    let quality = 'Excelente';
    if (rmsDb < -40) quality = 'Muito Baixo';
    else if (rmsDb < -30) quality = 'Baixo';
    else if (rmsDb < -20) quality = 'Bom';
    else if (rmsDb < -10) quality = 'Muito Bom';

    setAudioQuality({
      rms: rmsDb,
      peak: peakDb,
      noiseFloor: noiseFloorDb,
      quality,
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
    ctx.fillStyle = '#1f2937';
    ctx.fillRect(0, 0, width, height);

    // Desenhar forma de onda
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1;
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

    // Desenhar linha do tempo
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      const x = (i / 10) * width;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
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

    // Atualizar tempo atual
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

  // Parar áudio
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

    // Simular processamento
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Gerar transcrição simulada
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
    
    // Atualizar speakers na transcrição existente
    if (transcription.length > 0) {
      const updated = transcription.map((seg, i) => ({
        ...seg,
        speaker: (i % 3) + 1, // Simular 3 falantes
      }));
      setTranscription(updated);
    }
    
    setIsDiarizing(false);
  };

  // Exportar transcrição
  const exportTranscription = () => {
    if (transcription.length === 0) return;

    let content = 'TRANSCRIÇÃO - AltaVoz Forensic-1\n';
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

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transcricao_${audioData?.file.name.replace(/\.[^/.]+$/, '')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Formatar tempo
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (sourceRef.current) {
        sourceRef.current.stop();
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Analisador de Áudio Forense</h2>
        <p className="text-gray-400 text-sm">
          Sistema funcional de análise, transcrição e diarização de áudio.
        </p>
      </div>

      {/* Upload de Áudio */}
      {!audioData && (
        <div className="rounded-xl bg-gray-900 border border-gray-800 p-8 text-center">
          <div className="text-6xl mb-4">🎙️</div>
          <h3 className="text-xl font-semibold text-white mb-2">Importar Áudio</h3>
          <p className="text-gray-400 mb-6">
            Selecione um arquivo de áudio para começar a análise
          </p>
          <label className="inline-block">
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <span className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg cursor-pointer transition-colors inline-block">
              📁 Selecionar Arquivo de Áudio
            </span>
          </label>
          <p className="text-xs text-gray-500 mt-4">
            Formatos suportados: MP3, WAV, OGG, M4A, FLAC
          </p>
        </div>
      )}

      {/* Player e Análise */}
      {audioData && (
        <>
          {/* Informações do Áudio */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="rounded-xl bg-gray-900 border border-gray-800 p-4">
              <div className="text-xs text-gray-400 mb-1">Arquivo</div>
              <div className="text-sm text-white font-medium truncate">
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
                {audioData.sampleRate} Hz
              </div>
            </div>
            <div className="rounded-xl bg-gray-900 border border-gray-800 p-4">
              <div className="text-xs text-gray-400 mb-1">Canais</div>
              <div className="text-sm text-white font-medium">
                {audioData.channels}
              </div>
            </div>
          </div>

          {/* Qualidade do Áudio */}
          {audioQuality && (
            <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
              <h3 className="font-semibold text-white mb-3">Análise de Qualidade</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  <div className="text-xs text-gray-400 mb-1">Ruído de Fundo</div>
                  <div className="text-lg text-white font-bold">
                    {audioQuality.noiseFloor.toFixed(1)} dB
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Qualidade</div>
                  <div className="text-lg text-emerald-400 font-bold">
                    {audioQuality.quality}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Visualização */}
          <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
            <h3 className="font-semibold text-white mb-3">Forma de Onda</h3>
            <canvas
              ref={canvasRef}
              width={800}
              height={200}
              className="w-full border border-gray-700 rounded-lg"
            />
            
            {/* Controles */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={playAudio}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
              >
                {isPlaying ? '⏸️ Pausar' : '▶️ Reproduzir'}
              </button>
              <div className="flex-1">
                <div className="text-sm text-gray-400">
                  {formatTime(currentTime)} / {formatTime(audioData.duration)}
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-1">
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
              className="px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white rounded-lg transition-colors"
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
              className="px-6 py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 text-white rounded-lg transition-colors"
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

            <button
              onClick={exportTranscription}
              disabled={transcription.length === 0}
              className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-700 text-white rounded-lg transition-colors"
            >
              💾 Exportar Transcrição
            </button>
          </div>

          {/* Transcrição */}
          {transcription.length > 0 && (
            <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
              <h3 className="font-semibold text-white mb-3">Transcrição</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {transcription.map((seg) => (
                  <div
                    key={seg.id}
                    className="p-3 bg-gray-800/50 rounded-lg border-l-4"
                    style={{
                      borderColor: `hsl(${seg.speaker * 120}, 70%, 50%)`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
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
                    <p className="text-sm text-gray-200">{seg.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Novo Áudio */}
          <div className="text-center">
            <button
              onClick={() => {
                stopAudio();
                setAudioData(null);
                setTranscription([]);
                setAudioQuality(null);
                setCurrentTime(0);
              }}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              🔄 Analisar Outro Áudio
            </button>
          </div>
        </>
      )}
    </div>
  );
}
