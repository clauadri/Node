//aqui creamos el modelo, el molde para hacer la base de datos y para ello  necesitamos a mongose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// con schema creamos un ojb. 

const characterSchema = new Schema(// 2 parametros todo lo que empiece por new es una clase y debe ir en mayus
    {
        // aqui propiedades de nuestro esquema
        name: { type: String, required: true },
        race: { type: String, enum: ["human", "saiyan", "android", "namekian", "unknown"], required: true, default: "unknown" },
        universe: { type: Number, min: 0, max: 12 },
        transform: { type: Boolean, default: false },
        genre: { type: String, enum: ["male", "female", "namekian", "angel", "genderless"], default: "genderless" },

    }
    ,
    {
        timestamps:true,// este para saber cuando  se crear los datos
    }
);

// creamnos el schema
// Schema es una clase definida dentro de mongose por tanto abajo haremos otra clase
// por tanto abajo la clase la definimos con mayusculas porque es una instancia

const Character = mongoose.model('Characters', characterSchema);// un modelo es como la base de datos
module.exports = Character;

