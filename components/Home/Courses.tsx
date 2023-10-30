"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

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

  let tabContents = [
    "Executive Development",
    "Management & Leadership",
    "Creativity & Innovation",
    "Personal Effectiveness",
    "Strategic Planning",
    "Governance, Compliance & Risk",
    "Sustainability & CSR",
    "Business Process management",
    "Customer Service",
    "Office Administration",
    "Corporate Communication",
    "Public Relation",
    "Sales & marketing",
    "HR Management",
    "Learning & Development",
  ];

  const handleChange = (name: string) => {
    setTab(name);
  };
  return (
    <>
      <section className="px-5 sm:px-0">
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
          {tabs !== "marketing" ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto ">
              {tabContents.map((item, index) => (
                <Link
                  href="/course"
                  key={index}
                  className="flex justify-center items-center h-16 bg-bgSecondary text-center rounded-lg w-full"
                >
                  <h1 className="">{item}</h1>
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
