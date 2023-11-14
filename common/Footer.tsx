"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import SocialMeadiaIcons from "./SocialMeadiaIcons";
import { Links } from "@/Types";
type PropsType = {
  links: Links | undefined;
};
const Footer: React.FC = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <>
      <div
        className={`${
          pathname !== "/" ? "bg-textFooter text-white pt-16" : ""
        } grid grid-cols-1 gap-3 md:grid-cols-4 md:justify-items-center px-5 md:px-8 xl:px-16 text-textFooter pb-8`}
      >
        <div className="h-full grid">
          <p className="text-base xll:text-lg ">
            Tadreeb Training and Consulting carefully chooses global venues that
            offer a conducive and appealing setting for practical training
            courses.
          </p>

          <div className="invisible">
            <div className="invisible"></div>
            <div className="invisible"></div>
            <div className="invisible"></div>
            <div className="invisible"></div>
            <div className="invisible"> </div>
          </div>
          <div>
            {pathname !== "/" ? (
              <Image
                src="/logo-tadreeb-2.png"
                height={1000}
                width={1000}
                alt="certificates"
                className="h-24 xll:h-32 w-28 object-fill"
              />
            ) : (
              <Image
                src="/logo-tadreeb-1.png"
                height={1000}
                width={1000}
                alt="certificates"
                className="h-24 xll:h-32 w-28 object-fill"
              />
            )}
          </div>
        </div>
        <div className="h-full  grid">
          <div>
            <h1
              className={`${
                pathname !== "/" ? "text-white" : ""
              }text-footerHeader text-2xl xll:text-3xl font-bold mb-5`}
            >
              talk to us
            </h1>
            <p className="xll:text-xl">Phone: +971 0 00000 </p>

            <p className="xll:text-xl">talk2us@tadreebtc.com </p>
          </div>

          <div className="invisible"></div>

          <div className="invisible"></div>
          <div className="invisible"></div>
          <div className="invisible"></div>
          <div className="invisible"></div>
          <div className="invisible"></div>
          <div>
            <h1
              className={`${
                pathname !== "/" ? "text-white" : ""
              }text-footerHeader text-2xl xll:text-3xl font-bold mb-5`}
            >
              {" "}
              follow us
            </h1>

            <div className="w-max flex gap-x-3 mt-3">
              <div>
                {pathname !== "/" ? (
                  <div className="flex gap-2">
                    <SocialMeadiaIcons />
                  </div>
                ) : (
                  <Image
                    src="/Frame.png"
                    alt="hero image"
                    height={2000}
                    width={2000}
                    className="h-8  xxl:h-12 object-contain w-min"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-full grid">
          <div className="mb-5">
            <h1
              className={`${
                pathname !== "/" ? "text-white" : ""
              }text-footerHeader text-2xl xll:text-3xl font-bold mb-5`}
            >
              {" "}
              contact
            </h1>
            <h3 className="xll:text-xl font-normal">Level 14,</h3>
            <h3 className="xll:text-xl">Boulevard Plaza Tower One,</h3>
            <h3 className="xll:text-xl">Emaar Boulevard,</h3>
            <h3 className="xll:text-xl">Downtown Dubai</h3>
          </div>
          <div>
            <h2 className="text-footerHeader font-medium text-lg mb-5">
              USA Contact:
            </h2>
            <h3>Tadreeb Training and Consultancy</h3>
            <h3>USA2323, Clear Lake City Blvd.Suite </h3>
            <h3>#180 - 303Houston, TX 77062</h3>
            <h3>W: www.tadreebtc.com</h3>
            <h3>E: info-us@tadreebtc.com</h3>
          </div>
        </div>
        <div className="h-full grid ">
          <div>
            <h1
              className={`${
                pathname !== "/" ? "text-white" : ""
              }text-footerHeader text-2xl xll:text-3xl font-bold mb-5`}
            >
              {" "}
              contact
            </h1>
            <h2 className="text-footerHeader font-medium text-lg mb-5">
              Qatar Contact:
            </h2>
            <h3 className="xll:text-xl">Tadreeb Training and Consultancy</h3>
            <h3 className="xll:text-xl">Abu Hamour Area</h3>
            <h3 className="xll:text-xl">Office no: 6A1- First Floor</h3>
            <h3 className="xll:text-xl">Tel: 00974 44270644</h3>
            <h3 className="xll:text-xl">Mob: 00974 55743932</h3>
          </div>
          <div>
            <h3 className="xll:text-xl">W: www.tadreebtc.com</h3>
            <h3 className="xll:text-xl">E: info-qa@tadreebtc.com</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
