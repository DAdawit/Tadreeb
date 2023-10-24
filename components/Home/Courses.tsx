"use client";
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
      <div
        className={`flex justify-between items-center gap-2 max-w-6xl mx-auto  xll:max-w-[1750px] xll:mx-auto `}
      >
        {tabItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleChange(`${item}` as string)}
            className="flex  items-center md:justify-center flex-col md:flex-row gap-2 h-full "
          >
            <span
              className={
                tabs === item
                  ? `text-sm md:text-lg xxl:text-[22px] pb-4 bg-primary rounded-t-lg text-white py-3`
                  : "text-sm md:text-lg  xxl:text-[22px]  pb-4 bg-secondary rounded-t-lg text-white py-3"
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto  xll:max-w-[1750px] xll:mx-auto ">
            {tabContents.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-16 bg-bgSecondary text-center rounded-lg w-full"
              >
                <h1 className="">{item}</h1>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </>
  );
};

export default Courses;
