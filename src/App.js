import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Krakow" />
        <footer>
          This project was coded by{" "}
          <a
            rel="noreferrer"
            href="https://www.instagram.com/neveykina_nastya"
            target="_blank"
          >
            Anastasiia Tatarchenko
          </a>{" "}
          and is{" "}
          <a
            rel="noreferrer"
            href="https://github.com/Anastasiia-deign/react_my_best_weather"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
