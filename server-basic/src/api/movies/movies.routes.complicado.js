// EN ESTE ARCHIVO ESTAN LOS QUERRY PARAMS
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
router.get('/sagas/:nombre/:saga',(req,res)=>{
    //object destructuring
    const{nombre,saga} = req.params;
    if(!saga){// si no tengo saga
        if(nombre?.toLowerCase() === 'harry potter'){// el interogante es el optional chaining si no existe el req params no continu y no me rompe la funcion
        return res.send(movies.harryPotter);
    }
    if(req.params?.nombre?.toLowerCase() === 'marvel'){
        return res.send(movies.marvelSagas);
    }
    if(req.params?.nombre?.toLowerCase() === 'the lord of the rings'){
        return res.send(movies.lordOfTheRings);
    }
    return res.send('no se encuentra la peli: '+ req.params?.nombre);
    }else {
        // tengo saga y cuando busco es correcta ome piden una que no tengo
        const moviesDictionary = {
            marvel:movies.marvelSagas,
            "harry potter":movies.harryPotter,
            " the lord of the rings": movies.lordOfTheRings,
        }
        const movieSagaTitle = moviesDictionary[nombre.toLowerCase()];
        if(!movieSagaTitle) return res.send(`no se a encontrado el titulo ni la saga${nombre} ${saga}`);

        // ver si la saga existe
        const sagaContent = movieSagaTitle[saga];
        if(saga) return res.send(saga);
        else return res.send('no se encuentras la saga de la serie' + saga);

    }
});

router.get('/two',(req,res)=>{
    return res.send('server funcionandooooo jaja');
});

module.exports = router;