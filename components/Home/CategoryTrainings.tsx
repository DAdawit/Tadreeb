"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchCategoryTrainings } from "@/services/user";
const CategoryTrainings = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCategoryTrainings"],
    queryFn: fetchCategoryTrainings,
  });
  const [activeTab, setActiveTab] = useState(data && data[0]?.name); // Set the initial active tab

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  const contentRef = useRef(null);
  useEffect(() => {
    if (data && data[0]) {
      setActiveTab(data[0].name); // Set the active tab once the data is available
    }
  }, [data]);

  console.log(data);

  return (
    <>
      <section className="px-5 sm:px-0" id="training-course-calendar">
        {/* {JSON.stringify(tabsActiveTraining, null, 2)} */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-2 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto ">
          {data &&
            Array.isArray(data) &&
            data.map((item, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(item.name)}
                className="flex items-center md:justify-center flex-col md:flex-row gap-2 h-full "
              >
                <span
                  className={
                    activeTab === item.name
                      ? `text-sm md:text-base xll:text-[22px] pb-4 bg-primary rounded-t-lg text-white py-3 w-full h-full`
                      : "text-sm md:text-base  xll:text-[22px]  pb-4 bg-secondary rounded-t-lg text-white py-3 w-full h-full"
                  }
                >
                  {item.name}
                </span>
              </button>
            ))}
        </div>
        <hr className="border-t-1 border-primary "></hr>

        <div className="mt-8">
          {data &&
            Array.isArray(data) &&
            data
              .filter((item, index) => item.name === activeTab)
              .map((item) => (
                <div key={item?.id}>
                  {item?.trainings.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto ">
                      {item?.trainings.map((training) => (
                        <Link
                          href={`/trainings/${training.id}/courses`}
                          key={training.id}
                          className="flex justify-center items-center h-16 bg-bgSecondary text-center rounded-lg w-full"
                        >
                          <h1 className="p-2">{training.name}</h1>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto ">
                      <p>No trainings available for {item.name}</p>
                    </div>
                  )}
                </div>
              ))}
        </div>

        <hr className="border-t-1 border-primary my-8"></hr>
      </section>
    </>
  );
};

export default CategoryTrainings;
