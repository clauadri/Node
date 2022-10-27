//traemos express
const express = require('express');

require('dotenv').config();
//requerimos nuestra base de datos que esta en db y con destructuring cogemos la funcion
const db = require('./src/utils/db');// con esto ya nos estamos conectando a la base de datos
// ejecutamos la funcion
db.connectDb();
const cors = require('cors');

const indexRoutes = require('./src/api/index/index.routes');
const movieRoutes = require('./src/api/movies/movies.routes');
const cinemaRoutes= require('./src/api/cinema/cinema.routes');
const server = express();
const PORT = process.env.PORT || 3000;// coge el valor del .env

server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.use('/', indexRoutes);
server.use('/movies', movieRoutes);
server.use('/cinema',cinemaRoutes);

server.use(cors({
      origin: "*",
      credentials: true,
    })
);

server.use('*', (req,res)=>{
    const error = new Error('ruta no encontrada');
    error.status = 404;
    return res.status(error.status).json(error.message);
});

server.use((error, req,res,next)=>{
    return res.status(error.status || 500).json(error.message || 'Unexpected Error');
});

server.listen(PORT, ()=> {
    console.log(`server on in http://localhost:${PORT}`);
});
