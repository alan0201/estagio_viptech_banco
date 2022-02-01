const express = require("express");
const app = express();

const usuario = require("./rotas/usuario");
const { sequelize } = require("./bd");

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    mensagem: "Bemvindo",
  });
});

app.use("/usuario", usuario);

app.listen(3000, () => {
  console.log("Aplicacao Iniciada");
});
