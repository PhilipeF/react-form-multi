import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

import './Steps.css';

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <p>
          <AiOutlineUser />
          Identificação
        </p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <p>
          <AiOutlineStar />
          Avaliação
        </p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <p>
          <FiSend />
          Envio
        </p>
      </div>
    </div>
  )
}

export default Steps;
