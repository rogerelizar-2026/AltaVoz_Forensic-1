#!/bin/bash
# ============================================================
# AltaVoz Forensic-1 - Verificação Pós-Instalação
# ============================================================

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""
echo -e "${NC}    🔍 AltaVoz Forensic-1 - Verificação do Sistema${NC}"
echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""

# Verificar Node.js
echo "Verificando Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✓ Node.js: ${NODE_VERSION}${NC}"
    NODE_OK=true
else
    echo -e "${RED}❌ Node.js NÃO ENCONTRADO${NC}"
    NODE_OK=false
fi

# Verificar npm
echo "Verificando npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo -e "${GREEN}✓ npm: ${NPM_VERSION}${NC}"
    NPM_OK=true
else
    echo -e "${RED}❌ npm NÃO ENCONTRADO${NC}"
    NPM_OK=false
fi

# Verificar dependências
echo "Verificando dependências..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓ Dependências instaladas${NC}"
    DEPS_OK=true
else
    echo -e "${RED}❌ Dependências NÃO instaladas${NC}"
    echo "   Execute: npm install"
    DEPS_OK=false
fi

# Verificar modelos
echo "Verificando modelos de IA..."
MODELS_OK=true

if [ -f "public/models/silero_vad.onnx" ]; then
    echo -e "${GREEN}✓ Silero VAD${NC}"
else
    echo -e "${RED}❌ Silero VAD NÃO ENCONTRADO${NC}"
    MODELS_OK=false
fi

if [ -f "public/models/ggml-tiny.bin" ]; then
    echo -e "${GREEN}✓ Whisper Tiny${NC}"
else
    echo -e "${RED}❌ Whisper Tiny NÃO ENCONTRADO${NC}"
    MODELS_OK=false
fi

if [ -f "public/models/ggml-base.bin" ]; then
    echo -e "${GREEN}✓ Whisper Base${NC}"
else
    echo -e "${RED}❌ Whisper Base NÃO ENCONTRADO${NC}"
    MODELS_OK=false
fi

# Verificar build
echo "Verificando build..."
if [ -f "dist/index.html" ]; then
    echo -e "${GREEN}✓ Build presente${NC}"
    BUILD_OK=true
else
    echo -e "${RED}❌ Build NÃO encontrado${NC}"
    echo "   Execute: npm run build"
    BUILD_OK=false
fi

echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""

if [ "$NODE_OK" = true ] && [ "$NPM_OK" = true ] && [ "$DEPS_OK" = true ] && [ "$MODELS_OK" = true ] && [ "$BUILD_OK" = true ]; then
    echo -e "${GREEN}    ✅ SISTEMA PRONTO PARA USO!${NC}"
    echo ""
    echo "Para iniciar, execute:"
    echo ""
    echo -e "${GREEN}  npm run dev${NC}"
    echo ""
    echo "O programa será aberto em: http://localhost:5173"
else
    echo -e "${YELLOW}    ⚠️  SISTEMA INCOMPLETO${NC}"
    echo ""
    echo "Execute os seguintes comandos para completar:"
    echo ""
    if [ "$DEPS_OK" = false ]; then echo "  1. npm install"; fi
    if [ "$MODELS_OK" = false ]; then echo "  2. ./download-models.sh"; fi
    if [ "$BUILD_OK" = false ]; then echo "  3. npm run build"; fi
fi

echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""
echo -e "${NC}by rogerelizar${NC}"
echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""
