import React, { useState } from "react";
import firstImage from "../static/images/AllProduct.png";
import secondImage from "../static/images/AddProduct.png";
import thirdImage from "../static/images/Cart.png";
import ImageComponent from "./ImageComponent";

function Crousal() {
  let crousalArray = [
    <ImageComponent src={firstImage} />,
    <ImageComponent src={secondImage} />,
    <ImageComponent src={thirdImage} />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (crousalArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
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
      <a onClick={goLeft} className="prev-btn">
        &#10094;
      </a>
      <a onClick={goRight} className="next-btn">
        &#10095;
      </a>
    </div>
  );
}

export default Crousal;
