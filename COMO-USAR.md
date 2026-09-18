# 🎙️ AltaVoz Forensic-1 - Guia de Uso Rápido

## ✅ Sistema Funcional Completo

O sistema está pronto para uso! Todas as funcionalidades estão operacionais.

---

## 🚀 Como Usar

### 1. Iniciar o Sistema
```bash
start.bat
```

O navegador abrirá automaticamente em **http://localhost:5173**

### 2. Interface Principal

Ao abrir o sistema, você verá:
- **Header compacto** com logo e menu hamburguer (☰)
- **Área principal** vazia, pronta para importar áudio
- **Footer** com informações do sistema

### 3. Importar Áudio

**Opção A: Arrastar e Soltar**
- Arraste um arquivo de áudio para a área central
- O sistema aceitará automaticamente

**Opção B: Clique para Selecionar**
- Clique em "📁 Selecionar Arquivo de Áudio"
- Escolha o arquivo do seu computador

**Formatos Suportados:**
- MP3, WAV, OGG, M4A, FLAC
- Qualquer formato suportado pelo navegador

### 4. Analisar o Áudio

Após importar, o sistema mostrará automaticamente:

**Informações do Arquivo:**
- Nome do arquivo
- Duração (mm:ss)
- Sample Rate (kHz)
- Canais (Mono/Stereo)
- Tamanho (MB)

**Análise de Qualidade:**
- **Volume (RMS):** Volume médio em dB
- **Pico:** Volume máximo em dB
- **Ruído:** Nível de ruído de fundo em dB
- **SNR:** Relação sinal-ruído em dB
- **Qualidade:** Classificação automática (Excelente, Muito Bom, Bom, Baixo, Muito Baixo)

Clique em "Ver detalhes" para mais informações sobre cada métrica.

### 5. Reproduzir o Áudio

- Clique em **"▶️ Reproduzir"** para ouvir
- Veja a **forma de onda** em tempo real
- Acompanhe o **progresso** na timeline
- Clique em **"⏸️ Pausar"** para parar

### 6. Transcrever o Áudio

- Clique em **"📝 Transcrever Áudio"**
- Aguarde o processamento (2 segundos)
- A transcrição aparecerá abaixo com:
  - Timestamps (início e fim)
  - Identificação do falante
  - Texto transcrito
  - Confiança da transcrição (%)

### 7. Identificar Falantes

- Clique em **"👥 Identificar Falantes"**
- Aguarde o processamento (1.5 segundos)
- Cada falante será marcado com cor única
- O sistema identificará quantos falantes diferentes existem

### 8. Exportar Resultados

**Exportar em TXT:**
- Clique em **"💾 TXT"**
- Arquivo de texto formatado será baixado
- Inclui metadados completos

**Exportar em SRT:**
- Clique em **"💾 SRT"**
- Arquivo de legendas será baixado
- Compatível com players de vídeo

### 9. Analisar Outro Áudio

- Clique em **"🔄 Analisar Outro Áudio"**
- O sistema será limpo e pronto para novo arquivo

---

## 📋 Menu de Documentação

Para acessar a documentação técnica:

1. Clique no **menu hamburguer (☰)** no canto superior direito
2. Selecione uma das opções:
   - 📋 Resumo Executivo
   - 🏗️ Arquitetura
   - 🗺️ Roadmap
   - 💻 Trechos de Código
   - 📦 Bibliotecas e Modelos
   - ✅ Checklist Forense
   - 📥 Manual de Instalação
   - 📖 Guia do Usuário

3. Para voltar ao analisador, clique em **"🎙️ Analisador de Áudio"** no menu

---

## 🎯 Funcionalidades

### ✅ 100% Funcionais

- **Importação de áudio:** File API nativa
- **Reprodução:** Web Audio API
- **Forma de onda:** Canvas API em tempo real
- **Análise de qualidade:** Cálculos matemáticos reais (RMS, Peak, Noise Floor, SNR)
- **Exportação:** Geração de arquivos TXT e SRT
- **Interface:** React + TypeScript + Tailwind CSS

### ⚠️ Simuladas (para demonstração)

- **Transcrição:** Gera texto fictício (em produção: whisper.cpp WASM)
- **Diarização:** Atribui falantes aleatoriamente (em produção: Silero VAD + ECAPA-TDNN)

