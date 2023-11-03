"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavigationDrawer from "./NavigationDrawer";
import { NavLinks, TrainingType } from "./data";
import SubMenuItemsList from "./SubMenuItemsList";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <nav className="">
      <div className="px-8 xll:px-28 flex justify-between items-centers py-3">
        <div className="flex items-end">
          <Link href="/">
            <Image
              src="/logo-tadreeb-1.png"
              alt="logo"
              width={1000}
              height={1000}
              className="h-12 w-24 xxl:h-24 xxl:w-32 object-contain"
            />
          </Link>
        </div>
        <div className="flex justify-end">
          <div className="md:hidden">
            <NavigationDrawer />
          </div>
          <div className="hidden md:flex flex-col justify-end gap-y-4">
            <div className="flex  justify-end w-full items-center gap-x-3">
              <div className="flex items-center justify-end">
                <Image
                  src="/tadreeb-1.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="h-6 w-6 xxl:h-11 xxl:w-11 object-contain"
                />
                <h4 className="font-roboto text-sm  xxl:text-2xl text-textPrimary">
                  about us
                </h4>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/phone.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="h-6 w-6 xxl:h-11 xxl:w-11 object-contain"
                />
                <h4 className="font-roboto text-sm  xxl:text-2xl text-textPrimary">
                  +971 000 0000
                </h4>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/location.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="h-6 w-6 xxl:h-11 xxl:w-11 object-contain"
                />
                <h4 className="font-roboto text-sm  xxl:text-2xl text-textPrimary">
                  contact us
                </h4>
              </div>
            </div>
            <div className="hidden md:flex gap-x-3 w-min justify-end items-center">
              {[
                "/image-18.png",
                "/image 19.png",
                "/image 20.png",
                "/image 21.png",
              ].map((item, index) => (
                <div className="w-max h-min" key={index}>
                  <Image
                    src={`${item}`}
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="h-10 w-36 xxl:h-14 xxl:w-56 object-fill"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 xll:px-28 hidden md:flex items-center h-12 xxl:h-16">
        <div className="bg-secondary flex w-full justify-around items-center h-full">
          <Link
            href="/course-finder"
            className="text-white text-sm xl:text-lg xxl:text-3xl"
          >
            course finder
          </Link>
          <Link
            href="/training-course-calendar"
            className="text-white text-sm xl:text-lg xxl:text-3xl"
          >
            training calendar
          </Link>
          <Link
            href="#training-course-calendar"
            className="text-white text-sm xl:text-lg xxl:text-3xl"
          >
            training courses
          </Link>

          {NavLinks.map((nav) => (
            <Link
              key={nav.name}
              href={`${nav.link}`}
              onMouseEnter={() => setHoveredItem(nav.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className="text-white text-sm xl:text-lg xxl:text-3xl relative"
            >
              {nav.name}

              {hoveredItem === nav.name && (
                <div className="absolute top-9  bg-white text-black z-10 border-t-2 border-primary px-5 py-2">
                  <SubMenuItemsList subMenu={nav.subMenu as string[]} />
                </div>
              )}
            </Link>
          ))}
        </div>
        <div className="bg-primary h-full flex items-center justify-center px-3">
          <button className="text-white uppercase text-lg font-medium">
            download
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
