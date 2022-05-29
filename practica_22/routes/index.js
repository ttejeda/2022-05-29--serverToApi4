const express = require('express');
let index = express.Router();

index.get('/', function(req, res){
    res.render('index');
});

module.exports = index;