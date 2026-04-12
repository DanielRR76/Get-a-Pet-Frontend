# Get a Pet Frontend

Frontend web do projeto Get a Pet, construído em React. A aplicação consome uma API backend para autenticação, cadastro de pets, gerenciamento de perfil e fluxo de adoção.

## Visão geral

O repositório contém dois frontends:

- `./`: aplicação principal atual, em React com `react-scripts`.
- `./my-app`: projeto de transição, recriado com React, TypeScript e Vite.

Hoje a aplicação da raiz continua sendo a versão funcional principal. A pasta `my-app/` representa a evolução do frontend, com ferramentas mais atuais e uma base mais alinhada a boas práticas.

## Funcionalidades atuais

- Cadastro e login de usuários.
- Edição de perfil.
- Listagem de pets para adoção.
- Cadastro e edição de pets.
- Visualização de pets do usuário.
- Visualização das adoções do usuário.
- Alternância de tema com persistência em `localStorage`.

## Requisitos

- Node.js 20 ou superior.
- npm.
- Backend do Get a Pet em execução.

## Configuração

Crie um arquivo `.env` na raiz do projeto com a URL da API backend:

```env
REACT_APP_API_URL=http://localhost:3030
```

Essa variável é usada em `src/utils/api.js` como `baseURL` do Axios.

## Como rodar localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run start
```

## Acesso local

A aplicação principal usa `BrowserRouter` com `basename="/Get-a-Pet-Frontend"`.

Por isso, no ambiente local, o acesso esperado é:

```text
http://localhost:3000/Get-a-Pet-Frontend
```

## Scripts disponíveis

Na raiz do projeto:

```bash
npm run start
```

Inicia a aplicação em modo de desenvolvimento.

```bash
npm run build
```

Gera a build de produção em `build/`.

```bash
npm run test
```

Executa os testes configurados pelo `react-scripts`.

```bash
npm run deploy
```

Publica a build no GitHub Pages. O projeto já possui `homepage` configurada e um `postbuild` que cria `build/404.html` para fallback de rotas.

## Docker

Também é possível subir a aplicação com Docker:

```bash
docker compose up --build
```

Depois disso, a aplicação fica disponível em:

```text
http://localhost:3001
```

Observação importante: o build Docker copia o arquivo `.env` da raiz para dentro da imagem. Ou seja, a variável `REACT_APP_API_URL` precisa estar definida nesse arquivo antes do build.

## Estrutura principal

```text
src/
	components/
		form/
		layout/
		pages/
	context/
	hooks/
	utils/
```

Pontos relevantes:

- `src/App.js`: configuração de rotas da aplicação.
- `src/context/UserContext.js`: contexto de autenticação.
- `src/hooks/useAuth.js`: login, logout e registro.
- `src/utils/api.js`: cliente Axios apontando para o backend.

## Projeto de transição em `my-app/`

A pasta `my-app/` contém o projeto de transição do frontend.

Ela está sendo recriada com ferramentas mais atualizadas e uma estrutura mais moderna, usando:

- React
- TypeScript
- Vite
- ESLint com configuração mais atual

Para rodá-la de forma isolada:

```bash
cd my-app
npm install
npm run dev
```

Essa versão ainda está em transição e não substitui a aplicação principal da raiz neste momento.
