const { Model, DataTypes } = require("sequelize");
const Doacao = require("./Doacao");

class Ong extends Model {}

Ong.init({
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
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
    }
}, 
{ // equivalente ao .define
    sequelize, 
    modelName:'ong', 
    tableName: 'ongs'
});

// Associacao:(1:N)
Ong.hasMany(Doacao);
Doacao.belongsTo(Ong);

module.exports = Ong;
