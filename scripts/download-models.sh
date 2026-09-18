#!/bin/bash
# ============================================================
# AltaVoz Forensic-1 - Download de Modelos de IA
# ============================================================
# Este script baixa os modelos de inteligência artificial
# necessários para o funcionamento do AltaVoz Forensic-1.
# ============================================================

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo -e "${BLUE}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                                                          ║${NC}"
echo -e "${BLUE}║     🧠 AltaVoz Forensic-1 - Download de Modelos IA       ║${NC}"
echo -e "${BLUE}║                                                          ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""

MODELS_DIR="public/models"
mkdir -p "$MODELS_DIR"

echo -e "${YELLOW}Os modelos serão baixados para: ${MODELS_DIR}/${NC}"
echo -e "${YELLOW}Espaço necessário: ~700MB${NC}"
echo ""
read -p "Deseja continuar? (s/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "Download cancelado."
    exit 0
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Baixando modelo Silero VAD (2MB)...${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Silero VAD - Detecção de atividade de voz
if [ ! -f "$MODELS_DIR/silero_vad.onnx" ]; then
    curl -L -o "$MODELS_DIR/silero_vad.onnx" \
        "https://models.silero.ai/models/en/vad_v5/silero_vad.onnx" \
        --progress-bar
    echo -e "${GREEN}✓ Silero VAD baixado!${NC}"
else
    echo -e "${YELLOW}⚠ Silero VAD já existe. Pulando...${NC}"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Baixando modelo Whisper Tiny (75MB)...${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Whisper Tiny - Transcrição básica
if [ ! -f "$MODELS_DIR/ggml-tiny.bin" ]; then
    curl -L -o "$MODELS_DIR/ggml-tiny.bin" \
        "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin" \
        --progress-bar
    echo -e "${GREEN}✓ Whisper Tiny baixado!${NC}"
else
    echo -e "${YELLOW}⚠ Whisper Tiny já existe. Pulando...${NC}"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Baixando modelo Whisper Base (142MB)...${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Whisper Base - Transcrição multilíngue
if [ ! -f "$MODELS_DIR/ggml-base.bin" ]; then
    curl -L -o "$MODELS_DIR/ggml-base.bin" \
        "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin" \
        --progress-bar
    echo -e "${GREEN}✓ Whisper Base baixado!${NC}"
else
    echo -e "${YELLOW}⚠ Whisper Base já existe. Pulando...${NC}"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Verificando integridade dos modelos...${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Verificar se todos os arquivos foram baixados
ALL_OK=true

if [ ! -f "$MODELS_DIR/silero_vad.onnx" ]; then
    echo -e "${RED}✗ Silero VAD não encontrado!${NC}"
    ALL_OK=false
else
    echo -e "${GREEN}✓ Silero VAD OK${NC}"
fi

if [ ! -f "$MODELS_DIR/ggml-tiny.bin" ]; then
    echo -e "${RED}✗ Whisper Tiny não encontrado!${NC}"
    ALL_OK=false
else
    echo -e "${GREEN}✓ Whisper Tiny OK${NC}"
fi

if [ ! -f "$MODELS_DIR/ggml-base.bin" ]; then
    echo -e "${RED}✗ Whisper Base não encontrado!${NC}"
    ALL_OK=false
else
    echo -e "${GREEN}✓ Whisper Base OK${NC}"
fi

echo ""

if [ "$ALL_OK" = true ]; then
    echo -e "${BLUE}╔══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║                                                          ║${NC}"
    echo -e "${BLUE}║     ✅ Todos os modelos foram baixados com sucesso!      ║${NC}"
    echo -e "${BLUE}║                                                          ║${NC}"
    echo -e "${BLUE}╚══════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${GREEN}Modelos instalados:${NC}"
    echo -e "  • Silero VAD (detecção de voz)"
    echo -e "  • Whisper Tiny (transcrição rápida)"
    echo -e "  • Whisper Base (transcrição multilíngue)"
    echo ""
    echo -e "${YELLOW}Para usar o modelo Whisper Small (mais preciso, 466MB):${NC}"
    echo -e "  Execute: ${BLUE}bash scripts/download-model-small.sh${NC}"
    echo ""
else
    echo -e "${RED}❌ Alguns modelos não foram baixados corretamente.${NC}"
    echo -e "${YELLOW}Verifique sua conexão com a internet e tente novamente.${NC}"
    exit 1
fi

echo ""
echo -e "by rogerelizar"
echo ""
