import React from "react";

export default function ImageComponent({ src }) {
  return <img src={src} alt="slide-img" style={imgStyle} />;
}

const imgStyle = {
  width: "100%",
  height: "300px",
  backgroundSize: "cover",
};
