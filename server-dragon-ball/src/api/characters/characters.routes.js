const express = require('express');// requerimos otra vez el express 

// creamos el router, creamos rutas
const router = express.Router();
// definimos el controlador de la ruta luego la extraemos a otra carpeta
router.get('/', (req,res) =>{
    return res.status(200).json('todo oook');
});

// expoertamos el routeer

module.exports = router;