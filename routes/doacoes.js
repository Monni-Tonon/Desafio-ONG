const Doacao = require("../models/Doacao");
const express = require("express");
const Ong = require("../models/Ong");
const doacoes = express.Router();

doacoes.route("/")
.get(async (req, res) => {
    res.json({mensagem: "rota doacoes get"})
})

.post(async (req, res) => {
    const { doador, valor, ongId} = req.body;

    if(!doador || !valor || !ongId) {
        return res.status(400).json({message: "Campos obrigatórios não preenchidos."});
    }
    const ong = await Ong.findByPk(ongId);
    if (!ong) {
        return res.status(404).json({mensagem: "ONG não encontrada."});
    }
    try {
        const doacao = await Doacao.create({ doador, valor, ongId });
        res.status(201).json({message: `Doação de R$ ${valor} para a instituição ${ong.nome}.`})
    } catch (err) {
        return res.status(500).json(err)
    }
    
})

// POR REGRA DE NEGOCIO, NAO É POSSIVEL EDITAR OU DELETAR UMA DOACAO
// .put(async (req, res) => {
//     res.json({mensagem: "rota doacoes put"})
// })

// .delete(async (req, res) => {
//     res.json({mensagem: "rota doacoes delete"})
// })
;


module.exports = doacoes;