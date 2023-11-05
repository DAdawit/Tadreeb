"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default class Hero extends Component {
  render() {
    const settings = {
      //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 7000,
    };
    return (
      <>
        <div className="-mt-4 overflow-x-hidden">
          <Slider {...settings}>
            <div className="">
              <div className="relative">
                <div className="h-[75vh] w-screen ">
                  <Image
                    src="/shopping2.jpg"
                    alt="spector"
                    fill
                    className="w-screen h-[75vh] object-cover brightness-50 object-right"
                    blurDataURL="/bannerAbout.jpg"
                  />
                </div>
                <div className="absolute top-1/3 w-full">
                  <div className="flex flex-col justify-start pl-5">
                    <h1 className="text-3xl md:text-4xl  lg:text-5xl text-center text-white font-serif mt-2 tracking-wide ">
                      Get everything in
                    </h1>
                    <h3 className="text-white text-center mt-3 font-serif text-xl sm:text-2xl ">
                      one place !
                    </h3>

                    <Link
                      href="/products"
                      className="self-center rounded-lg mt-3 bg-last px-6 py-3 text-white font-medium font-sans text-lg tracking-widest hover:scale-105 transition-all"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="h-[75vh] w-screen pl-10">
                  <Image
                    src="/shopping3.jpg"
                    alt="spector"
                    fill
                    className="w-screen h-[75vh] object-cover brightness-75"
                    blurDataURL="/bannerAbout.jpg"
                  />
                </div>
                <div className="absolute top-1/3 w-full">
                  <div className="flex flex-col justify-start ">
                    <h1 className="text-2xl md:text-4xl  lg:text-5xl text-center text-white font-serif mt-2 tracking-wide capitalize">
                      Your one-stop-shop for all
                    </h1>
                    <h3 className="text-white text-center mt-3 font-serif text-xl sm:text-2xl">
                      your needs.
                    </h3>
                    <Link
                      href="/products"
                      className="self-center rounded-lg mt-3 bg-last px-6 py-3 text-white font-medium font-sans text-lg tracking-widest hover:scale-105 transition-all"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
