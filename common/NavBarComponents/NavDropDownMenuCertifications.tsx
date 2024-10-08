"use client";
import { Certifcate, CertifcationType, VenueType } from "@/Types";
import Link from "next/link";
import React from "react";

type PropType = {
  title: string;
  pages?: VenueType | CertifcationType;
};

const NavDropDownMenuCertifications: React.FC<PropType> = ({
  title,
  pages,
}) => {
  return (
    <div className="group relative dropdown  px-4 text-white cursor-pointer  tracking-wide z-20">
      <h1 className="text-white text-sm xl:text-lg xxl:text-3xl capitalize">
        {title}
      </h1>
      <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        <ul className="translate-y-2 top-1 w-72 bg-primary shadow px-6 py-3 font-normal">
          {/* <pre>{JSON.stringify(pages, null, 2)}</pre> */}

          {pages &&
            Array.isArray(pages) &&
            pages.map((page, index) => (
              <li key={page.id} className="pb-2 px-1 w-64 truncate">
                <Link
                  href={`/${title}/${page.id}`}
                  className="text-white capitalize font-normal cursor-pointer whitespace-nowrap text-small hover:text-secondary truncate w-64"
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

export default NavDropDownMenuCertifications;
