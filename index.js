const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());


const port = process.env.PORT || 3000;

app.get('/', (req, res)=> {
  res.send(`<h1> Executando na port ${port} </h1>`)
});

// listen
app.listen(port, ()=> {
console.log('rodando');
});

