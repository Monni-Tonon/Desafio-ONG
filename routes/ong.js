//const Ong = require("../database/ong");
const express = require("express");
const ong = express.Router();

ong.route("/")
.get(async (req, res) => {
    res.json({mensagem: "rota ong get"})
})

.post(async (req, res) => {
    res.json({mensagem: "rota ong post"})
})

.put(async (req, res) => {
    res.json({mensagem: "rota ong put"})
})

.delete(async (req, res) => {
    res.json({mensagem: "rota ong delete"})
});


module.exports = ong;