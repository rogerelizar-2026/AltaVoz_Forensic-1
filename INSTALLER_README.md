# 📦 Guia do Instalador - AltaVoz Forensic-1

## O que é o Instalador?

O instalador do AltaVoz Forensic-1 é um conjunto de scripts que automatizam todo o processo de instalação e configuração do sistema. Ele verifica as dependências, instala os pacotes necessários e configura o ambiente para uso.

---

## 🎯 Para Quem é Este Instalador?

- **Usuários iniciantes** que não têm experiência com linha de comando
- **Profissionais** que precisam instalar o sistema rapidamente
- **Administradores** que precisam configurar o sistema em múltiplas máquinas

---

## 📋 O que o Instalador Faz?

O instalador automático executa as seguintes tarefas:

1. ✓ Verifica se o Node.js está instalado (e instala se necessário)
2. ✓ Verifica se o npm está disponível
3. ✓ Instala todas as dependências do projeto
4. ✓ Cria a estrutura de diretórios necessária
5. ✓ Verifica se o build funciona corretamente
6. ✓ Configura o ambiente para uso

---

## 🚀 Como Usar o Instalador

### Windows

1. Abra a pasta do projeto `altavoz-forensic-1`
2. Clique duas vezes no arquivo `scripts\install.bat`
3. Aguarde a instalação completar
4. Siga as instruções na tela

### Linux / macOS

1. Abra o Terminal
2. Navegue até a pasta do projeto:
   ```bash
   cd altavoz-forensic-1
   ```
3. Dê permissão de execução ao script:
   ```bash
   chmod +x scripts/install.sh
   ```
4. Execute o instalador:
   ```bash
   ./scripts/install.sh
   ```
5. Aguarde a instalação completar

---

## 📥 Download de Modelos de IA

Após a instalação, você precisa baixar os modelos de inteligência artificial:

### Windows
```bash
scripts\download-models.bat
```

### Linux / macOS
```bash
bash scripts/download-models.sh
```

Os modelos ocupam aproximadamente **700MB** de espaço em disco.

---

## ✅ Verificação da Instalação

Após a instalação, execute:

```bash
npm run dev
```

Se tudo estiver correto, você verá:
```
  VITE v6.3.5  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Abra o navegador e acesse: **http://localhost:5173**

---

## 🐛 Problemas Comuns

### "Node.js não encontrado"

**Solução:**
1. Acesse https://nodejs.org
2. Baixe a versão LTS (recomendada)
3. Instale e reinicie o terminal
4. Execute o instalador novamente

### "Permissão negada" (Linux/macOS)

**Solução:**
```bash
chmod +x scripts/install.sh
chmod +x scripts/download-models.sh
```

### "Erro ao baixar modelos"

**Solução:**
- Verifique sua conexão com a internet
- Tente novamente mais tarde
- Baixe os modelos manualmente (veja instruções no README.md)

### "Porta 5173 já está em uso"

**Solução:**
```bash
npm run dev -- --port 3000
```

---

## 📊 Tempo de Instalação

| Etapa | Tempo Estimado |
|-------|----------------|
| Verificação de dependências | 10 segundos |
| Instalação de pacotes | 2-5 minutos |
| Download de modelos | 10-30 minutos |
| Configuração final | 30 segundos |
| **Total** | **15-35 minutos** |

*O tempo varia conforme a velocidade da sua conexão com a internet.*

---

## 🎓 Próximos Passos

Após a instalação:

1. **Leia o Guia do Usuário** - Na aba "Guia do Usuário" da interface
2. **Explore a Interface** - Clique nos menus e descubra os recursos
3. **Importe um Áudio** - Teste com uma gravação curta
4. **Transcreva** - Veja como funciona a transcrição automática
5. **Identifique Falantes** - Descubra quem está falando

---

## 📞 Suporte

Se tiver problemas durante a instalação:

1. **Verifique os requisitos** do sistema (veja README.md)
2. **Consulte a seção de problemas comuns** acima
3. **Leia os logs** na tela para identificar o erro
4. **Entre em contato** com o suporte técnico

---

## 📝 Notas Importantes

- O instalador **não envia nenhum dado** para servidores externos
- Todo o processamento ocorre **localmente** no seu computador
- Os modelos de IA são baixados **uma única vez** e armazenados localmente
- Você pode **reexecutar o instalador** sem problemas se algo der errado

---

## 🎉 Instalação Concluída!

Parabéns! Você instalou com sucesso o AltaVoz Forensic-1.

Agora você pode:
- ✓ Analisar gravações de áudio de forma profissional
- ✓ Transcrever fala em texto com alta precisão
- ✓ Identificar falantes automaticamente
- ✓ Melhorar a qualidade do áudio
- ✓ Exportar resultados em diversos formatos

**Bom trabalho!**

---

**by rogerelizar**
