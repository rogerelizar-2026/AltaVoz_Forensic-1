export function LibraryRecommendations() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Bibliotecas e Modelos Recomendados</h2>
        <p className="text-gray-400 text-sm">
          Bibliotecas WASM/ONNX compatíveis com offline e arquivos de modelo com licenciamento, tamanhos e notas de integração.
        </p>
      </div>

      {/* Bibliotecas WASM/ONNX */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Bibliotecas WASM/ONNX Principais</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-3 text-gray-400 font-medium">Pacote</th>
                <th className="text-left p-3 text-gray-400 font-medium">Propósito</th>
                <th className="text-left p-3 text-gray-400 font-medium">Licença</th>
                <th className="text-left p-3 text-gray-400 font-medium">Tamanho</th>
                <th className="text-left p-3 text-gray-400 font-medium">Suporte de Navegador</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3">
                  <code className="text-emerald-400 text-xs">onnxruntime-web</code>
                </td>
                <td className="p-3 text-gray-300">Inferência de modelos ONNX (backend WASM)</td>
                <td className="p-3 text-gray-400">MIT</td>
                <td className="p-3 text-gray-400">~2MB (WASM)</td>
                <td className="p-3 text-gray-400">Chromium 90+, FF 89+, Safari 15+</td>
              </tr>
              <tr>
                <td className="p-3">
                  <code className="text-emerald-400 text-xs">whisper.cpp</code> (build WASM)
                </td>
                <td className="p-3 text-gray-300">Fala-para-texto (modelos ggml)</td>
                <td className="p-3 text-gray-400">MIT</td>
                <td className="p-3 text-gray-400">~5-10MB (WASM)</td>
                <td className="p-3 text-gray-400">Chromium 90+, FF 89+, Safari 15+</td>
              </tr>
              <tr>
                <td className="p-3">
                  <code className="text-emerald-400 text-xs">argon2-wasm</code> / <code className="text-emerald-400 text-xs">argon2</code> (compilado)
                </td>
                <td className="p-3 text-gray-300">Derivação de chave Argon2id</td>
                <td className="p-3 text-gray-400">Apache-2.0 / MIT</td>
                <td className="p-3 text-gray-400">~200KB (WASM)</td>
                <td className="p-3 text-gray-400">Todos os navegadores modernos</td>
              </tr>
              <tr>
                <td className="p-3">
                  <code className="text-emerald-400 text-xs">kissfft</code> (WASM)
                </td>
                <td className="p-3 text-gray-300">Transformada Rápida de Fourier para DSP</td>
                <td className="p-3 text-gray-400">BSD-2-Clause</td>
                <td className="p-3 text-gray-400">~50KB (WASM)</td>
                <td className="p-3 text-gray-400">Todos os navegadores modernos</td>
              </tr>
              <tr>
                <td className="p-3">
                  <code className="text-emerald-400 text-xs">libsamplerate</code> (WASM)
                </td>
                <td className="p-3 text-gray-300">Reamostragem de áudio de alta qualidade</td>
                <td className="p-3 text-gray-400">BSD-2-Clause</td>
                <td className="p-3 text-gray-400">~100KB (WASM)</td>
                <td className="p-3 text-gray-400">Todos os navegadores modernos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Arquivos de Modelo */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Arquivos de Modelo</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-3 text-gray-400 font-medium">Modelo</th>
                <th className="text-left p-3 text-gray-400 font-medium">Tarefa</th>
                <th className="text-left p-3 text-gray-400 font-medium">Formato</th>
                <th className="text-left p-3 text-gray-400 font-medium">Tamanho</th>
                <th className="text-left p-3 text-gray-400 font-medium">Fonte</th>
                <th className="text-left p-3 text-gray-400 font-medium">Licença</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3 text-white font-medium">Whisper Tiny (pt)</td>
                <td className="p-3 text-gray-300">ASR</td>
                <td className="p-3 text-gray-400">ggml (.bin)</td>
                <td className="p-3 text-gray-400">~75 MB</td>
                <td className="p-3 text-gray-400">HuggingFace (ggerganov)</td>
                <td className="p-3 text-gray-400">MIT</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Whisper Base</td>
                <td className="p-3 text-gray-300">ASR (multilíngue)</td>
                <td className="p-3 text-gray-400">ggml (.bin)</td>
                <td className="p-3 text-gray-400">~142 MB</td>
                <td className="p-3 text-gray-400">HuggingFace (ggerganov)</td>
                <td className="p-3 text-gray-400">MIT</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Whisper Small</td>
                <td className="p-3 text-gray-300">ASR (multilíngue)</td>
                <td className="p-3 text-gray-400">ggml (.bin)</td>
                <td className="p-3 text-gray-400">~466 MB</td>
                <td className="p-3 text-gray-400">HuggingFace (ggerganov)</td>
                <td className="p-3 text-gray-400">MIT</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Silero VAD v5</td>
                <td className="p-3 text-gray-300">Detecção de Atividade de Voz</td>
                <td className="p-3 text-gray-400">ONNX (.onnx)</td>
                <td className="p-3 text-gray-400">~2 MB</td>
                <td className="p-3 text-gray-400">Repositório de modelos silero.ai</td>
                <td className="p-3 text-gray-400">MIT</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">ECAPA-TDNN</td>
                <td className="p-3 text-gray-300">Embeddings de Falantes</td>
                <td className="p-3 text-gray-400">ONNX (.onnx)</td>
                <td className="p-3 text-gray-400">~80 MB</td>
                <td className="p-3 text-gray-400">SpeechBrain (exportado)</td>
                <td className="p-3 text-gray-400">Apache-2.0</td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">ResNet-34 (alt)</td>
                <td className="p-3 text-gray-300">Embeddings de Falantes (mais leve)</td>
                <td className="p-3 text-gray-400">ONNX (.onnx)</td>
                <td className="p-3 text-gray-400">~20 MB</td>
                <td className="p-3 text-gray-400">SpeechBrain (exportado)</td>
                <td className="p-3 text-gray-400">Apache-2.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Notas de Integração */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Notas de Integração</h3>
        <div className="space-y-4 text-sm text-gray-300">
          <div>
            <h4 className="text-emerald-400 font-medium mb-1">ONNX Runtime Web</h4>
            <ul className="space-y-1 ml-4">
              <li>• Instalar: <code className="bg-gray-800 px-1 rounded text-xs">npm install onnxruntime-web</code></li>
              <li>• Fornecer arquivos WASM de <code className="bg-gray-800 px-1 rounded text-xs">node_modules/onnxruntime-web/dist/</code> para <code className="bg-gray-800 px-1 rounded text-xs">/wasm/</code></li>
              <li>• Definir <code className="bg-gray-800 px-1 rounded text-xs">ort.env.wasm.wasmPaths = '/wasm/'</code> antes de qualquer criação de sessão</li>
              <li>• Usar <code className="bg-gray-800 px-1 rounded text-xs">executionProviders: ['wasm']</code> (sem WebGL para reprodutibilidade)</li>
              <li>• Desabilitar <code className="bg-gray-800 px-1 rounded text-xs">ort.env.wasm.simd</code> se direcionando navegadores mais antigos</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-1">whisper.cpp WASM</h4>
            <ul className="space-y-1 ml-4">
              <li>• Compilar do fonte: <code className="bg-gray-800 px-1 rounded text-xs">emcc</code> com <code className="bg-gray-800 px-1 rounded text-xs">-s WASM=1 -s ALLOW_MEMORY_GROWTH=1</code></li>
              <li>• Habilitar SIMD: <code className="bg-gray-800 px-1 rounded text-xs">-msimd128</code> para ~2x de aceleração em navegadores suportados</li>
              <li>• SharedArrayBuffer: Adicionar cabeçalhos COOP/COEP, ou detectar e retornar ao single-threaded</li>
              <li>• Memória: Definir heap inicial para 256MB, permitir crescimento até 1GB</li>
              <li>• Executar em Web Worker dedicado para evitar bloqueio da UI</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-1">Argon2 WASM</h4>
            <ul className="space-y-1 ml-4">
              <li>• Opções: <code className="bg-gray-800 px-1 rounded text-xs">argon2-wasm</code> (npm) ou compilar de <code className="bg-gray-800 px-1 rounded text-xs">github.com/P-H-C/phc-winner-argon2</code></li>
              <li>• Executar em Web Worker dedicado (memory-hard, bloqueia thread)</li>
              <li>• Mínimo 64MB de memória para segurança de grau forense</li>
              <li>• Fallback: PBKDF2-SHA256 com 600.000 iterações se WASM falhar</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-1">Integridade de Modelo</h4>
            <ul className="space-y-1 ml-4">
              <li>• Todos os hashes SHA-256 de modelos devem ser codificados na aplicação (auditável)</li>
              <li>• Verificar hash imediatamente após download, antes do armazenamento</li>
              <li>• Re-verificar no carregamento do IndexedDB (defesa contra corrupção de armazenamento)</li>
              <li>• Registro de modelos é imutável — mudanças requerem revisão de código</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Orçamento de Tamanho do Bundle */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Orçamento de Tamanho do Bundle</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">Aplicação (React + TypeScript)</span>
            <span className="text-gray-400">~300 KB (compactado)</span>
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
            <span className="text-white font-medium">Bundle Total da Aplicação</span>
            <span className="text-emerald-400 font-medium">~8-13 MB</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">+ Modelos (baixados separadamente)</span>
            <span className="text-gray-400">75-700 MB (escolha do usuário)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
