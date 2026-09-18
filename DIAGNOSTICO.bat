@echo off
REM ============================================================
REM Diagnóstico do Node.js - AltaVoz Forensic-1
REM ============================================================

echo.
echo ==========================================================
echo.
echo     🔍 Diagnóstico do Node.js
echo.
echo ==========================================================
echo.

echo [1/6] Verificando sistema operacional...
ver
echo.

echo [2/6] Verificando se 'node' está no PATH...
where node 2>nul
if %errorlevel% equ 0 (
    echo ✓ Node.js encontrado no PATH
) else (
    echo ✗ Node.js NÃO encontrado no PATH
)
echo.

echo [3/6] Verificando versão do Node.js...
node --version 2>nul
if %errorlevel% equ 0 (
    echo ✓ Node.js funciona
) else (
    echo ✗ Node.js não responde
)
echo.

echo [4/6] Verificando npm...
npm --version 2>nul
if %errorlevel% equ 0 (
    echo ✓ npm funciona
) else (
    echo ✗ npm não responde
)
echo.

echo [5/6] Procurando node.exe em locais comuns...
echo.

set FOUND=false

if exist "C:\Program Files\nodejs\node.exe" (
    echo ✓ Encontrado: C:\Program Files\nodejs\node.exe
    set FOUND=true
)

if exist "C:\Program Files (x86)\nodejs\node.exe" (
    echo ✓ Encontrado: C:\Program Files (x86)\nodejs\node.exe
    set FOUND=true
)

if exist "%LOCALAPPDATA%\Programs\nodejs\node.exe" (
    echo ✓ Encontrado: %LOCALAPPDATA%\Programs\nodejs\node.exe
    set FOUND=true
)

if exist "%APPDATA%\npm\node.exe" (
    echo ✓ Encontrado: %APPDATA%\npm\node.exe
    set FOUND=true
)

if exist "%USERPROFILE%\nodejs\node.exe" (
    echo ✓ Encontrado: %USERPROFILE%\nodejs\node.exe
    set FOUND=true
)

if "%FOUND%"=="false" (
    echo ✗ Node.js não encontrado em locais comuns
    echo.
    echo Procurando em todo o disco C: (isso pode demorar)...
    echo.
    dir /s /b C:\node.exe 2>nul | findstr /i "node.exe"
)

echo.
echo [6/6] Verificando variável PATH...
echo.
echo PATH atual:
echo %PATH%
echo.

echo ==========================================================
echo.
echo RESULTADO:
echo.

if "%FOUND%"=="true" (
    echo ✓ Node.js ESTÁ instalado no seu computador
    echo.
    echo Mas o Windows não consegue encontrá-lo porque:
    echo   - O PATH não foi configurado durante a instalação
    echo   - Ou o PATH não foi atualizado
    echo.
    echo SOLUÇÃO:
    echo   1. Reinstale o Node.js
    echo   2. IMPORTANTE: Marque "Add to PATH" durante instalação
    echo   3. Ou use: INSTALAR-UNIVERSAL.bat
    echo.
) else (
    echo ✗ Node.js NÃO está instalado
    echo.
    echo SOLUÇÃO:
    echo   1. Baixe em: https://nodejs.org/pt-br/download
    echo   2. Instale marcando "Add to PATH"
    echo   3. Reinicie o computador
    echo   4. Execute: INSTALAR.bat
    echo.
)

echo ==========================================================
echo.
echo by rogerelizar
echo.
pause
