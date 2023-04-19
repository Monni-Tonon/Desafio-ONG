const { Model, DataTypes } = require("sequelize");

const sequelize = require("../database/db"); //conexao com banco( é a msma q connection.sequelize)
const Ong = require("./Ong");

class Doacao extends Model {}

Doacao.init({
    doador: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
}
},
{ // equivalente ao .define
    sequelize, 
    modelName:'doacao', 
    tableName: 'doacoes'
});


//Doacao.hasOne(Ong);

module.exports = Doacao;