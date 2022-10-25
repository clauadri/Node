const express = require('express');// requerimos otra vez el express 

//importamos el modelos despues de haber creado y acabado y ver que funciona el archivo seed
const Character = require('./characters.model')

// creamos el router, creamos rutas
const router = express.Router();
// definimos el controlador de la ruta luego la extraemos a otra carpeta
// una vez creado el seed y visto que funciona hacemos la funcion que sea asincrona

router.get('/', async(req,res, next) =>{
    try {
        // vamos a obtener uno o varios personajes
        const allCharacters = await Character.find();// de esta manera haremos una busqueda en base de datos
        console.log(allCharacters);

        return res.status(200).json(allCharacters);
        //abrimos el postman y hacemos request
    } catch (error) {
       
       return next(error);
        // return res.status(500).json('error en el servidor'); se puede sustituir por error.message
    }  
});
//ruta para obtener unicament un pj por id
//siempre la misma estructura
router.get('/:id',async(req,res, next)=>{// aqui obtengo un objeto no array
    try {
        const id = req.params.id;
        const characterToFind = await Character.findById(id);//fun por id que le paso como param id
        // if(characterToFind===null){// esto es para parchear un error que si pones 24 numeros sale null tambien cambiar ariba de const a let
        //     characterToFind = 'errrooor';
        // }
        console.log(characterToFind);
        return res.status(200).json(characterToFind);
    } catch (error) {
        return next(error);
        // return res.status(500).json('no se encuentra el pj');
    }
});
// peticion para crear un elemento 

router.post('/create',async(req,res, next)=>{
    try {
        //body contenido que queremos que se suba con la peticion
        //req.body vale lo que nosotros le mandemos
        const character = req.body;// vamos a recibir todo lo que le mandemos a nuestro servidor per res.body hay que darle valor sino saldra undefined
        const newCharacter = new Character(character);//generemos un nuevo character pasando por el filtro
        const created = await newCharacter.save();//guarda el presonaje creado en la base de datos
        // console.log(character);
        return res.status(201).json(created);// respuesta es lo que nos devuelve, todos los datos que hemos metido mas el timestamp
    } catch (error) {
        //return res.status(500).json('error al crear el pj');
        return next(error);
    }
});// vamos al post man y hacemos peticion post

// metodo delete
router.delete('/delete/:id', async(req,res,next) =>{
    try {
        
        const id = req.params.id;
        const characterToDelete = await Character.findByIdAndDelete(id);
        // parchear como arriba el error
        // if(characterToDelete === null){
        //     return res.status(418).json('no se a podido borrar el personaje porque no esta');
        // }
        return res.status(201).json(characterToDelete);//devuelveme el character borado
    } catch (error) {
       // return res.status(500).json('no se a podido borrar el personaje');
       return next(error);
    }
});
// metodo put

router.put('/edit/:id', async(req,res, next) =>{
    try {
        // podemos pachear como hasta ahora el id 
        const id = req.params.id;// requerimos por id
        const character = req.body;// igual que en el post
        const characterToEdit = new Character(character);// igual que en el post
        characterToEdit._id = id;//aqui le decimos que que el id del character  es el mismo que el del id, es decir que
        const characterUpdated = await Character.findByIdAndUpdate(id, characterToEdit);// duda??
        return res.status(200).json({mensaje:'se ha modificado el personaje',character: characterUpdated});// aqui me devuelte el personaje modificado en characterUpdate es decir no lo que yo modifico
    } catch (error) {
       // return res.status(500).json('no se a podido modificar el personaje');
       return next(error);
    }
});

// expoertamos el routeer

module.exports = router;