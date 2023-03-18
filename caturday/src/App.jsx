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
    url: "",
  });
  const onDiscover = async () => {
    console.log("discover button clicked!");
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${ACCESS_KEY}`
      );
      const data = await response.json();
      let breeds = data[0].breeds[0];
      let imgURL = data[0].url;
      setCat({
        name: breeds.name,
        weight: breeds.weight.metric,
        origin: breeds.origin,
        life_span: breeds.life_span,
        url: imgURL,
      });
    } catch (error) {
      alert("Oops! Something went wrong.");
      console.log(error);
    }
  };

  return (
    <div className="App">
      <MainDisplay discoverHandler={onDiscover} cat={cat} />
    </div>
  );
}

export default App;
