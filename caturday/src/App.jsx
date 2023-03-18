import React, { useState } from "react";
import "./App.css";
import MainDisplay from "./component/MainDisplay";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [cat, setCat] = useState({
    name: "",
    metric: "",
    origin: "",
    life_span: "",
  });
  const onDiscover = () => {
    console.log("discover button clicked!");
  };
  return (
    <div className="App">
      <MainDisplay discoverHandler={onDiscover} />
    </div>
  );
}

export default App;
