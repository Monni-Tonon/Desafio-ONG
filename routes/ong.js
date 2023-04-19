const Ong = require("../models/Ong");
const express = require("express");
const ong = express.Router();

ong.route("/")
.get(async (req, res) => {

    try{
        const ongs = await Ong.findAll();
        res.status(200).json(ongs);
    } catch(err) {
        res.status(500).json(err);
    }
})

.post(async (req, res) => {
    const {cnpj, nome, tipo, dt_fundacao} = req.body;
    // validação dos campos se preenchidos
    if(!cnpj || !nome || !tipo || !dt_fundacao) {
        return res.status(400).json({message: "Campo obrigatorio nao informado."});
    }
    
    try {
        const novaOng = await Ong.create(req.body);
        res.status(201).json(`ONG cadastrada, nome: ${novaOng.nome}.`)
    } catch (err){
        res.status(400).json(err);
    }
})

.put(async (req, res) => {
    res.json({mensagem: "rota ong put"})
})

.delete(async (req, res) => {
    const {id} = req.body
    if(!id) {   // confiro se o id foi informado
        return res.status(400).json({ mensagem: "Campo obrigatório não informado (id)" });
    }

    try {
        const response = await Ong.destroy({where: {id: id}});
        res.status(200).json({message: `Ong deletada: ${nome}`});
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = ong;