//traemos express
const express = require('express');

require('dotenv').config();
//requerimos nuestra base de datos que esta en db y con destructuring cogemos la funcion
const {connectDb} = require('./utils/db');// con esto ya nos estamos conectando a la base de datos
// ejecutamos la funcion
connectDb();

//traemos el modelo
const Movie = require('./models/movies');

const PORT = process.env.PORT || 3000;// coge el valor del .env

const DB_URL = process.env.DB_URL;

const server = express();

const router  = express.Router();
// empezamos a hacer las rutas
// end point que devuelve todas las pelis

router.get('/movies', (req,res) => {

    return Movie.find()// para coger todos lo alumnos de mi dase de datos despues de haberlo traido con require
    .then(movies=>{
        return res.status(200).json(movies);// codigos de tatus para saber que ha ido bien todo
    }).catch((error)=>{
        return res.status(500).json(error);
    })
});

// end point por id
router.get('/movies/:id', (req,res) => {

    const id =req.params.id;// req. params es la requesta que es nuestra peticion coge los parametros y en este caso el id

     Movie.findById(id)// para coger todos lo alumnos de mi dase de datos despues de haberlo traido con require
    .then(movies=>{
        return res.status(200).json(movies);// codigos de tatus para saber que ha ido bien todo
    }).catch((error)=>{
        return res.status(500).json(error);
    })
});
//end point por title
router.get('/movies/title/:title', (req,res) => {

    const title =req.params.title;// req. params es la requesta que es nuestra peticion coge los parametros y en este caso el id

     Movie.find({title: title})// para coger todos lo alumnos de mi dase de datos despues de haberlo traido con require
    .then(movies=>{
        return res.status(200).json(movies);// codigos de tatus para saber que ha ido bien todo
    }).catch((error)=>{
        return res.status(500).json(error);
    })
});
// end point por genre
router.get('/movies/genre/:genre', (req,res) => {

    const genre =req.params.genre;// req. params es la requesta que es nuestra peticion coge los parametros y en este caso el id

     Movie.find({genre:genre})// para coger todos lo alumnos de mi dase de datos despues de haberlo traido con require
    .then(movies=>{
        return res.status(200).json(movies);// codigos de tatus para saber que ha ido bien todo
    }).catch((error)=>{
        return res.status(500).json(error);
    })
});
// end point pelis apartir de 2010
router.get('/movies/year/:year', (req,res) => {

    const year =req.params.year;// req. params es la requesta que es nuestra peticion coge los parametros y en este caso el id

     Movie.find({year:{$gt:year}})// para coger todos lo alumnos de mi dase de datos despues de haberlo traido con require
    .then(movies=>{
        return res.status(200).json(movies);// codigos de tatus para saber que ha ido bien todo
    }).catch((error)=>{
        return res.status(500).json(error);
    })
});


server.use('/', router);

server.listen(PORT, ()=> {
    console.log(`server on in http://localhost:${PORT}`);
});
