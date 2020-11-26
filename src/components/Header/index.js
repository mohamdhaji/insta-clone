import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../utils/images/insta.png";
import teamwork from "../utils/images/teamwork.svg";

import ProfileImg from "../utils/User/profileImg";
export default function Header() {
  return (
    <header className="main-header">
      <img
        style={{
          marginLeft: "250px",
          width: "50px",
          color: "#FF5252",
          cursor: "pointer",
        }}
        src={logo}
        alt="logo"
      />
      <Paper
        style={{ margin: "120px", borderRadius: "33px", height: "40px" }}
        component="form"
      >
        <InputBase
          style={{ marginLeft: "20px", width: "390px", height: "40px" }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="submit"
          aria-label="search"
          style={{ height: "40px", color: "#E91E63" }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      <ProfileImg src={teamwork} size="55px" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "14px",
        }}
      >
        <span style={{ fontWeigth: "bold", color: "#F50057" }}>
          klaus mikaelson
        </span>
        <span style={{ color: "#9E9E9E", fontSize: "12px" }}>
          Actress, evil
        </span>
        <span style={{ color: "#9E9E9E", fontSize: "12px" }}>
          paris, palestine
        </span>
      </div>
    </header>
  );
}
