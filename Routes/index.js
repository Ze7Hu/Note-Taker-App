const express = require('express');

const apiRoutes= require('./apiRoutes');
const htmlRoutes= require('./htmlRoutes');

const app = express();

app.use('/', apiRoutes);
app.use('/', htmlRoutes);

module.exports= app;

