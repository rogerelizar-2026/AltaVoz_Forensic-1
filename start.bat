@echo off
REM ============================================================
REM AltaVoz Forensic-1 - Iniciar Programa
REM ============================================================

echo.
echo ==========================================================
echo.
echo     🎙️  Iniciando AltaVoz Forensic-1...
echo.
echo ==========================================================
echo.

REM Verificar se está no diretório correto
if not exist "package.json" (
    echo ❌ ERRO: Execute este script na pasta raiz do projeto!
    pause
    exit /b 1
)

REM Verificar se node_modules existe
if not exist "node_modules" (
    echo ⚠️  Dependências não instaladas!
    echo.
    echo Executando npm install...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ Erro ao instalar dependências!
        pause
        exit /b 1
    )
)

REM Verificar se modelos existem
set MODELS_OK=true
if not exist "public\models\silero_vad.onnx" set MODELS_OK=false
if not exist "public\models\ggml-tiny.bin" set MODELS_OK=false
if not exist "public\models\ggml-base.bin" set MODELS_OK=false

if "%MODELS_OK%"=="false" (
    echo ⚠️  Modelos de IA não encontrados!
    echo.
    echo Deseja baixar os modelos agora?
    echo.
    set /p BAIXAR="Digite S para baixar ou N para continuar sem modelos: "
    if /i "%BAIXAR%"=="S" (
        call download-models.bat
    ) else (
        echo.
        echo ⚠️  O programa pode não funcionar corretamente sem os modelos!
        echo.
    )
)

echo.
echo ==========================================================
echo.
echo     🚀 Iniciando servidor de desenvolvimento...
echo.
echo ==========================================================
echo.
echo O programa será aberto em: http://localhost:5173
echo.
echo Para parar o servidor, pressione Ctrl+C
echo.
echo ==========================================================
echo.

npm run dev

pause
