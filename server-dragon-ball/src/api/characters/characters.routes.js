const express = require('express');// requerimos otra vez el express 

//importamos el modelos despues de haber creado y acabado y ver que funciona el archivo seed
const Character = require('./characters.model')

// creamos el router, creamos rutas
const router = express.Router();
// definimos el controlador de la ruta luego la extraemos a otra carpeta
// una vez creado el seed y visto que funciona hacemos la funcion que sea asincrona

router.get('/', async(req,res) =>{
    try {
        // vamos a obtener uno o varios personajes
        const allCharacters = await Character.find();// de esta manera haremos una busqueda en base de datos
        console.log(allCharacters);

        return res.status(200).json(allCharacters);
        //abrimos el postman y hacemos request
    } catch (error) {
        return res.status(500).json('error en el servidor');
    }  
});
//ruta para obtener unicament un pj por id
//siempre la misma estructura
router.get('/:id',async(req,res)=>{// aqui obtengo un objeto no array
    try {
        const id = req.params.id;
        const characterToFind = await Character.findById(id);//fun por id que le paso como param id
        console.log(characterToFind);
        return res.status(200).json(characterToFind);
    } catch (error) {
        return res.status(500).json('no se encuentra el pj');
    }
});
// peticion para crear un elemento 

router.post('/create',async(req,res)=>{
    try {
        const character = req.body;// vamos a recibir todo lo que le mandemos a nuestro servidor per res.body hay que darle valor sino saldra undefined
        const newCharacter = new Character(character);//duda ??
        const created = await newCharacter.save();//duda ??
        // console.log(character);
        return res.status(201).json(created);
    } catch (error) {
        return res.status(500).json('error al crear el pj');
    }
});// vamos al post man y hacemos peticion post


// expoertamos el routeer

module.exports = router;