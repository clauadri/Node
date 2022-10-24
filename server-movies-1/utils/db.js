

const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;


//creamos la funcion que conecta nuestra bbdd

const connectDb =async()=>{// funcion asincrona porque si no no podemos ver porque es una promesa

    // gestionamos a ver si hay algun error

    try {
        const db = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // db tiene 2 propiedades que nos hacen falta las sacamos con es6
        const{name , host} = db.connection;
        console.log(`Estas conectado ${name} en el host ${host}`);

    } catch (error) {
        console.log('No se a conectado' + error);
    }

}
// exportamos la funcion para poder usarla en el index
module.exports = {connectDb};// porque exporto una fun y en el index requiero de llaves tambien

