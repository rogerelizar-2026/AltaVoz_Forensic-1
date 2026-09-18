export function InstallationManual() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Manual de Instalação</h2>
        <p className="text-gray-400 text-sm">
          Guia completo para instalação e configuração do AltaVoz Forensic-1 em diferentes ambientes.
        </p>
      </div>

      {/* Requisitos do Sistema */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Requisitos do Sistema</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Mínimo</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Node.js 18.x ou superior</li>
              <li>• npm 9.x ou superior</li>
              <li>• 4 GB de RAM</li>
              <li>• 2 GB de espaço em disco</li>
              <li>• Navegador moderno (Chrome 90+, Firefox 89+, Safari 15+)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-emerald-400 font-medium mb-2">Recomendado</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Node.js 20.x LTS</li>
              <li>• npm 10.x</li>
              <li>• 8 GB de RAM ou mais</li>
              <li>• 10 GB de espaço em disco (para modelos)</li>
              <li>• SSD para melhor desempenho</li>
              <li>• Chrome/Edge 120+ ou Firefox 120+</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Instalação Rápida */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800 bg-emerald-900/10">
          <h3 className="font-semibold text-emerald-400">⚡ Instalação Rápida (Recomendado)</h3>
        </div>
        <div className="p-5 space-y-4">
          <div className="text-sm text-gray-300">
            <p className="mb-3">Para a maioria dos usuários, a instalação rápida é a melhor opção:</p>
          </div>
          
          <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <div className="text-xs text-gray-500 mb-2">Terminal / Prompt de Comando</div>
            <code className="text-emerald-400 text-sm block">
              git clone https://github.com/seu-usuario/altavoz-forensic-1.git<br/>
              cd altavoz-forensic-1<br/>
              npm install<br/>
              npm run setup<br/>
              npm run dev
            </code>
          </div>

          <div className="text-sm text-gray-300">
            <p>O comando <code className="bg-gray-800 px-1 rounded">npm run setup</code> irá automaticamente:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-400">
              <li>Verificar todas as dependências do sistema</li>
              <li>Baixar e configurar os modelos de IA necessários</li>
              <li>Configurar o ambiente de desenvolvimento</li>
              <li>Executar testes de validação</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Instalação Passo a Passo */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Instalação Passo a Passo</h3>
        </div>
        <div className="p-5 space-y-6">
          
          {/* Passo 1 */}
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-white mb-2">Passo 1: Instalar Node.js</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p><strong>Windows:</strong></p>
              <ol className="list-decimal list-inside ml-4 space-y-1 text-gray-400">
                <li>Acesse <code className="bg-gray-800 px-1 rounded text-xs">https://nodejs.org</code></li>
                <li>Baixe a versão LTS (recomendada)</li>
                <li>Execute o instalador e siga as instruções</li>
                <li>Reinicie o terminal após a instalação</li>
              </ol>
              
              <p className="mt-3"><strong>macOS:</strong></p>
              <div className="bg-gray-950 rounded p-3 border border-gray-800">
                <code className="text-emerald-400 text-xs block">
                  brew install node@20
                </code>
              </div>
              
              <p className="mt-3"><strong>Linux (Ubuntu/Debian):</strong></p>
              <div className="bg-gray-950 rounded p-3 border border-gray-800">
                <code className="text-emerald-400 text-xs block">
                  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -<br/>
                  sudo apt-get install -y nodejs
                </code>
              </div>
              
              <p className="mt-3"><strong>Verificar instalação:</strong></p>
              <div className="bg-gray-950 rounded p-3 border border-gray-800">
                <code className="text-emerald-400 text-xs block">
                  node --version<br/>
                  npm --version
                </code>
              </div>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-white mb-2">Passo 2: Clonar o Repositório</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Abra o terminal e execute:</p>
              <div className="bg-gray-950 rounded p-3 border border-gray-800">
                <code className="text-emerald-400 text-xs block">
                  git clone https://github.com/seu-usuario/altavoz-forensic-1.git<br/>
                  cd altavoz-forensic-1
                </code>
              </div>
              <p className="text-gray-400 text-xs">Se não tiver git instalado, baixe em: https://git-scm.com/downloads</p>
            </div>
          </div>

          {/* Passo 3 */}
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-white mb-2">Passo 3: Instalar Dependências</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Instale todas as dependências do projeto:</p>
              <div className="bg-gray-950 rounded p-3 border border-gray-800">
                <code className="text-emerald-400 text-xs block">
                  npm install
                </code>
              </div>
              <p className="text-gray-400 text-xs">Este processo pode levar alguns minutos dependendo da sua conexão.</p>
            </div>
          </div>

          {/* Passo 4 */}
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-white mb-2">Passo 4: Configurar Modelos de IA</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Baixe os modelos de inteligência artificial necessários:</p>
              <div className="bg-gray-950 rounded p-3 border border-gray-800">
                <code className="text-emerald-400 text-xs block">
                  npm run download-models
                </code>
              </div>
              <p className="text-gray-400 text-xs">
                Os modelos serão baixados para <code className="bg-gray-800 px-1 rounded">./public/models/</code> e ocupam aproximadamente 700MB.
              </p>
            </div>
          </div>

          {/* Passo 5 */}
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-white mb-2">Passo 5: Executar o Sistema</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Inicie o servidor de desenvolvimento:</p>
              <div className="bg-gray-950 rounded p-3 border border-gray-800">
                <code className="text-emerald-400 text-xs block">
                  npm run dev
                </code>
              </div>
              <p className="text-gray-400 text-xs">
                O sistema estará disponível em <code className="bg-gray-800 px-1 rounded">http://localhost:5173</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Instalação para Produção */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Instalação para Produção</h3>
        </div>
        <div className="p-5 space-y-4">
          <div className="text-sm text-gray-300">
            <p className="mb-3">Para criar uma versão otimizada para produção:</p>
          </div>
          
          <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <code className="text-emerald-400 text-sm block">
              npm run build<br/>
              npm run preview
            </code>
          </div>

          <div className="text-sm text-gray-300">
            <p>O build de produção será gerado na pasta <code className="bg-gray-800 px-1 rounded">dist/</code> e pode ser hospedado em qualquer servidor web estático.</p>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-blue-900/10 border border-blue-800/30">
            <p className="text-sm text-blue-300">
              <strong>Dica:</strong> Para servir em produção, você pode usar nginx, Apache, ou qualquer servidor web que suporte arquivos estáticos.
            </p>
          </div>
        </div>
      </div>

      {/* Solução de Problemas */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Solução de Problemas Comuns</h3>
        <div className="space-y-4 text-sm">
          
          <div className="p-3 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
            <p className="text-yellow-400 font-medium mb-1">Erro: "npm: command not found"</p>
            <p className="text-gray-300">Node.js não está instalado ou não está no PATH. Reinstale o Node.js e reinicie o terminal.</p>
          </div>

          <div className="p-3 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
            <p className="text-yellow-400 font-medium mb-1">Erro: "EACCES: permission denied"</p>
            <p className="text-gray-300">Problema de permissão. No Linux/macOS, execute:</p>
            <code className="text-emerald-400 text-xs block mt-2">sudo chown -R $USER ~/.npm</code>
          </div>

          <div className="p-3 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
            <p className="text-yellow-400 font-medium mb-1">Erro: "Model not found"</p>
            <p className="text-gray-300">Os modelos de IA não foram baixados. Execute:</p>
            <code className="text-emerald-400 text-xs block mt-2">npm run download-models</code>
          </div>

          <div className="p-3 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
            <p className="text-yellow-400 font-medium mb-1">Erro: "Port 5173 already in use"</p>
            <p className="text-gray-300">Outra aplicação está usando a porta 5173. Execute:</p>
            <code className="text-emerald-400 text-xs block mt-2">npm run dev -- --port 3000</code>
          </div>

          <div className="p-3 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
            <p className="text-yellow-400 font-medium mb-1">Erro: "SharedArrayBuffer is not defined"</p>
            <p className="text-gray-300">Seu navegador não suporta SharedArrayBuffer. Use Chrome/Edge 92+ ou Firefox 79+ com os cabeçalhos COOP/COEP configurados no servidor.</p>
          </div>

        </div>
      </div>

      {/* Comandos Úteis */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">Comandos Úteis</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-3 text-gray-400">Comando</th>
                <th className="text-left p-3 text-gray-400">Descrição</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3"><code className="text-emerald-400 text-xs">npm run dev</code></td>
                <td className="p-3 text-gray-300">Inicia o servidor de desenvolvimento</td>
              </tr>
              <tr>
                <td className="p-3"><code className="text-emerald-400 text-xs">npm run build</code></td>
                <td className="p-3 text-gray-300">Cria build de produção otimizado</td>
              </tr>
              <tr>
                <td className="p-3"><code className="text-emerald-400 text-xs">npm run preview</code></td>
                <td className="p-3 text-gray-300">Visualiza o build de produção localmente</td>
              </tr>
              <tr>
                <td className="p-3"><code className="text-emerald-400 text-xs">npm run setup</code></td>
                <td className="p-3 text-gray-300">Configuração completa automática</td>
              </tr>
              <tr>
                <td className="p-3"><code className="text-emerald-400 text-xs">npm run download-models</code></td>
                <td className="p-3 text-gray-300">Baixa modelos de IA necessários</td>
              </tr>
              <tr>
                <td className="p-3"><code className="text-emerald-400 text-xs">npm run test</code></td>
                <td className="p-3 text-gray-300">Executa todos os testes</td>
              </tr>
              <tr>
                <td className="p-3"><code className="text-emerald-400 text-xs">npm run lint</code></td>
                <td className="p-3 text-gray-300">Verifica qualidade do código</td>
              </tr>
              <tr>
                <td className="p-3"><code className="text-emerald-400 text-xs">npm run typecheck</code></td>
                <td className="p-3 text-gray-300">Verifica tipos TypeScript</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Suporte */}
      <div className="rounded-xl bg-emerald-900/10 border border-emerald-800/30 p-5">
        <h3 className="font-semibold text-emerald-300 mb-3">Precisa de Ajuda?</h3>
        <div className="text-sm text-emerald-200/80 space-y-2">
          <p>Se você encontrar problemas durante a instalação:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Verifique se todos os requisitos do sistema estão atendidos</li>
            <li>Consulte a seção de Solução de Problemas acima</li>
            <li>Verifique os logs no terminal para mensagens de erro específicas</li>
            <li>Entre em contato com o suporte técnico</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
