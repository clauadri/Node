const mongoose = require('mongoose');


const movie = require('../../models/movies');
// REQUERIR COMO EN LOS OTROS DOCUMENTOS
// tambien podemos requerir la funcion connectdb y asi no hace falta 
const connectDb = require('../utils/db')
// definir otra vez abajo la conexion
// require('dotenv').config();esto no hara falta porque traemos la funcion de arriba
// const DB_URL = process.env.DB_URL;esto lo mismo

const movies = [
    {
        title: 'The Matrix',
        director: 'Hermanas Wachowski',
        year: 1999,
        genre: 'Acción',
    },
    {
        title: 'The Matrix Reloaded',
        director: 'Hermanas Wachowski',
        year: 2003,
        genre: 'Acción',
    },
    {
        title: 'Buscando a Nemo',
        director: 'Andrew Stanton',
        year: 2003,
        genre: 'Animación',
    },
    {
        title: 'Buscando a Dory',
        director: 'Andrew Stanton',
        year: 2016,
        genre: 'Animación',
    },
    {
        title: 'Interestelar',
        director: 'Christopher Nolan',
        year: 2014,
        genre: 'Ciencia ficción',
    },
    {
        title: '50 primeras citas',
        director: 'Peter Segal',
        year: 2004,
        genre: 'Comedia romántica',
    },
];
// los datos de arriba no se pueden meter asi como estan a la base de datos, hay que pasarlos a idioma de mongo por asi decirlo
// recoremos y creamos el nuevo array 
const moviesDocuments = movies.map(moviee =>new movie(moviee));// por cada uno de muestras peliculas que se encuentren en el array va a crear un nuevo modelo de alumnos con cada uno de esos datos.
// nos conectamos a la base de datos
// mongoose.connect(DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// lo de arriba lo tenemos ya definido en la funcion por lo tanto la usamos y ahoramos codigo
connectDb.then(async () =>{// cuando nos hayamos conectado
    
    await movie.collection.drop();
    console.log('Se han eliminado nuevas pelis')

}).catch((error)=>console.log('No se han podido eliminar' + error))
.then(async()=>{// cuando me los hayas borrado

    await movie.insertMany(moviesDocuments);
    console.log('Se han añadido nuevas pelis')

})
.catch((error) => console.log('No he metido los datos' + error))
.finally(() => mongoose.disconnect());