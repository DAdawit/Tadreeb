"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { HeroType } from "@/Types";
import SocialMeadiaIcons from "@/common/SocialMeadiaIcons";
interface CarosoleProps {
  carosoles: HeroType[];
}
export default class Carosole extends Component<CarosoleProps> {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <>
        <div className=" overflow-x-hidden">
          <Slider {...settings}>
            {this.props.carosoles.map((carosole) => (
              <div
                className="h-[90vh] relative xl:max-h-[90vh] xll:max-h-[60vh]"
                key={carosole.id}
              >
                <Image
                  src={`${carosole.attributes.image}`}
                  alt="hero image"
                  height={2000}
                  width={2000}
                  className="h-[90vh] xl:max-h-[90vh] xll:max-h-[60vh] w-screen object-fill object-left-top brightness-75"
                />
                <div className="absolute h-full top-0 w-full flex  text-white ">
                  <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full">
                    <div className="flex flex-col justify-center w-full col-span-2 px-5">
                      <div className="max-w-3xl xxl:max-w-4xl mx-auto grid ">
                        <div className="align-middle sm:pl-8">
                          <h1 className="text-3xl  xl:text-4xl  xxl:text-6xl font-bold mt-5">
                            {carosole.attributes.title}
                          </h1>
                          <p className="text-sm mt-8 xxl:text-lg ">
                            {carosole.attributes.description}
                          </p>
                        </div>
                        <div className="mt-10 align-bottom h-full flex items-end sm:pl-8">
                          <div className="grid sm:flex gap-x-5 gap-y-2">
                            <Link
                              href="#learn-more"
                              className="bg-secondary h-12 w-48 xxl:h-16 rounded-md flex justify-center items-center"
                            >
                              LEARN MORE
                            </Link>
                            <Link
                              href="/course-finder"
                              className="bg-primary h-12 w-48 xxl:h-16 rounded-md flex justify-center items-center"
                            >
                              BOOK NOW
                            </Link>
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
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
