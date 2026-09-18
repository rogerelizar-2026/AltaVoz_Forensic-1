export function ExecutiveSummary() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Executive Summary</h2>
        <p className="text-gray-400 text-sm">
          Strategic overview of the AltaVoz Forensic-1 evolution to international court-grade standards.
        </p>
      </div>

      {/* Key Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
          <div className="text-2xl mb-2">🔒</div>
          <h3 className="font-semibold text-white mb-1">Zero Egress</h3>
          <p className="text-sm text-gray-400">
            Audio evidence never leaves the device. All processing is local. Network access is restricted 
            to explicit model downloads only.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
          <div className="text-2xl mb-2">⛓️</div>
          <h3 className="font-semibold text-white mb-1">Tamper Evidence</h3>
          <p className="text-sm text-gray-400">
            SHA-256 hash chains with HMAC-SHA256 Merkle trees per operator action. Append-only custody log 
            with cryptographic linking.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
          <div className="text-2xl mb-2">🔬</div>
          <h3 className="font-semibold text-white mb-1">Reproducibility</h3>
          <p className="text-sm text-gray-400">
            Every DSP operation is parameterized, audited, and classified as investigative or 
            evidence-preserving. Full processing chain is reconstructable.
          </p>
        </div>
      </div>

      {/* Current State vs Target */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Current State → Target State</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-3 text-gray-400 font-medium">Domain</th>
                <th className="text-left p-3 text-gray-400 font-medium">Current</th>
                <th className="text-left p-3 text-gray-400 font-medium">Target</th>
                <th className="text-left p-3 text-gray-400 font-medium">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3 text-white font-medium">Encryption</td>
                <td className="p-3 text-amber-400">PRF-based obfuscation</td>
                <td className="p-3 text-emerald-400">AES-256-GCM + Argon2id</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-red-900/40 text-red-300">Critical</span></td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Hash Chain</td>
                <td className="p-3 text-amber-400">Main-thread, blocking</td>
                <td className="p-3 text-emerald-400">Web Worker, non-blocking</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-red-900/40 text-red-300">Critical</span></td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">VAD</td>
                <td className="p-3 text-amber-400">Energy-based threshold</td>
                <td className="p-3 text-emerald-400">Silero VAD (ONNX/WASM)</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-orange-900/40 text-orange-300">High</span></td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Diarization</td>
                <td className="p-3 text-amber-400">MFCC + basic clustering</td>
                <td className="p-3 text-emerald-400">ECAPA-TDNN embeddings</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-orange-900/40 text-orange-300">High</span></td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">ASR Engine</td>
                <td className="p-3 text-amber-400">Custom JS contract</td>
                <td className="p-3 text-emerald-400">whisper.cpp WASM</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-orange-900/40 text-orange-300">High</span></td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">DSP Filters</td>
                <td className="p-3 text-amber-400">Basic gain/EQ</td>
                <td className="p-3 text-emerald-400">Spectral NR + Biquad cascade</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-yellow-900/40 text-yellow-300">Medium</span></td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Visualization</td>
                <td className="p-3 text-amber-400">Basic waveform</td>
                <td className="p-3 text-emerald-400">Spectrogram + WCAG AA</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-yellow-900/40 text-yellow-300">Medium</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Non-Negotiable Constraints */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Non-Negotiable Constraints</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'No runtime network dependency — evidence processing is 100% offline',
            'All processing occurs locally — no cloud, no telemetry',
            'Code must be auditable and readable — no minification of forensic logic',
            'No invented APIs, packages, or browser capabilities',
            'Standards-based, self-hostable, permissively licensed dependencies only',
            'Original evidence files are immutable — derivatives are tagged and traceable',
            'Tamper-evidence via cryptographic hash chains',
            'Reproducibility: every processing step is parameterized and auditable',
          ].map((constraint, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">✓</span>
              <span className="text-sm text-gray-300">{constraint}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cryptographic Parameters */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Concrete Cryptographic Parameters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Key Derivation (Argon2id)</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Salt: 256-bit (32 bytes), random per encryption</li>
              <li>• Memory: 64 MB (65536 KB)</li>
              <li>• Iterations: 4</li>
              <li>• Parallelism: 4 threads</li>
              <li>• Output: 256-bit derived key</li>
              <li>• Execution: Web Worker via WASM</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Encryption (AES-256-GCM)</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Key: 256-bit, non-extractable CryptoKey</li>
              <li>• IV/Nonce: 96-bit (12 bytes), random per message</li>
              <li>• Auth tag: 128-bit</li>
              <li>• AAD: Case metadata (operator, case ID)</li>
              <li>• Nonce reuse prevention: crypto.getRandomValues()</li>
              <li>• Zeroization: Explicit buffer overwrite</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Hash Chain</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Algorithm: SHA-256</li>
              <li>• HMAC: HMAC-SHA256 per operator</li>
              <li>• Merkle tree: Binary, left-right concatenation</li>
              <li>• Execution: Web Worker (non-blocking)</li>
              <li>• Yield: Every 100 blocks to prevent starvation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Key Lifecycle</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Generation: Argon2id from passphrase + salt</li>
              <li>• Storage: Non-extractable CryptoKey (in-memory only)</li>
              <li>• Rotation: Per-session; re-encrypt on passphrase change</li>
              <li>• Recovery: Passphrase-based (no backdoor)</li>
              <li>• Zeroization: On session end or explicit lock</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Assumptions */}
      <div className="rounded-xl bg-amber-900/10 border border-amber-800/30 p-5">
        <h3 className="font-semibold text-amber-300 mb-3">Open Questions & Assumptions</h3>
        <ul className="space-y-2 text-sm text-amber-200/80">
          <li>
            <strong>Argon2 WASM:</strong> Requires vendoring <code className="bg-gray-800 px-1 rounded">argon2-wasm</code> or 
            compiling from C source. Verify that the WASM binary is deterministic and reproducible.
          </li>
          <li>
            <strong>whisper.cpp WASM:</strong> SharedArrayBuffer requires COOP/COEP headers. 
            If unavailable, fall back to single-threaded WASM (slower but functional).
          </li>
          <li>
            <strong>ONNX Model Sizes:</strong> ECAPA-TDNN ~80MB may be prohibitive on low-memory devices. 
            Consider offering a smaller ResNet-34 alternative.
          </li>
          <li>
            <strong>Browser Compatibility:</strong> WebCrypto AES-GCM is universally supported. 
            ONNX Runtime Web WASM backend works on Chromium 90+, Firefox 89+, Safari 15+.
          </li>
          <li>
            <strong>Legal Admissibility:</strong> Cryptographic chain-of-custody implementation must be 
            reviewed by qualified legal counsel in each target jurisdiction. 
            This document does not constitute legal advice.
          </li>
          <li>
            <strong>Silero VAD ONNX model:</strong> The official ONNX export is available from Silero's 
            model repository. Verify version compatibility with ONNX Runtime Web WASM backend.
          </li>
        </ul>
      </div>
    </div>
  );
}
