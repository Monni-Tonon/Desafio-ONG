const Ong = require("../models/Ong");
const express = require("express");
const ong = express.Router();

ong.route("/")
// LISTAR ONGS
.get(async (req, res) => {

    try{
        const ongs = await Ong.findAll();
        res.status(200).json(ongs);
    } catch(err) {
        res.status(500).json(err);
    }
})

// CADASTRAR NOVA ONG
.post(async (req, res) => {
    const {cnpj, nome, tipo, dt_fundacao} = req.body;
    // validação dos campos se preenchidos
    if(!cnpj || !nome || !tipo || !dt_fundacao) {
        return res.status(404).json({message: "Campo obrigatorio nao informado."});
    }
    
    try {
        const novaOng = await Ong.create(req.body);
        res.status(201).json(novaOng)
    } catch (err){
        res.status(400).json(err);
    }
})

// EDITAR ONGS
.put(async (req, res) => {
    const {cnpj, nome, tipo, dt_fundacao} = req.body;
    if(!cnpj || !nome || !tipo || !dt_fundacao) {
        return res.status(400).json({message: "Campo obrigatorio nao informado."});
    }

    const findOng = await Ong.findOne({where: {cnpj}});
    if (!findOng) {
        return res.status(404).json({message: "Ong nao encontrada!"});
    }

    try {
        await findOng.update({nome, tipo, dt_fundacao});
        res.status(200).json(findOng)
    } catch (err) {
        res.status(500).json(err);
    }
})

// DELETAR ONG
.delete(async (req, res) => {
    try {
        const {id} = req.body
        if(!id) {   // confiro se o id foi informado
            return res.status(400).json({ message: "Campo obrigatório não informado (id)" });
        }
        if(!id) {
            const findOng = await Ong.findByPk(id);
            
            if(!findOng) {
                return res.status(404).json({message: "Ong nao encontrada!"});
            }
        }
            await Ong.destroy({where: {id}});
            res.status(200).json({message: `Ong deletada: ${id}`});
        } catch(err) {
            res.status(500).json(err);
    }
});


module.exports = ong;