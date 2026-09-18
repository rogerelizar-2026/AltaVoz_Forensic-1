#!/bin/bash
# ============================================================
# AltaVoz Forensic-1 - Iniciar Programa
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
echo -e "${NC}    🎙️  Iniciando AltaVoz Forensic-1...${NC}"
echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ ERRO: Execute este script na pasta raiz do projeto!${NC}"
    exit 1
fi

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}⚠️  Dependências não instaladas!${NC}"
    echo ""
    echo "Executando npm install..."
    echo ""
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Erro ao instalar dependências!${NC}"
        exit 1
    fi
fi

# Verificar se modelos existem
MODELS_OK=true
[ ! -f "public/models/silero_vad.onnx" ] && MODELS_OK=false
[ ! -f "public/models/ggml-tiny.bin" ] && MODELS_OK=false
[ ! -f "public/models/ggml-base.bin" ] && MODELS_OK=false

if [ "$MODELS_OK" = false ]; then
    echo -e "${YELLOW}⚠️  Modelos de IA não encontrados!${NC}"
    echo ""
    read -p "Deseja baixar os modelos agora? (S/N): " BAIXAR
    if [[ "$BAIXAR" =~ ^[Ss]$ ]]; then
        ./download-models.sh
    else
        echo ""
        echo -e "${YELLOW}⚠️  O programa pode não funcionar corretamente sem os modelos!${NC}"
        echo ""
    fi
fi

echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""
echo -e "${NC}    🚀 Iniciando servidor de desenvolvimento...${NC}"
echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""
echo "O programa será aberto em: http://localhost:5173"
echo ""
echo "Para parar o servidor, pressione Ctrl+C"
echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""

npm run dev
