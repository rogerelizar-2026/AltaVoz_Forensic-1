import { useState } from 'react';

interface ChecklistItem {
  id: string;
  text: string;
  category: string;
  priority: 'critical' | 'high' | 'medium';
  notes?: string;
}

const checklistItems: ChecklistItem[] = [
  // Unit Tests
  { id: 'ut-1', text: 'AES-GCM encrypt/decrypt round-trip with known test vectors', category: 'Unit Tests', priority: 'critical' },
  { id: 'ut-2', text: 'Argon2id produces deterministic output for fixed inputs', category: 'Unit Tests', priority: 'critical' },
  { id: 'ut-3', text: 'Hash chain verification detects single-bit tampering', category: 'Unit Tests', priority: 'critical' },
  { id: 'ut-4', text: 'Merkle tree root matches known-good computation', category: 'Unit Tests', priority: 'critical' },
  { id: 'ut-5', text: 'HMAC signature verification for custody events', category: 'Unit Tests', priority: 'critical' },
  { id: 'ut-6', text: 'Silero VAD output matches reference implementation on test audio', category: 'Unit Tests', priority: 'high' },
  { id: 'ut-7', text: 'Speaker embeddings are L2-normalized and dimensionally correct (192-d)', category: 'Unit Tests', priority: 'high' },
  { id: 'ut-8', text: 'Biquad filter coefficients match AudioEQ Cookbook formulas', category: 'Unit Tests', priority: 'high' },
  { id: 'ut-9', text: 'Spectral noise reduction output hash is deterministic for same input', category: 'Unit Tests', priority: 'high' },
  { id: 'ut-10', text: 'Model SHA-256 verification rejects corrupted downloads', category: 'Unit Tests', priority: 'critical' },

  // Integration Tests
  { id: 'it-1', text: 'Full pipeline: Import → Quality → Encrypt → Transcribe → Diarize → Export', category: 'Integration Tests', priority: 'critical' },
  { id: 'it-2', text: 'Hash chain worker processes 10,000 blocks without blocking main thread', category: 'Integration Tests', priority: 'critical' },
  { id: 'it-3', text: 'Argon2id derivation completes within 3 seconds on target hardware', category: 'Integration Tests', priority: 'high' },
  { id: 'it-4', text: 'whisper.cpp worker loads model from IndexedDB and transcribes test audio', category: 'Integration Tests', priority: 'high' },
  { id: 'it-5', text: 'Custody chain survives browser restart (IndexedDB persistence)', category: 'Integration Tests', priority: 'critical' },
  { id: 'it-6', text: 'Spectrogram renders correctly for 1-hour audio within memory budget', category: 'Integration Tests', priority: 'medium' },
  { id: 'it-7', text: 'Export package can be independently verified by third-party tool', category: 'Integration Tests', priority: 'critical' },

  // Determinism
  { id: 'dt-1', text: 'Same audio + same parameters → identical hash chain output', category: 'Determinism', priority: 'critical' },
  { id: 'dt-2', text: 'Same audio + same DSP parameters → identical output hash', category: 'Determinism', priority: 'critical' },
  { id: 'dt-3', text: 'Speaker diarization produces consistent clusters across runs', category: 'Determinism', priority: 'high', notes: 'ONNX inference is deterministic with fixed seeds' },
  { id: 'dt-4', text: 'Transcription output is byte-identical for same model + audio', category: 'Determinism', priority: 'high', notes: 'whisper.cpp with temperature=0 is deterministic' },
  { id: 'dt-5', text: 'Merkle tree computation is order-dependent and reproducible', category: 'Determinism', priority: 'critical' },

  // Performance
  { id: 'pf-1', text: 'Import 100MB audio file without UI freeze (hash chain in worker)', category: 'Performance', priority: 'critical' },
  { id: 'pf-2', text: 'Argon2id key derivation < 5 seconds on mid-range hardware', category: 'Performance', priority: 'high' },
  { id: 'pf-3', text: 'whisper.cpp transcription of 5-min audio < 60 seconds', category: 'Performance', priority: 'high' },
  { id: 'pf-4', text: 'Silero VAD processes 1-hour audio < 30 seconds', category: 'Performance', priority: 'medium' },
  { id: 'pf-5', text: 'Spectrogram computation for 1-hour audio < 10 seconds', category: 'Performance', priority: 'medium' },
  { id: 'pf-6', text: 'Memory usage stays below 1GB during transcription', category: 'Performance', priority: 'high' },
  { id: 'pf-7', text: 'No memory leaks after 10 consecutive import-process-export cycles', category: 'Performance', priority: 'high' },

  // Security
  { id: 'sc-1', text: 'Encryption keys are non-extractable (CryptoKey.extractable === false)', category: 'Security', priority: 'critical' },
  { id: 'sc-2', text: 'IV/nonce is never reused (tracked per session)', category: 'Security', priority: 'critical' },
  { id: 'sc-3', text: 'Key material is zeroized on session end', category: 'Security', priority: 'critical' },
  { id: 'sc-4', text: 'No network requests during evidence processing (verify via DevTools)', category: 'Security', priority: 'critical' },
  { id: 'sc-5', text: 'Model files verified against hardcoded SHA-256 before use', category: 'Security', priority: 'critical' },
  { id: 'sc-6', text: 'CSP headers prevent inline script execution', category: 'Security', priority: 'high' },
  { id: 'sc-7', text: 'No telemetry, analytics, or error reporting to external services', category: 'Security', priority: 'critical' },
  { id: 'sc-8', text: 'Passphrase never stored or logged in plaintext', category: 'Security', priority: 'critical' },

  // Chain of Custody
  { id: 'cc-1', text: 'Original evidence file hash is computed before any processing', category: 'Chain of Custody', priority: 'critical' },
  { id: 'cc-2', text: 'Original evidence is never modified (derivatives are separate)', category: 'Chain of Custody', priority: 'critical' },
  { id: 'cc-3', text: 'Every processing step records input and output hashes', category: 'Chain of Custody', priority: 'critical' },
  { id: 'cc-4', text: 'Custody chain detects insertion, deletion, or modification of events', category: 'Chain of Custody', priority: 'critical' },
  { id: 'cc-5', text: 'Export package includes all metadata for independent verification', category: 'Chain of Custody', priority: 'critical' },
  { id: 'cc-6', text: 'Processing steps classified as INVESTIGATIVE or EVIDENCE_PRESERVING', category: 'Chain of Custody', priority: 'high' },
  { id: 'cc-7', text: 'Operator identity is cryptographically bound to each custody event', category: 'Chain of Custody', priority: 'critical' },
];

