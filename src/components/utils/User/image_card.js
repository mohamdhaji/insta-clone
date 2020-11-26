import React from "react";

export default function ImageCard({ user }) {
  return (
    <div className="image-card">
      <div
        style={{
          width: "130px",
          height: "90px",
          backgroundImage: `url(${user.background})`,
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <img
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            border: "3px solid white",
            position: "absolute",
            left: "-45px",
          }}
          src={user.src}
          alt="logo"
        ></img>
        <div style={{ position: "absolute", bottom: "-25px", left: "-35px" }}>
          <span style={{ color: "#616161" }}>#{user.pTitle}</span>
          <span
            style={{ color: "##9E9E9E", position: "absolute", left: "100px" }}
          >
            #{user.sTitle}
          </span>
        </div>
      </div>
    </div>
  );
}
