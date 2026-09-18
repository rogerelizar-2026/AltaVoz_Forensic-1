#!/bin/bash
# ============================================================
# AltaVoz Forensic-1 - Download de Modelos de IA (Linux/macOS)
# ============================================================

set -e

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""
echo -e "${NC}    🧠 AltaVoz Forensic-1 - Download de Modelos IA${NC}"
echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ ERRO: Execute este script na pasta raiz do projeto!${NC}"
    exit 1
fi

# Criar diretório de modelos
mkdir -p public/models

echo -e "${NC}Os modelos serão baixados para: public/models/${NC}"
echo -e "${NC}Espaço necessário: ~700MB${NC}"
echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${NC}  MODELOS QUE SERÃO BAIXADOS:${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${NC}  1. Silero VAD (2MB) - Detecção de atividade de voz${NC}"
echo -e "${NC}  2. Whisper Tiny (75MB) - Transcrição rápida${NC}"
echo -e "${NC}  3. Whisper Base (142MB) - Transcrição multilíngue${NC}"
echo ""
echo -e "${NC}  Total: ~220MB${NC}"
echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
read -p "Deseja continuar? (S/N): " CONFIRM

if [[ ! "$CONFIRM" =~ ^[Ss]$ ]]; then
    echo "Download cancelado."
    exit 0
fi

echo ""
echo -e "${BLUE}==========================================================${NC}"
echo -e "${NC}  [1/3] Baixando Silero VAD (2MB)...${NC}"
echo -e "${BLUE}==========================================================${NC}"
echo ""

if [ -f "public/models/silero_vad.onnx" ]; then
    echo -e "${GREEN}✓ Silero VAD já existe. Pulando...${NC}"
else
    echo "Baixando..."
    curl -L -o "public/models/silero_vad.onnx" \
        "https://models.silero.ai/models/en/vad_v5/silero_vad.onnx" \
        --progress-bar
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Erro ao baixar Silero VAD!${NC}"
        echo "Tente novamente ou baixe manualmente:"
        echo "https://models.silero.ai/models/en/vad_v5/silero_vad.onnx"
    else
        echo -e "${GREEN}✓ Silero VAD baixado com sucesso!${NC}"
    fi
fi

echo ""
echo -e "${BLUE}==========================================================${NC}"
echo -e "${NC}  [2/3] Baixando Whisper Tiny (75MB)...${NC}"
echo -e "${BLUE}==========================================================${NC}"
echo ""

if [ -f "public/models/ggml-tiny.bin" ]; then
    echo -e "${GREEN}✓ Whisper Tiny já existe. Pulando...${NC}"
else
    echo "Baixando..."
    curl -L -o "public/models/ggml-tiny.bin" \
        "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin" \
        --progress-bar
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Erro ao baixar Whisper Tiny!${NC}"
        echo "Tente novamente ou baixe manualmente:"
        echo "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin"
    else
        echo -e "${GREEN}✓ Whisper Tiny baixado com sucesso!${NC}"
    fi
fi

echo ""
echo -e "${BLUE}==========================================================${NC}"
echo -e "${NC}  [3/3] Baixando Whisper Base (142MB)...${NC}"
echo -e "${BLUE}==========================================================${NC}"
echo ""

if [ -f "public/models/ggml-base.bin" ]; then
    echo -e "${GREEN}✓ Whisper Base já existe. Pulando...${NC}"
else
    echo "Baixando... Este arquivo é maior e pode demorar..."
    curl -L -o "public/models/ggml-base.bin" \
        "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin" \
        --progress-bar
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Erro ao baixar Whisper Base!${NC}"
        echo "Tente novamente ou baixe manualmente:"
        echo "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin"
    else
        echo -e "${GREEN}✓ Whisper Base baixado com sucesso!${NC}"
    fi
fi

echo ""
echo -e "${BLUE}==========================================================${NC}"
echo -e "${NC}  Verificando modelos...${NC}"
echo -e "${BLUE}==========================================================${NC}"
echo ""

ALL_OK=true

if [ -f "public/models/silero_vad.onnx" ]; then
    echo -e "${GREEN}✓ Silero VAD OK${NC}"
else
    echo -e "${RED}✗ Silero VAD NÃO ENCONTRADO${NC}"
    ALL_OK=false
fi

if [ -f "public/models/ggml-tiny.bin" ]; then
    echo -e "${GREEN}✓ Whisper Tiny OK${NC}"
else
    echo -e "${RED}✗ Whisper Tiny NÃO ENCONTRADO${NC}"
    ALL_OK=false
fi

if [ -f "public/models/ggml-base.bin" ]; then
    echo -e "${GREEN}✓ Whisper Base OK${NC}"
else
    echo -e "${RED}✗ Whisper Base NÃO ENCONTRADO${NC}"
    ALL_OK=false
fi

echo ""

if [ "$ALL_OK" = true ]; then
    echo -e "${BLUE}==========================================================${NC}"
    echo ""
    echo -e "${GREEN}    ✅ TODOS OS MODELOS BAIXADOS COM SUCESSO!${NC}"
    echo ""
    echo -e "${BLUE}==========================================================${NC}"
    echo ""
    echo -e "${NC}O AltaVoz Forensic-1 está pronto para uso!${NC}"
    echo ""
    echo -e "${NC}Para iniciar, execute:${NC}"
    echo ""
    echo -e "${GREEN}  npm run dev${NC}"
    echo ""
    echo -e "${NC}O programa será aberto em: ${GREEN}http://localhost:5173${NC}"
    echo ""
else
    echo -e "${BLUE}==========================================================${NC}"
    echo ""
    echo -e "${YELLOW}    ⚠️  ALGUNS MODELOS NÃO FORAM BAIXADOS${NC}"
    echo ""
    echo -e "${BLUE}==========================================================${NC}"
    echo ""
    echo -e "${NC}Verifique sua conexão com a internet e tente novamente.${NC}"
    echo ""
    echo -e "${NC}Ou baixe manualmente os arquivos faltantes e coloque em:${NC}"
    echo -e "${GREEN}  public/models/${NC}"
    echo ""
fi

echo -e "${BLUE}==========================================================${NC}"
echo ""
echo -e "${NC}by rogerelizar${NC}"
echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""
