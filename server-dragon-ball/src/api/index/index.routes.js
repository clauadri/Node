// este archivo para meter rutas donde no sabes donde colocarlas, este archivo es opcional

const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    return res.status(200).json('servidor ok, route index');
});

module.exports = router;