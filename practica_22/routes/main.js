const express = require('express');
let main = express.Router();
const mongoose = require('mongoose');

main.get('/main', function(req, res){
    res.render('main');
});

module.exports = main;