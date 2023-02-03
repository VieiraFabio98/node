const { response } = require("express");
const express = require("express");
const PORT = 3333;
const app = express();

//request params são obrigatórios
// app.get("/message/:id/:user/:tag", (request, response) => {
//   const {id, user, tag} = request.params;

//   response.send(`id da mensagem: ${id}. Para o usuário : ${user}. tag: ${tag}`);
// });

//request query não é obrigatório
// app.get("/users", (request, response) =>{
//   const {page, limit} = request.query;
//   response.send(`Página = ${page}\n limite = ${limit}`);
// });

app.use(express.json()); //serve para dizer ao request que o arquivo está no formato json.
app.post("/users", (request, respond) => {
  const {name, senha, email} = request.body;

  // respond.send(`name: ${name}, senha:${senha}, email:${email}`);

  //é possivel reponder com o formato json.

  respond.json({name, senha, email});
})

app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));