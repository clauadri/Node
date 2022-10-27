
const express = require('express');
const Movie = require('./movies.model');
const router = express.Router();

router.get('/', async(req,res, next) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
         return next(error);
    }    
    
});
// end point por id
router.get('/:id', async(req,res, next) => {
    try {
        const id =req.params.id;
        const movieById = await Movie.findById(id);
        return res.status(200).json(movieById);
    } catch (error) {
        return next(error);
    }
});
//end point por title
router.get('/title/:title', async(req,res, next) => {
try {
    const title =req.params.title;
    const movieByTitle = await Movie.find({title: title})
    return res.status(200).json(movieByTitle);
} catch (error) {
    return next(error);
}
});
// end point por genre
router.get('/genre/:genre', async(req,res, next) => {
    try {
        const genre =req.params.genre;
        const movieByGenre = await Movie.find({genre:genre})
        return res.status(200).json(movieByGenre);
    } catch (error) {
        return next(error)
    }
});
// end point pelis apartir de 2010
router.get('/year/:year', async(req,res, next) => {
    try {
        const year =req.params.year;
        const movieByYear = await Movie.find({year:{$gt:year}})
        return res.status(200).json(movieByYear);
    } catch (error) {
        return next(error);
    }
});
//crear una movie
router.post('/create', async (req,res,next) => {
    try {
        
        const movie = req.body;
        const newMovie= new Movie(movie);
        const created = await newMovie.save();
        return res.status(201).json(created);
    } catch (error) {
        return next(error);
    }
});
// modificar una peli

router.put('/edit/:id', async (req,res,next) => {
    try {
        const id = req.params.id;
        const movie = req.body;
        const movieToEdit= new Movie(movie);
        movieToEdit._id = id;
        const movieUpdated = await Movie.findByIdAndUpdate(id, movieToEdit);
        return res.status(200).json({message:'Se ha midificado la peli', movie :movieUpdated});
    } catch (error) {
        return next(error);
    }
});

//borrar una peli
router.delete('/delete/:id', async (req,res,next) => {
    try {
        const id = req.params.id;
        const movieToDelete= await Movie.findByIdAndDelete(id);
        if (movieToDelete === null) {
            return res.status(404).json('La peli no se encuentra');
        }
        return res.status(200).json(movieToDelete);
    } catch (error) {
        return next(error);
    }
});

module.exports = router;