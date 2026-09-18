# 🎙️ AltaVoz Forensic-1

**Plataforma de Inteligência de Áudio Forense - Offline-First**

Sistema profissional para transcrição, diarização de falantes e análise forense de áudio, com cadeia de custódia criptográfica e processamento 100% local.

---

## 📋 Sobre o Projeto

O AltaVoz Forensic-1 é uma plataforma de análise de áudio desenvolvida para uso em investigações e processos legais. O sistema foi projetado com foco em:

- **Segurança**: Todo o processamento ocorre localmente, sem envio de dados para a internet
- **Integridade**: Cadeia de custódia criptográfica com prova de não-alteração
- **Precisão**: Modelos de IA de última geração para transcrição e identificação de falantes
- **Acessibilidade**: Interface intuitiva com conformidade WCAG 2.1 AA

### Para Quem é Este Projeto?

- **Profissionais Forenses**: Peritos em áudio que precisam de ferramentas confiáveis
- **Investigadores**: Profissionais de segurança pública e privada
- **Advogados**: Profissionais do direito que trabalham com evidências de áudio
- **Jornalistas**: Profissionais de investigação que lidam com gravações

---

## 🚀 Instalação Rápida

### Método 1: Instalador Automático (Recomendado)

#### Windows
```bash
# Abra o Prompt de Comando na pasta do projeto e execute:
scripts\install.bat
```

#### Linux / macOS
```bash
# Abra o Terminal na pasta do projeto e execute:
chmod +x scripts/install.sh
./scripts/install.sh
```

O instalador irá automaticamente:
- ✓ Verificar e instalar Node.js (se necessário)
- ✓ Instalar todas as dependências do projeto
- ✓ Criar a estrutura de diretórios
- ✓ Verificar o build do projeto

### Método 2: Instalação Manual

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/altavoz-forensic-1.git
cd altavoz-forensic-1

# 2. Instale as dependências
npm install

# 3. Baixe os modelos de IA
bash scripts/download-models.sh

# 4. Inicie o programa
npm run dev
```

---

## 📥 Download de Modelos de IA

Os modelos de inteligência artificial são necessários para o funcionamento do sistema.

### Download Automático
```bash
bash scripts/download-models.sh
```

### Modelos Incluídos

| Modelo | Tamanho | Função |
|--------|---------|--------|
| Silero VAD | 2 MB | Detecção de atividade de voz |
| Whisper Tiny | 75 MB | Transcrição rápida (inglês) |
| Whisper Base | 142 MB | Transcrição multilíngue |

### Modelo Adicional (Opcional)

Para maior precisão na transcrição, baixe o modelo Whisper Small:
```bash
curl -L -o public/models/ggml-small.bin \
  "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin"
