@echo off
REM ============================================================
REM AltaVoz Forensic-1 - Instalador Universal (Windows)
REM ============================================================
REM Detecta Node.js em qualquer versão e caminho
REM ============================================================

echo.
echo ==========================================================
echo.
echo     🎙️  AltaVoz Forensic-1 - Instalador Universal
echo.
echo ==========================================================
echo.

REM Tentar encontrar a pasta do projeto
set PROJECT_FOUND=false

if exist "package.json" (
    set PROJECT_FOUND=true
    goto :PROJECT_OK
)

if exist "altavoz-forensic-1\package.json" (
    cd altavoz-forensic-1
    set PROJECT_FOUND=true
    goto :PROJECT_OK
)

echo ⚠️  Não encontrei o projeto automaticamente!
echo.
echo Digite o caminho completo da pasta do projeto:
echo (Exemplo: C:\Users\SeuNome\Downloads\altavoz-forensic-1)
echo.
set /p PROJECT_PATH="Caminho: "

if exist "%PROJECT_PATH%\package.json" (
    cd /d "%PROJECT_PATH%"
    set PROJECT_FOUND=true
    goto :PROJECT_OK
) else (
    echo ❌ Pasta inválida!
    pause
    exit /b 1
)

:PROJECT_OK
echo ✓ Projeto encontrado: %CD%
echo.

REM ============================================================
REM DETECÇÃO ROBUSTA DO NODE.JS
REM ============================================================
echo ==========================================================
echo   Detectando Node.js...
echo ==========================================================
echo.

set NODE_FOUND=false
set NODE_PATH=

REM Método 1: Verificar se 'node' está no PATH
where node >nul 2>nul
if %errorlevel% equ 0 (
    for /f "tokens=*" %%i in ('node --version 2^>nul') do (
        set NODE_VERSION=%%i
        set NODE_FOUND=true
        echo ✓ Node.js encontrado no PATH: !NODE_VERSION!
        goto :NODE_OK
    )
)

REM Método 2: Verificar caminhos comuns do Node.js
echo Procurando Node.js em locais comuns...

REM Verificar Program Files
if exist "C:\Program Files\nodejs\node.exe" (
    set "NODE_PATH=C:\Program Files\nodejs"
    set NODE_FOUND=true
    echo ✓ Node.js encontrado em: !NODE_PATH!
    goto :NODE_VERSION_CHECK
)

if exist "C:\Program Files (x86)\nodejs\node.exe" (
    set "NODE_PATH=C:\Program Files (x86)\nodejs"
    set NODE_FOUND=true
    echo ✓ Node.js encontrado em: !NODE_PATH!
    goto :NODE_VERSION_CHECK
)

REM Verificar AppData
if exist "%APPDATA%\npm\node.exe" (
    set "NODE_PATH=%APPDATA%\npm"
    set NODE_FOUND=true
    echo ✓ Node.js encontrado em: !NODE_PATH!
    goto :NODE_VERSION_CHECK
)

if exist "%LOCALAPPDATA%\Programs\nodejs\node.exe" (
    set "NODE_PATH=%LOCALAPPDATA%\Programs\nodejs"
    set NODE_FOUND=true
    echo ✓ Node.js encontrado em: !NODE_PATH!
    goto :NODE_VERSION_CHECK
)

REM Verificar pasta do usuário
if exist "%USERPROFILE%\nodejs\node.exe" (
    set "NODE_PATH=%USERPROFILE%\nodejs"
    set NODE_FOUND=true
    echo ✓ Node.js encontrado em: !NODE_PATH!
    goto :NODE_VERSION_CHECK
)

REM Se não encontrou, perguntar ao usuário
echo.
echo ❌ Node.js não encontrado automaticamente!
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   COMO ENCONTRAR O NODE.JS:
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo   Você disse que o Node.js 24 está instalado.
echo   Vamos localizá-lo manualmente.
echo.
echo   Opção 1: Digitar o caminho do node.exe
echo   Opção 2: Abrir o site do Node.js para reinstalar
echo   Opção 3: Cancelar
echo.
set /p OPCAO="Escolha (1/2/3): "

if "%OPCAO%"=="1" goto :INPUT_NODE_PATH
if "%OPCAO%"=="2" goto :OPEN_NODE_SITE
if "%OPCAO%"=="3" goto :CANCEL

echo Opção inválida!
pause
exit /b 1

:INPUT_NODE_PATH
echo.
echo Digite o caminho completo do node.exe:
echo (Exemplo: C:\Program Files\nodejs\node.exe)
echo.
set /p NODE_EXE_PATH="Caminho: "

