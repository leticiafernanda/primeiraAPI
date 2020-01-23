// importando os pacotes para uso no arquivo index.js
//usei o const para deixar a aplicação mais segura
const express = require('express'); //retorna uma função para dentro do express
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// crio um servidor express
const app = express();

// aplico configurações para dentro do servidor express, adicionando middlewares (body-parser, morgan, cors)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// DB local (tempo de execução)
const data = [];

// criação de rota que será acessada utilizando o método HTTP GET/
// http://localhost:9000/
app.get('/', (req, res) => {
  return res.json({ data }); //parametro de resposta, o send serve para enviar alguma coisa
});

// criação de rota que será acessada utilizando o método HTTP POST/
// http://localhost:9000/add
app.post('/add', (req, res) => {
  const result = req.body;

  if (!result) {
    return res.status(400).end();
  }

  data.push(result);
  return res.json({ result });
});

// o servidor irá rodar dentro da porta 9000
app.listen(9000, function(){
  console.log('http://localhost:9000');
});