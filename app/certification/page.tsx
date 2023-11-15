"use client";
import CertificationHero from "@/components/Certification/CertificationHero";
import { getCertificates } from "@/services/user";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PaginationComponent from "@/common/Pagination/Pagination";

const Page = () => {
  // const certificates = await getCertificates();
  const [current_page, setCurrentPage] = useState<number>(1);

  const {
    data: certificates,
    isLoading: loadingCertificates,
    error: errorCertificates,
    refetch: refetchCertificates,
  } = useQuery({
    queryKey: ["getCertificates", current_page],
    queryFn: () => getCertificates(current_page as number),
  });

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
  return (
    <>
      <CertificationHero />
      <div className="container mx-auto px-5 min-h-screen py-8">
        {/* <pre>{JSON.stringify(certificates, null, 2)}</pre> */}

        {certificates && certificates.data.length === 0 && (
          <p>No certificates added yet!.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 mt-8">
          {certificates &&
            Array.isArray(certificates.data) &&
            certificates.data.map((certificate, index) => (
              <div
                key={certificate?.id}
                className="w-64 h-64 shadow-lg grid p-2"
              >
                <div className="h-16 flex justify-center w-full ">
                  <Image
                    src={`${certificate?.attributes.image}`}
                    height={1000}
                    width={1000}
                    alt="certificates"
                    className="h-20 sm:h-24 xll:h-32 w-20 sm:w-28 object-fill"
                  />
                </div>

                <h1 className="text-center text-gray-700 mt-5">
                  {certificate?.attributes.name}
                </h1>
                <Link
                  href={`/certification/${certificate?.id}`}
                  className=" w-full flex justify-center items-center bg-secondary text-white rounded-lg"
                >
                  View Courses
                </Link>
              </div>
            ))}
        </div>
        {(certificates?.links.next !== null ||
          certificates?.links.prev !== null) && (
          <PaginationComponent
            count={certificates?.meta.last_page}
            page={current_page}
            handleChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default Page;
