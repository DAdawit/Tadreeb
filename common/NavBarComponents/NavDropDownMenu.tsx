"use client";
import { Certifcate, CertifcationType, VenueType } from "@/Types";
import Link from "next/link";
import React from "react";

type PropType = {
  title: string;
  pages?: VenueType | CertifcationType;
};

const NavDropDownMenu: React.FC<PropType> = ({ title, pages }) => {
  return (
    <div className="group relative dropdown  px-4 text-white cursor-pointer  tracking-wide z-20">
      <Link
        href={`${title}`}
        className="text-white text-sm xl:text-lg xxl:text-3xl"
      >
        {title}
      </Link>
      <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        <ul className="translate-y-2 top-1 w-auto bg-white shadow px-6 py-3 text-base">
          {pages &&
            Array.isArray(pages.data) &&
            pages.data.map((page, index) => (
              <li key={page.id}>
                <Link
                  href={`/${title}/${page.id}`}
                  className="text-gray-700 font-normal uppercase hover:text-gray-500 cursor-pointer whitespace-nowrap hover:underline text-small"
                >
                  {page.attributes.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDropDownMenu;
