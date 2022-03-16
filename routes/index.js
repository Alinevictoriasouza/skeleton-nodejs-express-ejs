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

router.get('/atualizar', async function(req, res, next) {
  let autor = {
    nome: "Aline_",
    sobrenome: "Souza",
    datanascimento:"1998-04-01"
  };
  const autores = await Autor.atualizar(autor, 11);
  res.json(autores.rows);
}) ;

module.exports = router;
