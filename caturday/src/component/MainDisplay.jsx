import React from "react";
import "./MainDisplay.css";

const MainDisplay = () => {
  return (
    <div className="main-display">
      <header>
        <h1>
          The Caturday! <i class="fa-solid fa-shield-cat"></i>
        </h1>
        <p>Today is all about cats!</p>
        <h2>龴ↀ◡ↀ龴</h2>
      </header>
      <button>
        <i className="fa-solid fa-shuffle"></i>Discover!
      </button>
    </div>
  );
};

export default MainDisplay;
