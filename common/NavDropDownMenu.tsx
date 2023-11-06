"use client";
import { VenueType } from "@/Types";
import Link from "next/link";
import React from "react";

type PropType = {
  title: string;
  pages?: VenueType;
};

const NavDropDownMenu: React.FC<PropType> = ({ title, pages }) => {
  return (
    <div className="group relative dropdown  px-4 text-white cursor-pointer  tracking-wide z-20">
      <button className="text-white text-sm xl:text-lg xxl:text-3xl">
        {title}
      </button>
      <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        <ul className="top-0 w-auto bg-white shadow px-6 py-3">
          {pages &&
            Array.isArray(pages.data) &&
            pages.data.map((page, index) => (
              <li key={page.id} value={page.id}>
                <Link
                  href={`/${title}/${page.id}`}
                  className="block text-black font-mono uppercase hover:text-black cursor-pointer whitespace-nowrap"
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
