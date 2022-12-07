import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import './index.css';

function App() {

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe a sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="input-container">
          </div>
          <button type='button'>
            <GrFormPrevious />
            <span>Voltar</span>
          </button>
          <button type='submit'>
            <span>Avançar</span>
            <GrFormNext />
          </button>
        </form>

      </div>
    </div>
  )
}

export default App