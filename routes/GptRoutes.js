const express = require('express');
const {GptController} = require('../controllers/GptController');

const router = express.Router();

router.get('/ia',(req,res)=>{
    res.send("Pagina Ia");
})

router.post('/ia', GptController);


module.exports = router;