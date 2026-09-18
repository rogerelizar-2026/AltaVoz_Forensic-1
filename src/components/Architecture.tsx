export function Architecture() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">System Architecture</h2>
        <p className="text-gray-400 text-sm">
          Module boundaries, data flow, and thread isolation for the forensic audio pipeline.
        </p>
      </div>

      {/* Pipeline Overview */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-4">Processing Pipeline</h3>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          {['Import', 'Quality Analysis', 'Encryption', 'Transcribe', 'Diarize', 'Export'].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 font-medium">
                {step}
              </div>
              {i < 5 && <span className="text-gray-600">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Thread Architecture */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Thread & Worker Architecture</h3>
        </div>
        <div className="p-5 space-y-4">
          {/* Main Thread */}
          <div className="p-4 rounded-lg bg-blue-900/10 border border-blue-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <h4 className="font-medium text-blue-300">Main Thread (UI)</h4>
            </div>
            <ul className="text-sm text-gray-300 space-y-1 ml-5">
              <li>• React rendering, user interaction</li>
              <li>• Audio playback via Web Audio API</li>
              <li>• Canvas spectrogram rendering</li>
              <li>• IndexedDB orchestration</li>
              <li>• Worker lifecycle management</li>
            </ul>
          </div>

          {/* Workers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-emerald-900/10 border border-emerald-800/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <h4 className="font-medium text-emerald-300">Hash Chain Worker</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1 ml-5">
                <li>• SHA-256 hash-chain computation</li>
                <li>• Merkle tree generation</li>
                <li>• HMAC-SHA256 signing</li>
                <li>• Non-blocking for large imports</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-purple-900/10 border border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <h4 className="font-medium text-purple-300">Argon2id Worker</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1 ml-5">
                <li>• Argon2id key derivation (WASM)</li>
                <li>• Memory-hard computation</li>
                <li>• 64MB memory, 4 iterations</li>
                <li>• Isolated from main thread</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-orange-900/10 border border-orange-800/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                <h4 className="font-medium text-orange-300">whisper.cpp Worker</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1 ml-5">
                <li>• ASR inference (WASM)</li>
                <li>• Model loading from IndexedDB</li>
                <li>• Progress reporting</li>
                <li>• Memory-bounded (10-min chunks)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-cyan-900/10 border border-cyan-800/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                <h4 className="font-medium text-cyan-300">DSP / ONNX Worker</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1 ml-5">
                <li>• Silero VAD inference</li>
                <li>• ECAPA-TDNN embeddings</li>
                <li>• Spectral noise reduction</li>
                <li>• FFT via WASM (KissFFT)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Data Flow & Storage</h3>
        </div>
        <div className="p-5">
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300 text-xs font-mono whitespace-nowrap">IndexedDB</span>
              <span className="text-gray-300">Encrypted audio blobs, custody ledger, processing chain, model binaries</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300 text-xs font-mono whitespace-nowrap">WebCrypto</span>
              <span className="text-gray-300">AES-GCM encryption/decryption, SHA-256 hashing, HMAC-SHA256 signing</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300 text-xs font-mono whitespace-nowrap">Web Audio</span>
              <span className="text-gray-300">Playback, real-time visualization, AudioContext for analysis</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300 text-xs font-mono whitespace-nowrap">Canvas 2D</span>
              <span className="text-gray-300">Spectrogram rendering, waveform overlay, speaker timeline</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300 text-xs font-mono whitespace-nowrap">WASM</span>
              <span className="text-gray-300">Argon2id, whisper.cpp, KissFFT, ONNX Runtime backend</span>
            </div>
          </div>
        </div>
      </div>

      {/* Module Boundaries */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Module Boundaries</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-3 text-gray-400">Module</th>
                <th className="text-left p-3 text-gray-400">Responsibility</th>
                <th className="text-left p-3 text-gray-400">Thread</th>
                <th className="text-left p-3 text-gray-400">Dependencies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3 text-white font-mono text-xs">crypto/encryption</td>
                <td className="p-3 text-gray-300">AES-GCM encrypt/decrypt, key derivation orchestration</td>
                <td className="p-3 text-gray-400">Main</td>
                <td className="p-3 text-gray-400">WebCrypto, Argon2 Worker</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">crypto/hashChain</td>
                <td className="p-3 text-gray-300">Evidence integrity, custody events, Merkle trees</td>
                <td className="p-3 text-gray-400">Worker</td>
                <td className="p-3 text-gray-400">WebCrypto (SHA-256, HMAC)</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">dsp/sileroVad</td>
                <td className="p-3 text-gray-300">Voice activity detection, speech segmentation</td>
                <td className="p-3 text-gray-400">Worker</td>
                <td className="p-3 text-gray-400">ONNX Runtime Web</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">dsp/embeddings</td>
                <td className="p-3 text-gray-300">Speaker embedding extraction, clustering</td>
                <td className="p-3 text-gray-400">Worker</td>
                <td className="p-3 text-gray-400">ONNX Runtime Web</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">dsp/filters</td>
                <td className="p-3 text-gray-300">Noise reduction, EQ, forensic enhancement</td>
                <td className="p-3 text-gray-400">Worker</td>
                <td className="p-3 text-gray-400">KissFFT WASM</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">asr/whisper</td>
                <td className="p-3 text-gray-300">Speech-to-text transcription</td>
                <td className="p-3 text-gray-400">Worker</td>
                <td className="p-3 text-gray-400">whisper.cpp WASM</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">services/models</td>
                <td className="p-3 text-gray-300">Model download, integrity verification, storage</td>
                <td className="p-3 text-gray-400">Main</td>
                <td className="p-3 text-gray-400">IndexedDB, fetch (download only)</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">ui/spectrogram</td>
                <td className="p-3 text-gray-300">Canvas visualization, WCAG accessibility</td>
                <td className="p-3 text-gray-400">Main</td>
                <td className="p-3 text-gray-400">Canvas 2D, Worker (compute)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Failure Modes */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Failure Modes & Edge Cases</h3>
        <div className="space-y-3 text-sm">
          <div className="p-3 rounded-lg bg-red-900/10 border border-red-800/20">
            <span className="text-red-400 font-medium">OOM on large audio:</span>
            <span className="text-gray-300 ml-2">whisper.cpp WASM limited to ~2GB address space. Split audio into 10-minute chunks. Monitor memory via performance.measureMemory() where available.</span>
          </div>
          <div className="p-3 rounded-lg bg-red-900/10 border border-red-800/20">
            <span className="text-red-400 font-medium">Argon2 WASM crash:</span>
            <span className="text-gray-300 ml-2">If WASM memory allocation fails (64MB), fall back to PBKDF2 with 600,000 iterations (NIST recommendation). Log the fallback for audit trail.</span>
          </div>
          <div className="p-3 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
            <span className="text-yellow-400 font-medium">SharedArrayBuffer unavailable:</span>
            <span className="text-gray-300 ml-2">whisper.cpp falls back to single-threaded WASM. ~3-5x slower but functional. Detect via typeof SharedArrayBuffer === "undefined".</span>
          </div>
          <div className="p-3 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
            <span className="text-yellow-400 font-medium">ONNX model too large:</span>
            <span className="text-gray-300 ml-2">ECAPA-TDNN ~80MB. On constrained devices, offer ResNet-34 alternative (~20MB) with reduced accuracy. Let user choose during setup.</span>
          </div>
          <div className="p-3 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
            <span className="text-yellow-400 font-medium">Nonce reuse:</span>
            <span className="text-gray-300 ml-2">AES-GCM is catastrophically broken with nonce reuse. Use crypto.getRandomValues() for each encryption. Track used nonces in a Set per session as defense-in-depth.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