```

---

## 💻 Uso

### Iniciando o Programa

```bash
npm run dev
```

O programa estará disponível em: **http://localhost:5173**

### Fluxo de Trabalho Básico

1. **Importar Áudio**: Carregue um arquivo de áudio (MP3, WAV, M4A, OGG, FLAC)
2. **Análise de Qualidade**: O sistema avalia automaticamente a qualidade do áudio
3. **Transcrição**: Converta fala em texto com timestamps
4. **Diarização**: Identifique quem está falando em cada momento
5. **Aprimoramento**: Melhore a qualidade do áudio (opcional)
6. **Exportação**: Salve os resultados em diversos formatos

### Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria build otimizado para produção |
| `npm run preview` | Visualiza o build de produção |
| `npm run setup` | Configuração completa automática |
| `npm run download-models` | Baixa modelos de IA necessários |
| `npm run test` | Executa todos os testes |
| `npm run lint` | Verifica qualidade do código |

---

## 📖 Guia do Usuário Simplificado

### O que o AltaVoz faz?

O AltaVoz Forensic-1 é um programa que ajuda a analisar gravações de áudio de forma segura e profissional. Ele:

- **Transcreve** o que é dito em gravações (transforma fala em texto)
- **Identifica** quem está falando em cada momento
- **Melhora** a qualidade do áudio para facilitar a compreensão
- **Garante** que o áudio original não seja alterado
- **Registra** tudo que foi feito com o áudio

### Como Usar

1. **Abra o programa** no navegador (Chrome, Firefox ou Edge)
2. **Importe um áudio** clicando em "Importar Áudio"
3. **Aguarde a análise** de qualidade automática
4. **Clique em "Transcrever"** para converter fala em texto
5. **Clique em "Identificar Falantes"** para descobrir quem fala
6. **Use as ferramentas de melhoria** se o áudio estiver com ruído
7. **Exporte os resultados** quando terminar

### Dicas Importantes

- ✓ **Salve seu trabalho** frequentemente
- ✓ **Use fones de ouvido** para ouvir detalhes
- ✓ **Verifique a transcrição** e corrija erros
- ✓ **Mantenha o áudio original** - nunca apague
- ✓ **Anote suas observações** durante a análise

### Perguntas Frequentes

**O áudio é enviado para a internet?**
Não. Tudo funciona no seu computador. Nenhum áudio sai do seu dispositivo.

**A transcrição é 100% precisa?**
Não. A transcrição automática tem cerca de 85-95% de precisão. Sempre revise e corrija.

**Posso usar para fins legais?**
Sim, o programa foi feito para ser usado em investigações e processos legais. Consulte um advogado sobre a admissibilidade na sua jurisdição.

**Quanto tempo leva para processar um áudio?**
Depende do tamanho do áudio e do seu computador. Um áudio de 10 minutos pode levar de 2 a 10 minutos para transcrever.

---

## 🏗️ Arquitetura Técnica

### Pilares do Sistema

#### 1. Criptografia e Integridade
- **AES-256-GCM**: Criptografia de dados em repouso
- **Argon2id**: Derivação de chaves a partir de senhas
- **SHA-256 + HMAC**: Cadeia de hash com árvores Merkle
- **Web Workers**: Processamento não-bloqueante

#### 2. DSP e Diarização
- **Silero VAD**: Detecção robusta de atividade de voz
- **ECAPA-TDNN**: Embeddings de falantes para diarização
- **Filtros Forenses**: Redução de ruído espectral, EQ de inteligibilidade
- **Web Audio API**: Processamento de áudio em tempo real

#### 3. ASR Local
- **whisper.cpp WASM**: Transcrição local de alta qualidade
- **Modelos ggml**: Tiny, Base, Small (75MB - 466MB)
- **Web Worker isolado**: Processamento sem bloquear a UI
- **Gerenciamento de modelos**: Download, verificação e armazenamento

#### 4. UI/UX Forense
- **Espectrograma**: Visualização de frequências com paletas daltônicas
- **Forma de onda**: Sobreposição com timeline de falantes
- **WCAG 2.1 AA**: Acessibilidade completa
- **Canvas otimizado**: Renderização eficiente de grandes áudios

### Requisitos do Sistema

**Mínimo:**
- Node.js 18.x ou superior
- 4 GB de RAM
- 2 GB de espaço em disco
- Navegador moderno (Chrome 90+, Firefox 89+, Safari 15+)

**Recomendado:**
- Node.js 20.x LTS
- 8 GB de RAM ou mais
- 10 GB de espaço em disco (para modelos)
- SSD para melhor desempenho
- Chrome/Edge 120+ ou Firefox 120+

---

## 🔒 Segurança e Privacidade

### Princípios de Segurança

1. **Zero Egress**: Nenhum áudio sai do dispositivo do usuário
2. **Processamento Local**: Toda análise ocorre no navegador
3. **Criptografia Forte**: AES-256-GCM com derivação Argon2id
4. **Cadeia de Custódia**: Registro imutável de todas as operações
5. **Prova de Não-Alteração**: Hashes criptográficos verificáveis

### O que NÃO acontece:

- ❌ Nenhum áudio é enviado para servidores externos
- ❌ Nenhum dado é coletado ou transmitido
- ❌ Nenhum arquivo é armazenado na nuvem
- ❌ Nenhuma telemetria ou analytics

### O que ACONTECE:

- ✓ Todo processamento ocorre no seu navegador
- ✓ Arquivos são armazenados apenas no seu dispositivo
- ✓ Criptografia protege dados sensíveis
- ✓ Cadeia de custódia registra todas as operações

---

## 📊 Roadmap de Desenvolvimento

### Fase 1: Fundação Criptográfica (Concluída)
- [x] AES-256-GCM via WebCrypto
- [x] Argon2id para derivação de chaves
- [x] Cadeia de hash em Web Worker
- [x] Registro de custódia com HMAC

### Fase 2: DSP e Diarização (Em Progresso)
- [x] Silero VAD via ONNX Runtime Web
- [x] ECAPA-TDNN para embeddings de falantes
- [ ] Filtros forenses avançados
- [ ] Diarização multi-falante otimizada

### Fase 3: ASR Local (Em Progresso)
- [x] whisper.cpp WASM integrado
- [x] Gerenciamento de modelos
- [ ] Transcrição em chunks para áudios longos
- [ ] Suporte a mais idiomas

### Fase 4: UI/UX Forense (Planejado)
- [x] Espectrograma com paletas daltônicas
- [x] Timeline de falantes
- [ ] Visualização de cadeia de custódia
- [ ] Exportação de pacotes de verificação

---

## 📦 Bibliotecas e Dependências

### Principais

| Biblioteca | Versão | Licença | Função |
|------------|--------|---------|--------|
| React | 18.2.0 | MIT | Interface de usuário |
| TypeScript | 5.7.0 | Apache-2.0 | Linguagem de programação |
| Vite | 6.3.5 | MIT | Build tool |
| Tailwind CSS | 4.1.7 | MIT | Estilização |
| ONNX Runtime Web | - | MIT | Inferência de modelos IA |
| whisper.cpp | - | MIT | Transcrição de áudio |

### Modelos de IA

| Modelo | Tamanho | Licença | Fonte |
|--------|---------|---------|-------|
| Silero VAD v5 | 2 MB | MIT | silero.ai |
| Whisper Tiny | 75 MB | MIT | OpenAI/ggerganov |
| Whisper Base | 142 MB | MIT | OpenAI/ggerganov |
| Whisper Small | 466 MB | MIT | OpenAI/ggerganov |

---

## 🐛 Solução de Problemas

### Erros Comuns

**"npm: command not found"**
- Node.js não está instalado. Instale em: https://nodejs.org

**"EACCES: permission denied"**
- Problema de permissão. Execute: `sudo chown -R $USER ~/.npm`

**"Model not found"**
- Modelos não foram baixados. Execute: `bash scripts/download-models.sh`

**"Port 5173 already in use"**
- Outra aplicação está usando a porta. Execute: `npm run dev -- --port 3000`

**"SharedArrayBuffer is not defined"**
- Navegador não suporta SharedArrayBuffer. Use Chrome/Edge 92+ ou Firefox 79+.

---

## 📄 Licença

Este projeto é licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Suporte

Para dúvidas, problemas ou sugestões:

- **Documentação**: Consulte os manuais na interface do programa
- **Issues**: Abra uma issue no GitHub
- **Email**: contato@altavoz-forensic.com

---

## ⚖️ Aviso Legal

**IMPORTANTE**: Este documento fornece apenas orientação técnica. A admissibilidade de evidências digitais varia conforme a jurisdição. Revisão jurídica por counsel qualificado é necessária antes da implantação em qualquer processo legal. Isto não constitui aconselhamento jurídico.

---

## 🙏 Agradecimentos

- **OpenAI** pelo modelo Whisper
- **Silero** pelo modelo VAD
- **Comunidade whisper.cpp** pela implementação WASM
- **ONNX Runtime** pela infraestrutura de inferência
- **Todos os contribuidores** que tornaram este projeto possível

---

**by rogerelizar**

---

<div align="center">

**AltaVoz Forensic-1** | Inteligência de Áudio Forense | Offline-First | Zero Egress

[Documentação](#-guia-do-usuário-simplificado) • [Instalação](#-instalação-rápida) • [Arquitetura](#-arquitetura-técnica)

</div>
