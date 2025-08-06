import { useState } from "react";

const Rating = ({ heading }) => {
  //instead of hard coding the star array numbers you can use the code below for a more dynamic way
  const rating_stars = Array.from({ length: 5 }, (_, i) => i + 1);

  //states
  const [rating, seRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [setSubmit] = useState(false);

  const feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];
  const handleSubmit = () => {
    if (rating > 0) {
      setSubmit(true);
    }
  };

  return (
    <div>
      <h2> {heading}</h2>
      <div className="stars">
        {rating_stars.map((star) => (
          <span
            key={star}
            onClick={() => seRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
          >
            {"\u2605"}
          </span>
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
      <button
        className="submit-btn"
        disabled={rating == 0}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Rating;
