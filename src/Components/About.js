import React from "react";
import image from "../Assets/Image/image.png";
import image2 from "../Assets/Image/imageAbout.png";

const About = () => {
  return (
    <div
      className="py-8 lg:py-[20px] lg:h-auto flex flex-col items-center"
      id="about"
    >
      <div className="grid justify-items-center w-full">
        <p className="md:w-[500px] text-center px-5 md:px-0">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          elusmod tempor incidident ut dolore magna aliqua.
        </p>
      </div>

      <div className="w-full h-auto md:pt-[150px] grid grid-cols-1 md:grid-cols-2 justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="pb-[50px] pt-[50px] md:pt-0 text-center">
            "exceptuer sint occoeecat cupidatat non proident"
          </h1>
          <img alt="/" src={image} className="w-[300px] h-[300px]" />
        </div>
        <div className="hidden md:flex flex-col items-end justify-end">
          <img alt="/" src={image2} />
        </div>
      </div>
    </div>
  );
};

export default About;
