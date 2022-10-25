// este archivo se ejecuta de manera independiente en nuestro servidor ya que se usara para reestablecer la db
// sera un archivo aislado
// la finalidad de este archivo va ser que cuando se ejecute ver si hay algunos pj guardados
// si hay los borramos y luego meteremoslos nuevos datos por defecto y es mas que nada cuando se empieza un proyecto

const { default: mongoose } = require("mongoose");
const{ DB_URL } = require('../database/db');// .. es que subo una carpeta
// importamos character de characters model
const Character = require('../../api/characters/characters.model');


const characters = [
    {
      name: "Goku",
      race: "saiyan",
      universe: 7,
      transform: true,
      genre: "male",
    },
    {
      name: "Piccolo",
      race: "namekian",
      universe: 7,
      transform: true,
      genre: "namekian",
    },
    {
      name: "Cabba",
      race: "saiyan",
      universe: 6,
      transform: true,
      genre: "male",
    },
    {
      name: "Kale",
      race: "saiyan",
      universe: 6,
      transform: true,
      genre: "female",
    },
    {
      name: "A18",
      race: "android",
      universe: 7,
      transform: false,
      genre: "female",
    },
    {
      name: "Krillin",
      race: "human",
      universe: 7,
      transform: false,
      genre: "male",
    },
    {
      name: "Jiren",
      race: "unknown",
      universe: 11,
      transform: false,
      genre: "male",
    },
    {
      name: "Zen-oh",
      race: "unknown",
      universe: 0,
      transform: false,
      genre: "genderless",
    },
];
/**
 * 1. Conectaremos con la db
 * 2. Haremos una búsqueda para ver si tenemos personajes
 *     2.1 si NO tenemos personajes -> continuamos al siguiente paso
 *     2.2 si SI tenemos personajes -> Borramos la colección (drop)
 * 3. Escribir los personajes del array characters
 * 4. Informaremos que hemos escrito los personajes
 * 5. Desconectaremos de la base de datos.
*/

// console.log(characters);
// ejecutar una conexion a la base d datos
// cada vez que trabajemos con base de datos sera una funcion asyncrona
mongoose.connect(DB_URL)// para poner la url primero la importamos, los otros params no son necesarios los que poniamos con santi

.then(async() =>{// duda como funciona async
    const allCharacters = await Character.find();// los metodos suelen ser iguales para hacerlo mas facil el uso si lo ponemos vacio buscamos todos

    // console.log(allCharacters);

    if(!allCharacters.length){// si no tiene long quiere decir que no tengo personajes
        console.log('no se encuentran personajes, continuo')
    }else{
        console.log(`Encontrados ${allCharacters.length} personajes `);
        await Character.collection.drop();// borra la collecion por completo
        console.log('collecion Characters eliminada correctamente');
    }
})
//los catch son para que el error se refleje y por eso despues de cada then lo ponemos para saber donde falla
.catch((error)=> console.log('error eliminando la coleccion', error))
// aqui una vez los he borrado los creo y los characters definidos en la seed
.then(async()=>{
    await Character.insertMany(characters);
    console.log('nuevos personajes añadidos')
})
.catch((error)=>console.log('error añadiendo personajes'))// recogemos el error en caso de que algo haya ido mal

.finally(()=>mongoose.disconnect());
// una vez finalizado abrimos compass y vemos la base de datos