import React, { useEffect, useState } from "react";
import styles from "./loader.module.css";
import { PageLoader } from "@/assets/icons/pageLoader";

const Loader = () => {
  const [color, setColor] = useState("black");
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(generateRandomColor());
    }, 100);

    return () => clearInterval(interval);
  }, []);
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <span style={{ color }} className="text-center w-full">
        <PageLoader />
      </span>
    </div>
  );
};

export default Loader;
