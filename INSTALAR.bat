@echo off
REM ============================================================
REM AltaVoz Forensic-1 - Instalador Automático (Windows)
REM ============================================================
REM Este instalador funciona de QUALQUER lugar!
REM Basta dar duplo clique e seguir as instruções.
REM ============================================================

echo.
echo ==========================================================
echo.
echo     🎙️  AltaVoz Forensic-1 - Instalador Automático
echo.
echo ==========================================================
echo.

REM Tentar encontrar a pasta do projeto automaticamente
set PROJECT_FOUND=false

REM Verificar pasta atual
if exist "package.json" (
    set PROJECT_FOUND=true
    goto :FOUND
)

REM Verificar subpasta comum
if exist "altavoz-forensic-1\package.json" (
    cd altavoz-forensic-1
    set PROJECT_FOUND=true
    goto :FOUND
)

REM Verificar pasta pai
if exist "..\package.json" (
    cd ..
    set PROJECT_FOUND=true
    goto :FOUND
)

REM Se não encontrou, perguntar ao usuário
:NOT_FOUND
echo ⚠️  Não encontrei o projeto automaticamente!
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   COMO ENCONTRAR A PASTA DO PROJETO:
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo   1. Abra o Windows Explorer
echo   2. Procure a pasta onde você baixou o projeto
echo   3. A pasta deve ter: package.json, src/, public/
echo   4. Copie o caminho completo da pasta
echo   5. Cole abaixo quando pedir
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo Digite o caminho completo da pasta do projeto:
echo (Exemplo: C:\Users\SeuNome\Downloads\altavoz-forensic-1)
echo.
set /p PROJECT_PATH="Caminho: "

if exist "%PROJECT_PATH%\package.json" (
    cd /d "%PROJECT_PATH%"
    set PROJECT_FOUND=true
    goto :FOUND
) else (
    echo.
    echo ❌ ERRO: Não encontrei o projeto em:
    echo    %PROJECT_PATH%
    echo.
    echo Verifique se o caminho está correto.
    echo A pasta deve conter o arquivo: package.json
    echo.
    pause
    exit /b 1
)

:FOUND
echo.
echo ✓ Projeto encontrado!
echo   Pasta: %CD%
echo.

REM Verificar Node.js
echo ==========================================================
echo   [1/5] Verificando Node.js...
echo ==========================================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js NÃO ENCONTRADO!
    echo.
    echo O Node.js é necessário para executar o AltaVoz.
    echo.
    echo Deseja abrir o site para baixar?
    echo.
    set /p RESPOSTA="Digite S para SIM ou N para NÃO: "
    
    if /i "%RESPOSTA%"=="S" (
        echo.
        echo Abrindo o site do Node.js...
        start https://nodejs.org/pt-br/download
        echo.
        echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        echo   INSTRUÇÕES:
        echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        echo.
        echo   1. No site, clique no botão verde "LTS"
        echo   2. Execute o arquivo baixado (node-v20.x.x-x64.msi)
        echo   3. Clique em "Next" em todas as telas
        echo   4. Após instalar, FECH esta janela
        echo   5. Execute este instalador NOVAMENTE
        echo.
        echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        echo.
        pause
        exit /b 0
    ) else (
        echo.
        echo Para instalar manualmente:
        echo   1. Acesse: https://nodejs.org/pt-br/download
        echo   2. Baixe a versão LTS
        echo   3. Instale e execute este script novamente
        echo.
        pause
        exit /b 0
    )
)

for /f "tokens=*" %%i in ('node --version') do echo ✓ Node.js: %%i
echo.

REM Verificar npm
echo ==========================================================
echo   [2/5] Verificando npm...
echo ==========================================================
echo.

where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm não encontrado!
    echo Reinstale o Node.js.
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do echo ✓ npm: %%i
echo.

REM Instalar dependências
echo ==========================================================
echo   [3/5] Instalando dependências...
echo ==========================================================
echo.
echo      (isso pode levar alguns minutos)
echo.
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ❌ Erro ao instalar dependências!
    echo Verifique sua conexão com a internet.
    pause
    exit /b 1
)
echo.
echo ✓ Dependências instaladas!
echo.

REM Criar diretórios
echo ==========================================================
echo   [4/5] Criando estrutura de pastas...
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
echo   [5/5] Preparando o sistema...
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
