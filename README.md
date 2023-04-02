# Yellow Pages

Esta aplicação funciona como uma lista telefônica. É possível registrar-se, fazer login e cadastrar todos os seus contatos com nome, email e telefone. Além disso é possível excluir e editar esses contatos, bem como a conta do próprio usuário em questão.

---

## Iniciando:

Para iniciar a aplicação basta seguir o scrip abaixo:

Na pasta yellow-pages onde se encontra o backend da aplicação. Escreva o seguinte comando no terminal:
### `yarn` ou `yarn install`

<br>

Crie um arquivo .env, seguindo o arquivo .env.exemple (é necessário criar um database usando postgresql).

<br>

Para rodar as migrações:

Ainda em yellow-pages, crie uma pasta chamada migrations dentro de src.

No arquivo data-source.ts faça a substituição abaixo apenas em migrations e apague a linha 6.

`migrations: [path.join(__dirname, "./migrations/**.{js,ts}")]`

Em seguida rode o seguinte comando no terminal:

`yarn typeorm migration:generate  src/migrations/initial -d src/data-source.ts`

Dentro da pasta migrations um arquivo foi criado, dentro desse arquivo na linha 4 em name, copie o conteúdo que esta entre as aspas é uma série de numeros precedidos pela palavra inicial.

Vá para data-source.ts, lá cole o que copiou em migrations entre [] e faça o devido import também. Para completar a migração, no terminal:

`yarn typeorm migration:run -d src/data-source.ts`

As migrations foram concluídas.

## Scripts

Ainda na pasta yellow-pages do projeto no terminal rode o seguinte comando:

### `yarn dev`

<br>

Vá para a pasta yellow-front e rode o seguinte comando (clique em + no canto do terminal e abra um novo terminal gitbash, deixe o do yellow-pages rodando o servidor):

### `yarn` ou `yarn install`

Em seguida:
### `yarn run dev`

O terminal mostrará o link para abrir a aplicação em seu navegador. 
O link provavelmente será [http://127.0.0.1:5173/](http://127.0.0.1:5173/) para visualização. 

A página irá atualizar automaticamente todas as vezes que forem feitas mudanças no código.\
É possível também no console ver todos os erros.

Agora é também possível abrir o insomnia e lá fazer as requisições, segue abaixo arquivo para importar:

Caso não deseje importar, apenas abra o insomnia e em um novo ambiente faça uma requisição do tipo POST usando a URL [http://127.0.0.1:3000/users/](http://127.0.0.1:3000/users/)

---

## Modo de usar pelo insomnia:

<br>

## **Usuário**

---
## 1. Criar conta

- POST /users

Request:

```json
{
  "name": "Teste",
  "email": "Teste@gmail.com",
  "password": "1234",
  "phone": "666666666"
}
```

## 2. Login

- POST /login

Request:

```json
{
  "name": "Teste",
  "password": "1234"
}
```
---

## 3. Listar usuário

- GET /users/owner
- Corpo da requisição é vazio.
- Um usuário só pode listar sua própria conta, uma vez que através daqui é possível receber um array com todos os seus contatos.
- Author: Bearer Token

Response:

```json
{
  "id": "",
  "name": "Teste",
  "email": "Teste@gmail.com",
  "phone": "666666666",
  "createdAt": "",
  "contacts": []
}
```
---

## 4. Atualizar usuário

- PATCH /users/owner
- É possível atualizar apenas o nome, ou apenas o email ou os três campos ao mesmo tempo, no exemplo abaixo estou atualizando apenas o nome, mas basta passar as informações desejadas no corpo do json.
- Auth: Bearer Token

Request:

```json
{
  "name": "TesteAtt"
}
```
---

## 5. Deletar usuário

- DELETE /users/owner
- Auth: Bearer Token
- Corpo da requisição é vazio.
- Para verificar se o usuário foi mesmo excluido basta tentar fazer login novamente.

---

<br>

## **Contatos**

---

## 1. Criar contatos

- POST /contacts/
- Auth: Bearer Token

Request:

```json
{
  "name": "Contact1",
  "email": "contact1@gmail.com",
  "phone": "707070707070"
}
```

Response

```json
{
  "name": "Contact1",
  "email": "contact1@gmail.com",
  "phone": "707070707",
  "users": {
    "id": "id do usuário logado no caso o Teste",
    "name": "Teste",
    "email": "teste@gmail.com",
    "phone": "6666666666",
    "createdAt": "",
    "contacts": []
  },
  "id": "id do contato, contact1",
  "createdAt": ""
}
```

---

## 3.1 Listar contatos

- GET /contacts/
- Auth: Bearer Token
- Requisição de corpo vazio.

Response:

```json
[
  {
    "id": "",
    "name": "Contact1",
    "email": "contact1@gmail.com",
    "phone": "707070707070",
    "createdAt": ""
  }
]
```

---

## 3.1 Listar contatos por ID

- GET /contacts/:id
- Auth: Bearer Token
- Requisição de corpo vazio
- No listar sem ID você pega todos os contatos que o Teste tem, aqui você pega um contato específico.

Response:

```json
[
  {
    "id": "id passado na URL",
    "name": "Contact1",
    "email": "contact1@gmail.com",
    "phone": "707070707070",
    "createdAt": ""
  }
]
```
---

## 3.2 Atualizar contatos

- PATCH /contacts/:id
- Auth: Bearer Token
- Se listar todos os contatos novamente poderá ver a atualização feita no contato do ID passado.

Request:

```json
{
  "name": "Contato que deletarei"
}
```

---

## 3.3 Deletar contato

- DELETE /contacts/:id
- Auth: Bearer Token
- Requisição com corpo vazio.
- Para verificar se o contato do ID passado foi deletado, basta listar todos os contatos de novo ou listar usuario e ver a lista de contato dele.

---
