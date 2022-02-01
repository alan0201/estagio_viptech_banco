const { Router } = require("express");
const router = Router();

//devolver uma lista de objetos ou um objeto
router.get("/", (req, res) => {
  res.json([
    {
      id:1,
      nome: "Alan",
    },
    {
      id: 2,
      nome: "João",
    },
  ]);
});

//criar um novo recurso
router.post("/", (req, res) => {
  console.log(req.body);
  res.send('Rota para criar usuarios');
});

//Atualizar um recurso existente para
router.put("/:id", (req, res) => {
  let id = req.params.id;
  res.send("Rota para atualizar recurso existente " + id);
})

//Remover recurso existente para
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.send("Rota para remover recurso existente" + id);
})

module.exports = router;
