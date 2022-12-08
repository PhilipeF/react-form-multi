import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import UserForm from './components/UserForm';
import Thanks from './components/Thanks';
import ReviewForm from './components/ReviewForm';

import { userForm } from './hooks/userForm';

import './index.css';
import './App.css';

function App() {

  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />]

  const { currentStep, currentComponent, changeStep, isLastStep, isFristStep } = userForm(formComponents)

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
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="input-container">{currentComponent}</div>
          <div className="actions">

            {!isFristStep && (<button type='button' onClick={() => changeStep(currentStep - 1)} >
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            )}

            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'>
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App