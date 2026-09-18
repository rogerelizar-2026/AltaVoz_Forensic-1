@echo off
REM ============================================================
REM AltaVoz Forensic-1 - Instalador Automático (Windows)
REM ============================================================
REM Este script instala todas as dependências necessárias
REM e configura o ambiente para uso do AltaVoz Forensic-1.
REM ============================================================

echo.
echo ==========================================================
echo.
echo     🎙️  AltaVoz Forensic-1 - Instalador Automatico
echo.
echo ==========================================================
echo.

REM Verificar se está no diretório correto
if not exist "package.json" (
    echo ❌ Erro: Execute este script no diretorio do projeto.
    echo    Certifique-se de estar na pasta altavoz-forensic-1\
    pause
    exit /b 1
)

REM Passo 1: Verificar Node.js
echo ==========================================================
echo   Passo 1/5: Verificando Node.js
echo ==========================================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js nao encontrado!
    echo.
    echo Por favor, instale o Node.js:
    echo    1. Acesse: https://nodejs.org
    echo    2. Baixe a versao LTS (recomendada)
    echo    3. Execute o instalador
    echo    4. Reinicie este script
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✓ Node.js encontrado: %NODE_VERSION%
echo.

REM Passo 2: Verificar npm
echo ==========================================================
echo   Passo 2/5: Verificando npm
echo ==========================================================
echo.

where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm nao encontrado!
    echo    Reinstale o Node.js.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✓ npm encontrado: %NPM_VERSION%
echo.

REM Passo 3: Instalar dependências
echo ==========================================================
echo   Passo 3/5: Instalando dependencias do projeto
echo ==========================================================
echo.
echo   Isso pode levar alguns minutos...
echo.

call npm install

if %errorlevel% neq 0 (
    echo ❌ Erro ao instalar dependencias!
    pause
    exit /b 1
)

echo.
echo ✓ Dependencias instaladas com sucesso!
echo.

REM Passo 4: Criar diretórios
echo ==========================================================
echo   Passo 4/5: Criando estrutura de diretorios
echo ==========================================================
echo.

if not exist "public\models" mkdir public\models
if not exist "public\wasm" mkdir public\wasm
if not exist "data\cases" mkdir data\cases
if not exist "data\exports" mkdir data\exports

echo ✓ Diretorios criados!
echo.

REM Passo 5: Verificar build
echo ==========================================================
echo   Passo 5/5: Verificando build
echo ==========================================================
echo.

call npm run build

if %errorlevel% neq 0 (
    echo ❌ Erro ao criar build!
    pause
    exit /b 1
)

echo.
echo ✓ Build concluido com sucesso!
echo.

REM Resumo
echo.
echo ==========================================================
echo.
echo     ✅ Instalacao concluida com sucesso!
echo.
echo ==========================================================
echo.
echo Para iniciar o AltaVoz Forensic-1, execute:
echo.
echo   npm run dev
echo.
echo O programa estara disponivel em: http://localhost:5173
echo.
echo Comandos uteis:
echo   npm run dev          - Iniciar o programa
echo   npm run build        - Criar versao para producao
echo   npm run preview      - Visualizar versao de producao
echo.
echo by rogerelizar
echo.
pause
