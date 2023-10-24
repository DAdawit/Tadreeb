import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2  xl:grid-cols-4">
        <div className="h-full">
          <p>
            Tadreeb Training and Consulting carefully chooses global venues that
            offer a conducive and appealing setting for practical training
            courses.
          </p>
          <div>
            <Image
              src="/logo-tadreeb-1.png"
              height={1000}
              width={1000}
              alt="certificates"
              className="h-24 xll:h-32 w-28 object-fill"
            />
          </div>
        </div>
        <div className="h-full bg-green-200 flex flex-col">
          <div>
            <h1 className="">talk to us</h1>
            <p>Phone: +971 0 00000 </p>
            <p>talk2us@tadreebtc.com </p>
          </div>
          <div>
            <h1>follow us</h1>
            <div className="w-max flex gap-x-3">
              <div>
                <Image
                  src="/Frame.png"
                  alt="hero image"
                  height={2000}
                  width={2000}
                  className="h-8  xxl:h-12 object-contain w-min"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full bg-green-200 flex flex-col">
          <div>
            <h1 className="">contact</h1>
            <h3>Level 14,</h3>
            <h3>Boulevard Plaza Tower One,</h3>
            <h3>Emaar Boulevard,</h3>
            <h3>Downtown Dubai</h3>
          </div>
          <div>
            <h2 className="">USA Contact:</h2>
            <h3>Tadreeb Training and Consultancy</h3>
            <h3> - USA2323, Clear Lake City Blvd.Suite </h3>
            <h3>#180 - 303Houston, TX 77062</h3>
            <h3>W: www.tadreebtc.com</h3>
            <h3>E: info-us@tadreebtc.com</h3>
          </div>
        </div>
        <div className="h-full bg-green-200 flex flex-col">
          <div>
            <h1 className="">contact</h1>
            <h3>Qatar Contact:</h3>
            <h3>Tadreeb Training and Consultancy</h3>
            <h3>Abu Hamour Area</h3>
            <h3>Office no: 6A1- First Floor</h3>
            <h3>Tel: 00974 44270644</h3>
            <h3>Mob: 00974 55743932</h3>
          </div>
          <div>
            <h3>W: www.tadreebtc.com</h3>
            <h3>E: info-qa@tadreebtc.com</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
