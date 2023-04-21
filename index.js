require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const swaggerUi = require('swagger-ui-express');
//const  YAML=require('yamljs')
const swaggerDocument = require('./swagger.json')// require('./swagger.json');
const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Config o app:

const ong = require("./routes/ong");
const doacoes = require("./routes/doacoes");

app.use(express.json());    //transitar dados json
app.use(morgan("dev"));

//rotas
app.use("/ong", ong)
app.use("/ong/doacoes", doacoes)





// listening
app.listen(process.env.DB_PORT)