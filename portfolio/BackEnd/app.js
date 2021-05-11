const express = require("express");
const vhost = require("vhost");
const app = express();
const path = require('path'); 
const mysql2 = require('mysql2');
//routes 
const contactRoutes = require('./routes/contact');
const frontRoutes = require('./routes/front');

//entetes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // * = tout le monde peut acceder à l api 
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //methode acceptées
    next();
});

//remplace body-parser deprecié
app.use(express.urlencoded({extended: true})); //remplace bodyParser.json() deprecié depuis 2014
app.use(express.json());

// app.use('/', contactRoutes);
//app.use(vhost("aurorecreationweb.fr", frontRoutes.loadFile));
app.use(vhost("localhost:3000/front", frontRoutes.loadFile));
module.exports = app;