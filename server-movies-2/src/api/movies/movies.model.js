const mongoose = require('mongoose');

//creamos un exquema como una estructura a la hora de meter los datos en nuestra base

const Schema = mongoose.Schema;

const movieSchema = new Schema(// la funcion esquema tiene 2 params que son 2 obj

    {
        // el esquema, las propiedades
        title:{type: String, required:true},
        director:{type:String, required:true},
        year:{type:Number, required:true},
        genre:{type:String, required:true}

    }
    ,
    {
        // las opciones del esquema
        timestamps:true,
    }
)

const Movie = mongoose.model('Movies', movieSchema );// me va generar un nuevo modelo de peli mediante el esquema que hemos creado
module.exports = Movie;