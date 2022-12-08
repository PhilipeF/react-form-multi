import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

const Steps = () => {
  return (
    <div className="steps">
      <div className="step">
        <p>
          {AiOutlineUser}
          Identificação
        </p>
      </div>
      <div className="step">
        <p>
          {AiOutlineStar}
          Avalição
        </p>
      </div>
      <div className="step">
        <p>
          {FiSend}
          Envio
        </p>
      </div>
    </div>
  )
}

export default Steps;

//parei no minuto 41