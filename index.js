const express = require('express');
const app = express();
const PORT = 3000;
const GptRotas = require('./routes/GptRoutes');

app.use(express.json());
app.use('/', GptRotas);

app.get('/',(req,res)=> {
    res.send("Pagina Inicial!!");
})

app.listen(PORT, (req,res) => {
    console.log(`Servidor funfando na Porta: ${PORT} `);
})

