# 🔧 Node.js Instalado mas Não Encontrado - SOLUÇÃO

## Problema
Você instalou o Node.js 24, mas o instalador diz:
```
❌ Node.js NÃO ENCONTRADO!
```

## Causa
O Windows não consegue encontrar o Node.js porque o **PATH não foi configurado** durante a instalação.

---

## ✅ SOLUÇÕES DISPONÍVEIS

### 🚀 SOLUÇÃO 1: Instalador Universal (MAIS FÁCIL)
**Arquivo:** `INSTALAR-UNIVERSAL.bat`

**Quando usar:** Primeira tentativa, mais simples

**O que faz:**
- ✓ Procura o Node.js em todos os locais comuns
- ✓ Detecta automaticamente a versão
- ✓ Configura o PATH automaticamente
- ✓ Funciona com qualquer versão do Node.js

**Como usar:**
```bash
# Dê duplo clique em:
INSTALAR-UNIVERSAL.bat
```

---

### 🔧 SOLUÇÃO 2: Instalador Manual (MAIS CONTROLE)
**Arquivo:** `INSTALAR-MANUAL.bat`

**Quando usar:** Se você sabe onde o Node.js está instalado

**O que faz:**
- ✓ Permite especificar o caminho do Node.js
- ✓ Configura o PATH para a sessão atual
- ✓ Funciona com qualquer versão

**Como usar:**
```bash
# 1. Dê duplo clique em:
INSTALAR-MANUAL.bat

# 2. Quando pedir o caminho, digite:
#    Exemplo: C:\Program Files\nodejs
```

**Como encontrar o caminho:**
1. Pressione `Win + S` (buscar)
2. Digite: `node.exe`
3. Clique com botão direito → "Abrir local do arquivo"
4. Copie o caminho da barra de endereço

---

### 🔄 SOLUÇÃO 3: Reinstalar Node.js (MAIS CONFIÁVEL)
**Quando usar:** Se nada mais funcionar

**O que faz:**
- ✓ Reinstala o Node.js corretamente
- ✓ Configura o PATH automaticamente
- ✓ Solução definitiva

**Como usar:**

**Passo 1: Desinstalar**
1. Pressione `Win + I` (Configurações)
2. Vá em **Aplicativos** → **Aplicativos instalados**
3. Procure **Node.js**
4. Clique em **Desinstalar**

**Passo 2: Baixar**
1. Acesse: https://nodejs.org/pt-br/download
2. Clique no botão verde **"LTS"**
3. Aguarde o download

**Passo 3: Instalar**
1. Execute o instalador baixado
2. Clique em **Next** em todas as telas
3. **MUITO IMPORTANTE:** Marque a opção **"Add to PATH"**
4. Clique em **Install**
5. Clique em **Finish**

**Passo 4: Reiniciar**
Reinicie o computador

**Passo 5: Testar**
Abra um novo Prompt de Comando e execute:
```cmd
node --version
```
Deve aparecer: `v24.x.x`

**Passo 6: Instalar AltaVoz**
```bash
INSTALAR.bat
```

---

## 📋 RESUMO DAS SOLUÇÕES

| Solução | Arquivo | Dificuldade | Tempo | Quando Usar |
|---------|---------|-------------|-------|-------------|
| **Universal** | `INSTALAR-UNIVERSAL.bat` | Fácil | 1 min | Primeira tentativa |
| **Manual** | `INSTALAR-MANUAL.bat` | Médio | 5 min | Se universal falhar |
| **Reinstalar** | - | Fácil | 15 min | Se nada funcionar |

---

## 🔍 DIAGNÓSTICO

Se não sabe qual solução usar, execute:

```bash
# Dê duplo clique em:
DIAGNOSTICO.bat
```

Este script vai:
- ✓ Verificar se o Node.js está instalado
- ✓ Mostrar onde está instalado
- ✓ Verificar se está no PATH
- ✓ Sugerir a melhor solução

---

## 📖 GUIAS VISUAIS

### Guia Visual Interativo
```bash
# Abra no navegador:
SOLUCAO-NODEJS.html
```
Guia com abas, cores e instruções passo a passo.

### Guia em Texto
```bash
# Leia o arquivo:
SOLUCAO-NODEJS.md
```
Instruções detalhadas em texto.

---

## 💡 DICAS IMPORTANTES

### Como Saber se o Node.js está no PATH

Abra o Prompt de Comando e execute:
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
REM Use a Solução 1 ou 2
```

---

## ✅ CHECKLIST ANTES DE INSTALAR

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

## 🆘 AINDA COM PROBLEMAS?

### Verificação Completa

Execute este script de diagnóstico:
```bash
DIAGNOSTICO.bat
```

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

## 📞 FLUXO RECOMENDADO

```
1. Execute: DIAGNOSTICO.bat
   ↓
2. Siga a recomendação do diagnóstico
   ↓
3. Se recomendado, execute: INSTALAR-UNIVERSAL.bat
   ↓
4. Se não funcionar, execute: INSTALAR-MANUAL.bat
   ↓
5. Se ainda não funcionar, reinstale o Node.js (Solução 3)
   ↓
6. Execute: INSTALAR.bat
```

---

## 🎯 RESUMO FINAL

### Para Usuários Leigos
**Use:** `SOLUCAO-NODEJS.html` (guia visual)

### Para Usuários Avançados
**Use:** `INSTALAR-UNIVERSAL.bat` (mais rápido)

### Para Problemas Persistentes
**Use:** Reinstalar o Node.js (Solução 3)

---

**by rogerelizar**

AltaVoz Forensic-1 - Inteligência de Áudio Forense
