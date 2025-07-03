import React from "react";
import "./index.css";

function App() {
  const handleYes = () => {
    alert("Yay! 🎉 I knew you'd say yes! 💖 Can't wait!");
  };

  const handleNo = () => {
    alert("Oh no! 😢 Are you sure? I thought we had something special...");
  };

  return (
    <div className="container">
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXpmeTU4Z3QwZ3FhNzhqdnpoeGk0a291enkzOTR6MWttZzA3cWs1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/orU4txbRZIp6vJheJ9/giphy.webp"
        alt="No GIF"
        className="gitf"
      />

      <h1>💌 Will You Go On Date with me ToDay ? 💌</h1>
      <p>Choose your answer below! 😊</p>
      <div className="buttons">
        <button className="yes-btn" onClick={handleYes}>
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWIwbDVxOWVnMmhlY3ZyNGwxNTBqYjJsNG5nMDc3Y3M2dGxobjBqYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gDfteqLchLcRTtjAD7/giphy.webp"
            alt="Yes GIF"
            className="gif"
          />
          Yes!
        </button>
        <button className="no-btn" onClick={handleNo}>
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGF5Z3Jvb25oamptYzNyd2hzeHV3MWt3aXB5aGZucXAzMGxldXA3cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/flwM86HM5Fx8S5YJlX/giphy.webp"
            alt="No GIF"
            className="gif"
          />
          No...
        </button>
      </div>
    </div>
  );
}

export default App;
