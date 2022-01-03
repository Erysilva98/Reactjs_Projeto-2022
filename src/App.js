import Item from "./components/Item";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <p></p>
      <h1> Primeiro Projeto de 2022</h1>
      <p></p>
      <h5> Jornada para Desenvolvimento Web </h5>
      <ul>
          <Item>
           Base de Estudo Inicial? HTML5, CSS3 e JavaScript. Em andamento.
          </Item>  
          <Item>
           Formas de Estudo? Há 10 Meses totalmente online. Bootcamps, Artigos e livros digital, referências de Youtube e Github...
          </Item> 
          <Item>
           Ampliando os Conhecimentos? Iniciando com Reactjs. 
          </Item>  
          <Item>
           Uma Liguagem Back-End ? Ruby, Python ou PHP, Ainda avaliando...
          </Item>  
          <Item>
           Estudar Banco de Dados? Preciso estudar, conheço o Mysql, e posso começa usando inicialmente.
          </Item>  
          <Item>
           O Sistema Operacional para Desenvolvimento em 2022? Ubutun 18.04 adirir oficialmente em 27 de Dezembro de 2021
          </Item>  
          <Item>
           Porque começou usar Distribuição Linux? Foi necessário para avança nos estudos, montar uma área de Desenvolvimento.
          </Item>
          <Item>
           Objetivo para 2022? Mais 365 Dias de Conhecimento...
          </Item> 
      </ul>
      <Card/>
    </>
  )
}

export default App;
