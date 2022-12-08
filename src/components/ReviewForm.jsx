import {
    BsFillEmojiSmileFill,
    BsFillEmojiFrownFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiHeartEyesFill
} from 'react-icons/bs';

import './ReviewForm.css';

const ReviewForm = () => {
    return (
        <div className="form-review">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input type="radio" value="unsatified" name="review" required />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value="neutral" name="review" required />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value="satisfied" name="review" required />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value="very-satisfied" name="review" required />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito Satisfeito</p>
                </label>
            </div>
            <textarea
                name="comment"
                id="comment"
                placeholder="Conte como foi a sua experiência com o produto"
            ></textarea>
        </div>
    );
};

export default ReviewForm