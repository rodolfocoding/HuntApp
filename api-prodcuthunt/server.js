const express = require('express');
const mongoose = require('mongoose');




//iniciando o app
const app = express();

//iniciando o banco de dados
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-qkmop.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
require('./src/models/Product');


//chamando primeira rota
app.use("/api", require("./src/routes"));

app.listen(3001);