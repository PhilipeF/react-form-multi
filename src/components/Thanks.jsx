import {
    BsFillEmojiSmileFill,
    BsFillEmojiFrownFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiHeartEyesFill
} from 'react-icons/bs';

import './Thanks.css';

const emojiData = {
    unsatified: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />
}

const Thanks = ({ data }) => {
    return (
        <div className='thanks-container'>
            <h2>Falta Pouco...</h2>
            <p>A sua opnião é muito importante em breve recebera um
                cumpom de 10% de desconto para a sua próxima compra.
                Para concluir sua avaliação clique no botão de Enviar abaixo.
            </p>
            <h3>Aqui está o resumo da sua avaliação {data.name}</h3>
            <p className="review-data">
                <span>Satisfação com o produto:</span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>Comentário:</span>
                <span>{data.comment}</span>
            </p>
        </div>
    )
}

export default Thanks