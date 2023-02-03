const express = require("express");
const PORT = 3333;
const app = express();

//request params são obrigatórios
app.get("/message/:id/:user", (request, response) => {
  const {id, user} = request.params;

  response.send(`id da mensagem: ${id}. Para o usuário : ${user}`);
});

//request query não é obrigatório
app.get("/users", (request, response) =>{
  const {page, limit} = request.query;
  response.send(`Página = ${page}\n limite = ${limit}`);
});

app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));