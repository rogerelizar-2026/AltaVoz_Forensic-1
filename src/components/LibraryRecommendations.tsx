export function LibraryRecommendations() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Libraries & Model Recommendations</h2>
        <p className="text-gray-400 text-sm">
          Offline-compatible WASM/ONNX libraries and model files with licensing, sizes, and integration notes.
        </p>
      </div>

      {/* WASM/ONNX Libraries */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Core WASM/ONNX Libraries</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-3 text-gray-400 font-medium">Package</th>
                <th className="text-left p-3 text-gray-400 font-medium">Purpose</th>
                <th className="text-left p-3 text-gray-400 font-medium">License</th>
                <th className="text-left p-3 text-gray-400 font-medium">Size</th>
                <th className="text-left p-3 text-gray-400 font-medium">Browser Support</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3">
                  <code className="text-emerald-400 text-xs">onnxruntime-web</code>
                </td>
                <td className="p-3 text-gray-300">ONNX model inference (WASM backend)</td>
                <td className="p-3 text-gray-400">MIT</td>
                <td className="p-3 text-gray-400">~2MB (WASM)</td>
                <td className="p-3 text-gray-400">Chromium 90+, FF 89+, Safari 15+</td>
              </tr>
              <tr>
                <td className="p-3">
                  <code className="text-emerald-400 text-xs">whisper.cpp</code> (WASM build)
                </td>
                <td className="p-3 text-gray-300">Speech-to-text (ggml models)</td>
                <td className="p-3 text-gray-400">MIT</td>
                <td className="p-3 text-gray-400">~5-10MB (WASM)</td>
                <td className="p-3 text-gray-400">Chromium 90+, FF 89+, Safari 15+</td>
              </tr>
              <tr>
                <td className="p-3">
                  <code className="text-emerald-400 text-xs">argon2-wasm</code> / <code className="text-emerald-400 text-xs">argon2</code> (compiled)
                </td>
                <td className="p-3 text-gray-300">Argon2id key derivation</td>
                <td className="p-3 text-gray-400">Apache-2.0 / MIT</td>
                <td className="p-3 text-gray-400">~200KB (WASM)</td>
                <td className="p-3 text-gray-400">All modern browsers</td>
              </tr>
              <tr>
                <td className="p-3">
                  <code className="text-emerald-400 text-xs">kissfft</code> (WASM)
                </td>
                <td className="p-3 text-gray-300">Fast Fourier Transform for DSP</td>
                <td className="p-3 text-gray-400">BSD-2-Clause</td>
                <td className="p-3 text-gray-400">~50KB (WASM)</td>
                <td className="p-3 text-gray-400">All modern browsers</td>
              </tr>
              <tr>
                <td className="p-3">
                  <code className="text-emerald-400 text-xs">libsamplerate</code> (WASM)
                </td>
                <td className="p-3 text-gray-300">High-quality audio resampling</td>
                <td className="p-3 text-gray-400">BSD-2-Clause</td>
                <td className="p-3 text-gray-400">~100KB (WASM)</td>
                <td className="p-3 text-gray-400">All modern browsers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Model Files */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Model Files</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-3 text-gray-400 font-medium">Model</th>
                <th className="text-left p-3 text-gray-400 font-medium">Task</th>
                <th className="text-left p-3 text-gray-400 font-medium">Format</th>
                <th className="text-left p-3 text-gray-400 font-medium">Size</th>
                <th className="text-left p-3 text-gray-400 font-medium">Source</th>
                <th className="text-left p-3 text-gray-400 font-medium">License</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3 text-white font-medium">Whisper Tiny (en)</td>
                <td className="p-3 text-gray-300">ASR</td>
                <td className="p-3 text-gray-400">ggml (.bin)</td>
                <td className="p-3 text-gray-400">~75 MB</td>
                <td className="p-3 text-gray-400">HuggingFace (ggerganov)</td>
                <td className="p-3 text-gray-400">MIT</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Whisper Base</td>
                <td className="p-3 text-gray-300">ASR (multilingual)</td>
                <td className="p-3 text-gray-400">ggml (.bin)</td>
                <td className="p-3 text-gray-400">~142 MB</td>
                <td className="p-3 text-gray-400">HuggingFace (ggerganov)</td>
                <td className="p-3 text-gray-400">MIT</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Whisper Small</td>
                <td className="p-3 text-gray-300">ASR (multilingual)</td>
                <td className="p-3 text-gray-400">ggml (.bin)</td>
                <td className="p-3 text-gray-400">~466 MB</td>
                <td className="p-3 text-gray-400">HuggingFace (ggerganov)</td>
                <td className="p-3 text-gray-400">MIT</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Silero VAD v5</td>
                <td className="p-3 text-gray-300">Voice Activity Detection</td>
                <td className="p-3 text-gray-400">ONNX (.onnx)</td>
                <td className="p-3 text-gray-400">~2 MB</td>
                <td className="p-3 text-gray-400">silero.ai models repo</td>
                <td className="p-3 text-gray-400">MIT</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">ECAPA-TDNN</td>
                <td className="p-3 text-gray-300">Speaker Embeddings</td>
                <td className="p-3 text-gray-400">ONNX (.onnx)</td>
                <td className="p-3 text-gray-400">~80 MB</td>
                <td className="p-3 text-gray-400">SpeechBrain (exported)</td>
                <td className="p-3 text-gray-400">Apache-2.0</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">ResNet-34 (alt)</td>
                <td className="p-3 text-gray-300">Speaker Embeddings (lighter)</td>
                <td className="p-3 text-gray-400">ONNX (.onnx)</td>
                <td className="p-3 text-gray-400">~20 MB</td>
                <td className="p-3 text-gray-400">SpeechBrain (exported)</td>
                <td className="p-3 text-gray-400">Apache-2.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Integration Notes */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Integration Notes</h3>
        <div className="space-y-4 text-sm text-gray-300">
          <div>
            <h4 className="text-emerald-400 font-medium mb-1">ONNX Runtime Web</h4>
            <ul className="space-y-1 ml-4">
              <li>• Install: <code className="bg-gray-800 px-1 rounded text-xs">npm install onnxruntime-web</code></li>
              <li>• Vendor WASM files from <code className="bg-gray-800 px-1 rounded text-xs">node_modules/onnxruntime-web/dist/</code> to <code className="bg-gray-800 px-1 rounded text-xs">/wasm/</code></li>
              <li>• Set <code className="bg-gray-800 px-1 rounded text-xs">ort.env.wasm.wasmPaths = '/wasm/'</code> before any session creation</li>
              <li>• Use <code className="bg-gray-800 px-1 rounded text-xs">executionProviders: ['wasm']</code> (no WebGL for reproducibility)</li>
              <li>• Disable <code className="bg-gray-800 px-1 rounded text-xs">ort.env.wasm.simd</code> if targeting older browsers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-1">whisper.cpp WASM</h4>
            <ul className="space-y-1 ml-4">
              <li>• Compile from source: <code className="bg-gray-800 px-1 rounded text-xs">emcc</code> with <code className="bg-gray-800 px-1 rounded text-xs">-s WASM=1 -s ALLOW_MEMORY_GROWTH=1</code></li>
              <li>• Enable SIMD: <code className="bg-gray-800 px-1 rounded text-xs">-msimd128</code> for ~2x speedup on supported browsers</li>
              <li>• SharedArrayBuffer: Add COOP/COEP headers, or detect and fall back to single-threaded</li>
              <li>• Memory: Set initial heap to 256MB, allow growth to 1GB</li>
              <li>• Run in dedicated Web Worker to avoid blocking UI</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-1">Argon2 WASM</h4>
            <ul className="space-y-1 ml-4">
              <li>• Options: <code className="bg-gray-800 px-1 rounded text-xs">argon2-wasm</code> (npm) or compile from <code className="bg-gray-800 px-1 rounded text-xs">github.com/P-H-C/phc-winner-argon2</code></li>
              <li>• Run in dedicated Web Worker (memory-hard, blocks thread)</li>
              <li>• Minimum 64MB memory for forensic-grade security</li>
              <li>• Fallback: PBKDF2-SHA256 with 600,000 iterations if WASM fails</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-1">Model Integrity</h4>
            <ul className="space-y-1 ml-4">
              <li>• All model SHA-256 hashes must be hardcoded in the application (auditable)</li>
              <li>• Verify hash immediately after download, before storage</li>
              <li>• Re-verify on load from IndexedDB (defense against storage corruption)</li>
              <li>• Model registry is immutable — changes require code review</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bundle Size Budget */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Bundle Size Budget</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">Application (React + TypeScript)</span>
            <span className="text-gray-400">~300 KB (gzipped)</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">ONNX Runtime Web (WASM)</span>
            <span className="text-gray-400">~2 MB</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">whisper.cpp (WASM)</span>
            <span className="text-gray-400">~5-10 MB</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">Argon2 (WASM)</span>
            <span className="text-gray-400">~200 KB</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">KissFFT (WASM)</span>
            <span className="text-gray-400">~50 KB</span>
          </div>
          <div className="flex items-center justify-between text-sm border-t border-gray-800 pt-2 mt-2">
            <span className="text-white font-medium">Total Application Bundle</span>
            <span className="text-emerald-400 font-medium">~8-13 MB</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">+ Models (downloaded separately)</span>
            <span className="text-gray-400">75-700 MB (user choice)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
