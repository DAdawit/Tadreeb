"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Tooltip } from "@mui/material";
import { Course, Schedule } from "@/Types";
import MoreIcon from "@mui/icons-material/More";

type PropType = {
  course?: Course;
  schedule?: Schedule;
  fullName: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  address: string | undefined;
};

const BookCourseDetail: React.FC<PropType> = ({
  course,
  schedule,
  fullName,
  email,
  phoneNumber,
  address,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Book Deatail Information" placement="top">
        <button
          className="flex gap-x-2 border-2 border-blue-500 rounded-full text-blue-500 px-3 py-1 items-center "
          onClick={handleClickOpen}
        >
          <MoreIcon />
          <span>Detail</span>
        </button>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Booked Course Detail Information"}
        </DialogTitle>
        <DialogContent>
          {course !== null ? (
            <>
              <div className="grid grid-cols-2 justify-items-between px-5 gap-5">
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">FullName: </h1>
                  <h1 className="text-gray-600">{fullName}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">Email: </h1>
                  <h1 className="text-gray-600">{email}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">PhoneNumber: </h1>
                  <h1 className="text-gray-600">{phoneNumber}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">Course: </h1>
                  <h1 className="text-gray-600">{course?.title}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">Start Date: </h1>
                  <h1 className="text-gray-600">{course?.start_date}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">Adress: </h1>
                  <h1 className="text-gray-600">{address}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">End Date: </h1>
                  <h1 className="text-gray-600">{course?.end_date}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">Venue: </h1>
                  <h1 className="text-gray-600">{course?.venue.name}</h1>
                </div>
                <div className="col-span-2">
                  <h1 className="text-gray-800 font-bold underline">
                    Course Description
                  </h1>
                  <p
                    className="text-textPrimary mt-5 lg:text-lg xll:text-xl"
                    dangerouslySetInnerHTML={{
                      __html: course?.description || "",
                    }}
                  ></p>
                  {/* <p className="text-gray-600">{course?.description}</p> */}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 justify-items-between px-5 gap-5">
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">FullName: </h1>
                  <h1 className="text-gray-600">{fullName}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">Email: </h1>
                  <h1 className="text-gray-600">{email}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">PhoneNumber: </h1>
                  <h1 className="text-gray-600">${phoneNumber}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">Course: </h1>
                  <h1 className="text-gray-600">{schedule?.course.title}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">Start Date: </h1>
                  <h1 className="text-gray-600">{schedule?.start_date}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">Payment Amount: </h1>
                  <h1 className="text-gray-600">${schedule?.fee}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">End Date: </h1>
                  <h1 className="text-gray-600">{schedule?.end_date}</h1>
                </div>
                <div className="flex gap-x-2">
                  <h1 className="text-gray-800 font-bold">Venue: </h1>
                  <h1 className="text-gray-600">{schedule?.venue.name}</h1>
                </div>
                <div className="col-span-2">
                  <h1 className="text-gray-800 font-bold underline">
                    Course Description
                  </h1>
                  <p className="text-gray-600">
                    {schedule?.course.description}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookCourseDetail;
