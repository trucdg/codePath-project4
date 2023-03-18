import React from "react";
import "./MainDisplay.css";

const MainDisplay = ({ discoverHandler, cat }) => {
  return (
    <div className="main-display">
      <header>
        <h1>
          The Caturday! <i className="fa-solid fa-shield-cat"></i>
        </h1>
        <p>Today is all about cats!</p>
        <h2>龴ↀ◡ↀ龴</h2>
      </header>
      <div className="display-cat">
        {cat.url ? (
          <div>
            <h2>{cat.name}</h2>
            <div className="buttons-cont">
              <button>{cat.breed}</button>
              <button>{cat.life_span} years</button>
              <button>{cat.origin}</button>
              <button>{cat.weight} lbs</button>
            </div>
            <div className="img-container">
              <img className="display-image" src={cat.url} />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <button onClick={discoverHandler}>
        <i className="fa-solid fa-shuffle"></i>Discover!
      </button>
    </div>
  );
};

export default MainDisplay;
