# ============================================================
# AltaVoz Forensic-1 - Instalador Automático Completo (PowerShell)
# ============================================================
# Este instalador pode baixar e instalar o Node.js automaticamente
# Execute com: powershell -ExecutionPolicy Bypass -File install.ps1
# ============================================================

# Configurar console
$Host.UI.RawUI.WindowTitle = "AltaVoz Forensic-1 - Instalador"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# Cores
$Green = "Green"
$Yellow = "Yellow"
$Red = "Red"
$Blue = "Cyan"
$White = "White"

function Write-Header {
    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor $Blue
    Write-Host ""
    Write-Host "    🎙️  AltaVoz Forensic-1 - Instalador Automático" -ForegroundColor $White
    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor $Blue
    Write-Host ""
}

function Write-Step {
    param([string]$Step, [string]$Title)
    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor $Blue
    Write-Host "  Passo $Step - $Title" -ForegroundColor $White
    Write-Host "==========================================================" -ForegroundColor $Blue
    Write-Host ""
}

function Write-Success {
    param([string]$Message)
    Write-Host "✓ $Message" -ForegroundColor $Green
}

function Write-Error {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor $Red
}

function Write-Info {
    param([string]$Message)
    Write-Host "ℹ $Message" -ForegroundColor $Yellow
}

# Iniciar
Write-Header

# Verificar se está no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Error "Arquivo package.json não encontrado!"
    Write-Host ""
    Write-Host "Este script deve ser executado na pasta raiz do projeto." -ForegroundColor $Yellow
    Write-Host "Certifique-se de estar na pasta: altavoz-forensic-1\" -ForegroundColor $Yellow
    Write-Host ""
    Read-Host "Pressione Enter para sair"
    exit 1
}

Write-Success "Diretório correto detectado"

# Passo 1: Verificar Node.js
Write-Step "1/5" "Verificando Node.js"

$nodeInstalled = $false
try {
    $nodeVersion = & node --version 2>$null
    if ($nodeVersion) {
        Write-Success "Node.js encontrado: $nodeVersion"
        $nodeInstalled = $true
    }
} catch {
    # Node.js não encontrado
}

