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
import { fetchTrainingFormats, fetchVenues } from "@/services/admin";

type FormValues = {
  title: string;
  fee: number;
  description: string;
  course_outline: string;
  start_date: string;
  end_date: string;
  venue_id: string;
  format_id: string;
  training_id: string;
};

const schema: ZodType<FormValues> = z.object({
  title: z.string().min(1, "title is required"),
  fee: z.number().min(1, "fee is required"),
  description: z.string().min(1, "Description is required"),
  course_outline: z.string().min(1, "Course Outline is required"),
  start_date: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "start_date must be a valid date string",
  }),
  end_date: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "end_date must be a valid date string",
  }),
  venue_id: z.string(),
  format_id: z.string(),
  training_id: z.string(),
});

type PropType = {
  refetch: () => void;
  id: string;
  title: string;
  fee: number;
  description: string;
  course_outline: string;
  start_date: string;
  end_date: string;
  venue_id: string;
  format_id: string;
  training_id: string;
};

const EditCourse: React.FC<PropType> = ({
  id,
  refetch,
  title,
  fee,
  description,
  course_outline,
  start_date,
  end_date,
  venue_id,
  format_id,
  training_id,
}) => {
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
    defaultValues: {
      title: title,
      fee: fee,
      description: description,
      course_outline: course_outline,
      start_date: start_date,
      end_date: end_date,
      venue_id: venue_id,
      format_id: format_id,
      training_id: training_id,
    },
  });

  const {
    data: venues,
    isLoading: venuesLoading,
    error: venuesError,
    refetch: venuesRefetch,
  } = useQuery({
    queryKey: ["fetchVenues"],
    queryFn: () => fetchVenues(),
  });
  const {
    data: formats,
    isLoading: formatsLoading,
    error: formatsError,
    refetch: formatsRefetch,
  } = useQuery({
    queryKey: ["fetchTrainingFormats"],
    queryFn: () => fetchTrainingFormats(),
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

    await api
      .put(`/courses/${id}`, values)
      .then((res) => {
        refetch();
        handleClose();
        notify("Course updated successfully !", "success");
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
    <div>
      <Tooltip title="Edit" placement="top">
        <button className="text-orange-500" onClick={handleClickOpen}>
          <EditIcon fontSize="small" />
        </button>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            width: "80%", // or any value you want
            maxWidth: "none", // optional, if you want to remove the maxWidth limit
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Edit Course"}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-lg mx-auto"
          >
            <section className="grid grid-cols-1  px-5 gap-x-5 gap-y-1 max-w-2xl">
              <input type="hidden" value={id} {...register("training_id")} />

              <div className="grid gap-y-1">
                <label
                  htmlFor="title"
                  className="capitalize pl-3 lightText font-semibold"
                >
                  Title *
                </label>
                <input
                  {...register("title")}
                  placeholder="Title"
                  name="title"
                  id="title"
                  className="w-full"
                  type="text"
                />
                {errors?.title && (
                  <small className="text-red-500 pl-2">
                    {errors.title.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="fee"
                  className="capitalize pl-3 lightText font-semibold"
                >
                  Fee *
                </label>
                <input
                  {...register("fee", { valueAsNumber: true })}
                  placeholder="Payment Amount"
                  name="fee"
                  id="fee"
                  className="w-full"
                  type="number"
                />
                {errors?.fee && (
                  <small className="text-red-500 pl-2">
                    {errors.fee.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="start_date"
                  className="capitalize pl-3 lightText font-semibold"
                >
                  Start Date *
                </label>
                <input
                  {...register("start_date")}
                  name="start_date"
                  id="start_date"
                  className="w-full"
                  type="date"
                />
                {errors?.start_date && (
                  <small className="text-red-500 pl-2">
                    {errors.start_date.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="end_date"
                  className="capitalize pl-3 lightText font-semibold"
                >
                  End Date *
                </label>
                <input
                  {...register("end_date")}
                  name="end_date"
                  id="end_date"
                  className="w-full"
                  type="date"
                />
                {errors?.end_date && (
                  <small className="text-red-500 pl-2">
                    {errors.end_date.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="format_id"
                  className="capitalize pl-3 font-semibold"
                >
                  Trainig Format *
                </label>

                <select
                  id="format_id"
                  {...register("format_id")}
                  className="w-full"
                >
                  <option value="" selected disabled>
                    select option
                  </option>
                  {formats?.data.map((format) => (
                    <option key={format.id} value={format.id}>
                      {format.attributes.name}
                    </option>
                  ))}
                </select>
                {errors?.format_id && (
                  <small className="text-red-500 pl-2">
                    {errors.format_id.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="venue_id"
                  className="capitalize pl-3 font-semibold"
                >
                  Venue *
                </label>

                <select
                  id="venue_id"
                  {...register("venue_id")}
                  className="w-full"
                >
                  <option value="" selected disabled>
                    select option
                  </option>
                  {venues?.data.map((venue) => (
                    <option key={venue.id} value={venue.id}>
                      {venue.attributes.name}
                    </option>
                  ))}
                </select>
                {errors?.venue_id && (
                  <small className="text-red-500 pl-2">
                    {errors.venue_id.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="description"
                  className="capitalize pl-3 font-semibold"
                >
                  Description *
                </label>
                <textarea
                  id=""
                  className="h-48"
                  {...register("description")}
                ></textarea>

                {errors?.description && (
                  <small className="text-red-500 pl-2">
                    {errors.description.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="course_outline"
                  className="capitalize pl-3 font-semibold"
                >
                  Course Outline *
                </label>
                <textarea
                  id=""
                  className="h-48"
                  {...register("course_outline")}
                ></textarea>

                {errors?.course_outline && (
                  <small className="text-red-500 pl-2">
                    {errors.course_outline.message}
                  </small>
                )}
              </div>
            </section>
            <div className="flex items-center justify-center mt-7 max-w-sm mx-auto">
              <button
                type="submit"
                className="px-10 py-2 bg-primary text-white rounded-full flex justify-center w-full items-center gap-2"
              >
                <span>Submit</span>
                <span className="text-white">
                  {loading ? <Spinner /> : null}
                </span>
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditCourse;