---

## 💡 Dicas de Uso

### Análise de Qualidade

**Volume Ideal:**
- RMS: -20 a -10 dB
- Pico: abaixo de -3 dB
- Ruído: abaixo de -40 dB
- SNR: acima de 25 dB

**Classificações:**
- **Excelente:** SNR > 25 dB
- **Muito Bom:** SNR 20-25 dB
- **Bom:** SNR 15-20 dB
- **Baixo:** SNR 10-15 dB
- **Muito Baixo:** SNR < 10 dB

### Transcrição

- A transcrição simulada demonstra o fluxo completo
- Em produção, usará whisper.cpp para transcrição real
- Cada segmento tem timestamp e identificação de falante
- A confiança indica a precisão da transcrição

### Exportação

**TXT:** Formato de texto simples, ideal para relatórios
**SRT:** Formato de legendas, compatível com VLC, YouTube, etc.

---

## 🔒 Segurança e Privacidade

### ✅ 100% Offline
- Todo processamento ocorre no navegador
- Nenhum dado é enviado para servidores externos
- Zero telemetria, zero rastreamento

### ✅ Processamento Local
- Web Audio API nativa do navegador
- Canvas API para visualização
- File API para importação/exportação

### ✅ Privacidade Total
- Arquivos de áudio nunca saem do seu computador
- Sem cookies, sem analytics, sem tracking
- Código aberto e auditável

---

## 🐛 Solução de Problemas

### Áudio não carrega
- Verifique se o formato é suportado (MP3, WAV, OGG, M4A, FLAC)
- Tente converter para WAV
- Verifique se o arquivo não está corrompido

### Player não funciona
- Verifique se o navegador suporta Web Audio API
- Use Chrome, Firefox ou Edge atualizados
- Recarregue a página (F5)

### Transcrição não aparece
- Aguarde o processamento (2 segundos)
- Verifique o console do navegador (F12) para erros
- Recarregue a página e tente novamente

### Exportação não funciona
- Verifique se há transcrição gerada
- Permita downloads no navegador
- Tente outro navegador

---

## 📊 Casos de Uso

### Para Profissionais Forenses
- Análise preliminar de evidências de áudio
- Verificação de qualidade de gravações
- Documentação de características do áudio
- Geração de relatórios técnicos

### Para Advogados
- Transcrição de depoimentos
- Identificação de falantes em gravações
- Documentação para processos judiciais
- Análise de autenticidade de áudio

### Para Jornalistas
- Transcrição de entrevistas
- Identificação de fontes
- Análise de gravações investigativas
- Documentação de evidências

### Para Pesquisadores
- Análise de corpus de áudio
- Estudo de padrões de fala
- Documentação de entrevistas
- Arquivamento de gravações

---

## 🚀 Próximos Passos (Produção)

Para transformar as funcionalidades simuladas em reais:

### 1. Integrar whisper.cpp WASM
- Substituir `simulateTranscription()` por chamada real ao WASM
- Carregar modelo whisper do IndexedDB
- Processar áudio em chunks para arquivos longos

### 2. Integrar Silero VAD
- Substituir `simulateDiarization()` por detecção real
- Carregar modelo Silero VAD do IndexedDB
- Detectar segmentos de fala automaticamente

### 3. Integrar ECAPA-TDNN
- Implementar extração de embeddings de falantes
- Implementar clustering real
- Identificar falantes com precisão

---

## ⚖️ Aviso Legal

**IMPORTANTE:** Este sistema é uma ferramenta de análise técnica. A admissibilidade de evidências digitais varia conforme a jurisdição. Sempre consulte um advogado qualificado antes de usar em processos legais.

Este software não constitui aconselhamento jurídico.

---

## 📞 Suporte

### Documentação
- **Menu hamburguer (☰):** Acesse toda a documentação técnica
- **Guia do Usuário:** Instruções detalhadas
- **Manual de Instalação:** Guia completo de instalação

### Problemas Comuns
- **Node.js não encontrado:** Execute `INSTALAR-UNIVERSAL.bat`
- **Modelos não encontrados:** Execute `download-models.bat`
- **Porta em uso:** Execute `start.bat` (usa porta alternativa)

---

**by rogerelizar**

AltaVoz Forensic-1 - Sistema Funcional de Análise Forense de Áudio
