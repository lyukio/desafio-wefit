# desafio-wefit

Repositório com o propósito de ser utilizado para o desafio da empresa We Fit

### 🔧 Orientações
Execute o seguinte comando para instalar as dependências:

```
npm i
```

Para iniciar o banco de dados é necessário ter o docker-compose instalado em sua máquina e rodar o seguinte comando:

```
docker-compose up -d
```

O docker-compose vai criar um container de um MySQL e você poderá acessar via localhost:3306 e a senha do usuário root é senha_root_123

Para iniciar o servidor express basta executar o seguinte comando:
```
npm start
```
ou
```
yarn start
```

### ⚙️ Executando os testes

Dentro da pasta functions:

```
npm test
```

### 🛠️ Construído com

* [Express](https://www.npmjs.com/package/express) - O framework utilizado para criar a API
* [Sequelize](https://sequelize.org) - ORM utilizado para comunicar com o banco de dados
* [Jest](https://jestjs.io/pt-BR/) - framework utilizado para criação dos testes automatizados

---
⌨️ com ❤️ por [Lyukio](https://github.com/lyukio) 😊