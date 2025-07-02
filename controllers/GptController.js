const GptService = require('../Services/GptService');

async function GptController(req,res){
    // dado enviado no corpo da requisição
    // (entrada do usuario) 
    const {pergunta} = req.body;

    // Tratamento de Erro da pergunta 
    if(!pergunta){
        return res.status(400).json({erro:"Pergunta Obrigatoria"});
    }

    // Tratamento de Erro da Resposta
    try{
        const resposta = await GptService.GerarResposta(pergunta);
        res.status(200).json({resposta});
    }catch(erro){
        console.error("Erro no Controller",erro);
        res.status(500).json({erro : "Erro ao gerar Resposta"});
    }
}

module.exports = {GptController};