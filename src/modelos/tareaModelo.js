const { Schema, model } = require('mongoose');
const TareaSchema = new Schema({
    tarea:{
        type: String,
        required: true
    },
    descripcion:String
});

module.exports = model('coleccionTareas', TareaSchema  )