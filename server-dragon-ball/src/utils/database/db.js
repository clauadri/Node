// aqui creamos la conexion a nuestra base de datos, cada vez que el server aranque le decimos que se comunique con la bbdd
// cuando el servidor arranque, nuestro codigo de expres esta en otroserver entonces le damos las instruciones de como conectarse
// instalamos mongoose y requerimos mongose

const mongoose = require('mongoose');

// creamos una url para nuestra base de datos
// base de datos en nuestro pc
const DB_URL= 'mongodb://localhost:27017/dragon-ball';// ese numero es el puerto donde trabaja mongo por defecto

// hacemos una comprobacion
if (!DB_URL)throw new Error('No se encuentra la URL');// asi nos protegemos de los error y saber donde falla

// funcion responsable de comunicarse con nuestra base de datos
const connectDb = async () =>{// trabajamos con funciones asincronas
    // para proteger la funcion 
    try {
        const db = await mongoose.connect(DB_URL);
    //destructuring para sacar los parametros que son propiedades del connection
    const{name, host}= db.connection;
    // los argumentos no los ponemos como en el ejemplo de santi

    console.log(`conectado a la db ${name} en ${host}`);

    } catch (error) {
        console.log('error conectando a db', error);
    }
    
};

module.exports= {
    connectDb,
    DB_URL,
};// nos vamos al index y la requerimos
