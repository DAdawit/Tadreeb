import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className="">
      <div className="px-28 flex justify-between items-centers py-3">
        <div className="w-max">
          <Image
            src="/logo-tadreeb-1.png"
            alt="logo"
            width={1000}
            height={1000}
            className="h-24 w-32 object-contain"
          />
        </div>
        <div className="flex justify-end">
          <div className="flex flex-col justify-end">
            <div className="flex gap-x-3 w-max justify-end">
              <div className="flex items-center justify-center">
                <Image
                  src="/tadreeb-1.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="h-11 w-11"
                />
                <h4 className="font-roboto text-2xl text-textPrimary">
                  about us
                </h4>
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
            <div className="flex gap-x-3 w-min justify-end">
              <Image
                src="/image-18.png"
                alt="logo"
                width={1000}
                height={1000}
                className="h-14 object-contain"
              />
              <Image
                src="/image 19.png"
                alt="logo"
                width={1000}
                height={1000}
                className="h-14 object-contain"
              />
              <Image
                src="/image 20.png"
                alt="logo"
                width={1000}
                height={1000}
                className="h-14 object-contain"
              />
              <Image
                src="/image 21.png"
                alt="logo"
                width={1000}
                height={1000}
                className="h-14 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
