import React from "react";

type PropTye = {
  description: string | undefined;
};

const CourseOutLine: React.FC<PropTye> = ({ description }) => {
  return (
    <>
      <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto my-16">
        <h1 className="text-gray-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl xll:text-4xl mb-8">
          Course OutLine
        </h1>

        <div className="bg-bgSecondary p-8">
          <p
            className="text-textPrimary mt-5 lg:text-lg xll:text-xl"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default CourseOutLine;
