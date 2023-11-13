"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
const HandleNav = () => {
  const pathname = usePathname();

  return <>{!pathname.startsWith("/admin") ? <NavBar /> : null}</>;
};

export default HandleNav;
