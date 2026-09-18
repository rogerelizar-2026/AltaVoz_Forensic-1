@echo off
REM ============================================================
REM AltaVoz Forensic-1 - Verificação Pós-Instalação
REM ============================================================

echo.
echo ==========================================================
echo.
echo     🔍 AltaVoz Forensic-1 - Verificação do Sistema
echo.
echo ==========================================================
echo.

REM Verificar Node.js
echo Verificando Node.js...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js NÃO ENCONTRADO
    set NODE_OK=false
) else (
    for /f "tokens=*" %%i in ('node --version') do echo ✓ Node.js: %%i
    set NODE_OK=true
)

REM Verificar npm
echo Verificando npm...
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm NÃO ENCONTRADO
    set NPM_OK=false
) else (
    for /f "tokens=*" %%i in ('npm --version') do echo ✓ npm: %%i
    set NPM_OK=true
)

REM Verificar dependências
echo Verificando dependências...
if exist "node_modules" (
    echo ✓ Dependências instaladas
    set DEPS_OK=true
) else (
    echo ❌ Dependências NÃO instaladas
    echo    Execute: npm install
    set DEPS_OK=false
)

REM Verificar modelos
echo Verificando modelos de IA...
set MODELS_OK=true

if exist "public\models\silero_vad.onnx" (
    echo ✓ Silero VAD
) else (
    echo ❌ Silero VAD NÃO ENCONTRADO
    set MODELS_OK=false
)

if exist "public\models\ggml-tiny.bin" (
    echo ✓ Whisper Tiny
) else (
    echo ❌ Whisper Tiny NÃO ENCONTRADO
    set MODELS_OK=false
)

if exist "public\models\ggml-base.bin" (
    echo ✓ Whisper Base
) else (
    echo ❌ Whisper Base NÃO ENCONTRADO
    set MODELS_OK=false
)

REM Verificar build
echo Verificando build...
if exist "dist\index.html" (
    echo ✓ Build presente
    set BUILD_OK=true
) else (
    echo ❌ Build NÃO encontrado
    echo    Execute: npm run build
    set BUILD_OK=false
)

echo.
echo ==========================================================
echo.

if "%NODE_OK%"=="true" if "%NPM_OK%"=="true" if "%DEPS_OK%"=="true" if "%MODELS_OK%"=="true" if "%BUILD_OK%"=="true" (
    echo     ✅ SISTEMA PRONTO PARA USO!
    echo.
    echo Para iniciar, execute:
    echo.
    echo   npm run dev
    echo.
    echo O programa será aberto em: http://localhost:5173
) else (
    echo     ⚠️  SISTEMA INCOMPLETO
    echo.
    echo Execute os seguintes comandos para completar:
    echo.
    if "%DEPS_OK%"=="false" echo   1. npm install
    if "%MODELS_OK%"=="false" echo   2. download-models.bat
    if "%BUILD_OK%"=="false" echo   3. npm run build
)

echo.
echo ==========================================================
echo.
echo by rogerelizar
echo.
pause
