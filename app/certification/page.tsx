import CertificationHero from "@/components/Certification/CertificationHero";
import { getCertificates } from "@/services/user";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const certificates = await getCertificates();

  return (
    <>
      <CertificationHero />
      <div className="container mx-auto px-5 min-h-screen py-8">
        {/* <pre>{JSON.stringify(certificates, null, 2)}</pre> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 mt-8">
          {certificates.data.map((certification) => (
            <div
              key={certification.id}
              className="w-64 h-64 shadow-lg grid p-2"
            >
              <div className="h-16 flex justify-center w-full ">
                <Image
                  src={`${certification.attributes.image}`}
                  height={1000}
                  width={1000}
                  alt="certificates"
                  className="h-20 sm:h-24 xll:h-32 w-20 sm:w-28 object-fill"
                />
              </div>

              <h1 className="text-center text-gray-700 mt-5">
                {certification.attributes.name}
              </h1>
              <Link
                href={`/certification/${certification.id}`}
                className=" w-full flex justify-center items-center bg-secondary text-white rounded-lg"
              >
                View Courses
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
