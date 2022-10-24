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

// le decimos que para todo prefijo que empiece por /characters quiero que lo busques en la ruta characterRoutes
// y todo los que empiece por ruta normal me lo buscque en indexroute
server.use('/',indexRoutes);
server.use('/characters',characterRoutes)


server.listen(PORT , () =>{
    console.log(`server funcionandoen http://localhost:${PORT}`)
});

