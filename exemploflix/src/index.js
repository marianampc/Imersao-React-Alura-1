import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/Cadastro/Categoria';


//Desafio é estilizar e colocar um jogo nessa página
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>{/*Rotas do navegadores*/}
    <Switch>{/*Esse comando terá a função de um if, assim podemos ir para qual página quisermos sem precisar recarregar o site. */}
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/Categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} /> {/*Essa é a rota 404, significa que se não encontrar o que está procurando irá para essa página . Podia ser também component={() => (<div>Página 404</div>)}*/}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
