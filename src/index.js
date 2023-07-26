import React from "react"
import ReactDOM from "react-dom"

function MyInfo(){
  return(
    <div>
      <div>
        <h1>Fredymar León</h1>
        <p>Sou venezuelana, tenho 32 anos. Moro no Brasil desde 2018. Sou casada e tenho duas filhas.</p>
      </div>
      <div>
        <h2>Atividades que gosto de fazer em momentos de lazer:</h2>
        <ol>
          <li>Eu gosto de ler a Bíblia com meu marido.</li>
          <li>Amo brincar com minhas filhas.</li>
          <li>Gosto de ver palestras sobre Inteligência Emocional e Novos Negócios</li>        
        </ol>
      </div>
    </div>
)}

ReactDOM.render(<MyInfo/>, document.getElementById("root"))