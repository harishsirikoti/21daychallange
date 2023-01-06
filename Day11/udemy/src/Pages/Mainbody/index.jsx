import React from "react";
import StartLearning from "./StartLearning/index";
import ImageSlider from "../../Header/Slider/ImageSlider";
import { SliderData } from "../../Header/Slider/Sliderdata";

const index = () => {
  return (
    <><ImageSlider slides={SliderData} />

      <StartLearning />
    </>
  );
};

export default index;
