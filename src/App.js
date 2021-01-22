import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import "antd/dist/antd.css";

const apiUrl =
  "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json";
const apiUrl2 =
  "https://cors-anywhere.herokuapp.com/https://xkcd.com/614/info.0.json";

function App() {
  const [firstComicData, setFirstComicData] = useState(null);
  const [secondComicData, setSecondComicData] = useState(null);

  const getComicData = async () => {
    try {
      const response = await axios.all([
        axios.get(apiUrl).catch((e) => {}),
        axios.get(apiUrl2).catch((e) => {}),
      ]);

      setFirstComicData(response[0].data);
      setSecondComicData(response[1].data);
    } catch (e) {}
  };

  useEffect(() => {
    getComicData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Tomi's frontend solution </h2>

        <div className="user-container">
          {firstComicData && (
            <Card
              className="card-one"
              title={firstComicData.title}
              img={firstComicData.img}
              alt={firstComicData.alt}
              date={`${firstComicData.day}/${firstComicData.month}/${firstComicData.year}`}
            />
          )}

          {secondComicData && (
            <Card
              className="card2"
              title={secondComicData.title}
              img={secondComicData.img}
              alt={secondComicData.alt}
              date={`${secondComicData.day}/${secondComicData.month}/${secondComicData.year}`}
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
