@echo off
REM ============================================================
REM AltaVoz Forensic-1 - Instalador Unificado (Windows)
REM ============================================================
REM Este instalador detecta automaticamente a pasta do projeto
REM ============================================================

echo.
echo ==========================================================
echo.
echo     🎙️  AltaVoz Forensic-1 - Instalador
echo.
echo ==========================================================
echo.

REM Detectar pasta atual
set CURRENT_DIR=%CD%
echo Pasta atual: %CURRENT_DIR%
echo.

REM Verificar se package.json existe na pasta atual
if exist "package.json" (
    echo ✓ package.json encontrado na pasta atual
    goto :INSTALL
)

REM Tentar encontrar package.json em subpastas comuns
echo Procurando package.json...
echo.

if exist "altavoz-forensic-1\package.json" (
    echo ✓ Encontrado em: altavoz-forensic-1\
    cd altavoz-forensic-1
    goto :INSTALL
)

if exist "..\package.json" (
    echo ✓ Encontrado na pasta pai
    cd ..
    goto :INSTALL
)

REM Se não encontrou, perguntar ao usuário
echo.
echo ❌ package.json não encontrado automaticamente!
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   O instalador precisa estar na pasta do projeto
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo Opções:
echo.
echo   1. Navegar manualmente até a pasta do projeto
echo   2. Digitar o caminho da pasta
echo   3. Cancelar e executar de outro local
echo.
set /p OPCAO="Escolha uma opção (1/2/3): "

if "%OPCAO%"=="1" goto :NAVIGATE
if "%OPCAO%"=="2" goto :INPUT_PATH
if "%OPCAO%"=="3" goto :CANCEL

echo Opção inválida!
pause
exit /b 1

:NAVIGATE
echo.
echo Abra o Windows Explorer e navegue até a pasta do projeto.
echo Depois volte aqui e pressione Enter.
echo.
echo Dica: A pasta deve conter:
echo   - package.json
echo   - install.bat
echo   - src/
echo   - public/
echo.
pause
echo.
echo Digite o caminho completo da pasta do projeto:
set /p PROJECT_PATH="Caminho: "
if exist "%PROJECT_PATH%\package.json" (
    cd /d "%PROJECT_PATH%"
    goto :INSTALL
) else (
    echo ❌ Pasta inválida!
    pause
    exit /b 1
)

:INPUT_PATH
echo.
echo Digite o caminho completo da pasta do projeto:
echo Exemplo: C:\Users\SeuNome\Downloads\altavoz-forensic-1
echo.
set /p PROJECT_PATH="Caminho: "
if exist "%PROJECT_PATH%\package.json" (
    cd /d "%PROJECT_PATH%"
    goto :INSTALL
) else (
    echo ❌ Pasta inválida! package.json não encontrado em:
    echo    %PROJECT_PATH%
    echo.
    echo Verifique se o caminho está correto e tente novamente.
    pause
    exit /b 1
)

:CANCEL
echo.
echo Instalação cancelada.
echo.
echo Para instalar corretamente:
echo   1. Navegue até a pasta do projeto no Windows Explorer
echo   2. Clique com o botão direito na pasta
echo   3. Selecione "Abrir no Terminal" ou "Abrir janela de comando aqui"
echo   4. Execute: install.bat
echo.
pause
exit /b 0

:INSTALL
echo.
echo ✓ Pasta do projeto detectada: %CD%
echo.

REM Passo 1: Verificar Node.js
echo ==========================================================
echo   Passo 1/5: Verificando Node.js
echo ==========================================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js NAO ENCONTRADO!
    echo.
    echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    echo   O Node.js é necessario para executar o AltaVoz
    echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    echo.
    echo Deseja que eu abra o site para baixar o Node.js?
    echo.
    echo   S = Sim, abrir o site agora
    echo   N = Nao, vou instalar manualmente depois
    echo.
    set /p RESPOSTA="Digite S ou N e pressione Enter: "
    
    if /i "%RESPOSTA%"=="S" (
        echo.
        echo Abrindo o site do Node.js...
        echo.
        start https://nodejs.org/pt-br/download
        echo.
        echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        echo   INSTRUCOES PARA INSTALAR O NODE.JS:
        echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        echo.
        echo   1. No site que abriu, clique no botao verde grande:
        echo      "20.x.x LTS - Recomendado para a maioria dos usuarios"
        echo.
        echo   2. O download vai iniciar automaticamente
        echo.
        echo   3. Quando o download terminar, execute o arquivo:
        echo      node-v20.x.x-x64.msi
        echo.
        echo   4. Na instalacao, clique em:
        echo      - Next
        echo      - Aceito os termos (checkbox)
        echo      - Next
        echo      - Next
        echo      - Next
        echo      - Install
        echo      - Finish
        echo.
        echo   5. APOS instalar, FECH esta janela e execute
        echo      este script (install.bat) NOVAMENTE
        echo.
        echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        echo.
        echo Pressione qualquer tecla quando terminar de instalar...
        pause >nul
        exit /b 0
    ) else (
        echo.
        echo Ok. Para instalar o Node.js manualmente:
        echo.
        echo   1. Acesse: https://nodejs.org/pt-br/download
        echo   2. Baixe a versao LTS (botao verde)
        echo   3. Execute o instalador baixado
        echo   4. Apos instalar, execute este script novamente
        echo.
        pause
        exit /b 0
    )
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
    echo ❌ npm NAO ENCONTRADO!
    echo.
    echo O npm vem junto com o Node.js.
    echo Por favor, reinstale o Node.js:
    echo   https://nodejs.org/pt-br/download
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✓ npm encontrado: versao %NPM_VERSION%
echo.

REM Passo 3: Instalar dependências
echo ==========================================================
echo   Passo 3/5: Instalando dependencias do projeto
echo ==========================================================
echo.
echo   Isso pode levar alguns minutos...
echo   Aguarde, por favor.
echo.

call npm install

if %errorlevel% neq 0 (
    echo.
    echo ❌ ERRO ao instalar dependencias!
    echo.
    echo Possiveis causas:
    echo   - Conexao com a internet instavel
    echo   - Problemas de permissao no disco
    echo   - Espaco insuficiente em disco
    echo.
    echo Tente executar novamente ou consulte o manual.
    echo.
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
    echo.
    echo ❌ ERRO ao criar build!
    echo.
    echo Verifique se todas as dependencias foram instaladas.
    echo.
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
echo     ✅ INSTALACAO CONCLUIDA COM SUCESSO!
echo.
echo ==========================================================
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   PROXIMOS PASSOS:
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo   1. BAIXAR MODELOS DE IA (necessario para funcionar)
echo.
echo      Execute o arquivo:
echo        download-models.bat
echo.
echo   2. INICIAR O PROGRAMA
echo.
echo      Execute o arquivo:
echo        start.bat
echo.
echo      Ou manualmente:
echo        npm run dev
echo.
echo      O programa sera aberto no navegador em:
echo        http://localhost:5173
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo Deseja baixar os modelos de IA agora?
echo.
echo   S = Sim, baixar agora
echo   N = Nao, vou baixar depois
echo.
set /p BAIXAR_MODELOS="Digite S ou N e pressione Enter: "

if /i "%BAIXAR_MODELOS%"=="S" (
    echo.
    echo Iniciando download dos modelos...
    echo.
    call download-models.bat
)

echo.
echo ==========================================================
echo.
echo by rogerelizar
echo.
pause
