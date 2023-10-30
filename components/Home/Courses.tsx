"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
  Energy_Courses,
  Engineering_And_Technical_Courses,
  Finance_And_Investment_Courses,
  Operations_And_Logistics_Courses,
  Sector_Specific_Courses,
  tabContents,
} from "./data";

const Courses = () => {
  const [tabs, setTab] = useState<string>("Business & Management Courses");

  const contentRef = useRef(null);
  var marketing = {};
  var event = {};
  var contentProduction = {};
  var digitalMarketing = {};
  let tabItems = [
    "Business & Management Courses",
    "Operations & Logistics Courses",
    "Finance & Investment Course",
    "Engineering & Technical Courses",
    "Energy Courses",
    "Sector Specific Courses",
  ];

  const handleChange = (name: string) => {
    setTab(name);
  };
  return (
    <>
      <section className="px-5 sm:px-0" id="training-course-calendar">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-2 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto ">
          {tabItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleChange(`${item}` as string)}
              className="flex items-center md:justify-center flex-col md:flex-row gap-2 h-full "
            >
              <span
                className={
                  tabs === item
                    ? `text-sm md:text-base xll:text-[22px] pb-4 bg-primary rounded-t-lg text-white py-3 w-full h-full`
                    : "text-sm md:text-base  xll:text-[22px]  pb-4 bg-secondary rounded-t-lg text-white py-3 w-full h-full"
                }
              >
                {item}
              </span>
            </button>
          ))}
        </div>
        <hr className="border-t-1 border-primary "></hr>
        <section className="mt-8">
          {tabs === "Business & Management Courses" ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto ">
              {tabContents.map((item, index) => (
                <Link
                  href="/courseCategory"
                  key={index}
                  className="flex justify-center items-center h-16 bg-bgSecondary text-center rounded-lg w-full"
                >
                  <h1 className="p-2">{item}</h1>
                </Link>
              ))}
            </div>
          ) : null}

          {tabs === "Operations & Logistics Courses" ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto ">
              {Operations_And_Logistics_Courses.map((item, index) => (
                <Link
                  href="/courseCategory"
                  key={index}
                  className="flex justify-center items-center h-16 bg-bgSecondary text-center rounded-lg w-full"
                >
                  <h1 className="p-2">{item}</h1>
                </Link>
              ))}
            </div>
          ) : null}
          {tabs === "Finance & Investment Course" ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto ">
              {Finance_And_Investment_Courses.map((item, index) => (
                <Link
                  href="/courseCategory"
                  key={index}
                  className="flex justify-center items-center h-16 bg-bgSecondary text-center rounded-lg w-full"
                >
                  <h1 className="p-2">{item}</h1>
                </Link>
              ))}
            </div>
          ) : null}

          {tabs === "Engineering & Technical Courses" ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto ">
              {Engineering_And_Technical_Courses.map((item, index) => (
                <Link
                  href="/courseCategory"
                  key={index}
                  className="flex justify-center items-center h-16 bg-bgSecondary text-center rounded-lg w-full"
                >
                  <h1 className="p-2">{item}</h1>
                </Link>
              ))}
            </div>
          ) : null}

          {tabs === "Energy Courses" ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto ">
              {Energy_Courses.map((item, index) => (
                <Link
                  href="/courseCategory"
                  key={index}
                  className="flex justify-center items-center h-16 bg-bgSecondary text-center rounded-lg w-full"
                >
                  <h1 className="p-2">{item}</h1>
                </Link>
              ))}
            </div>
          ) : null}
          {tabs === "Sector Specific Courses" ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto ">
              {Sector_Specific_Courses.map((item, index) => (
                <Link
                  href="/courseCategory"
                  key={index}
                  className="flex justify-center items-center h-16 bg-bgSecondary text-center rounded-lg w-full"
                >
                  <h1 className="p-2">{item}</h1>
                </Link>
              ))}
            </div>
          ) : null}
        </section>

        <hr className="border-t-1 border-primary my-8"></hr>
      </section>
    </>
  );
};

export default Courses;
