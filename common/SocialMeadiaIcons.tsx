import { Links } from "@/Types";
import { getSocialMediaLinks } from "@/services/user";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMeadiaIcons: React.FC = async () => {
  const links = await getSocialMediaLinks();

  return (
    <>
      <Link href={`${links?.linkedin}`} target="_blank">
        <Image
          src="/linkedin.png"
          alt="hero image"
          height={2000}
          width={2000}
          className="h-8  xxl:h-12 object-contain w-min"
        />
      </Link>
      <Link href={`${links?.facebook}`} target="_blank">
        <Image
          src="/facebook.png"
          alt="hero image"
          height={2000}
          width={2000}
          className="h-8  xxl:h-12 object-contain w-min"
        />
      </Link>
      <Link href={`${links?.instagram}`} target="_blank">
        <Image
          src="/instagram.png"
          alt="hero image"
          height={2000}
          width={2000}
          className="h-8  xxl:h-12 object-contain w-min"
        />
      </Link>
      <Link href={`${links?.whatsUp}`} target="_blank">
        <Image
          src="/whatsup.png"
          alt="hero image"
          height={2000}
          width={2000}
          className="h-8  xxl:h-12 object-contain w-min"
        />
      </Link>
    </>
  );
};

export default SocialMeadiaIcons;
