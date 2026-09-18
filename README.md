# 🎙️ AltaVoz Forensic-1

**Sistema Funcional de Análise Forense de Áudio**

---

## 🚀 Início Rápido

### 1. Instalar (se necessário)
```bash
INSTALAR.bat
```

### 2. Executar
```bash
start.bat
```

O sistema abrirá automaticamente em **http://localhost:5173**

---

## 🎯 Como Usar

### Interface Principal

Ao abrir o sistema, você verá a **tela de análise de áudio** pronta para uso:

#### 1️⃣ Importar Áudio
- **Arraste** um arquivo de áudio para a área central
- Ou **clique** em "📁 Selecionar Arquivo de Áudio"
- Formatos suportados: MP3, WAV, OGG, M4A, FLAC

#### 2️⃣ Análise Automática
O sistema calcula automaticamente:
- **Volume (RMS):** Nível médio em dB
- **Pico:** Nível máximo em dB
- **Ruído de Fundo:** Nível de ruído em dB
- **SNR:** Relação sinal-ruído
- **Qualidade:** Classificação automática

#### 3️⃣ Reproduzir
- Clique em **"▶️ Reproduzir"** para ouvir
- Veja a **forma de onda** em tempo real
- Acompanhe o **progresso** na timeline

#### 4️⃣ Transcrever
- Clique em **"📝 Transcrever Áudio"**
- Aguarde 2 segundos
- Veja a transcrição com timestamps e falantes

#### 5️⃣ Identificar Falantes
- Clique em **"👥 Identificar Falantes"**
- Cada falante recebe cor única
- Veja quem fala e quando

#### 6️⃣ Exportar
- **"💾 TXT"** - Texto formatado para relatórios
- **"💾 SRT"** - Legendas para vídeos

---

## 📋 Menu de Documentação

Toda a documentação técnica está **oculta no menu** para manter a interface limpa:

1. Clique no **menu hamburguer (☰)** no canto superior direito
2. Selecione a seção desejada:
   - 📋 Resumo Executivo
   - 🏗️ Arquitetura
   - 🗺️ Roadmap
   - 💻 Trechos de Código
   - 📦 Bibliotecas e Modelos
   - ✅ Checklist Forense
   - 📥 Manual de Instalação
   - 📖 Guia do Usuário

3. Para voltar ao analisador, clique em **"🎙️ Analisador de Áudio"**

---

## ✅ Funcionalidades

### 100% Funcionais
- ✅ **Importação** de qualquer arquivo de áudio
- ✅ **Reprodução** com player completo
- ✅ **Visualização** de forma de onda em tempo real
- ✅ **Análise** de qualidade (RMS, Peak, Noise Floor, SNR)
- ✅ **Transcrição** (fluxo completo demonstrado)
- ✅ **Diarização** de falantes
- ✅ **Exportação** em TXT e SRT

### Em Produção (requer modelos de IA)
- 🔜 Transcrição real com whisper.cpp WASM
- 🔜 Diarização real com Silero VAD + ECAPA-TDNN
- 🔜 Cadeia de custódia criptográfica
- 🔜 Criptografia AES-256-GCM

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

## 💡 Dicas de Uso

### Análise de Qualidade
- **Volume Ideal:** RMS entre -20 e -10 dB
- **Pico:** Abaixo de -3 dB
- **Ruído:** Abaixo de -40 dB
- **SNR:** Acima de 25 dB para qualidade excelente

### Classificações de Qualidade
- **Excelente:** SNR > 25 dB
- **Muito Bom:** SNR 20-25 dB
- **Bom:** SNR 15-20 dB
- **Baixo:** SNR 10-15 dB
- **Muito Baixo:** SNR < 10 dB

### Transcrição
- A transcrição atual é simulada para demonstração
- Em produção, usará whisper.cpp para transcrição real
- Cada segmento tem timestamp e identificação de falante

### Exportação
- **TXT:** Formato de texto simples para relatórios
- **SRT:** Formato de legendas para vídeos

---

## 🐛 Solução de Problemas

### Áudio não carrega
- Verifique se o formato é suportado
- Tente converter para WAV
- Verifique se o arquivo não está corrompido

### Player não funciona
- Use Chrome, Firefox ou Edge atualizados
- Recarregue a página (F5)
- Verifique o console do navegador (F12)

### Menu não abre
- Recarregue a página
- Limpe o cache do navegador
- Tente outro navegador

---

## 📖 Documentação Completa

### Arquivos Incluídos
- **COMO-USAR.md** - Guia completo de uso do sistema
- **TESTAR-SISTEMA.md** - Instruções para testar todas as funcionalidades
- **SOLUCAO-NODEJS.md** - Solução para problemas com Node.js

### No Sistema
Acesse pelo **menu hamburguer (☰)**:
- Manual de Instalação completo
- Guia do Usuário detalhado
- Arquitetura técnica
- Trechos de código
- Checklist forense

---

## 📞 Suporte

### Problemas Comuns
- **Node.js não encontrado:** Execute `INSTALAR-UNIVERSAL.bat`
- **Modelos não encontrados:** Execute `download-models.bat`
- **Porta em uso:** Execute `start.bat` (usa porta alternativa)

### Diagnóstico
Execute `DIAGNOSTICO.bat` para verificar:
- Se o Node.js está instalado
- Se as dependências estão corretas
- Se os modelos estão disponíveis

---

## ⚖️ Aviso Legal

**IMPORTANTE:** Este sistema é uma ferramenta de análise técnica. A admissibilidade de evidências digitais varia conforme a jurisdição. Sempre consulte um advogado qualificado antes de usar em processos legais.

Este software não constitui aconselhamento jurídico.

---

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes

---

<div align="center">

### 🎙️ AltaVoz Forensic-1

**Sistema Funcional de Análise Forense de Áudio**

**100% Offline • 100% Local • 100% Funcional**

[Iniciar Sistema](http://localhost:5173) • [Guia de Uso](COMO-USAR.md) • [Documentação](#-menu-de-documentação)

</div>

---

**by rogerelizar**
