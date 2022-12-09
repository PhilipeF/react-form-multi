import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import UserForm from './components/UserForm';
import Thanks from './components/Thanks';
import Steps from './components/Steps';
import ReviewForm from './components/ReviewForm';

import { useState } from 'react';

import { userForm } from './hooks/userForm';

import './index.css';
import './App.css';

const formTamplete = {
  name: "",
  email: "",
  review: "",
  commet: ""
}

function App() {

  const [data, setData] = useState(formTamplete);

  const formComponents = [<UserForm data={data} />, <ReviewForm data={data} />, <Thanks data={data} />]

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
        <Steps currentStep={currentStep} />
        {/* <p>etapas</p> */}
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