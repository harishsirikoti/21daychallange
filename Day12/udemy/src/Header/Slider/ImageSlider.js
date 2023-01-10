import React, { useState } from "react";
import "./index.scss";
import { SliderData } from "./Sliderdata";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const ImageSlider = ({ slides }) => {
  const [current, setcurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setcurrent(current == length - 1 ? 0 : current + 1);
  };
  const preSlide = () => {
    setcurrent(current == 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <BsFillArrowLeftSquareFill className="left-arrow" onClick={preSlide} size={25} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            <div className="center">
              {index === current && (
                <img src={slide.img} alt="travel" className="imagslide" />
              )}
            </div>
          </div>
        );
      })}
      <BsFillArrowRightSquareFill className="right-arrow" onClick={nextSlide} size={25} />
    </section>
  );
};

export default ImageSlider;
