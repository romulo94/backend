# Community Bank - Backend

## Instalando Docker

### Docker e Compose para Windows

- **Docker e Compose** _[Documentação](https://docs.docker.com/docker-for-windows/install/ "Documentação Docker") e [Download](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe "Página de download Docker e Compose")_

### Docker/Compose para Linux

- **Docker** _[Documentação](https://docs.docker.com/install/linux/docker-ee/ubuntu/) e download._

- **Compose** _[Docmentação](https://docs.docker.com/compose/install/) e download._

## Utilizando Docker

- Abra uma janela do seu terminal favorito no repositório do projeto.
- Instale as dependências:

```
 yarn
```

- Crie o arquivo `.env` (veja o exemplo do `.env.default`):
- Para iniciar os containers rode o comando:

  ```
  docker-compose up
  ```

  **Não feche a janela do terminal!**
  **OBS: Se estiver no ubuntu provavelmente deverá rodar o `docker` com `sudo`**

  **CTRL + C** para encerrar os containers.

- Para recriar os containers utilize:

  ```
  docker-compose up --build
  ```

- Depois de baixar e iniciar os containers, para acessá-los na linha de comando utilize:

  ```
  docker exec -it NOME_DO_CONTAINER sh
  ```

  Os nomes dos Containers poderão ser encontrados através do comando `docker container ls` no campo **NAMES**

- No browser acesse:

  - [http://localhost:80](http://localhost:80) Postgres **PgAdmin**
  - [http://localhost:3001](http://localhost:3001) Aplicação **Node**

- Utilitarios
  - Iniciar os container no _modo detach_ (background mode) `docker-compose up -d`
  - Parar todos os containers `docker stop $(docker ps -a -q)`
  - Apagar todos os containers `docker rm $(docker ps -a -q)`

## Habilitando eslint

- Nas extensões instalar Eslint e prettier
- logo após, entrar nas settings.json do editor ( Caso for VsCode ) e colocar : `"editor.formatOnSave: true"` e `"prettier.esLintIntegration": true`

## Iniciando o projeto

- Após instalas as dependências usando `yarn ` ou `yarn install` execute `yarn dev`
