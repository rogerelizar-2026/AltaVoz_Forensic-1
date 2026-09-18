export function Roadmap() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Implementation Roadmap</h2>
        <p className="text-gray-400 text-sm">
          Prioritized phases with dependencies, risks, and acceptance criteria.
        </p>
      </div>

      {/* Phase 1 */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded bg-red-900/40 text-red-300 text-xs font-bold">PHASE 1</span>
            <h3 className="font-semibold text-white">Cryptographic Foundation</h3>
          </div>
          <span className="text-xs text-gray-500">Short-term (2-4 weeks)</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Deliverables</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Replace PRF cipher with AES-256-GCM via WebCrypto
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Integrate Argon2id WASM for key derivation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Move hash-chain computation to Web Worker
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Implement custody event chain with HMAC signatures
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Add Merkle root persistence per case
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Implement key zeroization on session end
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-amber-400 mb-2">Dependencies & Risks</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li>• <strong>Dep:</strong> Argon2 WASM binary (vendor or compile from C)</li>
                <li>• <strong>Dep:</strong> Existing IndexedDB schema migration</li>
                <li>• <strong>Risk:</strong> Argon2 WASM size (~200KB) adds to bundle</li>
                <li>• <strong>Risk:</strong> Migration of existing encrypted data</li>
                <li>• <strong>Mitigation:</strong> Provide re-encryption tool for legacy data</li>
              </ul>
              <h4 className="text-sm font-medium text-cyan-400 mt-3 mb-2">Acceptance Criteria</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• AES-GCM encrypt/decrypt round-trip verified</li>
                <li>• Argon2id produces deterministic output for same inputs</li>
                <li>• Hash chain worker processes 10K blocks in &lt;5s</li>
                <li>• Custody chain verification detects tampering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 2 */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded bg-orange-900/40 text-orange-300 text-xs font-bold">PHASE 2</span>
            <h3 className="font-semibold text-white">DSP & Diarization Upgrade</h3>
          </div>
          <span className="text-xs text-gray-500">Medium-term (4-8 weeks)</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Deliverables</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Integrate Silero VAD via ONNX Runtime Web
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Implement ECAPA-TDNN speaker embeddings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Replace MFCC clustering with embedding-based diarization
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Add spectral noise reduction (Wiener filter)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Implement speech-intelligibility EQ (biquad cascade)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Full DSP audit logging with classification
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-amber-400 mb-2">Dependencies & Risks</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li>• <strong>Dep:</strong> Phase 1 (crypto for DSP audit logging)</li>
                <li>• <strong>Dep:</strong> ONNX Runtime Web vendored WASM</li>
                <li>• <strong>Dep:</strong> Silero VAD ONNX model (~2MB)</li>
                <li>• <strong>Dep:</strong> ECAPA-TDNN ONNX model (~80MB)</li>
                <li>• <strong>Risk:</strong> ONNX inference slow on low-end devices</li>
                <li>• <strong>Risk:</strong> Model size impacts IndexedDB storage</li>
                <li>• <strong>Mitigation:</strong> Progressive loading, memory monitoring</li>
              </ul>
              <h4 className="text-sm font-medium text-cyan-400 mt-3 mb-2">Acceptance Criteria</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Silero VAD detects speech in SNR &ge; -5dB conditions</li>
                <li>• Speaker embeddings produce consistent clusters for same speaker</li>
                <li>• DER (diarization error rate) &lt; 20% on test set</li>
                <li>• All DSP steps logged with input/output hashes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded bg-yellow-900/40 text-yellow-300 text-xs font-bold">PHASE 3</span>
            <h3 className="font-semibold text-white">Local ASR Integration</h3>
          </div>
          <span className="text-xs text-gray-500">Medium-term (6-10 weeks)</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Deliverables</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Compile whisper.cpp to WASM (Emscripten)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Implement WASM worker with model loading
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Build model download UI with integrity verification
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Implement chunked transcription for long audio
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Add SharedArrayBuffer detection + fallback
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Progress reporting and cancellation support
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-amber-400 mb-2">Dependencies & Risks</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li>• <strong>Dep:</strong> Phase 1 (crypto for model integrity)</li>
                <li>• <strong>Dep:</strong> Emscripten toolchain for WASM compilation</li>
                <li>• <strong>Dep:</strong> whisper.cpp ggml model files</li>
                <li>• <strong>Risk:</strong> WASM binary size (~5-10MB)</li>
                <li>• <strong>Risk:</strong> Memory pressure on mobile devices</li>
                <li>• <strong>Risk:</strong> COOP/COEP headers for SharedArrayBuffer</li>
                <li>• <strong>Mitigation:</strong> Single-threaded fallback, chunked processing</li>
              </ul>
              <h4 className="text-sm font-medium text-cyan-400 mt-3 mb-2">Acceptance Criteria</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• WER &lt; 15% on clean English speech (tiny model)</li>
                <li>• Model download + verification completes successfully</li>
                <li>• Transcription of 5-min audio completes in &lt;60s</li>
                <li>• Graceful degradation when SharedArrayBuffer unavailable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 4 */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded bg-blue-900/40 text-blue-300 text-xs font-bold">PHASE 4</span>
            <h3 className="font-semibold text-white">Forensic UI/UX & Visualization</h3>
          </div>
          <span className="text-xs text-gray-500">Long-term (8-12 weeks)</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Deliverables</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Spectrogram visualization (colorblind-safe palettes)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Waveform + speaker overlay timeline
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  WCAG 2.1 AA compliance (keyboard, ARIA, contrast)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Data table fallbacks for screen readers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Custody chain visualization (tamper detection UI)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Export package with verification tools
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-amber-400 mb-2">Dependencies & Risks</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li>• <strong>Dep:</strong> Phase 2 (DSP for spectrogram computation)</li>
                <li>• <strong>Dep:</strong> Phase 1 (custody chain for visualization data)</li>
                <li>• <strong>Risk:</strong> Canvas performance on large spectrograms</li>
                <li>• <strong>Risk:</strong> Accessibility testing across assistive tech</li>
                <li>• <strong>Mitigation:</strong> Web Worker for spectrogram compute, chunked rendering</li>
              </ul>
              <h4 className="text-sm font-medium text-cyan-400 mt-3 mb-2">Acceptance Criteria</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Lighthouse accessibility score &ge; 95</li>
                <li>• Full keyboard navigation of spectrogram</li>
                <li>• Screen reader announces spectral data meaningfully</li>
                <li>• Custody chain tamper detection is visually obvious</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Migration Path */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Migration Path from Current Implementation</h3>
        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 rounded bg-gray-800 text-xs font-mono text-gray-400 whitespace-nowrap">Step 1</span>
            <span>Add AES-GCM encryption alongside existing PRF cipher. New imports use AES-GCM; old data remains accessible via legacy decryptor.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 rounded bg-gray-800 text-xs font-mono text-gray-400 whitespace-nowrap">Step 2</span>
            <span>Introduce Web Worker for hash chain. Main thread delegates via postMessage. Zero API changes for consumers.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 rounded bg-gray-800 text-xs font-mono text-gray-400 whitespace-nowrap">Step 3</span>
            <span>Replace VAD with Silero VAD behind same interface. Existing diarization consumers receive improved segments transparently.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 rounded bg-gray-800 text-xs font-mono text-gray-400 whitespace-nowrap">Step 4</span>
            <span>Swap ASR engine: implement whisper.cpp worker behind same transcription interface. Model selection UI replaces custom JS contract.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 rounded bg-gray-800 text-xs font-mono text-gray-400 whitespace-nowrap">Step 5</span>
            <span>Add spectrogram visualization alongside existing waveform. Both views available simultaneously with synchronized time axis.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
