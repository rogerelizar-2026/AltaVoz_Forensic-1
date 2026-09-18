export function Architecture() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Arquitetura do Sistema</h2>
        <p className="text-gray-400 text-sm">
          Limites de módulos, fluxo de dados e isolamento de threads para o pipeline de áudio forense.
        </p>
      </div>

      {/* Visão Geral do Pipeline */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-4">Pipeline de Processamento</h3>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          {['Importar', 'Análise de Qualidade', 'Criptografia', 'Transcrever', 'Diarizar', 'Exportar'].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 font-medium">
                {step}
              </div>
              {i < 5 && <span className="text-gray-600">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Arquitetura de Threads */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Arquitetura de Threads e Workers</h3>
        </div>
        <div className="p-5 space-y-4">
          {/* Thread Principal */}
          <div className="p-4 rounded-lg bg-blue-900/10 border border-blue-800/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <h4 className="font-medium text-blue-300">Thread Principal (UI)</h4>
            </div>
            <ul className="text-sm text-gray-300 space-y-1 ml-5">
              <li>• Renderização React, interação do usuário</li>
              <li>• Reprodução de áudio via Web Audio API</li>
              <li>• Renderização de espectrograma em Canvas</li>
              <li>• Orquestração IndexedDB</li>
              <li>• Gerenciamento de ciclo de vida dos workers</li>
            </ul>
          </div>

          {/* Workers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-emerald-900/10 border border-emerald-800/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <h4 className="font-medium text-emerald-300">Worker de Cadeia de Hash</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1 ml-5">
                <li>• Computação de cadeia de hash SHA-256</li>
                <li>• Geração de árvore Merkle</li>
                <li>• Assinatura HMAC-SHA256</li>
                <li>• Não-bloqueante para grandes importações</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-purple-900/10 border border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <h4 className="font-medium text-purple-300">Worker Argon2id</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1 ml-5">
                <li>• Derivação de chave Argon2id (WASM)</li>
                <li>• Computação memory-hard</li>
                <li>• 64MB memória, 4 iterações</li>
                <li>• Isolado da thread principal</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-orange-900/10 border border-orange-800/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                <h4 className="font-medium text-orange-300">Worker whisper.cpp</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1 ml-5">
                <li>• Inferência ASR (WASM)</li>
                <li>• Carregamento de modelo do IndexedDB</li>
                <li>• Relatório de progresso</li>
                <li>• Memória limitada (chunks de 10 min)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-cyan-900/10 border border-cyan-800/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                <h4 className="font-medium text-cyan-300">Worker DSP / ONNX</h4>
              </div>
              <ul className="text-sm text-gray-300 space-y-1 ml-5">
                <li>• Inferência Silero VAD</li>
                <li>• Embeddings ECAPA-TDNN</li>
                <li>• Redução de ruído espectral</li>
                <li>• FFT via WASM (KissFFT)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fluxo de Dados */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Fluxo de Dados e Armazenamento</h3>
        </div>
        <div className="p-5">
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300 text-xs font-mono whitespace-nowrap">IndexedDB</span>
              <span className="text-gray-300">Blobs de áudio criptografados, ledger de custódia, cadeia de processamento, binários de modelos</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300 text-xs font-mono whitespace-nowrap">WebCrypto</span>
              <span className="text-gray-300">Criptografia/descriptografia AES-GCM, hashing SHA-256, assinatura HMAC-SHA256</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300 text-xs font-mono whitespace-nowrap">Web Audio</span>
              <span className="text-gray-300">Reprodução, visualização em tempo real, AudioContext para análise</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300 text-xs font-mono whitespace-nowrap">Canvas 2D</span>
              <span className="text-gray-300">Renderização de espectrograma, sobreposição de forma de onda, timeline de falantes</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300 text-xs font-mono whitespace-nowrap">WASM</span>
              <span className="text-gray-300">Argon2id, whisper.cpp, KissFFT, backend ONNX Runtime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Limites de Módulos */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Limites de Módulos</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-3 text-gray-400">Módulo</th>
                <th className="text-left p-3 text-gray-400">Responsabilidade</th>
                <th className="text-left p-3 text-gray-400">Thread</th>
                <th className="text-left p-3 text-gray-400">Dependências</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3 text-white font-mono text-xs">crypto/encryption</td>
                <td className="p-3 text-gray-300">Criptografia/descriptografia AES-GCM, orquestração de derivação de chave</td>
                <td className="p-3 text-gray-400">Principal</td>
                <td className="p-3 text-gray-400">WebCrypto, Worker Argon2</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">crypto/hashChain</td>
                <td className="p-3 text-gray-300">Integridade de evidências, eventos de custódia, árvores Merkle</td>
                <td className="p-3 text-gray-400">Worker</td>
                <td className="p-3 text-gray-400">WebCrypto (SHA-256, HMAC)</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">dsp/sileroVad</td>
                <td className="p-3 text-gray-300">Detecção de atividade de voz, segmentação de fala</td>
                <td className="p-3 text-gray-400">Worker</td>
                <td className="p-3 text-gray-400">ONNX Runtime Web</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">dsp/embeddings</td>
                <td className="p-3 text-gray-300">Extração de embeddings de falantes, clustering</td>
                <td className="p-3 text-gray-400">Worker</td>
                <td className="p-3 text-gray-400">ONNX Runtime Web</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">dsp/filters</td>
                <td className="p-3 text-gray-300">Redução de ruído, EQ, aprimoramento forense</td>
                <td className="p-3 text-gray-400">Worker</td>
                <td className="p-3 text-gray-400">KissFFT WASM</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">asr/whisper</td>
                <td className="p-3 text-gray-300">Transcrição de fala para texto</td>
                <td className="p-3 text-gray-400">Worker</td>
                <td className="p-3 text-gray-400">whisper.cpp WASM</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">services/models</td>
                <td className="p-3 text-gray-300">Download de modelos, verificação de integridade, armazenamento</td>
                <td className="p-3 text-gray-400">Principal</td>
                <td className="p-3 text-gray-400">IndexedDB, fetch (somente download)</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-mono text-xs">ui/spectrogram</td>
                <td className="p-3 text-gray-300">Visualização em Canvas, acessibilidade WCAG</td>
                <td className="p-3 text-gray-400">Principal</td>
                <td className="p-3 text-gray-400">Canvas 2D, Worker (computação)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modos de Falha */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Modos de Falha e Casos Extremos</h3>
        <div className="space-y-3 text-sm">
          <div className="p-3 rounded-lg bg-red-900/10 border border-red-800/20">
            <span className="text-red-400 font-medium">OOM em áudio grande:</span>
            <span className="text-gray-300 ml-2">whisper.cpp WASM limitado a ~2GB de espaço de endereçamento. Dividir áudio em chunks de 10 minutos. Monitorar memória via performance.measureMemory() quando disponível.</span>
          </div>
          <div className="p-3 rounded-lg bg-red-900/10 border border-red-800/20">
            <span className="text-red-400 font-medium">Crash do Argon2 WASM:</span>
            <span className="text-gray-300 ml-2">Se alocação de memória WASM falhar (64MB), retornar a PBKDF2 com 600.000 iterações (recomendação NIST). Registrar o fallback para trilha de auditoria.</span>
          </div>
          <div className="p-3 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
            <span className="text-yellow-400 font-medium">SharedArrayBuffer indisponível:</span>
            <span className="text-gray-300 ml-2">whisper.cpp retorna a WASM single-threaded. ~3-5x mais lento, mas funcional. Detectar via typeof SharedArrayBuffer === "undefined".</span>
          </div>
          <div className="p-3 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
            <span className="text-yellow-400 font-medium">Modelo ONNX muito grande:</span>
            <span className="text-gray-300 ml-2">ECAPA-TDNN ~80MB. Em dispositivos restritos, oferecer alternativa ResNet-34 (~20MB) com precisão reduzida. Deixar usuário escolher durante configuração.</span>
          </div>
          <div className="p-3 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
            <span className="text-yellow-400 font-medium">Reuso de nonce:</span>
            <span className="text-gray-300 ml-2">AES-GCM é catastroficamente quebrado com reuso de nonce. Usar crypto.getRandomValues() para cada criptografia. Rastrear nonces usados em um Set por sessão como defesa em profundidade.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
