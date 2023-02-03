const express = require("express");
const PORT = 3333;
const app = express();

app.get("/message/:id/:user", (request, response) => {
  const {id, user} = request.params;

  response.send(`id da mensagem: ${id}. Para o usuário : ${user}`);
});

app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));