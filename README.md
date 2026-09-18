# 🎙️ AltaVoz Forensic-1

**Plataforma de Inteligência de Áudio Forense - Offline-First**

Sistema profissional para transcrição, diarização de falantes e análise forense de áudio, com cadeia de custódia criptográfica e processamento 100% local.

---

## 🚀 Instalação Rápida (3 Passos)

### Windows

```bash
# 1. Instalar o sistema
install.bat

# 2. Baixar modelos de IA
download-models.bat

# 3. Iniciar o programa
start.bat
```

### Linux / macOS

```bash
# 1. Instalar o sistema
chmod +x install.sh
./install.sh

# 2. Baixar modelos de IA
chmod +x download-models.sh
./download-models.sh

# 3. Iniciar o programa
chmod +x start.sh
./start.sh
```

**Pronto!** O programa será aberto em: **http://localhost:5173**

---

## 📋 Scripts Disponíveis

| Script | Função | Quando Usar |
|--------|--------|-------------|
| `install.bat` / `install.sh` | Instalação completa | Primeira vez |
| `download-models.bat` / `download-models.sh` | Baixar modelos de IA | Após instalação |
| `start.bat` / `start.sh` | Iniciar o programa | Uso diário |
| `verify.bat` / `verify.sh` | Verificar instalação | Solução de problemas |

---

## 📖 Guia do Usuário

### O que o AltaVoz faz?

O AltaVoz Forensic-1 é um programa que ajuda a analisar gravações de áudio de forma segura e profissional:

- ✓ **Transcreve** o que é dito em gravações (transforma fala em texto)
- ✓ **Identifica** quem está falando em cada momento
- ✓ **Melhora** a qualidade do áudio para facilitar a compreensão
- ✓ **Garante** que o áudio original não seja alterado
- ✓ **Registra** tudo que foi feito com o áudio

### Como Usar

1. **Abra o programa** executando `start.bat` (Windows) ou `./start.sh` (Linux/macOS)
2. **Importe um áudio** clicando em "Importar Áudio"
3. **Transcreva** clicando em "Transcrever"
4. **Identifique falantes** clicando em "Identificar Falantes"
5. **Exporte os resultados** quando terminar

### Dicas Importantes

- ✓ **Salve seu trabalho** frequentemente
- ✓ **Use fones de ouvido** para ouvir detalhes
- ✓ **Verifique a transcrição** e corrija erros
- ✓ **Mantenha o áudio original** - nunca apague
- ✓ **Anote suas observações** durante a análise

---

## 🔧 Solução de Problemas

### "Node.js não encontrado"

**Solução:**
1. Execute `install.bat` (Windows) ou `./install.sh` (Linux/macOS)
2. O instalador vai abrir o site do Node.js automaticamente
3. Baixe e instale o Node.js
4. Execute o instalador novamente

### "Modelos não encontrados"

**Solução:**
```bash
# Windows
download-models.bat

# Linux/macOS
./download-models.sh
```

### "Porta 5173 já está em uso"

**Solução:**
```bash
npm run dev -- --port 3000
```

### Verificação Completa

Execute o script de verificação:
```bash
# Windows
verify.bat

# Linux/macOS
./verify.sh
```

---

## 📊 Requisitos do Sistema

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

---

## 🏗️ Arquitetura

### Pilares do Sistema

1. **Criptografia e Integridade**
   - AES-256-GCM para criptografia
   - Argon2id para derivação de chaves
   - SHA-256 + HMAC para cadeia de hash

2. **DSP e Diarização**
   - Silero VAD para detecção de voz
   - ECAPA-TDNN para embeddings de falantes
   - Filtros forenses avançados

3. **ASR Local**
   - whisper.cpp WASM para transcrição
   - Modelos ggml (Tiny, Base, Small)
   - Processamento 100% local

4. **UI/UX Forense**
   - Espectrograma com paletas daltônicas
   - Timeline de falantes
   - WCAG 2.1 AA compliance

---

## 🔒 Segurança e Privacidade

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

## 📦 Modelos de IA

| Modelo | Tamanho | Função |
|--------|---------|--------|
| Silero VAD | 2 MB | Detecção de atividade de voz |
| Whisper Tiny | 75 MB | Transcrição rápida |
| Whisper Base | 142 MB | Transcrição multilíngue |

**Total:** ~220 MB (download único)

---

## 💻 Comandos Avançados

```bash
# Instalação completa
npm install

# Download de modelos
npm run download-models

# Iniciar em modo desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Visualizar build de produção
npm run preview

# Executar testes
npm run test

# Verificar qualidade do código
npm run lint
```

---

## 📄 Licença

Este projeto é licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter pull requests.

---

## 📞 Suporte

Para dúvidas, problemas ou sugestões:

- **Documentação**: Consulte os manuais na interface do programa
- **Verificação**: Execute `verify.bat` ou `./verify.sh`
- **Issues**: Abra uma issue no GitHub

---

## ⚖️ Aviso Legal

**IMPORTANTE**: Este documento fornece apenas orientação técnica. A admissibilidade de evidências digitais varia conforme a jurisdição. Revisão jurídica por counsel qualificado é necessária antes da implantação em qualquer processo legal. Isto não constitui aconselhamento jurídico.

---

## 🙏 Agradecimentos

- **OpenAI** pelo modelo Whisper
- **Silero** pelo modelo VAD
- **Comunidade whisper.cpp** pela implementação WASM
- **ONNX Runtime** pela infraestrutura de inferência

---

**by rogerelizar**

---

<div align="center">

**AltaVoz Forensic-1** | Inteligência de Áudio Forense | Offline-First | Zero Egress

[Instalação](#-instalação-rápida-3-passos) • [Guia do Usuário](#-guia-do-usuário) • [Arquitetura](#-arquitetura)

</div>
