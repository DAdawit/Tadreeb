import SocialMeadiaIcons from "@/common/SocialMeadiaIcons";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-[90vh] relative xl:max-h-[80vh] xll:max-h-[60vh]">
        <Image
          src="/banner.png"
          alt="hero image"
          height={2000}
          width={2000}
          className="h-[90vh] xl:max-h-[80vh] xll:max-h-[60vh] w-screen object-fill object-left-top brightness-75"
        />
        <div className="absolute h-full top-0 w-full flex  text-white ">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full">
            <div className="flex flex-col justify-center w-full col-span-2 px-5">
              <div className="max-w-3xl xxl:max-w-4xl mx-auto grid ">
                <div className="align-middle sm:pl-8">
                  <h1 className="text-3xl  xl:text-4xl  xxl:text-6xl font-bold ">
                    Business Coaching &{" "}
                  </h1>
                  <h1 className="text-3xl  xl:text-4xl  xxl:text-6xl font-bold mt-5">
                    Consulting For Entrepreneur
                  </h1>
                  <p className="text-sm mt-8 xxl:text-lg ">
                    Our organization provides customized development plans for
                    professionals across diverse fields. These programs are
                    designed to cater to varying levels of expertise, allowing
                    participants to acquire the necessary skills while
                    considering their career advancement
                  </p>
                </div>
                <div className="mt-10 align-bottom h-full flex items-end sm:pl-8">
                  <div className="flex gap-x-5">
                    <button className="bg-secondary h-12 w-48 xxl:h-16 rounded-md">
                      LEARN MORE
                    </button>
                    <button className="bg-primary h-12 w-48 xxl:h-16 rounded-md">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full py-5 md:justify-end  items-center ">
              <div className="w-max pl-8 flex md:grid md:align-end pr-8 gap-2 md:justify-center">
                <SocialMeadiaIcons />
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 w-full">
            <div className="flex justify-center gap-x-3">
              <button className="bg-white h-3 w-3 rounded-full"></button>
              <button className="bg-white h-3 w-3 rounded-full"></button>
              <button className="bg-white h-3 w-3 rounded-full"></button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bgSecondary py-8 px-5">
        <h2 className="text-center text-black text-xl font-bold xll:text-2xl xxl:text-3xl font-roboto">
          Choose your preferred training format, explore our courses and enroll
          today with TADREEB
        </h2>
        <p className="text-center text-gray-600 mt-5 text-sm xll:text-md xxl:text-xl font-roboro">
          We are proud to offer a variety of training formats to suit your
          needs, including public training courses, in-house training solutions,
          and online training programs.
        </p>
      </div>
    </>
  );
};

export default Hero;
