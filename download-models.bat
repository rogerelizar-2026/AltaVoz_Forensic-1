@echo off
REM ============================================================
REM AltaVoz Forensic-1 - Download de Modelos de IA (Windows)
REM ============================================================
REM Baixa os modelos de IA necessarios para o funcionamento
REM ============================================================

echo.
echo ==========================================================
echo.
echo     🧠 AltaVoz Forensic-1 - Download de Modelos IA
echo.
echo ==========================================================
echo.

REM Verificar se está no diretório correto
if not exist "package.json" (
    echo ❌ ERRO: Execute este script na pasta raiz do projeto!
    pause
    exit /b 1
)

REM Criar diretório de modelos
if not exist "public\models" mkdir public\models

echo Os modelos serao baixados para: public\models\
echo Espaco necessario: ~700MB
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   MODELOS QUE SERAO BAIXADOS:
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo   1. Silero VAD (2MB) - Deteccao de atividade de voz
echo   2. Whisper Tiny (75MB) - Transcricao rapida
echo   3. Whisper Base (142MB) - Transcricao multilingue
echo.
echo   Total: ~220MB
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
set /p CONFIRM="Deseja continuar? (S/N): "
if /i not "%CONFIRM%"=="S" (
    echo Download cancelado.
    pause
    exit /b 0
)

echo.
echo ==========================================================
echo   [1/3] Baixando Silero VAD (2MB)...
echo ==========================================================
echo.

if exist "public\models\silero_vad.onnx" (
    echo ✓ Silero VAD ja existe. Pulando...
) else (
    echo Baixando...
    curl -L -o "public\models\silero_vad.onnx" "https://models.silero.ai/models/en/vad_v5/silero_vad.onnx" --progress-bar
    if %errorlevel% neq 0 (
        echo ❌ Erro ao baixar Silero VAD!
        echo Tente novamente ou baixe manualmente:
        echo https://models.silero.ai/models/en/vad_v5/silero_vad.onnx
    ) else (
        echo ✓ Silero VAD baixado com sucesso!
    )
)

echo.
echo ==========================================================
echo   [2/3] Baixando Whisper Tiny (75MB)...
echo ==========================================================
echo.

if exist "public\models\ggml-tiny.bin" (
    echo ✓ Whisper Tiny ja existe. Pulando...
) else (
    echo Baixando...
    curl -L -o "public\models\ggml-tiny.bin" "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin" --progress-bar
    if %errorlevel% neq 0 (
        echo ❌ Erro ao baixar Whisper Tiny!
        echo Tente novamente ou baixe manualmente:
        echo https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin
    ) else (
        echo ✓ Whisper Tiny baixado com sucesso!
    )
)

echo.
echo ==========================================================
echo   [3/3] Baixando Whisper Base (142MB)...
echo ==========================================================
echo.

if exist "public\models\ggml-base.bin" (
    echo ✓ Whisper Base ja existe. Pulando...
) else (
    echo Baixando... Este arquivo e maior e pode demorar...
    curl -L -o "public\models\ggml-base.bin" "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin" --progress-bar
    if %errorlevel% neq 0 (
        echo ❌ Erro ao baixar Whisper Base!
        echo Tente novamente ou baixe manualmente:
        echo https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin
    ) else (
        echo ✓ Whisper Base baixado com sucesso!
    )
)

echo.
echo ==========================================================
echo   Verificando modelos...
echo ==========================================================
echo.

set ALL_OK=true

if exist "public\models\silero_vad.onnx" (
    echo ✓ Silero VAD OK
) else (
    echo ✗ Silero VAD NAO ENCONTRADO
    set ALL_OK=false
)

if exist "public\models\ggml-tiny.bin" (
    echo ✓ Whisper Tiny OK
) else (
    echo ✗ Whisper Tiny NAO ENCONTRADO
    set ALL_OK=false
)

if exist "public\models\ggml-base.bin" (
    echo ✓ Whisper Base OK
) else (
    echo ✗ Whisper Base NAO ENCONTRADO
    set ALL_OK=false
)

echo.

if "%ALL_OK%"=="true" (
    echo ==========================================================
    echo.
    echo     ✅ TODOS OS MODELOS BAIXADOS COM SUCESSO!
    echo.
    echo ==========================================================
    echo.
    echo O AltaVoz Forensic-1 esta pronto para uso!
    echo.
    echo Para iniciar, execute:
    echo.
    echo   npm run dev
    echo.
    echo O programa sera aberto em: http://localhost:5173
    echo.
) else (
    echo ==========================================================
    echo.
    echo     ⚠️  ALGUNS MODELOS NAO FORAM BAIXADOS
    echo.
    echo ==========================================================
    echo.
    echo Verifique sua conexao com a internet e tente novamente.
    echo.
    echo Ou baixe manualmente os arquivos faltantes e coloque em:
    echo   public\models\
    echo.
)

echo ==========================================================
echo.
echo by rogerelizar
echo.
pause
