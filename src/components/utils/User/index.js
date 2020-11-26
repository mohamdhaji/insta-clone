import React, { useState } from "react";
import background from "../images/labtob.jpg";
import teamwork from "../images/teamwork.svg";
import Card from "./card";
export default function Dashboard() {
  const [cards, setCards] = useState(() => {
    const cards = [
      {
        name: "klaus mikaelson",
        background: background,
        city: "paris, palestine",
        src: teamwork,
        id: "11",
      },
      {
        name: "klaus mikaelson",
        background: background,
        city: "paris, palestine",
        src: teamwork,
        id: "22",
      },
      {
        name: "klaus mikaelson",
        background: background,
        city: "paris, palestine",
        src: teamwork,
        id: "33",
      },
      {
        name: "klaus mikaelson",
        background: background,
        city: "paris, palestine",
        src: teamwork,
        id: "44",
      },
      {
        name: "klaus mikaelson",
        background: background,
        city: "paris, palestine",
        src: teamwork,
        id: "55",
      },
      {
        name: "klaus mikaelson",
        background: background,
        city: "paris, palestine",
        src: teamwork,
        id: "66",
      },
    ];

    return cards;
  });

  const showCards = () => {
    const userCards = cards.map((data) => {
      return <Card key={data.id} data={data} />;
    });
    return userCards;
  };

  return (
    <div className="dashboard">
      <div className="card-container">{showCards()}</div>
    </div>
  );
}
