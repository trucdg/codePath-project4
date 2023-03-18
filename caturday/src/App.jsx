import React, { useState } from "react";
import "./App.css";
import MainDisplay from "./component/MainDisplay";
import HistoryGallery from "./component/HistoryGallery";
import BanList from "./component/BanList";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [cat, setCat] = useState({
    name: "",
    breed: "",
    metric: "",
    origin: "",
    life_span: "",
    url: "",
  });

  // initialize a useState variable to store the images seen so far
  const [prevCats, setPrevCats] = useState([]);

  // initalize an array to store the ban list
  const [banList, setBanList] = useState([]);

  // handler for selecting an attribute
  const onClickedAttribute = (attribute) => {
    console.log("attribute clicked", attribute);
    setBanList((prevList) => {
      return [...prevList, attribute];
    });
  };

  const onDiscover = async () => {
    console.log("discover button clicked!");

    // get a random name, which has its default to Mimi
    let name = "Mimi";
    try {
      const responseForName = await fetch(
        "https://randommer.io/api/Name?nameType=firstname&quantity=1",
        {
          method: "GET",
          headers: {
            "X-Api-Key": "130d08e89920430cb0d0c452784b2dbe",
          },
        }
      );
      const dataForName = await responseForName.json();
      name = dataForName[0];
    } catch (e) {
      console.log("Oh no, there is an error in the name generator API");
      console.log("The error is", e);
    }
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${ACCESS_KEY}`
      );
      const data = await response.json();
      let breeds = data[0].breeds[0];
      let imgURL = data[0].url;

      // set Cat state variable
      setCat({
        name: name,
        breed: breeds.name,
        weight: breeds.weight.metric,
        origin: breeds.origin,
        life_span: breeds.life_span,
        url: imgURL,
      });

      // set prevCats state variable
      setPrevCats((prevCats) => {
        return [
          ...prevCats,
          { url: imgURL, origin: breeds.origin, breed: breeds.name },
        ];
      });
      console.log(prevCats);
    } catch (error) {
      alert("Oops! Something went wrong.");
      console.log(error);
    }
  };

  return (
    <div className="App d-flex">
      <HistoryGallery cats={prevCats} />
      <MainDisplay
        discoverHandler={onDiscover}
        cat={cat}
        clickedAttributeHandler={onClickedAttribute}
      />
      <BanList banList={banList} />
    </div>
  );
}

export default App;
