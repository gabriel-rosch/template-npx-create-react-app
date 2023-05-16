
import { useState } from 'react';
import './Elevador.css'


function Elevador() {
  const [andarAtual, setAndarAtual] = useState(0)
  const andarMaximo = 10


  function subir() {
    if(andarAtual < andarMaximo) {
      setAndarAtual(andarAtual + 1)  
    } else {
      alert('Andar maximo atingido')
    }
  }

  function descer() {
    if(andarAtual > 0) {
      setAndarAtual(andarAtual - 1)  
    } else {
      alert('Andar mínimo atingido')
    }
  }

  return (
    <div className="main">
      <span>Andar atual:{andarAtual}</span>
      <div>
        <button onClick={subir}>Subir</button>
        <button onClick={descer}>Descer</button>
      </div>
    </div>
  )
}


export default Elevador