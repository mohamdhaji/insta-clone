import React from "react";
import {
  BsThreeDotsVertical as Menu,
  BsHeartFill as Heart,
  BsCursor as Cursor,
  BsFillBookmarkFill as Bookmark,
} from "react-icons/bs";
import { FiMessageSquare as Message } from "react-icons/fi";
import ProfileImg from "./profileImg";
export default function Card({ data }) {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "10px",
          marginTop: "5px",
        }}
      >
        <ProfileImg src={data.src} size="45px" />
        <div
          style={{
            display: "inline-block",
            marginLeft: "10px",
            fontSize: "12px",
          }}
        >
          <div
            style={{ fontSize: "16px", marginBottom: "3px", color: "#616161" }}
          >
            {data.name}
          </div>
          <div style={{ marginBottom: "10px", color: "#9E9E9E" }}>
            {data.city}
          </div>
        </div>
        <Menu
          size="35px"
          style={{
            color: "#FF1744",
            position: "absolute",
            right: "0px",
            cursor: "pointer",
          }}
        />
      </div>
      <div
        style={{
          height: "250px",
          width: "100%",
          background: `url(${data.background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "55px",
        }}
      >
        <Heart
          size="30"
          style={{ color: "#FF1744", marginLeft: "25px", cursor: "pointer" }}
        />
        <Message
          size="30"
          style={{ marginLeft: "25px", color: "#757575", cursor: "pointer" }}
        />
        <Cursor size="30" style={{ marginLeft: "25px", cursor: "pointer" }} />
        <Bookmark
          size="30"
          style={{
            position: "absolute",
            right: "10px",
            color: "#BDBDBD",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}
