//Inyectar dependencias.
const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Person = require('../models/person.js');

//Definir una ruta donde se imprimirá el objeto json.
router.get('/persons', function(req, res, next){
    Person.find(function(err, persons){
        if(err) return next(err);
        //res.json(persons); //Se regresa la información que pedimos.
        res.render('personsIndex', {persons}); //Se renderiza personIndex para ver la tabla de las personas registradas.
    });
});

//Definir que en /person se va a renderizar la vista person.
router.get('/person', function(req, res){
    res.render('person');
});

//Con este post, se nos permite agregar los datos que nos llegaron a la base de datos.
router.post('/addPerson', function(req, res){
    let myPerson = new Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });
    myPerson.save();
});

router.get('/deletePerson/:id', function(req, res, next){
    Person.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.redirect('/persons');
    });
});

router.get('/findById/:id', function(req, res, next){
    Person.findById(req.params.id, req.body, function(err, person){
        if(err) return next(err);
        res.render('personUpdate', {person});
    });
});

router.post('/updatePerson', function(req, res, next){
    Person.findByIdAndUpdate(req.body.objId, {
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    }, function(err, post){
        if(err) return next(err);
        res.redirect('/persons');
    });
});

//Exportar el módulo.
module.exports = router;