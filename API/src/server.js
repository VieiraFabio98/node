const express = require("express");
const PORT = 3333;
const app = express();

//request params são obrigatórios
app.get("/message/:id/:user/:tag", (request, response) => {
  const {id, user, tag} = request.params;

  response.send(`id da mensagem: ${id}. Para o usuário : ${user}. tag: ${tag}`);
});

//request query não é obrigatório
app.get("/users", (request, response) =>{
  const {page, limit} = request.query;
  response.send(`Página = ${page}\n limite = ${limit}`);
});

app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));