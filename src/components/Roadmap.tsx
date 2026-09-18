export function Roadmap() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Roadmap de Implementação</h2>
        <p className="text-gray-400 text-sm">
          Fases priorizadas com dependências, riscos e critérios de aceitação.
        </p>
      </div>

      {/* Fase 1 */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded bg-red-900/40 text-red-300 text-xs font-bold">FASE 1</span>
            <h3 className="font-semibold text-white">Fundação Criptográfica</h3>
          </div>
          <span className="text-xs text-gray-500">Curto prazo (2-4 semanas)</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Entregáveis</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Substituir cifra PRF por AES-256-GCM via WebCrypto
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Integrar Argon2id WASM para derivação de chave
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Mover computação de cadeia de hash para Web Worker
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Implementar cadeia de eventos de custódia com assinaturas HMAC
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Adicionar persistência de raiz Merkle por caso
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Implementar zeroização de chave no fim da sessão
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-amber-400 mb-2">Dependências e Riscos</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li>• <strong>Dep:</strong> Binário Argon2 WASM (fornecer ou compilar de C)</li>
                <li>• <strong>Dep:</strong> Migração de esquema IndexedDB existente</li>
                <li>• <strong>Risco:</strong> Tamanho do Argon2 WASM (~200KB) adiciona ao bundle</li>
                <li>• <strong>Risco:</strong> Migração de dados criptografados existentes</li>
                <li>• <strong>Mitigação:</strong> Fornecer ferramenta de re-criptografia para dados legados</li>
              </ul>
              <h4 className="text-sm font-medium text-cyan-400 mt-3 mb-2">Critérios de Aceitação</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Round-trip de criptografia/descriptografia AES-GCM verificado</li>
                <li>• Argon2id produz saída determinística para mesmas entradas</li>
                <li>• Worker de cadeia de hash processa 10K blocos em &lt;5s</li>
                <li>• Verificação de cadeia de custódia detecta violação</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fase 2 */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded bg-orange-900/40 text-orange-300 text-xs font-bold">FASE 2</span>
            <h3 className="font-semibold text-white">Aprimoramento de DSP e Diarização</h3>
          </div>
          <span className="text-xs text-gray-500">Médio prazo (4-8 semanas)</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Entregáveis</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Integrar Silero VAD via ONNX Runtime Web
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Implementar embeddings de falantes ECAPA-TDNN
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Substituir clustering MFCC por diarização baseada em embeddings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Adicionar redução de ruído espectral (filtro Wiener)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Implementar EQ de inteligibilidade de fala (cascata biquad)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Log de auditoria DSP completo com classificação
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-amber-400 mb-2">Dependências e Riscos</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li>• <strong>Dep:</strong> Fase 1 (criptografia para log de auditoria DSP)</li>
                <li>• <strong>Dep:</strong> ONNX Runtime Web WASM fornecido</li>
                <li>• <strong>Dep:</strong> Modelo ONNX Silero VAD (~2MB)</li>
                <li>• <strong>Dep:</strong> Modelo ONNX ECAPA-TDNN (~80MB)</li>
                <li>• <strong>Risco:</strong> Inferência ONNX lenta em dispositivos de baixo desempenho</li>
                <li>• <strong>Risco:</strong> Tamanho do modelo impacta armazenamento IndexedDB</li>
                <li>• <strong>Mitigação:</strong> Carregamento progressivo, monitoramento de memória</li>
              </ul>
              <h4 className="text-sm font-medium text-cyan-400 mt-3 mb-2">Critérios de Aceitação</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Silero VAD detecta fala em condições SNR &ge; -5dB</li>
                <li>• Embeddings de falantes produzem clusters consistentes para mesmo falante</li>
                <li>• DER (taxa de erro de diarização) &lt; 20% no conjunto de teste</li>
                <li>• Todas as etapas DSP logadas com hashes de entrada/saída</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fase 3 */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded bg-yellow-900/40 text-yellow-300 text-xs font-bold">FASE 3</span>
            <h3 className="font-semibold text-white">Integração de ASR Local</h3>
          </div>
          <span className="text-xs text-gray-500">Médio prazo (6-10 semanas)</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Entregáveis</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Compilar whisper.cpp para WASM (Emscripten)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Implementar worker WASM com carregamento de modelo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Construir UI de download de modelo com verificação de integridade
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Implementar transcrição em chunks para áudio longo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Adicionar detecção de SharedArrayBuffer + fallback
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Suporte a relatório de progresso e cancelamento
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-amber-400 mb-2">Dependências e Riscos</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li>• <strong>Dep:</strong> Fase 1 (criptografia para integridade de modelo)</li>
                <li>• <strong>Dep:</strong> Toolchain Emscripten para compilação WASM</li>
                <li>• <strong>Dep:</strong> Arquivos de modelo ggml whisper.cpp</li>
                <li>• <strong>Risco:</strong> Tamanho do binário WASM (~5-10MB)</li>
                <li>• <strong>Risco:</strong> Pressão de memória em dispositivos móveis</li>
                <li>• <strong>Risco:</strong> Cabeçalhos COOP/COEP para SharedArrayBuffer</li>
                <li>• <strong>Mitigação:</strong> Fallback single-threaded, processamento em chunks</li>
              </ul>
              <h4 className="text-sm font-medium text-cyan-400 mt-3 mb-2">Critérios de Aceitação</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• WER &lt; 15% em fala inglesa limpa (modelo tiny)</li>
                <li>• Download de modelo + verificação completa com sucesso</li>
                <li>• Transcrição de áudio de 5 min completa em &lt;60s</li>
                <li>• Degradação graciosa quando SharedArrayBuffer indisponível</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fase 4 */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded bg-blue-900/40 text-blue-300 text-xs font-bold">FASE 4</span>
            <h3 className="font-semibold text-white">UI/UX Forense e Visualização</h3>
          </div>
          <span className="text-xs text-gray-500">Longo prazo (8-12 semanas)</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Entregáveis</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Visualização de espectrograma (paletas daltônicas)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Timeline de forma de onda + sobreposição de falantes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Conformidade WCAG 2.1 AA (teclado, ARIA, contraste)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Fallbacks de tabela de dados para leitores de tela
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Visualização de cadeia de custódia (UI de detecção de violação)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">□</span>
                  Pacote de exportação com ferramentas de verificação
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-amber-400 mb-2">Dependências e Riscos</h4>
              <ul className="text-sm text-gray-300 space-y-1.5">
                <li>• <strong>Dep:</strong> Fase 2 (DSP para computação de espectrograma)</li>
                <li>• <strong>Dep:</strong> Fase 1 (cadeia de custódia para dados de visualização)</li>
                <li>• <strong>Risco:</strong> Desempenho de Canvas em espectrogramas grandes</li>
                <li>• <strong>Risco:</strong> Testes de acessibilidade entre tecnologias assistivas</li>
                <li>• <strong>Mitigação:</strong> Web Worker para computação de espectrograma, renderização em chunks</li>
              </ul>
              <h4 className="text-sm font-medium text-cyan-400 mt-3 mb-2">Critérios de Aceitação</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Pontuação de acessibilidade Lighthouse &ge; 95</li>
                <li>• Navegação completa por teclado do espectrograma</li>
                <li>• Leitor de tela anuncia dados espectrais de forma significativa</li>
                <li>• Detecção de violação da cadeia de custódia é visualmente óbvia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Caminho de Migração */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Caminho de Migração da Implementação Atual</h3>
        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 rounded bg-gray-800 text-xs font-mono text-gray-400 whitespace-nowrap">Passo 1</span>
            <span>Adicionar criptografia AES-GCM ao lado da cifra PRF existente. Novas importações usam AES-GCM; dados antigos permanecem acessíveis via descriptografador legado.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 rounded bg-gray-800 text-xs font-mono text-gray-400 whitespace-nowrap">Passo 2</span>
            <span>Introduzir Web Worker para cadeia de hash. Thread principal delega via postMessage. Zero mudanças de API para consumidores.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 rounded bg-gray-800 text-xs font-mono text-gray-400 whitespace-nowrap">Passo 3</span>
            <span>Substituir VAD com Silero VAD atrás da mesma interface. Consumidores de diarização existentes recebem segmentos melhorados de forma transparente.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 rounded bg-gray-800 text-xs font-mono text-gray-400 whitespace-nowrap">Passo 4</span>
            <span>Trocar motor ASR: implementar worker whisper.cpp atrás da mesma interface de transcrição. UI de seleção de modelo substitui contrato JS personalizado.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 rounded bg-gray-800 text-xs font-mono text-gray-400 whitespace-nowrap">Passo 5</span>
            <span>Adicionar visualização de espectrograma ao lado da forma de onda existente. Ambas as vistas disponíveis simultaneamente com eixo de tempo sincronizado.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
