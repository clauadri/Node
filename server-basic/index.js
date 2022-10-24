// paso 1 requerir explres
const express = require('express');// aqui tarmos paquetes que instalamos
//como hemos cabiado el ruter a la carpeta de rutas hay que importarlo porque aqui no lo tenemos
const movieRoutes= require('./src/api/movies/movies.routes');// aqui trarmos nuestros archivos
// paso 2 crear server
const server = express();
const PORT = 3000;



// decirle al server que utilice nuestro ruter, añadirlo a nuestro server
server.use('/movies',movieRoutes);


server.listen(PORT,()=>{
    console.log('server on');// para saber que va el server
});