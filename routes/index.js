var express = require('express');
var router = express.Router();
const Autor = require("../models/autor");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
}) ;

router.post('/inserir', async function(req, res, next) {
  let autor = {
    nome: "Aline",
    sobrenome: "Souza",
    datanascimento:"1998-05-09"
  };
  const autores = await Autor.inserir(autor);
  res.json(autores.rows);
}) ;

router.get('/deletar', async function(req, res, next) {
  const autores = await Autor.deletar(11);
  res.json(autores.rows);
}) ;

module.exports = router;
