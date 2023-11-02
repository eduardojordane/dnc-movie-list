import React from 'react'

//handleSubmit parece ser uma prática de mercado de nomear as funções no react de handleAlgumaCoisa quando estamos falando de um evento
//esse handleSubmit vai receber um parâmetro, aqui chamado de 'event', mas pode ser qualquer nome
/*target[0] pode ser visto quando usamos o console.log, é um dos campos que aparecem
tipo 'defaultPrevented: true' também vai aparecer, agora que no nosso código também foi informada essa função
serve para identificar o que está sendo digitado no campo de busca lá no site, de cujo campo queremos pegar o 'value' para pesquisar mais coisas
depois
*/
/*  props.onSubmit; o props consegue ler todo o código, pq ele tá antes da {}, então quando ocorrer um onSubmit lá no formulário,
ele também vai conseguir fazer algo aqui na função

ocorreu um submit, então o props vai pegar essa variável searchValue e vai passar pra alguém, no caso, lá pro App, onde serão buscados títulos/filmes similares, tipo quando buscamos por "Thor" e queremos filmes relacionados
*/
const Header = (props) => {
  
  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target[0].value;
    props.onSubmit(searchValue);
    event.target[0].value = "";
  }

  return (
    <header className="Header">
      <h1>DNC Movie List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquise por filmes" />
      </form>
    </header>
  );
};

export default Header;