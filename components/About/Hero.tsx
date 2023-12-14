import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="h-[80vh] w-screen relative">
        <Image
          src="/about2.jpg"
          alt="spector"
          fill
          className="w-screen h-[80vh] object-cover brightness-50"
          blurDataURL="/about 1.jpg"
        />
      </div>
      <div className="absolute top-1/2 w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white content-center flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl text-center  font-serif mt-8 tracking-wide	">
              About Us
            </h1>
            <p className=" text-white text-xl  tracking-widest max-w-4xl text-center px-5 mt-8">
              To provide exceptional training and consulting services that
              empower individuals and organizations to achieve their full
              potential. We strive to be the preferred partner of our clients by
              delivering high quality, customized solutions that address their
              unique needs and challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
