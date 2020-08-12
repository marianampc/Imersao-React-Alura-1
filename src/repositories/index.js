/* eslint-disable linebreak-style */
import config from './config';

const URL_CATEGORIES =`${config.URL_BACKEND_TOP}/categorias?_embed=videos`

function getAllWithVideos() {
  console.log(URL_CATEGORIES);
    return fetch(URL_CATEGORIES)
    .then(async (respostaDoServidor.json) => {
      if(respostaDoServidor.ok){ 
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error ('Não foi possível pegar os dados :(');
        
      });
}

export default { getAllWithVideos };
