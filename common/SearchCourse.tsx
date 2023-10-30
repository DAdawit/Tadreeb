import React from "react";

const SearchCourse = () => {
  return (
    <>
      <div className="max-w-6xl xll:max-w-7xl mx-auto w-full">
        <form action="" className="w-full">
          <div className="flex justify-between lg:gap-16">
            <div className="w-full">
              <select
                name=""
                id=""
                className="w-full"
                placeholder="Program Category"
              >
                <option value="" disabled>
                  Program Category
                </option>
              </select>
            </div>
            <div className="w-full">
              <select
                name=""
                id=""
                className="w-full"
                placeholder="Program Category"
              >
                <option value="" disabled>
                  Program Title
                </option>
              </select>
            </div>
            <div className="w-full">
              <select
                name=""
                id=""
                className="w-full"
                placeholder="Program Category"
              >
                <option value="" disabled>
                  Location
                </option>
              </select>
            </div>
            <button className="bg-secondary text-white px-5">SEARCH</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchCourse;
