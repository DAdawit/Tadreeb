import React from "react";
import { FormatTypes } from "@/Types";
import Link from "next/link";

type PropType = {
  title: string;
  categories?: FormatTypes[] | undefined;
};
const NavDropDownMenuTrainingsMenuTest: React.FC<PropType> = ({
  categories,
  title,
}) => {
  return (
    <nav>
      <ul className="flex items-center justify-center">
        <li className="px-3 py-2 relative group">
          <button
            className="text-white text-sm xl:text-lg xxl:text-3xl whitespace-nowrap"
            aria-haspopup="true"
          >
            {title}
          </button>

          <div className="absolute md:-left-52 lg:-left-64 top-3  group-hover:translate-y-5 translate-y-0 invisible group-hover:opacity-100 group-hover:visible  group-hover:transform z-50 min-w-[520px] lg:min-w-[720px] transform">
            <div className="relative top-3 p-6 bg-white shadow-xl w-full">
              {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}

              <div className="flex flex-wrap gap-x-3 font-normal">
                {categories &&
                  Array.isArray(categories) &&
                  categories.map((Category, index) => (
                    <div key={index} className="grid h-min">
                      <h1 className="underline whitespace-nowrap text-base text-gray-500 underline-offset-4">
                        {Category.name}
                      </h1>
                      <ul className=" ">
                        {Category.trainings &&
                          Array.isArray(Category.trainings) &&
                          Category.trainings.map((training, index) => (
                            <li key={training.id}>
                              <Link
                                href={`/trainings/${training.id}/courses`}
                                className="text-gray-800 text-sm"
                              >
                                {training.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavDropDownMenuTrainingsMenuTest;
