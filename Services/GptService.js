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