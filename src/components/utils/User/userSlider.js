import React, { useState, useEffect } from "react";
import axios from "axios";
import background from "../images/labtob.jpg";
import { RiAddLine as Add } from "react-icons/ri";
import ImageCard from "./image_card";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function UserSlider() {
  const [loading, setLoading] = useState(true);
  const [userCards, setUserCards] = useState(() => {
    const cards = [
      {
        src: "",
        background: background,
        pTitle: "Technology",
        sTitle: "android",
        id: "1",
      },
      {
        src: "",
        background: background,
        pTitle: "Travels",
        sTitle: "Airlines",
        id: "2",
      },
      {
        src: "",
        background: background,
        pTitle: "Transport",
        sTitle: "Truck",
        id: "3",
      },
      {
        src: "",
        background: background,
        pTitle: "Travels",
        sTitle: "Tours",
        id: "4",
      },
    ];

    return cards;
  });

  const showCards = () => {
    if (!loading) {
      const cards = userCards.map((el) => {
        return <ImageCard key={el.id} user={el} />;
      });
      return cards;
    } else {
      return (
        <CircularProgress
          style={{
            color: "#00bcd4",
            position: "absolute",
            left: "130px",
          }}
          thickness={7}
          size="60px"
        />
      );
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://fakerapi.it/api/v1/images?_quantity=4&_type=animals&_height=300"
      )
      .then((response) => {
        const users = [...userCards];
        response.data.data.forEach((el, i) => {
          users[i] = { ...users[i], src: el.url };
        });
        setUserCards(users);
        setLoading(false);
      });
  }, []);
  return (
    <div className="user-slider">
      <div
        style={{
          textAlign: "center",
          width: "80px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#EF5350",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <Add
            size="35"
            style={{
              marginTop: "30%",
              color: "white",
            }}
          ></Add>
          <div style={{ marginTop: "25px", color: "#757575" }}>Add Story</div>
        </div>
      </div>
      {showCards()}
    </div>
  );
}
