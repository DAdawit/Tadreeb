"use client";
import { Links } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getSocialMediaLinks } from "@/services/user";

// type PropsType = {
//   links: Links | undefined;
// };
const SocialMeadiaIcons: React.FC = () => {
  const {
    data: links,
    isLoading: loadingLinks,
    error: errorLinks,
    refetch: refetchLinks,
  } = useQuery({
    queryKey: ["getSocialMediaLinks"],
    queryFn: getSocialMediaLinks,
  });
  return (
    <>
      {/* <pre>{JSON.stringify(links, null, 2)}</pre> */}

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
