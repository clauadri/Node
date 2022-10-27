const express = require('express');
const Cinema = require('./cinema.model');
const router = express.Router();

router.get('/', async (req,res,next) => {
    try {
        
        const allCinemas = await Cinema.find().populate('movies');
       
        return res.status(200).json(allCinemas);
    } catch (error) {
        return next(error);
    }
});

router.post('/create', async (req,res,next) => {
    try {
        const cinema = req.body;
        const newCinema = new Cinema(cinema);
        const createdCinema = await newCinema.save();
       
        return res.status(201).json(createdCinema);
    } catch (error) {
        return next(error);
    }
});

router.put('/edit/:id', async (req,res,next) => {
    try {
        const cinemaId = req.params.id;
        const cinema = req.body;
        const cinemaToEdit = new Cinema(cinema);
        cinemaToEdit._id = cinemaId;
        const cinemaUpdated = await Cinema.findByIdAndUpdate(cinemaId,cinemaToEdit);
        return res.status(200).json(cinemaUpdated);
    } catch (error) {
        return next(error);
    }
});

router.put('/add-movie', async (req,res,next) => {
    try {
        
        const {cinemaId} = req.body;
        const {movieId} = req.body;
        const addedMovie = await Cinema.findByIdAndUpdate(cinemaId,
            {$push:{movies:movieId}},
            {new:true}
            );
        return res.status(201).json(addedMovie);
    } catch (error) {
        return next(error);
    }
});

router.delete('/delete/:id', async (req,res,next) => {
    try {
        
        const cinemaId = req.params.id;
        const cinemaDelete = await Cinema.findByIdAndDelete(cinemaId);
        return res.status(201).json(cinemaDelete);
    } catch (error) {
        return next(error);
    }
});
module.exports = router;