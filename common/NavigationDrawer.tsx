"use client";
import * as React from "react";
import Image from "next/image";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { FormatTypes } from "@/Types";
type Anchor = "left";
type PropsType = {
  categories?: FormatTypes[] | undefined;
};
const NavigationDrawer: React.FC<PropsType> = ({ categories }) => {
  const [trainingCourse, setTrainingCourse] = useState<boolean>(false);
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <div className="font-normal text-gray-700">
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            sx={{
              color: "black",
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <Box
              sx={{
                width: 250,
                backgroundColor: "#fff",
                height: "100%",
              }}
              role="presentation"
              onKeyDown={toggleDrawer("left", false)}
            >
              {!trainingCourse ? (
                <div className="h-full w-full text-normal">
                  <div className="flex justify-end">
                    <IconButton
                      aria-label="close"
                      onClick={toggleDrawer("left", false)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <div className="w-fll flex justify-center">
                    <Link href="/">
                      <Image
                        src="/logo-tadreeb-1.png"
                        alt="logo"
                        width={1000}
                        height={1000}
                        className="h-12 w-24 xxl:h-24 xxl:w-32 object-contain"
                      />
                    </Link>
                  </div>
                  <section className="flex  w-full">
                    <div className="grid gap-y-1 mt-5 w-full">
                      <Link
                        href="/course-finder"
                        className="mt-1 py-1 h-min  w-full px-5 border-b-2 border-gray-100"
                        onClick={toggleDrawer("left", false)}
                      >
                        Course Finder
                      </Link>
                      <Link
                        href="/training-course-calendar"
                        className="mt-1 py-1 h-min  w-full px-5 border-b-2 border-gray-100"
                        onClick={toggleDrawer("left", false)}
                      >
                        Traning Calander
                      </Link>
                      {/* <SubMenu /> */}
                      <button
                        // href="/TraningCalender"
                        className="mt-1 py-1 h-min text-left px-5 border-b-2 border-gray-100"
                        onClick={() => setTrainingCourse(true)}
                      >
                        Training courses
                      </button>
                      <Link
                        href="/venue"
                        className="mt-1 py-1 h-min  w-full px-5 border-b-2 border-gray-100"
                        onClick={toggleDrawer("left", false)}
                      >
                        Venues
                      </Link>
                      <Link
                        href="/certification"
                        className="mt-1 py-1 h-min  w-full px-5 border-b-2 border-gray-100"
                        onClick={toggleDrawer("left", false)}
                      >
                        Certification
                      </Link>
                      <Link
                        href="format"
                        className="mt-1 py-1 h-min  w-full px-5 border-b-2 border-gray-100"
                        onClick={toggleDrawer("left", false)}
                      >
                        Training type
                      </Link>
                    </div>
                  </section>
                </div>
              ) : (
                <>
                  <div className="flex justify-end text-red-400 p-3">
                    <button onClick={() => setTrainingCourse(false)}>
                      <HighlightOffIcon />
                    </button>
                  </div>
                  <ul className="">
                    <li className="px-3 py-2 ">
                      <div className="w-full">
                        <div className="grid gap-x-3 font-normal">
                          {categories &&
                            categories?.map((Category, index) => (
                              <div key={index} className="grid">
                                <h1 className="underline whitespace-nowrap text-base text-gray-500 underline-offset-4">
                                  {Category.name}
                                </h1>
                                <ul className=" ">
                                  {Category.trainings &&
                                    Array.isArray(Category.trainings) &&
                                    Category.trainings.map(
                                      (training, index) => (
                                        <li key={training.id}>
                                          <Link
                                            href={`/trainings/${training.id}/courses`}
                                            className="text-gray-800 text-sm"
                                          >
                                            {training.name}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                </ul>
                              </div>
                            ))}
                        </div>
                      </div>
                    </li>
                  </ul>
                </>
              )}
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
export default NavigationDrawer;
