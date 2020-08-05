/* eslint-disable no-lone-blocks */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  /* Quando criamos três entradas para o formulário (nome, descrição e cor) uma solução abordada para diferenciar as informações seria criar três estados diferentes. Contudo no javascricript podemos criar um objeto com as três.
    */
  // eslint-disable-next-line max-len
  const [values, setValues] = useState(valoresIniciais); { /* Esse useState é nosso valor inicial */ }

  // A chave pode ser o nome, descricao, cor, etc
  function setValeu(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
      // O [] transforma a variável chave em um valor dinâmico
    });
  }
  function handleChange(infosDoEvento) {
    setValeu(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  // ____________AULA 4________________________________
  // Uaremos essa função porque queremos que um efeito colateral aconteça.
  useEffect(() => {
    // if(window.location.href.includes('localhost')) {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://exemploflix.herokuapp.com/';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
        { /* if(respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
            }
          */ }
        throw new Error('Não foi possível pegar os dados');
      });
    // }
  }, []);
  // __________________________________________________

  return (
    <PageDefault>
      {/* nomeDaCategoria se tornou um variável */}
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      {/* Com essa função o cadastro funcionou, só não sei onde está salvando a informação */}
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        { /* Com essa linha, a página para de carregar quando se envia o formulário
                console.log('Você tentou enviar o form, né ?'); */ }

        { /* Esse comando setCategorias, é uma função que recebeu uma lista com um item. Logo precisa retornar à mesma coisa */ }
        setCategorias([
          ...categorias,
          values.nome,
        ]);
        { /* Esses três pontos está falando para pegar todas as categorias, salvar e não sobreescrever, e adicionar a informação abaixo */ }
        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        {/* ------CATEGORIA --------------*/}
        {/* <div>
                    <label>
                        Nome da Categoria:
                        <input
                        type="text"
                        name="nome"
                        value={values.nome}

                            //Essa função estava presente nas três entradas do formulário, contudo o formato dela permanece o mesmo somente mudando a entrada. Desse modo iremos criar uma função universal.
                            onChange= { function FuncaoHandLer(infosDoEvento){
                            console.log('[nomeDaCategoria]',nomeDaCategoria);
                            console.log('[InfosDoEvento.target.value]',infosDoEvento.target.value);--
                            //Não precisamos mais dos comentarios.
                            setNomeDaCategoria(infosDoEvento.target.value)}
                            Foi criado uma função suficientemente genérica que pode ser aplicado nos três.
                            onChange={handleChange}
                        />
                    </label>
                </div> */}
        {/* ------DESCRIÇÂO--------- */}
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* ------COR--------- */}
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
        <div>
          {/*Carregando...*/}
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => {
          { /* Estamos contatenando as duas informações */ }
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
