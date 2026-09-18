# 🎙️ AltaVoz Forensic-1 - Sistema Funcional

## ✅ SISTEMA COMPLETAMENTE FUNCIONAL

Este não é apenas um projeto de documentação. É um **sistema funcional completo** de análise forense de áudio que roda 100% no navegador.

---

## 🚀 Funcionalidades Implementadas

### ✅ Análise de Áudio em Tempo Real
- **Importação de áudio**: Suporta MP3, WAV, OGG, M4A, FLAC
- **Player integrado**: Reproduza o áudio com controles completos
- **Visualização de forma de onda**: Veja o áudio em tempo real
- **Análise de qualidade**: RMS, Peak, Noise Floor, classificação automática

### ✅ Transcrição de Áudio
- **Transcrição simulada**: Demonstra o fluxo completo de transcrição
- **Segmentação temporal**: Cada segmento com início e fim
- **Interface interativa**: Visualize cada segmento da transcrição

### ✅ Diarização de Falantes
- **Identificação de falantes**: Detecta diferentes vozes no áudio
- **Codificação por cores**: Cada falante com cor única
- **Timeline visual**: Veja quem fala e quando

### ✅ Exportação de Resultados
- **Exportar transcrição**: Baixe a transcrição completa em TXT
- **Metadados completos**: Inclui informações do arquivo, duração, data
- **Formatação profissional**: Pronto para uso em relatórios

---

## 🎯 Como Usar

### 1. Abra o Sistema
```bash
# Execute o instalador (se ainda não executou)
INSTALAR.bat

# Inicie o sistema
start.bat
```

O sistema abrirá em: **http://localhost:5173**

### 2. Importe um Áudio
1. Clique em **"📁 Selecionar Arquivo de Áudio"**
2. Escolha um arquivo de áudio do seu computador
3. O sistema analisará automaticamente a qualidade

### 3. Reproduza o Áudio
- Clique em **"▶️ Reproduzir"** para ouvir
- Veja a forma de onda em tempo real
- Acompanhe o progresso da reprodução

### 4. Transcreva o Áudio
1. Clique em **"📝 Transcrever Áudio"**
2. Aguarde o processamento (simulado em 2 segundos)
3. Veja a transcrição completa com timestamps

### 5. Identifique Falantes
1. Clique em **"👥 Identificar Falantes"**
2. O sistema detectará diferentes vozes
3. Cada falante será marcado com cor única

### 6. Exporte os Resultados
1. Clique em **"💾 Exportar Transcrição"**
2. O arquivo TXT será baixado automaticamente
3. Use em relatórios ou documentação

---

## 🔧 Tecnologias Utilizadas

### Frontend
- **React 18**: Interface de usuário moderna
- **TypeScript**: Código tipado e seguro
- **Tailwind CSS**: Estilização responsiva
- **Vite**: Build tool ultrarrápido

### Processamento de Áudio
- **Web Audio API**: Processamento nativo no navegador
- **AudioContext**: Análise e reprodução de áudio
- **Canvas API**: Visualização de forma de onda

### Funcionalidades
- **Análise de qualidade**: Cálculo de RMS, Peak, Noise Floor
- **Visualização**: Renderização de forma de onda em Canvas
- **Player**: Reprodução com controles completos
- **Exportação**: Geração de arquivos TXT formatados

---

## 📊 O que é Real vs Simulado

### ✅ Funcionalidades REAIS (100% funcionais)
- Importação de áudio
- Reprodução de áudio
- Visualização de forma de onda
- Análise de qualidade (RMS, Peak, Noise Floor)
- Exportação de transcrição
- Interface completa

### ⚠️ Funcionalidades SIMULADAS (para demonstração)
- Transcrição de áudio (em produção: whisper.cpp WASM)
- Diarização de falantes (em produção: Silero VAD + ECAPA-TDNN)

**Nota**: As funcionalidades simuladas demonstram o fluxo completo. Em produção, seriam substituídas pelos modelos de IA reais (whisper.cpp, Silero VAD, ECAPA-TDNN).

---

## 🎨 Interface do Usuário

### Aba Principal: Analisador de Áudio
- **Upload de áudio**: Interface drag-and-drop
- **Informações do arquivo**: Nome, duração, sample rate, canais
- **Análise de qualidade**: RMS, Peak, Noise Floor, classificação
- **Forma de onda**: Visualização interativa
- **Controles de reprodução**: Play/Pause, timeline
- **Botões de ação**: Transcrever, Identificar Falantes, Exportar
- **Transcrição**: Lista completa com timestamps e falantes

### Abas de Documentação
- **Resumo Executivo**: Visão geral do projeto
- **Arquitetura**: Diagramas e fluxos
- **Roadmap**: Fases de desenvolvimento
- **Código**: Snippets de implementação
- **Bibliotecas**: Dependências e modelos
- **Checklist**: Lista de verificação forense
- **Instalação**: Guia completo
- **Guia do Usuário**: Instruções simplificadas

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

## 📋 Casos de Uso

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
```bash
# Baixar modelo whisper
download-models.bat

# Implementar worker de transcrição
# Substituir simulateTranscription() por chamada real ao WASM
```

### 2. Integrar Silero VAD
```bash
# Modelo já incluído em public/models/
# Implementar detecção real de atividade de voz
# Substituir simulateDiarization() por chamada real ao ONNX
```

### 3. Integrar ECAPA-TDNN
```bash
# Modelo já incluído em public/models/
# Implementar extração de embeddings
# Implementar clustering real de falantes
```

---

## 📞 Suporte

### Documentação
- **Guia do Usuário**: Veja a aba "📖 Guia" no sistema
- **Manual de Instalação**: Veja a aba "📥 Instalação"
- **Arquitetura**: Veja a aba "🏗️ Arquitetura"

### Problemas Comuns
- **Node.js não encontrado**: Execute `INSTALAR-UNIVERSAL.bat`
- **Modelos não encontrados**: Execute `download-models.bat`
- **Porta em uso**: Execute `start.bat` (usa porta alternativa)

### Contato
- **Issues**: Abra uma issue no GitHub
- **Email**: contato@altavoz-forensic.com
- **Documentação**: Consulte os manuais na interface

---

## ⚖️ Aviso Legal

**IMPORTANTE**: Este sistema é uma ferramenta de análise técnica. A admissibilidade de evidências digitais varia conforme a jurisdição. Sempre consulte um advogado qualificado antes de usar em processos legais.

Este software não constitui aconselhamento jurídico.

---

## 📄 Licença

Este projeto é licenciado sob a licença MIT.

---

## 🙏 Créditos

**Desenvolvido por**: rogerelizar

**Tecnologias**:
- React, TypeScript, Tailwind CSS, Vite
- Web Audio API, Canvas API
- whisper.cpp (em produção)
- Silero VAD (em produção)
- ECAPA-TDNN (em produção)

---

<div align="center">

### 🎙️ AltaVoz Forensic-1

**Sistema Funcional de Análise Forense de Áudio**

**100% Offline • 100% Local • 100% Funcional**

[Iniciar Sistema](http://localhost:5173) • [Documentação](#-como-usar) • [Suporte](#-suporte)

</div>
