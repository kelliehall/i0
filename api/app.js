const http = require('http');
const mongoose = require('mongoose');
const config = require('./config');
const express = require('express');
const app = express();
const port = 3004;
const router = express.Router();
const bodyParser = require('body-parser');

app.set('port', port);
app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// if (config && config.db) {
//     mongoose.connect(`mongodb://${config.db.username}:${config.db.password}@${config.db.host}:${config.db.port}/p`);
// } else {
//     mongoose.connect('mongodb://localhost/p');
// }
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error'));
