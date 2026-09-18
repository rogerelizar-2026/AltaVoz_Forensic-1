# 🚨 SOLUÇÃO RÁPIDA DE PROBLEMAS

## Problema: "Arquivo package.json não encontrado"

### ✅ Solução em 3 Passos:

#### Passo 1: Localizar a pasta do projeto

Abra o **Windows Explorer** e procure a pasta onde você baixou o projeto. Ela deve ter estes arquivos:

```
📁 altavoz-forensic-1/
   📄 package.json          ← ESTE ARQUIVO DEVE EXISTIR
   📄 install.bat
   📄 download-models.bat
   📁 src/
   📁 public/
```

#### Passo 2: Abrir o terminal na pasta correta

**Opção A - Windows 11:**
1. Abra a pasta do projeto no Windows Explorer
2. Clique na **barra de endereço** (onde mostra o caminho)
3. Digite `cmd` e pressione **Enter**

**Opção B - Windows 10:**
1. Abra a pasta do projeto no Windows Explorer
2. Clique com o **botão direito** em um espaço vazio
3. Selecione **"Abrir janela de comando aqui"** ou **"Abrir no Terminal"**

**Opção C - Manual:**
1. Abra o **Prompt de Comando** (cmd)
2. Navegue até a pasta usando o comando `cd`:
   ```
   cd C:\Users\SeuNome\Downloads\altavoz-forensic-1
   ```
   (substitua pelo caminho real da sua pasta)

#### Passo 3: Executar o instalador

No terminal que abriu na pasta correta, digite:

```
INSTALAR.bat
```

e pressione **Enter**.

---

## 📋 Resumo Visual

### ❌ ERRADO:
```
C:\Users\SeuNome> INSTALAR.bat
❌ Erro: package.json não encontrado
```
*(Você está na pasta do usuário, não na pasta do projeto)*

### ✅ CERTO:
```
C:\Users\SeuNome\Downloads\altavoz-forensic-1> INSTALAR.bat
✓ Projeto encontrado!
✓ Instalando...
```
*(Você está na pasta do projeto)*

---

## 🔍 Como saber se estou na pasta certa?

Digite este comando no terminal:

```
dir package.json
```

**Se aparecer `package.json` na lista** → Você está na pasta certa! ✅

**Se aparecer erro** → O arquivo não existe nesta pasta ❌

---

## 💡 Dicas Importantes

1. **O projeto foi baixado como ZIP?**
   - Extraia o ZIP antes de instalar
   - Clique com botão direito → "Extrair tudo"

2. **Não sabe onde está a pasta?**
   - Procure por "package.json" no Windows Explorer
   - Use a busca do Windows: pressione `Win + S` e digite "package.json"

3. **Ainda com problemas?**
   - Execute `INSTALAR.bat` (com letras maiúsculas)
   - Este instalador é mais inteligente e ajuda a encontrar a pasta

---

## 🆘 Preciso de mais ajuda?

1. Verifique se o arquivo `package.json` existe na pasta
2. Certifique-se de estar executando o instalador **dentro** da pasta do projeto
3. Se necessário, digite o caminho completo da pasta quando o instalador pedir

---

**by rogerelizar**
