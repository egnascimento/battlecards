const express = require('express');
const cors = require('cors')
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/cardRoute');
app.use(cors())
app.use(express.static('img'))
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;
