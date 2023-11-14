"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState } from "react";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import { Spinner } from "@/assets/icons/Spinner";
import { FormatType } from "@/Types";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/services/admin";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  course_id?: string;
  schedule_id?: string;
};

const schema: ZodType<FormValues> = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().min(1, "email is required"),
  phoneNumber: z.number().min(1, "Phone Number is required"),
});

type PropType = {
  title: string | undefined;
  course_id?: string | undefined;
  schedule_id?: string | undefined;
};
const BookCourse: React.FC<PropType> = ({ title, course_id, schedule_id }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [editError, setEditError] = useState<string>("");
  // const [data, setData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: fetchCategories,
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitData = async (values: FormValues) => {
    setEditError("");
    setLoading(true);
    console.log(values);
    values.course_id = course_id ?? "";
    values.schedule_id = schedule_id ?? "";

    await api
      .post(`/bookCourse`, values)
      .then((res) => {
        handleClose();
        notify(
          "Course Booked successfully ! We Will contact you soon",
          "success"
        );
        reset();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full">
      <button
        className="text-white whitespace-nowrap"
        onClick={handleClickOpen}
      >
        Book Now
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Book Course"}</DialogTitle>
        <DialogContent>
          <div className="sm:w-96 mx-auto">
            <h1 className="text-gray-700 font-semibold">{title}</h1>

            <form
              action="#"
              className="w-full"
              onSubmit={handleSubmit(submitData)}
            >
              <div className="grid max-w-sm mx-auto ">
                <div className="grid mt-3">
                  <input
                    type="text"
                    className=""
                    placeholder="First Name"
                    {...register("firstName")}
                  />
                  {errors?.firstName && (
                    <small className="text-red-500 pl-2">
                      {errors.firstName.message}
                    </small>
                  )}
                </div>
                <div className="grid mt-3">
                  <input
                    type="text"
                    className=""
                    placeholder="Last Name"
                    {...register("lastName")}
                  />
                  {errors?.lastName && (
                    <small className="text-red-500 pl-2">
                      {errors.lastName.message}
                    </small>
                  )}
                </div>
                <div className="grid mt-3">
                  <input
                    type="email"
                    className=""
                    placeholder="Email Address"
                    {...register("email")}
                  />
                  {errors?.email && (
                    <small className="text-red-500 pl-2">
                      {errors.email.message}
                    </small>
                  )}
                </div>
                <div className="grid mt-3">
                  <input
                    type="text"
                    className=""
                    placeholder="Phone Number"
                    {...register("phoneNumber", { valueAsNumber: true })}
                  />
                  {errors?.phoneNumber && (
                    <small className="text-red-500 pl-2">
                      {errors.phoneNumber.message}
                    </small>
                  )}
                </div>

                <button className="bg-primary rounded-lg text-white py-2 mt-3">
                  Book Course{" "}
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookCourse;
