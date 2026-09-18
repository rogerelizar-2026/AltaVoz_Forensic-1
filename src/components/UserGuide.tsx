export function UserGuide() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Guia do Usuário</h2>
        <p className="text-gray-400 text-sm">
          Como usar o AltaVoz Forensic-1 de forma simples e prática.
        </p>
      </div>

      {/* O que é o AltaVoz */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">O que é o AltaVoz Forensic-1?</h3>
        <div className="text-sm text-gray-300 space-y-3">
          <p>
            O AltaVoz Forensic-1 é um programa que ajuda a analisar gravações de áudio de forma segura e profissional. 
            Ele foi criado para ser usado em investigações e processos legais, onde a precisão e a segurança das informações são muito importantes.
          </p>
          <p>
            <strong>O que ele faz:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-400">
            <li>Transcreve o que é dito em gravações de áudio (transforma fala em texto)</li>
            <li>Identifica quem está falando em cada momento da gravação</li>
            <li>Melhora a qualidade do áudio para facilitar a compreensão</li>
            <li>Garante que o áudio original não seja alterado</li>
            <li>Cria um registro seguro de tudo que foi feito com o áudio</li>
          </ul>
          <p className="text-emerald-400 font-medium">
            ✓ Tudo funciona no seu computador. Nenhum áudio é enviado para a internet.
          </p>
        </div>
      </div>

      {/* Como Usar - Passo a Passo */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800 bg-emerald-900/10">
          <h3 className="font-semibold text-emerald-400">📖 Como Usar - Passo a Passo</h3>
        </div>
        <div className="p-5 space-y-6">
          
          {/* Passo 1 */}
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-white mb-2">1. Abrir o Programa</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Abra o navegador (Chrome, Firefox ou Edge) e acesse o endereço que foi informado durante a instalação.</p>
              <p className="text-gray-400">Geralmente é: <code className="bg-gray-800 px-1 rounded text-xs">http://localhost:5173</code></p>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-white mb-2">2. Importar um Áudio</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Clique no botão <strong>"Importar Áudio"</strong> e selecione o arquivo de áudio do seu computador.</p>
              <p className="text-gray-400">Formatos aceitos: MP3, WAV, M4A, OGG, FLAC</p>
              <div className="mt-3 p-3 rounded-lg bg-blue-900/10 border border-blue-800/30">
                <p className="text-xs text-blue-300">
                  <strong>💡 Dica:</strong> O programa funciona melhor com arquivos de áudio claros e sem muito ruído de fundo.
                </p>
              </div>
            </div>
          </div>

          {/* Passo 3 */}
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-white mb-2">3. Verificar a Qualidade do Áudio</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>O programa vai analisar automaticamente a qualidade do áudio e mostrar:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-400">
                <li><strong>Volume geral:</strong> Se o áudio está muito baixo ou muito alto</li>
                <li><strong>Ruído de fundo:</strong> Quanto ruído existe na gravação</li>
                <li><strong>Qualidade geral:</strong> Uma nota de A (excelente) a F (precisa melhorar)</li>
              </ul>
            </div>
          </div>

          {/* Passo 4 */}
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-white mb-2">4. Transcrever o Áudio</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Clique no botão <strong>"Transcrever"</strong> para converter a fala em texto.</p>
              <p className="text-gray-400">O programa vai mostrar o texto com o tempo de cada fala.</p>
              <div className="mt-3 p-3 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
                <p className="text-xs text-yellow-300">
                  <strong>⏱️ Tempo:</strong> A transcrição pode levar alguns minutos dependendo do tamanho do áudio.
                </p>
              </div>
            </div>
          </div>

          {/* Passo 5 */}
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-white mb-2">5. Identificar os Falantes</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Clique em <strong>"Identificar Falantes"</strong> para descobrir quem está falando em cada momento.</p>
              <p className="text-gray-400">O programa vai marcar cada pessoa com uma cor diferente (Falante 1, Falante 2, etc.).</p>
              <p className="text-gray-400">Você pode clicar em cada falante e dar um nome (ex: "Testemunha", "Advogado", "Juiz").</p>
            </div>
          </div>

          {/* Passo 6 */}
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-white mb-2">6. Melhorar o Áudio (Opcional)</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Se o áudio estiver com ruído ou difícil de entender, use as ferramentas de melhoria:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-400">
                <li><strong>Reduzir ruído:</strong> Remove sons de fundo como chiado ou vento</li>
                <li><strong>Melhorar voz:</strong> Deixa a voz mais clara e fácil de entender</li>
                <li><strong>Ajustar volume:</strong> Aumenta ou diminui o volume</li>
              </ul>
              <div className="mt-3 p-3 rounded-lg bg-amber-900/20 border border-amber-800/30">
                <p className="text-xs text-amber-300">
                  <strong>⚠️ Importante:</strong> As melhorias são apenas para ajudar você a ouvir melhor. 
                  O áudio original nunca é alterado. Tudo que você faz fica registrado.
                </p>
              </div>
            </div>
          </div>

          {/* Passo 7 */}
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-white mb-2">7. Exportar os Resultados</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Quando terminar, clique em <strong>"Exportar"</strong> para salvar:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-400">
                <li><strong>Transcrição em texto:</strong> Arquivo .txt ou .doc com tudo que foi dito</li>
                <li><strong>Relatório completo:</strong> Arquivo com todas as informações da análise</li>
                <li><strong>Áudio melhorado:</strong> Versão do áudio com as melhorias aplicadas</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Recursos Visuais */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">Recursos Visuais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          
          <div className="p-4 rounded-lg bg-gray-800/50">
            <h4 className="text-emerald-400 font-medium mb-2">📊 Onda Sonora</h4>
            <p className="text-gray-300 mb-2">
              Mostra o áudio como uma linha ondulada. Picos altos são sons fortes, picos baixos são sons fracos.
            </p>
            <p className="text-gray-400 text-xs">
              Use para ver onde há fala e onde há silêncio.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-800/50">
            <h4 className="text-emerald-400 font-medium mb-2">🌈 Espectrograma</h4>
            <p className="text-gray-300 mb-2">
              Mostra todas as frequências do áudio como um mapa de cores. Cores quentes (vermelho/laranja) são sons fortes, cores frias (azul/roxo) são sons fracos.
            </p>
            <p className="text-gray-400 text-xs">
              Use para identificar ruídos, vozes sobrepostas ou edições no áudio.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-800/50">
            <h4 className="text-emerald-400 font-medium mb-2">👥 Linha do Tempo dos Falantes</h4>
            <p className="text-gray-300 mb-2">
              Mostra quem está falando em cada momento, com cores diferentes para cada pessoa.
            </p>
            <p className="text-gray-400 text-xs">
              Use para ver quando cada pessoa falou e por quanto tempo.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-800/50">
            <h4 className="text-emerald-400 font-medium mb-2">🔒 Registro de Segurança</h4>
            <p className="text-gray-300 mb-2">
              Mostra tudo que foi feito com o áudio, em ordem, com data e hora.
            </p>
            <p className="text-gray-400 text-xs">
              Use para provar que o áudio não foi alterado de forma não autorizada.
            </p>
          </div>

        </div>
      </div>

      {/* Dicas Importantes */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">💡 Dicas Importantes</h3>
        <div className="space-y-3 text-sm">
          
          <div className="flex items-start gap-3">
            <span className="text-emerald-500 text-lg">✓</span>
            <div>
              <p className="text-white font-medium">Salve seu trabalho frequentemente</p>
              <p className="text-gray-400">Clique em "Salvar" depois de cada etapa importante.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-emerald-500 text-lg">✓</span>
            <div>
              <p className="text-white font-medium">Use fones de ouvido</p>
              <p className="text-gray-400">Fones ajudam a ouvir detalhes que podem passar despercebidos.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-emerald-500 text-lg">✓</span>
            <div>
              <p className="text-white font-medium">Verifique a transcrição</p>
              <p className="text-gray-400">Sempre leia a transcrição e corrija erros. O programa é bom, mas não é perfeito.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-emerald-500 text-lg">✓</span>
            <div>
              <p className="text-white font-medium">Mantenha o áudio original</p>
              <p className="text-gray-400">Nunca apague o arquivo de áudio original. Sempre trabalhe com cópias.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-emerald-500 text-lg">✓</span>
            <div>
              <p className="text-white font-medium">Anote suas observações</p>
              <p className="text-gray-400">Use o campo de notas para registrar o que você percebeu durante a análise.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Perguntas Frequentes */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h3 className="font-semibold text-white mb-3">❓ Perguntas Frequentes</h3>
        <div className="space-y-4 text-sm">
          
          <div>
            <p className="text-white font-medium mb-1">O áudio é enviado para a internet?</p>
            <p className="text-gray-400">Não. Tudo funciona no seu computador. Nenhum áudio sai do seu dispositivo.</p>
          </div>

          <div>
            <p className="text-white font-medium mb-1">Posso usar em qualquer computador?</p>
            <p className="text-gray-400">Sim, desde que tenha os requisitos mínimos de instalação (veja o Manual de Instalação).</p>
          </div>

          <div>
            <p className="text-white font-medium mb-1">A transcrição é 100% precisa?</p>
            <p className="text-gray-400">Não. A transcrição automática tem cerca de 85-95% de precisão. Sempre revise e corrija.</p>
          </div>

          <div>
            <p className="text-white font-medium mb-1">Posso identificar quem está falando?</p>
            <p className="text-gray-400">Sim, o programa identifica vozes diferentes, mas você precisa dizer quem é cada pessoa (ex: "esta é a voz do João").</p>
          </div>

          <div>
            <p className="text-white font-medium mb-1">O áudio original pode ser alterado?</p>
            <p className="text-gray-400">Não. O programa cria cópias melhoradas, mas o áudio original nunca é modificado. Tudo fica registrado.</p>
          </div>

          <div>
            <p className="text-white font-medium mb-1">Posso usar para fins legais?</p>
            <p className="text-gray-400">Sim, o programa foi feito para ser usado em investigações e processos legais. Consulte um advogado sobre a admissibilidade na sua jurisdição.</p>
          </div>

          <div>
            <p className="text-white font-medium mb-1">Quanto tempo leva para processar um áudio?</p>
            <p className="text-gray-400">Depende do tamanho do áudio e do seu computador. Um áudio de 10 minutos pode levar de 2 a 10 minutos para transcrever.</p>
          </div>

          <div>
            <p className="text-white font-medium mb-1">Posso usar áudios em outros idiomas?</p>
            <p className="text-gray-400">Sim, o programa suporta vários idiomas. Selecione o idioma correto antes de transcrever.</p>
          </div>

        </div>
      </div>

      {/* Suporte */}
      <div className="rounded-xl bg-emerald-900/10 border border-emerald-800/30 p-5">
        <h3 className="font-semibold text-emerald-300 mb-3">Precisa de Ajuda?</h3>
        <div className="text-sm text-emerald-200/80 space-y-2">
          <p>Se tiver dúvidas ou problemas:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Consulte o Manual de Instalação para problemas técnicos</li>
            <li>Verifique o Guia de Arquitetura para entender como o programa funciona</li>
            <li>Entre em contato com o suporte técnico</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
