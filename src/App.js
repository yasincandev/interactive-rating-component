import { useState } from "react";
import star from "./images/icon-star.svg";
import thanks from "./images/illustration-thank-you.svg";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [items, setItems] = useState("");

  const Button = ({ number }) => {
    return (
      <button onClick={() => setItems(number)} className="number-button">
        {number}
      </button>
    );
  };

  return (
    <>
      {!isSubmitted && (
        <div className="rating-container">
          <img src={star} alt="" className="star-img" />
          <h2 className="header">How did we do?</h2>
          <p className="rating-text">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <ul className="numbers-container">
            <li>
              <Button number={1} />
            </li>
            <li>
              <Button number={2} />
            </li>
            <li>
              <Button number={3} />
            </li>
            <li>
              <Button number={4} />
            </li>
            <li>
              <Button number={5} />
            </li>
          </ul>

          <div className="submit-button-container">
            <button
              onClick={() => setIsSubmitted(true)}
              className="submit-button"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {isSubmitted && <Thanks items={items} setIsSubmitted={setIsSubmitted} />}
    </>
  );
}

const Thanks = ({ items, setIsSubmitted }) => {
  return (
    <div className="rating-container">
      <div className="thanks-img-container">
        <img src={thanks} alt="" className="thanks-img" />
      </div>
      <div className="selected-text-container">
        <p className="selected-text">You selected {items} out of 5</p>
      </div>
      <div className="thanks-text-container">
        <h2 className="header">Thank you</h2>
        <p className="thanks-text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default App;
