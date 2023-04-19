//const Doacoes = require("../database/doacoes");
const express = require("express");
const doacoes = express.Router();

doacoes.route("/")
.get(async (req, res) => {
    res.json({mensagem: "rota doacoes get"})
})

.post(async (req, res) => {
    res.json({mensagem: "rota doacoes post"})
})

.put(async (req, res) => {
    res.json({mensagem: "rota doacoes put"})
})

.delete(async (req, res) => {
    res.json({mensagem: "rota doacoes delete"})
});


module.exports = doacoes;