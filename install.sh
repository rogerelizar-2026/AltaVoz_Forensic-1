#!/bin/bash
# ============================================================
# AltaVoz Forensic-1 - Instalador Unificado (Linux/macOS)
# ============================================================
# Este é o ÚNICO arquivo que você precisa executar
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
echo -e "${NC}    🎙️  AltaVoz Forensic-1 - Instalador${NC}"
echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ ERRO: Arquivo package.json não encontrado!${NC}"
    echo ""
    echo "Este script deve ser executado na pasta raiz do projeto."
    echo "Certifique-se de estar na pasta: altavoz-forensic-1/"
    echo ""
    echo "Dica: Navegue até a pasta correta no Terminal:"
    echo "  cd /caminho/para/altavoz-forensic-1"
    echo ""
    exit 1
fi

echo -e "${GREEN}✓ Diretório correto detectado${NC}"
echo ""

# Função para instalar Node.js
install_node() {
    echo ""
    echo -e "${YELLOW}📦 Instalando Node.js...${NC}"
    echo ""
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command -v brew &> /dev/null; then
            echo "Usando Homebrew..."
            brew install node@20
            brew link --overwrite node@20
        else
            echo -e "${RED}❌ Homebrew não encontrado.${NC}"
            echo ""
            echo "Instale o Homebrew primeiro:"
            echo "  /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
            echo ""
            echo "Ou baixe o Node.js manualmente:"
            echo "  https://nodejs.org/pt-br/download"
            exit 1
        fi
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        if command -v apt-get &> /dev/null; then
            echo "Usando apt..."
            curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
            sudo apt-get install -y nodejs
        elif command -v yum &> /dev/null; then
            echo "Usando yum..."
            curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
            sudo yum install -y nodejs
        elif command -v dnf &> /dev/null; then
            echo "Usando dnf..."
            curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
            sudo dnf install -y nodejs
        else
            echo -e "${RED}❌ Gerenciador de pacotes não suportado.${NC}"
            echo ""
            echo "Instale o Node.js manualmente:"
            echo "  https://nodejs.org/pt-br/download"
            exit 1
        fi
    else
        echo -e "${RED}❌ Sistema operacional não suportado.${NC}"
        echo ""
        echo "Instale o Node.js manualmente:"
        echo "  https://nodejs.org/pt-br/download"
        exit 1
    fi
}

# Passo 1: Verificar Node.js
echo -e "${BLUE}==========================================================${NC}"
echo -e "${NC}  Passo 1/5: Verificando Node.js${NC}"
echo -e "${BLUE}==========================================================${NC}"
echo ""

if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js NÃO ENCONTRADO!${NC}"
    echo ""
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${NC}  O Node.js é necessário para executar o AltaVoz${NC}"
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    read -p "Deseja que eu instale o Node.js automaticamente? (S/N): " RESPOSTA
    
    if [[ "$RESPOSTA" =~ ^[Ss]$ ]]; then
        install_node
    else
        echo ""
        echo "Ok. Para instalar o Node.js manualmente:"
        echo ""
        echo "  1. Acesse: https://nodejs.org/pt-br/download"
        echo "  2. Baixe a versão LTS"
        echo "  3. Instale seguindo as instruções do seu sistema"
        echo "  4. Após instalar, execute este script novamente"
        echo ""
        exit 0
    fi
fi

NODE_VERSION=$(node --version)
echo -e "${GREEN}✓ Node.js encontrado: ${NODE_VERSION}${NC}"
echo ""

# Passo 2: Verificar npm
echo -e "${BLUE}==========================================================${NC}"
echo -e "${NC}  Passo 2/5: Verificando npm${NC}"
echo -e "${BLUE}==========================================================${NC}"
echo ""

if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm NÃO ENCONTRADO!${NC}"
    echo ""
    echo "O npm vem junto com o Node.js."
    echo "Por favor, reinstale o Node.js:"
    echo "  https://nodejs.org/pt-br/download"
    echo ""
    exit 1
fi

NPM_VERSION=$(npm --version)
echo -e "${GREEN}✓ npm encontrado: versão ${NPM_VERSION}${NC}"
echo ""

# Passo 3: Instalar dependências
echo -e "${BLUE}==========================================================${NC}"
echo -e "${NC}  Passo 3/5: Instalando dependências do projeto${NC}"
echo -e "${BLUE}==========================================================${NC}"
echo ""
echo -e "${YELLOW}  Isso pode levar alguns minutos...${NC}"
echo -e "${YELLOW}  Aguarde, por favor.${NC}"
echo ""

npm install

if [ $? -ne 0 ]; then
    echo ""
    echo -e "${RED}❌ ERRO ao instalar dependências!${NC}"
    echo ""
    echo "Possíveis causas:"
    echo "  - Conexão com a internet instável"
    echo "  - Problemas de permissão no disco"
    echo "  - Espaço insuficiente em disco"
    echo ""
    echo "Tente executar novamente ou consulte o manual."
    echo ""
    exit 1
fi

echo ""
echo -e "${GREEN}✓ Dependências instaladas com sucesso!${NC}"
echo ""

# Passo 4: Criar diretórios
echo -e "${BLUE}==========================================================${NC}"
echo -e "${NC}  Passo 4/5: Criando estrutura de diretórios${NC}"
echo -e "${BLUE}==========================================================${NC}"
echo ""

mkdir -p public/models
mkdir -p public/wasm
mkdir -p data/cases
mkdir -p data/exports

echo -e "${GREEN}✓ Diretórios criados!${NC}"
echo ""

# Passo 5: Verificar build
echo -e "${BLUE}==========================================================${NC}"
echo -e "${NC}  Passo 5/5: Verificando build${NC}"
echo -e "${BLUE}==========================================================${NC}"
echo ""

npm run build

if [ $? -ne 0 ]; then
    echo ""
    echo -e "${RED}❌ ERRO ao criar build!${NC}"
    echo ""
    echo "Verifique se todas as dependências foram instaladas."
    echo ""
    exit 1
fi

echo ""
echo -e "${GREEN}✓ Build concluído com sucesso!${NC}"
echo ""

# Resumo
echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""
echo -e "${GREEN}    ✅ INSTALAÇÃO CONCLUÍDA COM SUCESSO!${NC}"
echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${NC}  PRÓXIMOS PASSOS:${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${NC}  1. BAIXAR MODELOS DE IA (necessário para funcionar)${NC}"
echo ""
echo -e "${NC}     Execute o arquivo:${NC}"
echo -e "${GREEN}       ./download-models.sh${NC}"
echo ""
echo -e "${NC}  2. INICIAR O PROGRAMA${NC}"
echo ""
echo -e "${NC}     Execute o comando:${NC}"
echo -e "${GREEN}       npm run dev${NC}"
echo ""
echo -e "${NC}     O programa será aberto no navegador em:${NC}"
echo -e "${GREEN}       http://localhost:5173${NC}"
echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
read -p "Deseja baixar os modelos de IA agora? (S/N): " BAIXAR_MODELOS

if [[ "$BAIXAR_MODELOS" =~ ^[Ss]$ ]]; then
    echo ""
    echo "Iniciando download dos modelos..."
    echo ""
    ./download-models.sh
fi

echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""
echo -e "${NC}by rogerelizar${NC}"
echo ""
echo -e "${BLUE}==========================================================${NC}"
echo ""
