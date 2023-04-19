const { Model, DataTypes } = require("sequelize");

class Ong extends Model {}

Ong.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dt_funcadao: {
        type: DataTypes.DATE,
        allowNull: false
    }, 
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
{ // equivalente ao .define
    sequelize, 
    modelName:'ong', 
    tableName: 'ongs'
});