export function ForensicChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<string>('all');

  const categories = [...new Set(checklistItems.map(item => item.category))];
  
  const filteredItems = filter === 'all' 
    ? checklistItems 
    : checklistItems.filter(item => item.category === filter);

  const toggleItem = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const completionRate = Math.round((checked.size / checklistItems.length) * 100);
  const criticalTotal = checklistItems.filter(i => i.priority === 'critical').length;
  const criticalDone = checklistItems.filter(i => i.priority === 'critical' && checked.has(i.id)).length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Forensic Readiness Checklist</h2>
        <p className="text-gray-400 text-sm">
          Validation and verification checklist covering unit tests, integration tests, determinism, 
          performance budgets, security review, and chain-of-custody verification.
        </p>
      </div>

      {/* Progress */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
          <div className="text-sm text-gray-400 mb-1">Overall Progress</div>
          <div className="text-2xl font-bold text-white">{completionRate}%</div>
          <div className="mt-2 h-2 rounded-full bg-gray-800 overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all"
              style={{ width: `${completionRate}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">{checked.size} / {checklistItems.length} items</div>
        </div>
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
          <div className="text-sm text-gray-400 mb-1">Critical Items</div>
          <div className="text-2xl font-bold text-red-400">{criticalDone} / {criticalTotal}</div>
          <div className="mt-2 h-2 rounded-full bg-gray-800 overflow-hidden">
            <div 
              className="h-full bg-red-500 rounded-full transition-all"
              style={{ width: `${(criticalDone / criticalTotal) * 100}%` }}
            />
          </div>
        </div>
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
          <div className="text-sm text-gray-400 mb-1">Categories</div>
          <div className="text-2xl font-bold text-white">{categories.length}</div>
          <div className="text-xs text-gray-500 mt-1">
            {categories.map(c => {
              const catItems = checklistItems.filter(i => i.category === c);
              const catDone = catItems.filter(i => checked.has(i.id)).length;
              return `${c}: ${catDone}/${catItems.length}`;
            }).join(' • ')}
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            filter === 'all'
              ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/30'
              : 'text-gray-400 hover:text-gray-200 bg-gray-800/50 border border-gray-700/50'
          }`}
        >
          All ({checklistItems.length})
        </button>
        {categories.map(cat => {
          const count = checklistItems.filter(i => i.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === cat
                  ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/30'
                  : 'text-gray-400 hover:text-gray-200 bg-gray-800/50 border border-gray-700/50'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Checklist Items */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="divide-y divide-gray-800">
          {filteredItems.map((item) => (
            <label
              key={item.id}
              className="flex items-start gap-3 p-4 hover:bg-gray-800/30 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={checked.has(item.id)}
                onChange={() => toggleItem(item.id)}
                className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-gray-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${checked.has(item.id) ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
                    {item.text}
                  </span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                    item.priority === 'critical' ? 'bg-red-900/40 text-red-300' :
                    item.priority === 'high' ? 'bg-orange-900/40 text-orange-300' :
                    'bg-yellow-900/40 text-yellow-300'
                  }`}>
                    {item.priority}
                  </span>
                </div>
                {item.notes && (
                  <p className="text-xs text-gray-500 mt-1 ml-0">{item.notes}</p>
                )}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Testing Strategy */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Testing & Validation Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Unit Testing</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Vitest for pure functions (crypto, DSP math)</li>
              <li>• Known test vectors for AES-GCM (NIST)</li>
              <li>• Argon2 reference outputs from RFC 9106</li>
              <li>• Snapshot tests for hash chain output</li>
              <li>• Mock WebCrypto for isolated testing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Integration Testing</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Playwright for full pipeline E2E</li>
              <li>• Test audio corpus (clean, noisy, multi-speaker)</li>
              <li>• Worker message contract validation</li>
              <li>• IndexedDB persistence across sessions</li>
              <li>• Export package verification by external tool</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Security Review</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Static analysis: ESLint security plugin</li>
              <li>• Dependency audit: npm audit (zero runtime deps)</li>
              <li>• Network isolation: DevTools verification</li>
              <li>• Key management: Extractable flag audit</li>
              <li>• CSP compliance: Report-only mode first</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Forensic Validation</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Chain integrity: Tamper with log, verify detection</li>
              <li>• Reproducibility: Same input → same output hash</li>
              <li>• Immutability: Verify original never modified</li>
              <li>• Expert review: Independent forensic examiner</li>
              <li>• Legal review: Jurisdiction-specific admissibility</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Open Questions */}
      <div className="rounded-xl bg-amber-900/10 border border-amber-800/30 p-5">
        <h3 className="font-semibold text-amber-300 mb-3">Open Questions for Legal/Technical Review</h3>
        <ul className="space-y-2 text-sm text-amber-200/80">
          <li>
            <strong>1.</strong> Does the cryptographic chain-of-custody meet the specific requirements 
            of the target jurisdiction's evidence rules? (Varies: US FRE 901, UK CPIA, EU directives)
          </li>
          <li>
            <strong>2.</strong> Is the non-extractable CryptoKey sufficient for key protection, or does 
            the jurisdiction require HSM-backed key storage?
          </li>
          <li>
            <strong>3.</strong> Are browser-based WASM computations considered "reproducible" for 
            forensic purposes, given potential floating-point differences across platforms?
          </li>
          <li>
            <strong>4.</strong> Does the investigative enhancement classification satisfy Daubert/Frye 
            standards for expert testimony about enhanced audio?
          </li>
          <li>
            <strong>5.</strong> What is the acceptable error rate for automated speaker diarization 
            in the target legal context?
          </li>
          <li>
            <strong>6.</strong> Should the system produce a machine-readable verification report 
            (e.g., JSON-LD with W3C provenance ontology) for interoperability?
          </li>
        </ul>
      </div>
    </div>
  );
}
