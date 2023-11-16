import Image from "next/image";
import React from "react";

type PropTye = {
  image: string | undefined;
  name: string | undefined;
};

const CertificationForPrint: React.FC<PropTye> = ({ image, name }) => {
  return (
    <>
      <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
        <h1 className="text-gray-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl xll:text-4xl mb-8">
          Certification : {name}
        </h1>

        <div className="bg-bgSecondary p-8">
          <img
            src={`http://localhost:8000/storage/${image}`}
            height={1000}
            width={1000}
            alt="Tadreeb-logo"
            className="h-36 w-36 object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default CertificationForPrint;
