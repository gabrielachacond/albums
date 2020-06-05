import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/card";

import "./styles.css";

const albumes = [
  {
    name: "Apnea",
    artist: "Alexis",
    year: 2019,
    img:
      "https://images.unsplash.com/photo-1472479427421-c6daa7ce0f7b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=800",
    rating: 4,
    liked: false
  },
  {
    name: "Roses",
    artist: "Vicentico",
    year: 2018,
    img:
      "https://images.unsplash.com/photo-1533967481022-16c5d9551422?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
    rating: 3,
    liked: true
  },
  {
    name: "Beach",
    artist: "Luis Fonsi",
    year: 2020,
    img:
      "https://images.unsplash.com/photo-1585129842777-fcfbfb62b571?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
    rating: 3,
    liked: false
  }
];

function App() {
  return (
    <div className="App">
      {albumes.map(element => (
        <Card
          name={element.name}
          artist={element.artist}
          year={element.year}
          img={element.img}
          rating={element.rating}
          liked={element.liked}
        />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
