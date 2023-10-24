import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="h-[60vh] xll:h-[500px] relative mb-16">
        <Image
          src="/about 1.png"
          alt="aboutUs page image"
          height={1000}
          width={1000}
          className="h-[70vh] xll:h-[500px]  w-full object-cover"
        />
        <div className="absolute top-1 w-full h-full">
          <div className="px-8 grid  md:grid-cols-2 justify-items-center h-full">
            <div className="h-full flex items-center">
              <div className=" grid items-center">
                <h1 className="text-center font-bold text-xl xl:2xl xll:text-4xl mt-8 text-white">
                  About Us
                </h1>
                <p className="text-white mt-8 text-center">
                  About Us To provide exceptional training and consulting
                  services that empower individuals and organizations to achieve
                  their full potential. We strive to be the preferred partner of
                  our clients by delivering high quality, customized solutions
                  that address their unique needs and challenges.
                </p>
                <p className="text-white mt-8 text-center">
                  We are committed to continuously improving our services and
                  staying at the forefront of industry trends and best
                  practices. Our team of experienced professionals is dedicated
                  to delivering innovative, practical, and results-oriented
                  solutions that help our clients achieve their goals.
                </p>
              </div>
            </div>
            <div className="w-full flex items-center">
              <form action="#" className="w-full">
                <div className="grid max-w-sm mx-auto ">
                  <div className="grid mt-3">
                    <label htmlFor=""></label>
                    <input type="text" className="" />
                  </div>
                  <div className="grid mt-3">
                    <label htmlFor=""></label>
                    <input type="text" className="" />
                  </div>
                  <div className="grid mt-3">
                    <label htmlFor=""></label>
                    <input type="text" className="" />
                  </div>
                  <div className="grid mt-3">
                    <label htmlFor=""></label>
                    <input type="text" className="" />
                  </div>

                  <button className="bg-primary rounded-lg text-white py-2 mt-3">
                    Request a Call Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
