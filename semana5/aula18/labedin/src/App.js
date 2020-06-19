import React from 'react';
import './App.css';
import eu from './components/images/eu.jpg'
import etb from './components/images/etb.png'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={eu} 
          nome="Leonardo" 
          descricao="Oi, eu sou o Leo Gomes. Sou aluno da Labenu. Estou gostando bastante do módulo que estou, que é de React, estou animado com as possibilidades que o react proporciona e me dediacando bastante."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://image.flaticon.com/icons/svg/2965/2965306.svg"
          nomeInfo="Email: "
          info="leonardogomessousa5@gmail.com"
        />
        <CardPequeno 
          imagem="https://image.flaticon.com/icons/svg/2928/2928892.svg"
          nomeInfo="Endereço: "
          info="Brasília"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante da Labenu, futuro Dev Full Stack!" 
        />
        
        <CardGrande 
          imagem={etb} 
          nome="Escola Técnica de Brasília" 
          descricao="Formado em Técnico em Informática" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
