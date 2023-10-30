import Image from "next/image";
import React from "react";

const SocialMeadiaIcons = () => {
  return (
    <>
      <div>
        <Image
          src="/linkedin.png"
          alt="hero image"
          height={2000}
          width={2000}
          className="h-8  xxl:h-12 object-contain w-min"
        />
      </div>
      <div>
        <Image
          src="/facebook.png"
          alt="hero image"
          height={2000}
          width={2000}
          className="h-8  xxl:h-12 object-contain w-min"
        />
      </div>
      <div>
        <Image
          src="/instagram.png"
          alt="hero image"
          height={2000}
          width={2000}
          className="h-8  xxl:h-12 object-contain w-min"
        />
      </div>
      <div>
        <Image
          src="/whatsup.png"
          alt="hero image"
          height={2000}
          width={2000}
          className="h-8  xxl:h-12 object-contain w-min"
        />
      </div>
    </>
  );
};

export default SocialMeadiaIcons;
