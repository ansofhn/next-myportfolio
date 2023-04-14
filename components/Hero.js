import React from "react";

const Hero = () => {
  return (
    <>
      <div className="mx-3.5 md:mx-10 space-y-5 mt-80">
        <div className="px-1 pt-20 font-light tracking-widest text-gray-400 uppercase">
          Ansof Habibunnadjar
        </div>
        <div className="text-4xl font-bold lg:text-6xl">
          Junior front end <br /> website developer
        </div>
        <div className="text-base text-gray-500 lg:text-lg">
          Over the past 2 years, as an Front end developer, I’ve worked with big{" "}
          <br /> companies and up-and-coming startups to successfully help them
          reach
          <br />
          their full potential and attract new customers.
        </div>
        <div className="text-lg font-bold">
          View Projects{" "}
          <span className="mx-4 text-sm font-normal text-gray-500">or</span>{" "}
          Read About Me
        </div>
      </div>
    </>
  );
};

export default Hero;
