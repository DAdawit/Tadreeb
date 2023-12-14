import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="py-16 flex items-center justify-normal">
      <div className="flex flex-col justify-center items-center gap-5 pt-16 w-full">
        <h1 className=" text-primary font-sans text-xl font-medium text-center ">
          WHO WE ARE
        </h1>

        <p className=" text-gray-500 text-xl  tracking-widest max-w-4xl text-center px-5 mt-3">
          We are committed to continuously improving our services and staying at
          the forefront of industry trends and best practices. Our team of
          experienced professionals is dedicated to delivering innovative,
          practical, and results-oriented solutions that help our clients
          achieve their goals.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
