const mongoose = require('mongoose');
let PersonSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
}); //Creación de un nuevo schema para enviarlo a la base de datos.

module.exports = mongoose.model('Persons', PersonSchema); //Exportación del módulo.