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
      <h1 className="text-white text-sm xl:text-lg xxl:text-3xl">{title}</h1>
      <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        <ul className="translate-y-2 top-1 w-auto bg-white shadow px-6 py-3 text-base">
          {/* <pre>{JSON.stringify(pages, null, 2)}</pre> */}

          {pages &&
            Array.isArray(pages) &&
            pages.map((page, index) => (
              <li key={page.id}>
                <Link
                  href={`/${title}/${page.id}`}
                  className="text-black lowercase font-normal cursor-pointer whitespace-nowrap text-small hover:text-secondary"
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
