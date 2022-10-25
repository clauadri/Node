// primeros pasos
const express = require('express');
const db = require('./src/utils/database/db');

//si la ejecutamos se conectara
db.connectDb();
// importamos el router creado en index.routes

const indexRoutes = require('./src/api/index/index.routes');

// inportamos el router creado en characters routes

const characterRoutes = require('./src/api/characters/characters.routes');

const server = express();
const PORT = 3000;
//le damos valor al body porque al hacer la peticion post sale undefined
server.use(express.json());//para que cuando tu le envias datos al server sepa interpretarlos
// las funciones de expres llevan por dentro un next implicito
server.use(express.urlencoded({extended:false}));// (si es false no puedes mandar obj anidados)necesario para que el server sepa interpretarlo
// le decimos que para todo prefijo que empiece por /characters quiero que lo busques en la ruta characterRoutes
// y todo los que empiece por ruta normal me lo buscque en indexroute
server.use('/',indexRoutes);
server.use('/characters',characterRoutes);
//aqui el control de errores siempre debajo de las rutas si no encuentra las de arriba
server.use("*",(req,res)=>{
    
    const error = new Error('ruta no encontrada');
    error.status = 404;
    return res.status(error.status).json(error.message);

});
//justo debajo de la ruta del asterisco y solo puede ponerse aqui
//aqui capturamos todos los errores de nuestras rutas ,, ponemos next en el get por id para hacer el ejemplo
//esto es un controlador de errores solo1 por aplicacion
server.use((error,req,res,next)=>{
    return res.status(error.status || 500).json(error.message || 'Unexpected Error');
});


//aranca el servidor
server.listen(PORT , () =>{
    console.log(`server funcionandoen http://localhost:${PORT}`)
});

