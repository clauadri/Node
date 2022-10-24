// aqui traemos el ruter del index
// pase 3 crear el router
const express=require('express');
// lo que exportamos en data
const movies= require('./movies.data');
const router = express.Router();
// añadimos una ruta
router.get('/',(req,res)=>{
    console.log(movies)
return res.send('server funcionandooooo');
});

// todo loque ponga detras de los : sera una variable
router.get('/sagas/:nombre',(req,res)=>{
    // entonces si queremos harry potter
    if(req.params?.nombre?.toLowerCase() === 'harry potter'){// el interogante es el optional chaining si no existe el req params no continu y no me rompe la funcion
        return res.send(movies.harryPotter);
    }
    if(req.params?.nombre?.toLowerCase() === 'marvel'){
        return res.send(movies.marvelSagas);
    }
    if(req.params?.nombre?.toLowerCase() === 'the lord of the rings'){
        return res.send(movies.lordOfTheRings);
    }
    return res.send('ruta sagas parametro: '+ req.params?.nombre);// la variable la puedo encontrar aqui

});

router.get('/two',(req,res)=>{
    return res.send('server funcionandooooo jaja');
});

module.exports = router;