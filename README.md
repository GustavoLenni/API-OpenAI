
# 🚀 API OpenAI: Serviço de Perguntas e Respostas com Node.js e OpenAI

## 📝 Descrição

Este projeto implementa um serviço backend em **Node.js** que utiliza a **API da OpenAI** para gerar respostas a perguntas enviadas por usuários. A arquitetura segue o padrão **MVC** (Model-View-Controller), separando responsabilidades em controllers, services, routes e o arquivo principal `index.js`.

O sistema recebe requisições HTTP contendo uma pergunta, processa essa pergunta através da OpenAI e retorna a resposta gerada de forma clara e objetiva. 🤖💬

---

## 🗂️ Estrutura do Projeto

* **controllers/**  
  Gerenciam a lógica das requisições e respostas HTTP, fazendo a validação dos dados recebidos e a chamada dos serviços correspondentes.

* **services/**  
  Contêm a lógica de negócio, incluindo a comunicação direta com a API da OpenAI para gerar respostas.

* **routes/**  
  Definem os endpoints da aplicação e mapeiam as rotas para os controllers adequados.

* **index.js**  
  Ponto de entrada do servidor, responsável pela configuração do Express, middlewares e inicialização das rotas.

---

## 🛠️ Tecnologias e Ferramentas

* **Node.js** (JavaScript runtime para backend) ⚙️  
* **Express.js** (Framework para servidor HTTP) 🌐  
* **OpenAI API** (Geração de texto inteligente via modelo GPT) 🤖  
* **dotenv** (Gerenciamento de variáveis de ambiente) 🔒  
* **MVC** (Padrão de arquitetura para organização do código) 🏗️  

---

## 📋 Pré-requisitos

* Node.js instalado (versão 14+ recomendada) ✔️  
* Chave API válida da OpenAI 🔑  
* Editor de código (VSCode, WebStorm, etc.) 💻  

---

## ⚙️ Instalação e Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/seuusuario/seuprojeto.git
   cd seuprojeto
```

2. Instale as dependências:

   ```bash
   npm install
```

3. Crie um arquivo `.env` na raiz do projeto com sua chave da OpenAI:

   ```
   OPENAI_API_KEY=seu_token_aqui
   ```

4. Execute o servidor:

   ```bash
   node index.js
   ```

O servidor estará disponível em `http://localhost:3000` (ou porta configurada). 🚀

---

## 💡 Uso

Envie uma requisição POST para o endpoint `/perguntar` com um corpo JSON contendo a pergunta:

```json
{
  "pergunta": "O que é Node.js?"
}
```

A resposta será um JSON contendo o texto gerado pelo modelo:

```json
{
  "resposta": "Node.js é um ambiente de execução para JavaScript no lado do servidor..."
}
```

