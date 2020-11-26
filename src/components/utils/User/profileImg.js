import React from "react";

export default function ProfileImg(props) {
  return (
    <div style={{ display: "inline-block" }}>
      <img
        style={{
          width: `${props.size}`,
          height: `${props.size}`,
          borderRadius: "50%",
        }}
        src={props.src}
        alt="logo"
      ></img>
    </div>
  );
}
