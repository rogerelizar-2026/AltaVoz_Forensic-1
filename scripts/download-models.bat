@echo off
REM ============================================================
REM AltaVoz Forensic-1 - Download de Modelos de IA (Windows)
REM ============================================================

echo.
echo ==========================================================
echo.
echo     🧠 AltaVoz Forensic-1 - Download de Modelos IA
echo.
echo ==========================================================
echo.

set MODELS_DIR=public\models

if not exist "%MODELS_DIR%" mkdir %MODELS_DIR%

echo Os modelos serao baixados para: %MODELS_DIR%\
echo Espaco necessario: ~700MB
echo.
set /p CONFIRM="Deseja continuar? (s/n) "
if /i not "%CONFIRM%"=="s" (
    echo Download cancelado.
    pause
    exit /b 0
)

echo.
echo ==========================================================
echo   Baixando modelo Silero VAD (2MB)...
echo ==========================================================
echo.

if not exist "%MODELS_DIR%\silero_vad.onnx" (
    curl -L -o "%MODELS_DIR%\silero_vad.onnx" "https://models.silero.ai/models/en/vad_v5/silero_vad.onnx"
    echo ✓ Silero VAD baixado!
) else (
    echo ⚠ Silero VAD ja existe. Pulando...
)

echo.
echo ==========================================================
echo   Baixando modelo Whisper Tiny (75MB)...
echo ==========================================================
echo.

if not exist "%MODELS_DIR%\ggml-tiny.bin" (
    curl -L -o "%MODELS_DIR%\ggml-tiny.bin" "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin"
    echo ✓ Whisper Tiny baixado!
) else (
    echo ⚠ Whisper Tiny ja existe. Pulando...
)

echo.
echo ==========================================================
echo   Baixando modelo Whisper Base (142MB)...
echo ==========================================================
echo.

if not exist "%MODELS_DIR%\ggml-base.bin" (
    curl -L -o "%MODELS_DIR%\ggml-base.bin" "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin"
    echo ✓ Whisper Base baixado!
) else (
    echo ⚠ Whisper Base ja existe. Pulando...
)

echo.
echo ==========================================================
echo   Verificando integridade dos modelos...
echo ==========================================================
echo.

set ALL_OK=true

if not exist "%MODELS_DIR%\silero_vad.onnx" (
    echo ✗ Silero VAD nao encontrado!
    set ALL_OK=false
) else (
    echo ✓ Silero VAD OK
)

if not exist "%MODELS_DIR%\ggml-tiny.bin" (
    echo ✗ Whisper Tiny nao encontrado!
    set ALL_OK=false
) else (
    echo ✓ Whisper Tiny OK
)

if not exist "%MODELS_DIR%\ggml-base.bin" (
    echo ✗ Whisper Base nao encontrado!
    set ALL_OK=false
) else (
    echo ✓ Whisper Base OK
)

echo.

if "%ALL_OK%"=="true" (
    echo ==========================================================
    echo.
    echo     ✅ Todos os modelos foram baixados com sucesso!
    echo.
    echo ==========================================================
    echo.
    echo Modelos instalados:
    echo   • Silero VAD (deteccao de voz)
    echo   • Whisper Tiny (transcricao rapida)
    echo   • Whisper Base (transcricao multilingue)
    echo.
) else (
    echo ❌ Alguns modelos nao foram baixados corretamente.
    echo    Verifique sua conexao com a internet e tente novamente.
)

echo.
echo by rogerelizar
echo.
pause
