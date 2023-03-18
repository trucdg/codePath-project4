import React, { useState } from "react";
import "./App.css";
import MainDisplay from "./component/MainDisplay";

function App() {
  const [cat, setCat] = useState({
    name: "",
    metric: "",
    origin: "",
    life_span: "",
  });

  return (
    <div className="App">
      <MainDisplay />
    </div>
  );
}

export default App;
