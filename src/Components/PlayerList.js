import React from "react";
import Player from "./Player";

const PlayersList = () => {
  const players = [
    {
      name: "Messi",
      team: "Paris Saint-Germain",
      nationality: "Argentina",
      jerseyNumber: 30,
      age: 34,
      imageURL: "messi.jpg",
    },
    {
      name: "Cristiano Ronaldo",
      team: "Manchester United",
      nationality: "Portugal",
      jerseyNumber: 7,
      age: 37,
      imageURL: "ronaldo.jpg",
    },
    // Add more players here
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
