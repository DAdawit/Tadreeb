import SearchCourse from "@/common/SearchCourse";
import Image from "next/image";
import React from "react";

type PropType = {
  title: string | undefined;
  image?: string | undefined;
};
const ScheduleHero: React.FC<PropType> = ({ title, image }) => {
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
              <h1 className="text-3xl  xl:text-4xl  xxl:text-6xl font-bold mt-5">
                {title}
              </h1>
              <p className="text-sm mt-8 xxl:text-lg ">
                Filter by Topic, Date, Duration and Format
              </p>
              <div>
                {image && image !== "" ? (
                  <>
                    <Image
                      src={`http://127.0.0.1:8000/storage/${image}`}
                      height={1000}
                      width={1000}
                      alt="certificate"
                      className="h-36 w-36 object-contain"
                    />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <SearchCourse />
      </div>
    </>
  );
};

export default ScheduleHero;
