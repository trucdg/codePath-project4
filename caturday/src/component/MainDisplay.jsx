import React from "react";
import "./MainDisplay.css";

const MainDisplay = ({ discoverHandler }) => {
  return (
    <div className="main-display">
      <header>
        <h1>
          The Caturday! <i className="fa-solid fa-shield-cat"></i>
        </h1>
        <p>Today is all about cats!</p>
        <h2>龴ↀ◡ↀ龴</h2>
      </header>
      <div>
        <h2>Mimi - name</h2>
        <div className="buttons-cont">
          <button>alt name</button>
          <button>life span</button>
          <button>origin</button>
          <button>metrics</button>
        </div>
        <div className="img-container">
          <img
            className="display-image"
            src="https://cdn2.thecatapi.com/images/ap0.jpg"
          />
        </div>
      </div>
      <button onClick={discoverHandler}>
        <i className="fa-solid fa-shuffle"></i>Discover!
      </button>
    </div>
  );
};

export default MainDisplay;
