import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[80vh] relative">
      <Image
        src="/banner.png"
        alt="hero image"
        height={2000}
        width={2000}
        className="h-[80vh] w-screen object-fill object-left-top brightness-75"
      />
      <div className="absolute top-20 w-full flex  text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="flex flex-col justify-center w-full col-span-2">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl  xxl:text-7xl font-bold ">
                Business Coaching &{" "}
              </h1>
              <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl  xxl:text-7xl font-bold mt-5">
                Consulting For Entrepreneur
              </h1>
              <div className="mt-8">
                <p className="text-sm">
                  Our organization provides customized development plans for
                  professionals across diverse fields. These programs are
                  designed to cater to varying levels of expertise, allowing
                  participants to acquire the necessary skills while considering
                  their career advancement
                </p>
              </div>
              <div className=" flex gap-x-5 mt-16">
                <button className="bg-secondary h-10 px-5 xxl:h-20">
                  LEARN MORE
                </button>
                <button className="bg-primary h-10 px-5 xxl:h-20">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
          <div className="bg-green-200 w-full flex content-end py-5  ">
            <div className="bg-orange-900 w-max flex content-end ">
              <Image
                src="/facebook.png"
                alt="hero image"
                height={2000}
                width={2000}
                className="h-10 xxl:h-16 object-contain "
              />
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
