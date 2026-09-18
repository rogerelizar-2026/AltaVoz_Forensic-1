# 🔧 Solução: Node.js Instalado mas Não Encontrado

## Problema
Você instalou o Node.js 24, mas o instalador diz:
```
❌ Node.js NÃO ENCONTRADO!
```

## Causa
O Windows não consegue encontrar o Node.js porque:
- O PATH não foi configurado durante a instalação
- O Node.js foi instalado em um local não padrão
- A variável de ambiente PATH não foi atualizada

---

## ✅ Solução 1: Usar o Instalador Universal (RECOMENDADO)

O instalador universal detecta o Node.js em qualquer local:

```bash
# Dê duplo clique em:
INSTALAR-UNIVERSAL.bat
```

Este instalador:
- ✓ Procura em todos os locais comuns
- ✓ Permite digitar o caminho manualmente
- ✓ Funciona com qualquer versão do Node.js
- ✓ Adiciona o Node.js ao PATH automaticamente

---

## ✅ Solução 2: Encontrar o Node.js Manualmente

### Passo 1: Localizar o node.exe

Abra o **Windows Explorer** e procure em estes locais:

```
C:\Program Files\nodejs\node.exe
C:\Program Files (x86)\nodejs\node.exe
C:\Users\SEU_USUARIO\AppData\Roaming\npm\node.exe
C:\Users\SEU_USUARIO\AppData\Local\Programs\nodejs\node.exe
C:\Users\SEU_USUARIO\nodejs\node.exe
```

**Dica:** Use a busca do Windows:
1. Pressione `Win + S`
2. Digite: `node.exe`
3. Anote o caminho completo

### Passo 2: Testar o Node.js

Abra o **Prompt de Comando** e execute:

```cmd
"C:\caminho\completo\para\node.exe" --version
```

Exemplo:
```cmd
"C:\Program Files\nodejs\node.exe" --version
```

Se aparecer `v24.x.x`, o Node.js está funcionando!

### Passo 3: Executar o Instalador

Use o instalador universal e digite o caminho quando pedir:

```bash
INSTALAR-UNIVERSAL.bat
```

Quando pedir o caminho do Node.js, cole o caminho completo do `node.exe`.

---

## ✅ Solução 3: Adicionar Node.js ao PATH

### Passo 1: Abrir Variáveis de Ambiente

1. Pressione `Win + R`
2. Digite: `sysdm.cpl`
3. Pressione **Enter**
4. Clique na aba **Avançado**
5. Clique em **Variáveis de Ambiente**

### Passo 2: Editar o PATH

1. Em **Variáveis do sistema**, procure `Path`
2. Clique em **Editar**
3. Clique em **Novo**
4. Adicione o caminho do Node.js:

```
C:\Program Files\nodejs
```

(ou o caminho onde você encontrou o `node.exe`)

5. Clique em **OK** em todas as janelas

### Passo 3: Reiniciar o Terminal

**IMPORTANTE:** Feche TODAS as janelas do Prompt de Comando e abra uma nova.

### Passo 4: Testar

```cmd
node --version
```

Deve aparecer: `v24.x.x`

### Passo 5: Executar o Instalador

```bash
INSTALAR.bat
```

---

## ✅ Solução 4: Reinstalar o Node.js

Se nada funcionar, reinstale o Node.js:

### Passo 1: Desinstalar

1. Pressione `Win + I` (Configurações)
2. Vá em **Aplicativos** → **Aplicativos instalados**
3. Procure **Node.js**
4. Clique em **Desinstalar**

### Passo 2: Baixar Novamente

1. Acesse: https://nodejs.org/pt-br/download
2. Baixe a versão **LTS** (botão verde)
3. Execute o instalador

### Passo 3: Instalar Corretamente

**MUITO IMPORTANTE:** Durante a instalação:

1. ✓ Aceite os termos
2. ✓ Mantenha o caminho padrão
3. ✓ **MARQUE a opção "Add to PATH"** ← ESSENCIAL!
4. ✓ Mantenha as outras opções padrão
5. ✓ Clique em **Install**
6. ✓ Clique em **Finish**

### Passo 4: Reiniciar o Computador

Reinicie o computador para garantir que o PATH seja atualizado.

### Passo 5: Testar

Abra um **novo** Prompt de Comando e execute:

```cmd
node --version
```

Deve aparecer: `v24.x.x`

### Passo 6: Executar o Instalador

```bash
INSTALAR.bat
```

---

## 🔍 Como Verificar se o Node.js está no PATH

Abra o **Prompt de Comando** e execute:

```cmd
where node
```

**Se aparecer um caminho:**
```
C:\Program Files\nodejs\node.exe
```
✓ O Node.js está no PATH!

**Se aparecer erro:**
```
INFO: Could not find files for the given pattern(s).
```
✗ O Node.js NÃO está no PATH!

---

## 📋 Resumo das Soluções

| Solução | Dificuldade | Tempo | Quando Usar |
|---------|-------------|-------|-------------|
| Instalador Universal | Fácil | 1 min | Primeira tentativa |
| Encontrar Manualmente | Médio | 5 min | Se o universal falhar |
| Adicionar ao PATH | Médio | 10 min | Se encontrar o node.exe |
| Reinstalar | Fácil | 15 min | Se nada funcionar |

---

## 💡 Dicas Importantes

### Verificação Rápida

```cmd
REM Verificar se node está no PATH
where node

REM Verificar versão
node --version

REM Verificar npm
npm --version
```

### Caminhos Comuns do Node.js

```
Windows 64-bit:
  C:\Program Files\nodejs\node.exe

Windows 32-bit:
  C:\Program Files (x86)\nodejs\node.exe

Usuário atual:
  C:\Users\SEU_USUARIO\AppData\Local\Programs\nodejs\node.exe
  C:\Users\SEU_USUARIO\AppData\Roaming\npm\node.exe
```

### Teste Rápido

```cmd
REM Testar Node.js diretamente
"C:\Program Files\nodejs\node.exe" --version

REM Se funcionar, o problema é o PATH
REM Use a Solução 3 ou 4
```

---

## 🆘 Ainda com Problemas?

### Verificação Completa

Execute este script de diagnóstico:

```cmd
@echo off
echo === Diagnóstico do Node.js ===
echo.
echo 1. Verificando PATH...
where node
echo.
echo 2. Verificando versão...
node --version
echo.
echo 3. Verificando npm...
npm --version
echo.
echo 4. Procurando node.exe...
dir "C:\Program Files\nodejs\node.exe" 2>nul
dir "C:\Program Files (x86)\nodejs\node.exe" 2>nul
dir "%LOCALAPPDATA%\Programs\nodejs\node.exe" 2>nul
echo.
pause
```

Salve como `diagnostico.bat` e execute.

### Informações para Suporte

Se precisar de ajuda, forneça:

1. **Versão do Windows:**
   ```cmd
   ver
   ```

2. **Caminho do Node.js:**
   ```cmd
   where node
   ```

3. **Versão do Node.js:**
   ```cmd
   node --version
   ```

4. **Variável PATH:**
   ```cmd
   echo %PATH%
   ```

---

## ✅ Checklist Final

Antes de executar o instalador, verifique:

- [ ] Node.js está instalado
- [ ] `node --version` funciona no Prompt de Comando
- [ ] `npm --version` funciona no Prompt de Comando
- [ ] Estou na pasta do projeto (tem `package.json`)
- [ ] Executei o instalador como administrador (se necessário)

Se tudo estiver ✓, execute:

```bash
INSTALAR.bat
```

---

**by rogerelizar**

AltaVoz Forensic-1 - Inteligência de Áudio Forense
