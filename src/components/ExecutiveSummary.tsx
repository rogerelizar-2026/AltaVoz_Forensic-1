export function ExecutiveSummary() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Resumo Executivo</h2>
        <p className="text-gray-400 text-sm">
          Visão estratégica da evolução do AltaVoz Forensic-1 para padrões forenses de grau internacional.
        </p>
      </div>

      {/* Princípios Chave */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
          <div className="text-2xl mb-2">🔒</div>
          <h3 className="font-semibold text-white mb-1">Zero Egress</h3>
          <p className="text-sm text-gray-400">
            Evidências de áudio nunca deixam o dispositivo. Todo processamento é local. 
            Acesso à rede é restrito apenas a downloads explícitos de modelos.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
          <div className="text-2xl mb-2">⛓️</div>
          <h3 className="font-semibold text-white mb-1">Prova de Violação</h3>
          <p className="text-sm text-gray-400">
            Cadeias de hash SHA-256 com árvores Merkle HMAC-SHA256 por ação do operador. 
            Log de custódia apenas com ligação criptográfica.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
          <div className="text-2xl mb-2">🔬</div>
          <h3 className="font-semibold text-white mb-1">Reprodutibilidade</h3>
          <p className="text-sm text-gray-400">
            Cada operação DSP é parametrizada, auditada e classificada como investigativa ou 
            preservação de evidência. Cadeia de processamento completa é reconstruível.
          </p>
        </div>
      </div>

      {/* Estado Atual vs Alvo */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Estado Atual → Estado Alvo</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-3 text-gray-400 font-medium">Domínio</th>
                <th className="text-left p-3 text-gray-400 font-medium">Atual</th>
                <th className="text-left p-3 text-gray-400 font-medium">Alvo</th>
                <th className="text-left p-3 text-gray-400 font-medium">Prioridade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3 text-white font-medium">Criptografia</td>
                <td className="p-3 text-amber-400">Ofuscação baseada em PRF</td>
                <td className="p-3 text-emerald-400">AES-256-GCM + Argon2id</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-red-900/40 text-red-300">Crítica</span></td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Cadeia de Hash</td>
                <td className="p-3 text-amber-400">Thread principal, bloqueante</td>
                <td className="p-3 text-emerald-400">Web Worker, não-bloqueante</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-red-900/40 text-red-300">Crítica</span></td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">VAD</td>
                <td className="p-3 text-amber-400">Limiar baseado em energia</td>
                <td className="p-3 text-emerald-400">Silero VAD (ONNX/WASM)</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-orange-900/40 text-orange-300">Alta</span></td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Diarização</td>
                <td className="p-3 text-amber-400">MFCC + clustering básico</td>
                <td className="p-3 text-emerald-400">Embeddings ECAPA-TDNN</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-orange-900/40 text-orange-300">Alta</span></td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Motor ASR</td>
                <td className="p-3 text-amber-400">Contrato JS personalizado</td>
                <td className="p-3 text-emerald-400">whisper.cpp WASM</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-orange-900/40 text-orange-300">Alta</span></td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Filtros DSP</td>
                <td className="p-3 text-amber-400">Ganho/EQ básico</td>
                <td className="p-3 text-emerald-400">Redução espectral + cascata biquad</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-yellow-900/40 text-yellow-300">Média</span></td>
              </tr>
              <tr>
                <td className="p-3 text-white font-medium">Visualização</td>
                <td className="p-3 text-amber-400">Forma de onda básica</td>
                <td className="p-3 text-emerald-400">Espectrograma + WCAG AA</td>
                <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-yellow-900/40 text-yellow-300">Média</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Restrições Não-Negociáveis */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Restrições Não-Negociáveis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Sem dependência de rede em tempo de execução — processamento de evidências é 100% offline',
            'Todo processamento ocorre localmente — sem nuvem, sem telemetria',
            'Código deve ser auditável e legível — sem minificação da lógica forense',
            'Nenhuma API, pacote ou capacidade de navegador inventados',
            'Dependências apenas baseadas em padrões, auto-hospedáveis e com licença permissiva',
            'Arquivos de evidência originais são imutáveis — derivados são marcados e rastreáveis',
            'Prova de violação via cadeias de hash criptográficas',
            'Reprodutibilidade: cada etapa de processamento é parametrizada e auditável',
          ].map((constraint, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5">✓</span>
              <span className="text-sm text-gray-300">{constraint}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Parâmetros Criptográficos */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Parâmetros Criptográficos Concretos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Derivação de Chave (Argon2id)</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Salt: 256-bit (32 bytes), aleatório por criptografia</li>
              <li>• Memória: 64 MB (65536 KB)</li>
              <li>• Iterações: 4</li>
              <li>• Paralelismo: 4 threads</li>
              <li>• Saída: chave derivada de 256-bit</li>
              <li>• Execução: Web Worker via WASM</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Criptografia (AES-256-GCM)</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Chave: 256-bit, CryptoKey não-extraível</li>
              <li>• IV/Nonce: 96-bit (12 bytes), aleatório por mensagem</li>
              <li>• Tag de autenticação: 128-bit</li>
              <li>• AAD: Metadados do caso (operador, ID do caso)</li>
              <li>• Prevenção de reuso de nonce: crypto.getRandomValues()</li>
              <li>• Zeroização: Sobrescrita explícita de buffer</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Cadeia de Hash</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Algoritmo: SHA-256</li>
              <li>• HMAC: HMAC-SHA256 por operador</li>
              <li>• Árvore Merkle: Binária, concatenação esquerda-direita</li>
              <li>• Execução: Web Worker (não-bloqueante)</li>
              <li>• Yield: A cada 100 blocos para prevenir inanição</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Ciclo de Vida da Chave</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Geração: Argon2id a partir de passphrase + salt</li>
              <li>• Armazenamento: CryptoKey não-extraível (somente em memória)</li>
              <li>• Rotação: Por sessão; re-criptografar na alteração de passphrase</li>
              <li>• Recuperação: Baseada em passphrase (sem backdoor)</li>
              <li>• Zeroização: No fim da sessão ou bloqueio explícito</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Suposições */}
      <div className="rounded-xl bg-amber-900/10 border border-amber-800/30 p-5">
        <h3 className="font-semibold text-amber-300 mb-3">Questões Abertas e Suposições</h3>
        <ul className="space-y-2 text-sm text-amber-200/80">
          <li>
            <strong>Argon2 WASM:</strong> Requer fornecimento de <code className="bg-gray-800 px-1 rounded">argon2-wasm</code> ou 
            compilação a partir do código-fonte C. Verificar se o binário WASM é determinístico e reproduzível.
          </li>
          <li>
            <strong>whisper.cpp WASM:</strong> SharedArrayBuffer requer cabeçalhos COOP/COEP. 
            Se indisponível, retornar ao WASM single-threaded (mais lento, mas funcional).
          </li>
          <li>
            <strong>Tamanhos de Modelos ONNX:</strong> ECAPA-TDNN ~80MB pode ser proibitivo em dispositivos de baixa memória. 
            Considerar oferecer uma alternativa menor ResNet-34.
          </li>
          <li>
            <strong>Compatibilidade de Navegadores:</strong> WebCrypto AES-GCM é suportado universalmente. 
            Backend WASM do ONNX Runtime Web funciona em Chromium 90+, Firefox 89+, Safari 15+.
          </li>
          <li>
            <strong>Admissibilidade Legal:</strong> Implementação de cadeia de custódia criptográfica deve ser 
            revisada por counsel jurídico qualificado em cada jurisdição alvo. 
            Este documento não constitui aconselhamento jurídico.
          </li>
          <li>
            <strong>Modelo ONNX Silero VAD:</strong> A exportação ONNX oficial está disponível no 
            repositório de modelos da Silero. Verificar compatibilidade de versão com o backend WASM do ONNX Runtime Web.
          </li>
        </ul>
      </div>
    </div>
  );
}