if (-not $nodeInstalled) {
    Write-Error "Node.js NÃO ENCONTRADO!"
    Write-Host ""
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor $Yellow
    Write-Host "  O Node.js é necessário para executar o AltaVoz" -ForegroundColor $White
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor $Yellow
    Write-Host ""
    Write-Host "Deseja que eu baixe e instale o Node.js automaticamente?" -ForegroundColor $White
    Write-Host ""
    Write-Host "  S = Sim, baixar e instalar agora (recomendado)" -ForegroundColor $Green
    Write-Host "  N = Não, vou instalar manualmente depois" -ForegroundColor $Yellow
    Write-Host ""
    
    $resposta = Read-Host "Digite S ou N e pressione Enter"
    
    if ($resposta -eq "S" -or $resposta -eq "s") {
        Write-Host ""
        Write-Info "Baixando o instalador do Node.js..."
        Write-Host ""
        
        # URL do instalador do Node.js LTS
        $nodeUrl = "https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi"
        $nodeInstaller = "$env:TEMP\node-installer.msi"
        
        try {
            # Baixar o instalador
            Write-Host "  Baixando de: $nodeUrl" -ForegroundColor $Gray
            Write-Host "  Isso pode levar alguns minutos..." -ForegroundColor $Gray
            Write-Host ""
            
            $webClient = New-Object System.Net.WebClient
            $webClient.DownloadFile($nodeUrl, $nodeInstaller)
            
            Write-Success "Download concluído!"
            Write-Host ""
            Write-Info "Iniciando instalação do Node.js..."
            Write-Host ""
            Write-Host "  Uma janela de instalação vai abrir." -ForegroundColor $Yellow
            Write-Host "  Clique em 'Next' em todas as telas." -ForegroundColor $Yellow
            Write-Host "  Após instalar, volte aqui e pressione Enter." -ForegroundColor $Yellow
            Write-Host ""
            
            # Executar o instalador
            Start-Process -FilePath "msiexec.exe" -ArgumentList "/i `"$nodeInstaller`" /passive /norestart" -Wait
            
            # Limpar arquivo temporário
            Remove-Item $nodeInstaller -Force -ErrorAction SilentlyContinue
            
            Write-Host ""
            Write-Success "Instalação do Node.js concluída!"
            Write-Host ""
            Write-Info "Por favor, FECH este script e abra novamente para continuar."
            Write-Host ""
            Read-Host "Pressione Enter para sair"
            exit 0
            
        } catch {
            Write-Error "Erro ao baixar o Node.js: $_"
            Write-Host ""
            Write-Host "Por favor, baixe manualmente em:" -ForegroundColor $Yellow
            Write-Host "  https://nodejs.org/pt-br/download" -ForegroundColor $Cyan
            Write-Host ""
            Read-Host "Pressione Enter para sair"
            exit 1
        }
    } else {
        Write-Host ""
        Write-Host "Ok. Para instalar o Node.js manualmente:" -ForegroundColor $Yellow
        Write-Host ""
        Write-Host "  1. Acesse: https://nodejs.org/pt-br/download" -ForegroundColor $Cyan
        Write-Host "  2. Clique no botão verde '20.x.x LTS'" -ForegroundColor $White
        Write-Host "  3. Execute o instalador baixado" -ForegroundColor $White
        Write-Host "  4. Após instalar, execute este script novamente" -ForegroundColor $White
        Write-Host ""
        Read-Host "Pressione Enter para sair"
        exit 0
    }
}

# Passo 2: Verificar npm
Write-Step "2/5" "Verificando npm"

try {
    $npmVersion = & npm --version 2>$null
    if ($npmVersion) {
        Write-Success "npm encontrado: versão $npmVersion"
    } else {
        throw "npm não encontrado"
    }
} catch {
    Write-Error "npm NÃO ENCONTRADO!"
    Write-Host ""
    Write-Host "O npm vem junto com o Node.js." -ForegroundColor $Yellow
    Write-Host "Por favor, reinstale o Node.js:" -ForegroundColor $Yellow
    Write-Host "  https://nodejs.org/pt-br/download" -ForegroundColor $Cyan
    Write-Host ""
    Read-Host "Pressione Enter para sair"
    exit 1
}

# Passo 3: Instalar dependências
Write-Step "3/5" "Instalando dependências do projeto"

Write-Info "Isso pode levar alguns minutos..."
Write-Info "Aguarde, por favor."
Write-Host ""

try {
    & npm install
    if ($LASTEXITCODE -ne 0) {
        throw "Erro ao instalar dependências"
    }
    Write-Host ""
    Write-Success "Dependências instaladas com sucesso!"
} catch {
    Write-Host ""
    Write-Error "ERRO ao instalar dependências!"
    Write-Host ""
    Write-Host "Possíveis causas:" -ForegroundColor $Yellow
    Write-Host "  - Conexão com a internet instável" -ForegroundColor $White
    Write-Host "  - Problemas de permissão no disco" -ForegroundColor $White
    Write-Host "  - Espaço insuficiente em disco" -ForegroundColor $White
    Write-Host ""
    Read-Host "Pressione Enter para sair"
    exit 1
}

# Passo 4: Criar diretórios
Write-Step "4/5" "Criando estrutura de diretórios"

$directories = @(
    "public\models",
    "public\wasm",
    "data\cases",
    "data\exports"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
}

Write-Success "Diretórios criados!"

# Passo 5: Verificar build
Write-Step "5/5" "Verificando build"

try {
    & npm run build
    if ($LASTEXITCODE -ne 0) {
        throw "Erro ao criar build"
    }
    Write-Host ""
    Write-Success "Build concluído com sucesso!"
} catch {
    Write-Host ""
    Write-Error "ERRO ao criar build!"
    Write-Host ""
    Write-Host "Verifique se todas as dependências foram instaladas." -ForegroundColor $Yellow
    Write-Host ""
    Read-Host "Pressione Enter para sair"
    exit 1
}

# Resumo
Write-Host ""
Write-Host "==========================================================" -ForegroundColor $Green
Write-Host ""
Write-Host "    ✅ INSTALAÇÃO CONCLUÍDA COM SUCESSO!" -ForegroundColor $White
Write-Host ""
Write-Host "==========================================================" -ForegroundColor $Green
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor $Blue
Write-Host "  PRÓXIMOS PASSOS:" -ForegroundColor $White
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor $Blue
Write-Host ""
Write-Host "  1. BAIXAR MODELOS DE IA (necessário para funcionar)" -ForegroundColor $White
Write-Host ""
Write-Host "     Execute o script:" -ForegroundColor $Gray
Write-Host "       download-models.bat" -ForegroundColor $Cyan
Write-Host ""
Write-Host "  2. INICIAR O PROGRAMA" -ForegroundColor $White
Write-Host ""
Write-Host "     Execute o comando:" -ForegroundColor $Gray
Write-Host "       npm run dev" -ForegroundColor $Cyan
Write-Host ""
Write-Host "     O programa será aberto no navegador em:" -ForegroundColor $Gray
Write-Host "       http://localhost:5173" -ForegroundColor $Cyan
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor $Blue
Write-Host ""
Write-Host "Deseja baixar os modelos de IA agora?" -ForegroundColor $White
Write-Host ""
Write-Host "  S = Sim, baixar agora" -ForegroundColor $Green
Write-Host "  N = Não, vou baixar depois" -ForegroundColor $Yellow
Write-Host ""

$baixarModelos = Read-Host "Digite S ou N e pressione Enter"

if ($baixarModelos -eq "S" -or $baixarModelos -eq "s") {
    Write-Host ""
    Write-Info "Iniciando download dos modelos..."
    Write-Host ""
    
    if (Test-Path "download-models.bat") {
        & .\download-models.bat
    } elseif (Test-Path "scripts\download-models.bat") {
        & .\scripts\download-models.bat
    } else {
        Write-Error "Script de download não encontrado!"
        Write-Host "Execute manualmente: bash scripts/download-models.sh" -ForegroundColor $Yellow
    }
}

Write-Host ""
Write-Host "==========================================================" -ForegroundColor $Blue
Write-Host ""
Write-Host "by rogerelizar" -ForegroundColor $White
Write-Host ""
Write-Host "==========================================================" -ForegroundColor $Blue
Write-Host ""
Read-Host "Pressione Enter para sair"
