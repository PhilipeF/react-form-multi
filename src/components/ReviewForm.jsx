import {
    BsFillEmojiSmileFill,
    BsFillEmojiFrownFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiHeartEyesFill
} from 'react-icons/bs';

import './ReviewForm.css';

const ReviewForm = ({ data, updateFielHandler }) => {
    return (
        <div className="form-review">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input
                        type="radio"
                        value="unsatified"
                        name="review"
                        required
                        checked={data.review === "unsatified"}
                        onChange={(e) => updateFielHandler("review", e.target.value)}
                    />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        value="neutral"
                        name="review"
                        required
                        checked={data.review === "neutral"}
                        onChange={(e) => updateFielHandler("review", e.target.value)}
                    />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        value="satisfied"
                        name="review"
                        required
                        checked={data.review === "satisfied"}
                        onChange={(e) => updateFielHandler("review", e.target.value)}
                    />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        value="very_satisfied"
                        name="review"
                        required
                        checked={data.review === "very_satisfied"}
                        onChange={(e) => updateFielHandler("review", e.target.value)}
                    />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito Satisfeito</p>
                </label>
            </div>
            <textarea
                name="comment"
                id="comment"
                placeholder="Conte como foi a sua experiência com o produto"
                value={data.comment || ""}
                onChange={(e) => updateFielHandler("comment", e.target.value)}
            ></textarea>
        </div>
    );
};

export default ReviewForm