if exist "%NODE_EXE_PATH%" (
    REM Extrair o diretório do caminho
    for %%i in ("%NODE_EXE_PATH%") do set "NODE_PATH=%%~dpi"
    set NODE_PATH=!NODE_PATH:~0,-1!
    set NODE_FOUND=true
    echo ✓ Node.js encontrado!
    goto :NODE_VERSION_CHECK
) else (
    echo ❌ Arquivo não encontrado: %NODE_EXE_PATH%
    pause
    exit /b 1
)

:OPEN_NODE_SITE
echo.
echo Abrindo o site do Node.js...
start https://nodejs.org/pt-br/download
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   REINSTALAR O NODE.JS:
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo   1. No site, clique no botão verde "LTS"
echo   2. Execute o instalador baixado
echo   3. IMPORTANTE: Marque a opção "Add to PATH"
echo   4. Conclua a instalação
echo   5. FECH esta janela
echo   6. Execute este instalador NOVAMENTE
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
pause
exit /b 0

:CANCEL
echo.
echo Instalação cancelada.
pause
exit /b 0

:NODE_VERSION_CHECK
REM Verificar a versão do Node.js
echo.
echo Verificando versão do Node.js...

REM Adicionar Node.js ao PATH temporariamente
if defined NODE_PATH (
    set "PATH=%NODE_PATH%;%PATH%"
)

REM Tentar obter a versão
for /f "tokens=*" %%i in ('node --version 2^>nul') do (
    set NODE_VERSION=%%i
    echo ✓ Versão do Node.js: !NODE_VERSION!
    goto :NODE_OK
)

echo ❌ Não foi possível obter a versão do Node.js!
echo.
echo Possíveis causas:
echo   - Node.js não está instalado corretamente
echo   - PATH não está configurado
echo   - Instalação corrompida
echo.
echo Recomendação: Reinstale o Node.js
echo   https://nodejs.org/pt-br/download
echo.
pause
exit /b 1

:NODE_OK
echo.
echo ✓ Node.js detectado com sucesso!
echo   Versão: %NODE_VERSION%
if defined NODE_PATH echo   Caminho: %NODE_PATH%
echo.

REM Verificar npm
echo ==========================================================
echo   Verificando npm...
echo ==========================================================
echo.

where npm >nul 2>nul
if %errorlevel% neq 0 (
    REM Tentar encontrar npm no mesmo diretório do node
    if defined NODE_PATH (
        if exist "%NODE_PATH%\npm.cmd" (
            set "PATH=%NODE_PATH%;%PATH%"
            echo ✓ npm encontrado junto com Node.js
            goto :NPM_OK
        )
    )
    
    echo ❌ npm não encontrado!
    echo O npm vem junto com o Node.js.
    echo Reinstale o Node.js: https://nodejs.org/pt-br/download
    pause
    exit /b 1
)

:NPM_OK
for /f "tokens=*" %%i in ('npm --version 2^>nul') do echo ✓ npm: %%i
echo.

REM Instalar dependências
echo ==========================================================
echo   Instalando dependências...
echo ==========================================================
echo.
echo      (isso pode levar alguns minutos)
echo.
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ❌ Erro ao instalar dependências!
    pause
    exit /b 1
)
echo.
echo ✓ Dependências instaladas!
echo.

REM Criar diretórios
echo ==========================================================
echo   Criando estrutura de pastas...
echo ==========================================================
echo.
if not exist "public\models" mkdir public\models
if not exist "public\wasm" mkdir public\wasm
if not exist "data\cases" mkdir data\cases
if not exist "data\exports" mkdir data\exports
echo ✓ Pastas criadas!
echo.

REM Build
echo ==========================================================
echo   Preparando o sistema...
echo ==========================================================
echo.
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo ❌ Erro ao preparar o sistema!
    pause
    exit /b 1
)
echo.
echo ✓ Sistema preparado!
echo.

REM Sucesso
echo.
echo ==========================================================
echo.
echo     ✅ INSTALAÇÃO CONCLUÍDA COM SUCESSO!
echo.
echo ==========================================================
echo.
echo Agora execute na ordem:
echo.
echo   1. download-models.bat  (baixa modelos de IA)
echo   2. start.bat            (inicia o programa)
echo.
echo O programa será aberto em: http://localhost:5173
echo.
echo ==========================================================
echo.
echo Deseja baixar os modelos agora?
echo.
set /p BAIXAR="Digite S para SIM ou N para NÃO: "

if /i "%BAIXAR%"=="S" (
    call download-models.bat
)

echo.
echo by rogerelizar
echo.
pause
