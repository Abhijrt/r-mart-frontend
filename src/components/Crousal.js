import React, { useState, useEffect } from "react";
import firstImage from "../static/images/crousal1.jpeg";
import secondImage from "../static/images/crousal2.jpg";
import thirdImage from "../static/images/background-login.jpeg";
import ImageComponent from "./ImageComponent";

function Crousal() {
  useEffect(() => {
    setInterval((goLeft) => {}, 300);
    return () => {};
  }, [40]);

  let crousalArray = [
    <ImageComponent src={firstImage} />,
    <ImageComponent src={secondImage} />,
    <ImageComponent src={thirdImage} />,
  ];

  const [x, setX] = useState(0);
  const goLeft = (e) => {
    e.preventDefault();
    x === 0 ? setX(-100 * (crousalArray.length - 1)) : setX(x + 100);
  };
  const goRight = (e) => {
    e.preventDefault();

    x === -100 * (crousalArray.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="crousal-container">
      {crousalArray.map((item, index) => {
        return (
          <div
            key={index}
            className="crousal fade"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button onClick={goLeft} className="prev-btn">
        &#10094;
      </button>
      <button onClick={goRight} className="next-btn">
        &#10095;
      </button>
    </div>
  );
}

export default Crousal;
