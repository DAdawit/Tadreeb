import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className=" bg-green-200">
      <div className="px-28 flex justify-end items-center">
        <div className="flex items-center gap-3 py-3">
          <div className="flex items-center justify-center">
            <Image
              src="/tadreeb-1.png"
              alt="logo"
              width={1000}
              height={1000}
              className="h-11 w-11"
            />
            <h4 className="font-roboto text-2xl text-textPrimary">about us</h4>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/phone.png"
              alt="logo"
              width={1000}
              height={1000}
              className="h-11 w-11"
            />
            <h4 className="font-roboto text-2xl text-textPrimary">
              +971 000 0000
            </h4>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/location.png"
              alt="logo"
              width={1000}
              height={1000}
              className="h-11 w-11"
            />
            <h4 className="font-roboto text-2xl text-textPrimary">
              contact us
            </h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
