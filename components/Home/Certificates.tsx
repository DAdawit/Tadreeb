import Image from "next/image";
import Link from "next/link";
import React from "react";

const Certificates = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 justify-items-center text-white"
        id="certification"
      >
        <div className="bg-[#2F2F2F] py-16">
          <div className="px-8 grid h-full">
            <h1 className="text-center font-bold text-xl xl:2xl xll:text-4xl mt-8">
              Obtain Globally Recognised <br /> Professional Certificates
            </h1>
            <p className="text-center mt-8 text-base lg:text-lg">
              Join the ranks of certified professionals - choose Tadreeb to gain
              the skills and certifications you need for your career growth. At
              Tadreeb, we are passionate about professional development and
              believe in the importance of human capital. We have partnered with
              nine certification bodies to offer professional certification with
              our training courses. We are also proud to be an ISO 9001:2015 and
              ISO 29993:2017 certified training consultancy.
            </p>
            <div className="flex justify-center mt-8">
              <Link
                href="/certification"
                className="bg-primary h-10 xll:h-16 px-8 rounded-lg flex items-center justify-center"
              >
                View All Certificates
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-primary w-full py-16">
          <div className="flex gap-2 px-8 justify-center">
            <Image
              src="/image 9.png"
              height={1000}
              width={1000}
              alt="certificates"
              className="h-20 sm:h-24 xll:h-32 w-20 sm:w-28 object-fill"
            />
            <Image
              src="/image 10.png"
              height={1000}
              width={1000}
              alt="certificates"
              className="h-20 sm:h-24 xll:h-32 w-20 sm:w-28 object-fill"
            />
            <Image
              src="/image 11.png"
              height={1000}
              width={1000}
              alt="certificates"
              className="h-20 sm:h-24 xll:h-32 w-20 sm:w-28 object-fill"
            />
            <Image
              src="/image 12.png"
              height={1000}
              width={1000}
              alt="certificates"
              className="h-20 sm:h-24 xll:h-32 w-20 sm:w-28 object-fill"
            />
          </div>
          <div className="flex gap-2 mt-8 px-8 justify-center">
            <Image
              src="/image 13.png"
              height={1000}
              width={1000}
              alt="certificates"
              className="h-20 sm:h-24 xll:h-32 w-20 sm:w-28 object-fill"
            />
            <Image
              src="/image 14.png"
              height={1000}
              width={1000}
              alt="certificates"
              className="h-20 sm:h-24 xll:h-32 w-52 object-fill"
            />
            <Image
              src="/image 15.png"
              height={1000}
              width={1000}
              alt="certificates"
              className="h-20 sm:h-24 xll:h-32 w-20 sm:w-28 object-fill"
            />
          </div>
          <div className="flex gap-2 mt-8 px-8 justify-center">
            <Image
              src="/image 16.png"
              height={1000}
              width={1000}
              alt="certificates"
              className="h-20 sm:h-24 xll:h-32 w-20 sm:w-28 object-fill"
            />
            <Image
              src="/image 17.png"
              height={1000}
              width={1000}
              alt="certificates"
              className="h-20 sm:h-24 xll:h-32 w-20 sm:w-28 object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
