@echo off
REM ============================================================
REM AltaVoz Forensic-1 - Instalador Unificado (Windows)
REM ============================================================
REM Este é o ÚNICO arquivo que você precisa executar
REM ============================================================

echo.
echo ==========================================================
echo.
echo     🎙️  AltaVoz Forensic-1 - Instalador
echo.
echo ==========================================================
echo.

REM Verificar se está no diretório correto
if not exist "package.json" (
    echo ❌ ERRO: Arquivo package.json nao encontrado!
    echo.
    echo Este script deve ser executado na pasta raiz do projeto.
    echo Certifique-se de estar na pasta: altavoz-forensic-1\
    echo.
    echo Dica: Navegue ate a pasta correta no Prompt de Comando:
    echo   cd C:\caminho\para\altavoz-forensic-1
    echo.
    pause
    exit /b 1
)

echo ✓ Diretorio correto detectado
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
echo      Execute o comando:
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
