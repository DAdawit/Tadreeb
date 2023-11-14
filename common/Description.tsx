import React from "react";

type PropTye = {
  description: string | undefined;
};

const Description: React.FC<PropTye> = ({ description }) => {
  return (
    <>
      <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
        <h1 className="text-gray-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl xll:text-4xl mb-8">
          Course Description
        </h1>

        <div className="bg-bgSecondary p-8">
          <h1 className="text-[#1E5DAA] lg:text-lg xl:text-xl font-bold">
            INTRODUCTION
          </h1>
          {/* dangerouslySetInnerHTML={{ __html: description }} */}
          <p
            className="text-textPrimary mt-5 lg:text-lg xll:text-xl"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default Description;
