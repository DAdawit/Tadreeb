import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="h-[80vh] w-screen relative">
        <Image
          src="/contactus.jpg"
          alt="spector"
          fill
          className="w-screen h-[80vh] object-cover brightness-50"
          blurDataURL="/about 1.jpg"
        />
      </div>
      <div className="absolute top-1/2 w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white content-center flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl text-center  font-serif mt-8 tracking-wide	text-primary">
              Contact Us
            </h1>

            <p className=" text-white text-xl  tracking-widest max-w-4xl text-center px-5 mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              tempora labore consequatur quae earum, optio beatae soluta
              deserunt, ducimus vitae sunt quam! Ab iusto mollitia aperiam sed
              eveniet cumque vero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
