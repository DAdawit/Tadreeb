import Image from "next/image";
import React from "react";
import SearchCourse from "../../common/SearchCourse";

const TrainingCoursCalenderHero = () => {
  return (
    <>
      <div className="h-[70vh]  xl:max-h-[60vh] xll:max-h-[60vh] relative">
        <Image
          src="/about 1.png"
          alt="hero image"
          height={2000}
          width={2000}
          className="h-[70vh] xl:max-h-[60vh] xll:max-h-[60vh] w-screen object-fill object-left-top brightness-75"
        />
        <div className="absolute h-full top-0 w-full flex  text-white ">
          <div className="flex flex-col justify-center w-full col-span-2 px-5">
            <div className="align-middle sm:pl-8">
              <h1 className="text-3xl  xl:text-4xl  xxl:text-6xl font-bold ">
                Training Course Calendar
              </h1>
              <h1 className="text-3xl  xl:text-4xl  xxl:text-6xl font-bold mt-5">
                Discover, Enroll, Elevate: Your Path to Success <br /> with the
                Tadreeb Training Course Calendar
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bgPrimary py-8 px-5">
        <SearchCourse />
      </div>
    </>
  );
};

export default TrainingCoursCalenderHero;
