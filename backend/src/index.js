const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')

const app = express();
mongoose.connect(
  'mongodb+srv://semana:semana@cluster0-q8fkp.mongodb.net/week10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(cors())
app.use(express.json()); //tem que vir antes das rotas, aqui ele entende requisições que tem o corpo no fomato Json
app.use(routes);

//parameters
//Query params: req.query (filtros, paginação, orderanção...) muito usado com metodo get
//Route params:req.params (identificar recurso na alteração ou remoção) muito usado com metodo put, delete, ediçao no geral
//body:req.body (dados para criação ou para alteração de um registro) um mais utilizados, principalmente usado em criação, dados enviados no corpo

app.listen(3333);
