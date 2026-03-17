# expo-mobile

## Telas

Este projeto apresenta um aplicação expo com telas diferentes e interligadas, integradas a uma API json-server.

### Telas

- Login: 1 imagem, 2 inputs e dois botões
- Cadastro: 4 inputs e 1 botão
- Lista de Contatos: cards de mock data
- Adicionar Contato: 3 inputs e 1 botão
- Editar Contato: 3 inputs e 2 botões

### Fluxos

[tela -> destino de navegação1, destino de navegação2...]

- Login -> Cadastro, Lista de Contatos
- Cadastro -> Lista de Contatos
- Lista de Contatos -> Adicionar Contato, Editar Contato
- Adicionar Contato -> Lista de Contatos
- Editar Contato -> Lista de Contatos

### Como rodar

Para rodar a aplicação será preciso iniciar o json-server primeiramente.

1.  Crie um diretório vazio e nele rode o seguinte comando:
   
`npm install -g json-server`

3. Crie um arquivo chamado **db.json** e cole o seguinte:
   
```
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@mail.com",
      "cpf": "1",
      "password": 123456,
      "contacts": []
    }
  ]
}
```

3. Rode o seguinte comando para inicializar o json-server.
   
`json-server --watch db.json`

5. Certifique-se de que a API esteja rodando na porta 3000, caso não esteja pode alterar a porta no clone do repositório para a sua.

O próximo passo é iniciar a aplicação expo.

1. Clone o repositório na sua máquina.
`git clone https://github.com/adilla-somnia/expo-mobile`

2. Entre no diretório
 
`cd expo-mobile`

4. Mude para esta branch.

`git switch json-server-api-features`

6. Instale as dependências
   
`npm install`

8. Inicie a aplicação com
   
`npx expo start`

ou

`npx expo start --tunnel`

ou

`npx expo start --web`
