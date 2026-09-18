#!/bin/bash
# ============================================================
# AltaVoz Forensic-1 - Instalador Automático (Linux/macOS)
# ============================================================
# Este script instala todas as dependências necessárias
# e configura o ambiente para uso do AltaVoz Forensic-1.
# ============================================================

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo -e "${BLUE}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                                                          ║${NC}"
echo -e "${BLUE}║     🎙️  AltaVoz Forensic-1 - Instalador Automático       ║${NC}"
echo -e "${BLUE}║                                                          ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erro: Execute este script no diretório do projeto.${NC}"
    echo "   Certifique-se de estar na pasta altavoz-forensic-1/"
    exit 1
fi

# Função para verificar comandos
check_command() {
    if command -v "$1" &> /dev/null; then
        echo -e "${GREEN}✓${NC} $1 encontrado"
        return 0
    else
        echo -e "${RED}✗${NC} $1 não encontrado"
        return 1
    fi
}

# Função para instalar Node.js
install_node() {
    echo ""
    echo -e "${YELLOW}📦 Instalando Node.js...${NC}"
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command -v brew &> /dev/null; then
            brew install node@20
            brew link --overwrite node@20
        else
            echo -e "${RED}❌ Homebrew não encontrado. Instale em: https://brew.sh${NC}"
            exit 1
        fi
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        if command -v apt-get &> /dev/null; then
            curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
            sudo apt-get install -y nodejs
        elif command -v yum &> /dev/null; then
            curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
            sudo yum install -y nodejs
        else
            echo -e "${RED}❌ Gerenciador de pacotes não suportado.${NC}"
            echo "   Instale Node.js manualmente em: https://nodejs.org"
            exit 1
        fi
    fi
}

# Passo 1: Verificar Node.js
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Passo 1/5: Verificando Node.js${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

if ! check_command node; then
    install_node
fi

NODE_VERSION=$(node --version 2>/dev/null || echo "none")
echo -e "${GREEN}  Versão: ${NODE_VERSION}${NC}"

# Passo 2: Verificar npm
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Passo 2/5: Verificando npm${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

if ! check_command npm; then
    echo -e "${RED}❌ npm não encontrado. Reinstale o Node.js.${NC}"
    exit 1
fi

NPM_VERSION=$(npm --version 2>/dev/null || echo "none")
echo -e "${GREEN}  Versão: ${NPM_VERSION}${NC}"

# Passo 3: Instalar dependências do projeto
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Passo 3/5: Instalando dependências do projeto${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${YELLOW}  Isso pode levar alguns minutos...${NC}"
echo ""

npm install

echo ""
echo -e "${GREEN}✓ Dependências instaladas com sucesso!${NC}"

# Passo 4: Criar diretórios necessários
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Passo 4/5: Criando estrutura de diretórios${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

mkdir -p public/models
mkdir -p public/wasm
mkdir -p data/cases
mkdir -p data/exports

echo -e "${GREEN}✓ Diretórios criados!${NC}"

# Passo 5: Verificar build
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Passo 5/5: Verificando build${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

npm run build

echo ""
echo -e "${GREEN}✓ Build concluído com sucesso!${NC}"

# Resumo
echo ""
echo -e "${BLUE}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                                                          ║${NC}"
echo -e "${BLUE}║     ✅ Instalação concluída com sucesso!                 ║${NC}"
echo -e "${BLUE}║                                                          ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}Para iniciar o AltaVoz Forensic-1, execute:${NC}"
echo ""
echo -e "  ${YELLOW}npm run dev${NC}"
echo ""
echo -e "O programa estará disponível em: ${BLUE}http://localhost:5173${NC}"
echo ""
echo -e "${GREEN}Comandos úteis:${NC}"
echo -e "  ${YELLOW}npm run dev${NC}          - Iniciar o programa"
echo -e "  ${YELLOW}npm run build${NC}        - Criar versão para produção"
echo -e "  ${YELLOW}npm run preview${NC}      - Visualizar versão de produção"
echo ""
echo -e "by rogerelizar"
echo ""
