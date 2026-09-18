import { useState } from 'react';

interface ChecklistItem {
  id: string;
  text: string;
  category: string;
  priority: 'critical' | 'high' | 'medium';
  notes?: string;
}

const checklistItems: ChecklistItem[] = [
  // Testes Unitários
  { id: 'ut-1', text: 'Round-trip de criptografia/descriptografia AES-GCM com vetores de teste conhecidos', category: 'Testes Unitários', priority: 'critical' },
  { id: 'ut-2', text: 'Argon2id produz saída determinística para entradas fixas', category: 'Testes Unitários', priority: 'critical' },
  { id: 'ut-3', text: 'Verificação de cadeia de hash detecta violação de um único bit', category: 'Testes Unitários', priority: 'critical' },
  { id: 'ut-4', text: 'Raiz da árvore Merkle corresponde à computação de referência conhecida', category: 'Testes Unitários', priority: 'critical' },
  { id: 'ut-5', text: 'Verificação de assinatura HMAC para eventos de custódia', category: 'Testes Unitários', priority: 'critical' },
  { id: 'ut-6', text: 'Saída do Silero VAD corresponde à implementação de referência em áudio de teste', category: 'Testes Unitários', priority: 'high' },
  { id: 'ut-7', text: 'Embeddings de falantes são normalizados L2 e dimensionalmente corretos (192-d)', category: 'Testes Unitários', priority: 'high' },
  { id: 'ut-8', text: 'Coeficientes de filtro biquad correspondem às fórmulas do AudioEQ Cookbook', category: 'Testes Unitários', priority: 'high' },
  { id: 'ut-9', text: 'Hash de saída da redução de ruído espectral é determinístico para mesma entrada', category: 'Testes Unitários', priority: 'high' },
  { id: 'ut-10', text: 'Verificação SHA-256 de modelo rejeita downloads corrompidos', category: 'Testes Unitários', priority: 'critical' },

  // Testes de Integração
  { id: 'it-1', text: 'Pipeline completo: Importar → Qualidade → Criptografar → Transcrever → Diarizar → Exportar', category: 'Testes de Integração', priority: 'critical' },
  { id: 'it-2', text: 'Worker de cadeia de hash processa 10.000 blocos sem bloquear thread principal', category: 'Testes de Integração', priority: 'critical' },
  { id: 'it-3', text: 'Derivação de chave Argon2id completa dentro de 3 segundos no hardware alvo', category: 'Testes de Integração', priority: 'high' },
  { id: 'it-4', text: 'Worker whisper.cpp carrega modelo do IndexedDB e transcreve áudio de teste', category: 'Testes de Integração', priority: 'high' },
  { id: 'it-5', text: 'Cadeia de custódia sobrevive a reinício do navegador (persistência IndexedDB)', category: 'Testes de Integração', priority: 'critical' },
  { id: 'it-6', text: 'Espectrograma renderiza corretamente para áudio de 1 hora dentro do orçamento de memória', category: 'Testes de Integração', priority: 'medium' },
  { id: 'it-7', text: 'Pacote de exportação pode ser verificado independentemente por ferramenta de terceiros', category: 'Testes de Integração', priority: 'critical' },

  // Determinismo
  { id: 'dt-1', text: 'Mesmo áudio + mesmos parâmetros → saída de cadeia de hash idêntica', category: 'Determinismo', priority: 'critical' },
  { id: 'dt-2', text: 'Mesmo áudio + mesmos parâmetros DSP → hash de saída idêntico', category: 'Determinismo', priority: 'critical' },
  { id: 'dt-3', text: 'Diarização de falantes produz clusters consistentes entre execuções', category: 'Determinismo', priority: 'high', notes: 'Inferência ONNX é determinística com sementes fixas' },
  { id: 'dt-4', text: 'Saída de transcrição é byte-idêntica para mesmo modelo + áudio', category: 'Determinismo', priority: 'high', notes: 'whisper.cpp com temperature=0 é determinístico' },
  { id: 'dt-5', text: 'Computação de árvore Merkle é dependente de ordem e reproduzível', category: 'Determinismo', priority: 'critical' },

  // Desempenho
  { id: 'pf-1', text: 'Importar arquivo de áudio de 100MB sem congelamento da UI (cadeia de hash em worker)', category: 'Desempenho', priority: 'critical' },
  { id: 'pf-2', text: 'Derivação de chave Argon2id < 5 segundos em hardware de médio desempenho', category: 'Desempenho', priority: 'high' },
  { id: 'pf-3', text: 'Transcrição whisper.cpp de áudio de 5 min < 60 segundos', category: 'Desempenho', priority: 'high' },
  { id: 'pf-4', text: 'Silero VAD processa áudio de 1 hora < 30 segundos', category: 'Desempenho', priority: 'medium' },
  { id: 'pf-5', text: 'Computação de espectrograma para áudio de 1 hora < 10 segundos', category: 'Desempenho', priority: 'medium' },
  { id: 'pf-6', text: 'Uso de memória permanece abaixo de 1GB durante transcrição', category: 'Desempenho', priority: 'high' },
  { id: 'pf-7', text: 'Sem vazamentos de memória após 10 ciclos consecutivos de importar-processar-exportar', category: 'Desempenho', priority: 'high' },

  // Segurança
  { id: 'sc-1', text: 'Chaves de criptografia são não-extraíveis (CryptoKey.extractable === false)', category: 'Segurança', priority: 'critical' },
  { id: 'sc-2', text: 'IV/nonce nunca é reutilizado (rastreado por sessão)', category: 'Segurança', priority: 'critical' },
  { id: 'sc-3', text: 'Material de chave é zeroizado no fim da sessão', category: 'Segurança', priority: 'critical' },
  { id: 'sc-4', text: 'Nenhuma requisição de rede durante processamento de evidências (verificar via DevTools)', category: 'Segurança', priority: 'critical' },
  { id: 'sc-5', text: 'Arquivos de modelo verificados contra SHA-256 codificado antes do uso', category: 'Segurança', priority: 'critical' },
  { id: 'sc-6', text: 'Cabeçalhos CSP previnem execução de script inline', category: 'Segurança', priority: 'high' },
  { id: 'sc-7', text: 'Sem telemetria, analytics ou relatório de erros para serviços externos', category: 'Segurança', priority: 'critical' },
  { id: 'sc-8', text: 'Passphrase nunca armazenada ou logada em texto plano', category: 'Segurança', priority: 'critical' },

  // Cadeia de Custódia
  { id: 'cc-1', text: 'Hash do arquivo de evidência original é computado antes de qualquer processamento', category: 'Cadeia de Custódia', priority: 'critical' },
  { id: 'cc-2', text: 'Evidência original nunca é modificada (derivados são separados)', category: 'Cadeia de Custódia', priority: 'critical' },
  { id: 'cc-3', text: 'Cada etapa de processamento registra hashes de entrada e saída', category: 'Cadeia de Custódia', priority: 'critical' },
  { id: 'cc-4', text: 'Cadeia de custódia detecta inserção, deleção ou modificação de eventos', category: 'Cadeia de Custódia', priority: 'critical' },
  { id: 'cc-5', text: 'Pacote de exportação inclui todos os metadados para verificação independente', category: 'Cadeia de Custódia', priority: 'critical' },
  { id: 'cc-6', text: 'Etapas de processamento classificadas como INVESTIGATIVA ou PRESERVAÇÃO_DE_EVIDÊNCIA', category: 'Cadeia de Custódia', priority: 'high' },
  { id: 'cc-7', text: 'Identidade do operador é criptograficamente vinculada a cada evento de custódia', category: 'Cadeia de Custódia', priority: 'critical' },
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
        <h2 className="text-2xl font-bold text-white mb-2">Checklist de Prontidão Forense</h2>
        <p className="text-gray-400 text-sm">
          Checklist de validação e verificação cobrindo testes unitários, testes de integração, determinismo, 
          orçamentos de desempenho, revisão de segurança e verificação de cadeia de custódia.
        </p>
      </div>

      {/* Progresso */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
          <div className="text-sm text-gray-400 mb-1">Progresso Geral</div>
          <div className="text-2xl font-bold text-white">{completionRate}%</div>
          <div className="mt-2 h-2 rounded-full bg-gray-800 overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all"
              style={{ width: `${completionRate}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">{checked.size} / {checklistItems.length} itens</div>
        </div>
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
          <div className="text-sm text-gray-400 mb-1">Itens Críticos</div>
          <div className="text-2xl font-bold text-red-400">{criticalDone} / {criticalTotal}</div>
          <div className="mt-2 h-2 rounded-full bg-gray-800 overflow-hidden">
            <div 
              className="h-full bg-red-500 rounded-full transition-all"
              style={{ width: `${(criticalDone / criticalTotal) * 100}%` }}
            />
          </div>
        </div>
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
          <div className="text-sm text-gray-400 mb-1">Categorias</div>
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

      {/* Filtro */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            filter === 'all'
              ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/30'
              : 'text-gray-400 hover:text-gray-200 bg-gray-800/50 border border-gray-700/50'
          }`}
        >
          Todos ({checklistItems.length})
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

      {/* Itens do Checklist */}
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
                    {item.priority === 'critical' ? 'crítico' : item.priority === 'high' ? 'alto' : 'médio'}
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

      {/* Estratégia de Testes */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Estratégia de Testes e Validação</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Testes Unitários</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Vitest para funções puras (cripto, matemática DSP)</li>
              <li>• Vetores de teste conhecidos para AES-GCM (NIST)</li>
              <li>• Saídas de referência Argon2 do RFC 9106</li>
              <li>• Testes de snapshot para saída de cadeia de hash</li>
              <li>• Mock WebCrypto para testes isolados</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Testes de Integração</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Playwright para E2E de pipeline completo</li>
              <li>• Corpus de áudio de teste (limpo, ruidoso, multi-falante)</li>
              <li>• Validação de contrato de mensagens de worker</li>
              <li>• Persistência IndexedDB entre sessões</li>
              <li>• Verificação de pacote de exportação por ferramenta externa</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Revisão de Segurança</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Análise estática: plugin de segurança ESLint</li>
              <li>• Auditoria de dependências: npm audit (zero deps em runtime)</li>
              <li>• Isolamento de rede: verificação DevTools</li>
              <li>• Gerenciamento de chaves: auditoria de flag extractable</li>
              <li>• Conformidade CSP: modo report-only primeiro</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Validação Forense</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Integridade de cadeia: violar log, verificar detecção</li>
              <li>• Reprodutibilidade: mesma entrada → mesmo hash de saída</li>
              <li>• Imutabilidade: verificar que original nunca foi modificado</li>
              <li>• Revisão por especialista: examinador forense independente</li>
              <li>• Revisão jurídica: admissibilidade específica por jurisdição</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Questões Abertas */}
      <div className="rounded-xl bg-amber-900/10 border border-amber-800/30 p-5">
        <h3 className="font-semibold text-amber-300 mb-3">Questões Abertas para Revisão Jurídica/Técnica</h3>
        <ul className="space-y-2 text-sm text-amber-200/80">
          <li>
            <strong>1.</strong> A cadeia de custódia criptográfica atende aos requisitos específicos 
            das regras de evidência da jurisdição alvo? (Varia: US FRE 901, UK CPIA, diretivas da UE)
          </li>
          <li>
            <strong>2.</strong> O CryptoKey não-extraível é suficiente para proteção de chave, ou a 
            jurisdição requer armazenamento de chave com suporte a HSM?
          </li>
          <li>
            <strong>3.</strong> Computações WASM baseadas em navegador são consideradas "reproduzíveis" para 
            propósitos forenses, dadas potenciais diferenças de ponto flutuante entre plataformas?
          </li>
          <li>
            <strong>4.</strong> A classificação de aprimoramento investigativo satisfaz os padrões Daubert/Frye 
            para testemunho de especialista sobre áudio aprimorado?
          </li>
          <li>
            <strong>5.</strong> Qual é a taxa de erro aceitável para diarização automatizada de falantes 
            no contexto legal alvo?
          </li>
          <li>
            <strong>6.</strong> O sistema deve produzir um relatório de verificação legível por máquina 
            (ex: JSON-LD com ontologia de proveniência W3C) para interoperabilidade?
          </li>
        </ul>
      </div>
    </div>
  );
}
