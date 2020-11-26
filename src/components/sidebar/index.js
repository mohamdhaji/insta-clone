import React from "react";
import instaLogo from "../utils/images/instaLogo.png";
import {
  AiFillHome as Home,
  AiOutlinePoweroff as Logout,
} from "react-icons/ai";
import { RiLiveFill as Live } from "react-icons/ri";
import { FiMessageSquare as Message } from "react-icons/fi";
import {
  MdNotifications as Notification,
  MdSettings as Settings,
} from "react-icons/md";

export default function Sidebar() {
  const items = [
    {
      component: Home,
      text: "Home",
    },
    {
      component: Live,
      text: "Live",
    },

    {
      component: Message,
      text: "Messages",
    },

    {
      component: Notification,
      text: "Notifications",
    },
    {
      component: Settings,
      text: "Settings",
    },
    {
      component: Logout,
      text: "Logout",
    },
  ];
  return (
    <div className="sidebar">
      <img
        src={instaLogo}
        alt="logo"
        style={{ marginTop: "30px", width: "180px", alignSelf: "center" }}
      />
      <div style={{ marginTop: "50px" }}>
        {items.map((el, i) => {
          const Logo = el.component;
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                cursor: "pointer",
              }}
              className={`${i === 0 ? "selected" : ""}`}
              key={i}
            >
              <Logo
                style={{
                  marginLeft: `${i === 0 ? "16px" : "20px"}`,
                  color: "#757575",
                }}
                size="35px"
              />
              <span style={{ position: "absolute", left: "90px" }}>
                {el.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
