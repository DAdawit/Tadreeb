"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavigationDrawer from "../NavigationDrawer";
import { usePathname } from "next/navigation";
import NavDropDownMenu from "./NavDropDownMenu";
import NavDropDownMenuTrainingsMenuTest from "./NavDropDownMenuTrainingsMenuTest";
import { CertifcationType, FormatTypes, VenueType } from "@/Types";
import { useQuery } from "@tanstack/react-query";
import {
  getCertificates,
  getTrainigFormats,
  getTrainingVenues,
  getTrainings,
} from "@/services/user";

// type PropsType = {
//   formats: VenueType | undefined;
//   venues: VenueType | undefined;
//   certificates: CertifcationType | undefined;
//   categories: FormatTypes | undefined;
// };

const NavBar: React.FC = () => {
  const {
    data: formats,
    isLoading: loadingFormats,
    error: errorFormats,
    refetch: refetchFormats,
  } = useQuery({
    queryKey: ["getTrainigFormats"],
    queryFn: getTrainigFormats,
  });

  const {
    data: venues,
    isLoading: loadingVenues,
    error: errorVenues,
    refetch: refetchVenues,
  } = useQuery({
    queryKey: ["getTrainingVenues"],
    queryFn: getTrainingVenues,
  });
  const {
    data: certificates,
    isLoading: loadingCertificates,
    error: errorCertificates,
    refetch: refetchCertificates,
  } = useQuery({
    queryKey: ["certificates"],
    queryFn: getCertificates,
  });
  const {
    data: categories,
    isLoading: loadingCategories,
    error: errorCategories,
    refetch: refetchCategories,
  } = useQuery({
    queryKey: ["getTrainings"],
    queryFn: getTrainings,
  });

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
            <NavigationDrawer categories={categories} />
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

          <NavDropDownMenuTrainingsMenuTest
            title="training courses"
            categories={categories}
          />

          <NavDropDownMenu title="venue" pages={venues} />
          <NavDropDownMenu title="certification" pages={certificates} />
          <NavDropDownMenu title="format" pages={formats} />
        </div>
        <div className="bg-primary h-full flex items-center justify-center px-3">
          <button className="text-white uppercase text-lg font-medium">
            download
          </button>
        </div>
      </div>
      {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
    </nav>
  );
};

export default NavBar;
