const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        timezone: '-03:00',
        logging: (msg) => {
            const logMessage = `[${new Date().toISOString()}] ${msg}\n`;
            fs.appendFileSync(path.join(__dirname, '../logs', 'sequelize.log'), logMessage);
        }
    });

    // Sincronize os modelos com o banco de dados
sequelize.sync()    //{force: true}
.then(() => {
    console.log('Tabela sincronizada com sucesso!');
})
.catch((err) => {
    console.error('Erro ao sincronizar tabela:', err);
});

module.exports = sequelize;