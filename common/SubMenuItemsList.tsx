import React from "react";
import { TrainingType } from "./data";
import Link from "next/link";
type PropsType = {
  subMenu: string[];
};
const SubMenuItemsList: React.FC<PropsType> = ({ subMenu }) => {
  return (
    // <pre>{JSON.stringify(subMenu, null, 2)}</pre>
    <div className="grid">
      {subMenu.map((menu, index) => (
        <Link
          href={`${menu}`}
          key={index}
          className="text-base whitespace-nowrap font-mono text-gray-600 font-medium"
        >
          {menu}
        </Link>
      ))}
    </div>
  );
};

export default SubMenuItemsList;
