"use client";
import {
  Certifcate,
  CertifcationType,
  FormatTypes,
  TryType,
  VenueType,
} from "@/Types";
import Category from "@mui/icons-material/Category";
import Link from "next/link";
import React from "react";

type PropType = {
  title: string;
  categories?: FormatTypes | undefined;
};

const NavDropDownMenuTrainingsMenu: React.FC<PropType> = ({
  title,
  categories,
}) => {
  return (
    <div className=" group relative dropdown  px-4 text-white cursor-pointer  tracking-wide z-20">
      <button className="text-white text-sm xl:text-lg xxl:text-3xl">
        {title}
      </button>
      <div className="group-hover:block dropdown-menu absolute hidden h-auto bg-white text-black">
        {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
        <div className=" grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xll:grid-cols-6">
          {categories?.data.map((Category) => (
            <>
              <h1 className="underline">{Category.name}</h1>
              <ul className="top-0 w-auto bg-white shadow px-6 py-3">
                {Category.trainings &&
                  Array.isArray(Category.trainings) &&
                  Category.trainings.map((page, index) => (
                    <li key={page.id} value={page.id}>
                      <Link
                        href={`/${title}/${page.id}`}
                        className="block text-black font-mono uppercase hover:text-black cursor-pointer whitespace-nowrap"
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </>
          ))}
        </div>
        {/* <ul className="top-0 w-auto bg-white shadow px-6 py-3">
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
        </ul> */}
      </div>
    </div>
  );
};

export default NavDropDownMenuTrainingsMenu;
