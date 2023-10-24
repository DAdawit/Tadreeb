import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto  xll:max-w-[1750px] xll:mx-auto">
        <div className="container mx-auto px-5 mt-16">
          <div className="grid justify-items-center md:flex md:justify-between px-5 gap-3">
            <div className="bg-primary text-white rounded-lg py-2 px-4  md:w-max">
              <div className="flex items-center gap-x-2">
                <div>
                  <Image
                    src="/classroom-icon-w-1.png"
                    alt="image"
                    height={1000}
                    width={1000}
                    className="h-16 xxl:h-20 w-max object-contain"
                  />
                </div>
                <div className="">
                  <h1 className="xll:text-2xl xxl:text-3xl">
                    Classroom Training
                  </h1>
                  <h4 className="text-sm xll:text-lg">View Courses</h4>
                </div>
              </div>
            </div>
            <div className="bg-primary text-white rounded-lg py-2 px-4  md:w-max">
              <div className="flex items-center gap-x-2">
                <div>
                  <Image
                    src="/online-icon-w-1.png"
                    alt="image"
                    height={1000}
                    width={1000}
                    className="h-16 xxl:h-20 w-max object-contain"
                  />
                </div>
                <div className="">
                  <h1 className="xll:text-2xl xxl:text-3xl">Online Training</h1>
                  <h4 className="text-sm xll:text-lg">View Courses</h4>
                </div>
              </div>
            </div>
            <div className="bg-primary text-white rounded-lg py-2 px-4  md:w-max">
              <div className="flex items-center gap-x-2">
                <div>
                  <Image
                    src="/inhouse-icon-w-1.png"
                    alt="image"
                    height={1000}
                    width={1000}
                    className="h-16 xxl:h-20 w-max object-contain"
                  />
                </div>
                <div className="">
                  <h1 className="xll:text-2xl xxl:text-3xl">
                    In-House Solution
                  </h1>
                  <h4 className="text-sm xll:text-lg">View Courses</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 px-5 mt-10">
            <h2 className=" text-black text-xl font-bold xll:text-2xl xxl:text-3xl font-roboto">
              Take the first step towards achieving your professional goals
              today: Explore our courses to find the <br />
              right training for you
            </h2>
            <p className="text-gray-700 mt-5 text-sm xll:text-lg xxl:text-xl font-roboro">
              With over 500 courses and seminars in different categories,
              you&apos;ll find the right training course for your professional
              growth.
            </p>
            <p className="text-gray-700 mt-5 text-sm xll:text-lg xxl:text-xl font-roboro">
              Our global network ensures that our training courses are available
              globally, providing ease and comfort to our clients. We have
              successfully delivered training courses in the Middle East,
              Europe, Africa, Asia, and North America, having trained over a
              million people.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
