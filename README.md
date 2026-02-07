# TypeScript Scaffold

Este repositório é um **scaffold inicial** para projetos Node.js com TypeScript, configurado com boas práticas de desenvolvimento, linting, formatação e testes.

## 🚀 Tecnologias e Ferramentas

O projeto já vem configurado com as seguintes tecnologias:

- **[Node.js](https://nodejs.org/)** & **[TypeScript](https://www.typescriptlang.org/)**: Ambiente de execução e linguagem.
- **[Express](https://expressjs.com/)**: Framework web rápido e minimalista.
- **[Vitest](https://vitest.dev/)**: Framework de testes unitários e e2e (compatível com Jest).
- **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)**: Padronização e formatação de código.
- **[Husky](https://typicode.github.io/husky/)** & **[lint-staged](https://github.com/okonet/lint-staged)**: Hooks do Git para garantir qualidade antes do commit.
- **Path Aliases**: Configuração de imports absolutos (ex: `@domain/`, `@presenters/`).

## 📂 Estrutura do Projeto

A estrutura de pastas segue princípios de **Clean Architecture / DDD**:

```
src/
├── app/          # Configurações da aplicação (App factory)
├── domain/       # Entidades e Interfaces de domínio (Core Business Logic)
├── infra/        # Implementações de infraestrutura (Banco de dados, adapters)
├── presenters/   # Camada de apresentação (Controllers, Routes)
│   ├── controllers/
│   └── routes/
├── app.ts        # Setup do Express
└── server.ts     # Ponto de entrada (Entry point)
```

## 🛠️ Instalação e Configuração

1. **Clone o repositório:**

   ```bash
   git clone <url-do-repositorio>
   cd typescript-scafold
   ```

2. **Instale as dependências:**

   ```bash
   yarn install
   # ou
   npm install
   ```

3. **Configuração de Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto (baseado em algum exemplo, se houver) ou defina as variáveis necessárias.
   O projeto espera, por exemplo, `PORT` (padrão 3000).

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

- **`yarn dev` / `npm run dev`**: Inicia o servidor de desenvolvimento com hot-reload (`ts-node`).
- **`yarn start` / `npm start`**: Inicia o servidor em produção (após build).
- **`yarn build` / `npm run build`**: Compila o código TypeScript para JavaScript na pasta `dist/`.
- **`yarn test` / `npm test`**: Executa os testes com Vitest.
- **`yarn format` / `npm run format`**: Formata o código com Prettier.
- **`yarn prepare`**: Instala os hooks do Husky.

## 🧪 Testes

Os testes são executados utilizando o **Vitest**. A estrutura de testes está localizada na pasta `tests/`.

```bash
# Rodar todos os testes
yarn test
```

## 🤝 Contribuição

Antes de realizar um commit, o **Husky** irá executar automaticamente o linting e formatação nos arquivos modificados para garantir a qualidade do código.

---

Desenvolvido com 💙
