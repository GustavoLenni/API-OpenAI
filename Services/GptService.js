const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function GerarResposta(pergunta){
    try{
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            store: true,
            messages: [
                // como o modelo deve agir
                {"role": "system", "content": "Você é um profissional de ti, e tem que responder a pergunta em 3 palavras apenas "},

                // pergunta que o usuario vai fazer
                {"role": "user", "content": pergunta}
            ]
        });

        return completion.choices[0].message.content;
    }
    catch(erro){
        console.log("erro ao chamar OpenAi",erro);
        throw erro;
    }   
}

module.exports = {GerarResposta};