import { LoaderIcon } from "@/assets/icons/LoaderIcon";
import React from "react";

const loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <LoaderIcon />
    </div>
  );
};

export default loader;
