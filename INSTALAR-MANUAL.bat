@echo off
REM ============================================================
REM AltaVoz Forensic-1 - Instalador com Node.js Manual
REM ============================================================
REM Use este instalador se o Node.js está instalado mas não é encontrado
REM ============================================================

echo.
echo ==========================================================
echo.
echo     🎙️  AltaVoz Forensic-1 - Instalador Manual
echo.
echo ==========================================================
echo.
echo Este instalador é para quando o Node.js está instalado
echo mas o Windows não consegue encontrá-lo.
echo.
echo ==========================================================
echo.

REM Encontrar a pasta do projeto
if not exist "package.json" (
    echo ⚠️  Navegue até a pasta do projeto e execute novamente!
    echo.
    echo A pasta deve conter: package.json
    echo.
    pause
    exit /b 1
)

echo ✓ Projeto encontrado: %CD%
echo.

REM ============================================================
REM ETAPA 1: ENCONTRAR O NODE.JS
REM ============================================================
echo ==========================================================
echo   ETAPA 1: Encontrar o Node.js
echo ==========================================================
echo.
echo Vamos localizar o node.exe no seu computador.
echo.
echo Procurando em locais comuns...
echo.

set NODE_FOUND=false
set NODE_PATH=

REM Procurar em locais comuns
if exist "C:\Program Files\nodejs\node.exe" (
    set "NODE_PATH=C:\Program Files\nodejs"
    set NODE_FOUND=true
    echo ✓ Encontrado: C:\Program Files\nodejs\node.exe
    goto :CONFIRM_NODE
)

if exist "C:\Program Files (x86)\nodejs\node.exe" (
    set "NODE_PATH=C:\Program Files (x86)\nodejs"
    set NODE_FOUND=true
    echo ✓ Encontrado: C:\Program Files (x86)\nodejs\node.exe
    goto :CONFIRM_NODE
)

if exist "%LOCALAPPDATA%\Programs\nodejs\node.exe" (
    set "NODE_PATH=%LOCALAPPDATA%\Programs\nodejs"
    set NODE_FOUND=true
    echo ✓ Encontrado: %LOCALAPPDATA%\Programs\nodejs\node.exe
    goto :CONFIRM_NODE
)

if exist "%APPDATA%\npm\node.exe" (
    set "NODE_PATH=%APPDATA%\npm"
    set NODE_FOUND=true
    echo ✓ Encontrado: %APPDATA%\npm\node.exe
    goto :CONFIRM_NODE
)

REM Se não encontrou, pedir ao usuário
echo.
echo ✗ Node.js não encontrado automaticamente.
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   COMO ENCONTRAR O NODE.JS MANUALMENTE:
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo   1. Abra o Windows Explorer
echo   2. Pressione Win + S (buscar)
echo   3. Digite: node.exe
echo   4. Clique com botão direito no resultado
echo   5. Selecione "Abrir local do arquivo"
echo   6. Copie o caminho da barra de endereço
echo   7. Cole abaixo quando pedir
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.

:INPUT_NODE
echo Digite o caminho da pasta do Node.js:
echo (Exemplo: C:\Program Files\nodejs)
echo.
set /p NODE_PATH="Caminho: "

REM Remover aspas se houver
set NODE_PATH=%NODE_PATH:"=%

REM Verificar se o caminho é válido
if exist "%NODE_PATH%\node.exe" (
    set NODE_FOUND=true
    echo.
    echo ✓ Node.js encontrado!
    goto :CONFIRM_NODE
) else (
    echo.
    echo ❌ node.exe não encontrado em: %NODE_PATH%
    echo.
    echo Verifique o caminho e tente novamente.
    echo.
    set /p RETRY="Deseja tentar novamente? (S/N): "
    if /i "%RETRY%"=="S" goto :INPUT_NODE
    echo.
    echo Instalação cancelada.
    pause
    exit /b 1
)

:CONFIRM_NODE
echo.
echo ==========================================================
echo   Node.js encontrado!
echo ==========================================================
echo.
echo Caminho: %NODE_PATH%
echo.

REM Testar o Node.js
echo Testando Node.js...
"%NODE_PATH%\node.exe" --version
if %errorlevel% neq 0 (
    echo.
    echo ❌ Node.js não funciona!
    echo.
    echo Possíveis causas:
    echo   - Instalação corrompida
    echo   - Versão incompatível
    echo.
    echo Recomendação: Reinstale o Node.js
    echo   https://nodejs.org/pt-br/download
    echo.
    pause
    exit /b 1
)

echo.
echo ✓ Node.js funciona corretamente!
echo.

REM ============================================================
REM ETAPA 2: CONFIGURAR PATH
REM ============================================================
echo ==========================================================
echo   ETAPA 2: Configurar PATH
echo ==========================================================
echo.
echo Deseja adicionar o Node.js ao PATH do Windows?
echo.
echo Isso permitirá usar 'node' e 'npm' de qualquer lugar.
echo.
echo   S = Sim, adicionar ao PATH (RECOMENDADO)
echo   N = Não, usar apenas nesta sessão
echo.
set /p ADD_PATH="Escolha (S/N): "

if /i "%ADD_PATH%"=="S" (
    echo.
    echo Adicionando ao PATH...
    
    REM Adicionar ao PATH da sessão atual
    set "PATH=%NODE_PATH%;%PATH%"
    
    echo ✓ PATH configurado para esta sessão
    echo.
    echo ⚠️  IMPORTANTE: Para adicionar permanentemente:
    echo.
    echo   1. Pressione Win + R
    echo   2. Digite: sysdm.cpl
    echo   3. Clique em "Avançado" → "Variáveis de Ambiente"
    echo   4. Em "Variáveis do sistema", edite "Path"
    echo   5. Adicione: %NODE_PATH%
    echo   6. Clique em OK
    echo   7. Reinicie o computador
    echo.
) else (
    echo.
    echo Usando Node.js apenas nesta sessão...
    set "PATH=%NODE_PATH%;%PATH%"
)

echo.

REM ============================================================
REM ETAPA 3: INSTALAR DEPENDÊNCIAS
REM ============================================================
echo ==========================================================
echo   ETAPA 3: Instalando dependências
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

REM ============================================================
REM ETAPA 4: CRIAR ESTRUTURA
REM ============================================================
echo ==========================================================
echo   ETAPA 4: Criando estrutura de pastas
echo ==========================================================
echo.
if not exist "public\models" mkdir public\models
if not exist "public\wasm" mkdir public\wasm
if not exist "data\cases" mkdir data\cases
if not exist "data\exports" mkdir data\exports
echo ✓ Pastas criadas!
echo.

REM ============================================================
REM ETAPA 5: BUILD
REM ============================================================
echo ==========================================================
echo   ETAPA 5: Preparando o sistema
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

REM ============================================================
REM SUCESSO
REM ============================================================
echo.
echo ==========================================================
echo.
echo     ✅ INSTALAÇÃO CONCLUÍDA COM SUCESSO!
echo.
echo ==========================================================
echo.
echo Node.js configurado em: %NODE_PATH%
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
echo ⚠️  LEMBRETE:
echo.
if /i "%ADD_PATH%"=="S" (
    echo   Para usar permanentemente, reinicie o computador
    echo   ou adicione manualmente ao PATH (veja instruções acima)
    echo.
)
echo   Este instalador configurou o Node.js apenas para esta sessão.
echo   Para usar em outras sessões, execute este instalador novamente
echo   ou adicione o Node.js ao PATH permanentemente.
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
