require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

// Config o app:
const app = express();

const ong = require("./routes/ong");

app.use(express.json());    //transitar dados json
app.use(morgan("dev"));

//rotas
app.use("/ong", ong)






// listening
app.listen(process.env.DB_PORT)