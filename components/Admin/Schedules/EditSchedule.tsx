"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState } from "react";
import { notify } from "@/app/toast";
import api from "@/app/axios";
import { Spinner } from "@/assets/icons/Spinner";
import { useQuery } from "@tanstack/react-query";
import { fetchVenues } from "@/services/admin";
import { useParams } from "next/navigation";
import { Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

type FormValues = {
  fee: number;
  start_date: string;
  end_date: string;
  venue_id: string;
  course_id: string;
};

const schema: ZodType<FormValues> = z.object({
  fee: z.number().min(1, "fee is required"),
  venue_id: z.string(),
  course_id: z.string(),
  start_date: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "start_date must be a valid date string",
  }),
  end_date: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "end_date must be a valid date string",
  }),
});

type propType = {
  refetch: () => void;
  id: string;
  venue_id: string;
  start_date: string;
  end_date: string;
  fee: number;
};
const EditSchedule: React.FC<propType> = ({
  refetch,
  venue_id,
  start_date,
  end_date,
  fee,
  id,
}) => {
  const { course } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [addError, setAddError] = useState<string>("");
  const [open, setOpen] = React.useState(false);

  const {
    data: venues,
    isLoading: venuesLoading,
    error: venuesError,
    refetch: venuesRefetch,
  } = useQuery({
    queryKey: ["fetchVenues"],
    queryFn: fetchVenues,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      venue_id: venue_id,
      start_date: start_date,
      end_date: end_date,
      fee: fee,
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const submitData = (values: FormValues) => {
    setLoading(true);
    setAddError("");
    console.log(values);

    api
      .put(`/schedules/${id}`, values)
      .then((res) => {
        notify("schedule added successfully", "success");
        refetch();
        reset();
        handleClose();
      })
      .catch((err) => {
        notify(err.response.data.errors.detail[0], "error");
        setLoading(false);
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
      >
        <DialogTitle id="alert-dialog-title">{"Add Schedule"}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-lg mx-auto"
          >
            <input type="hidden" value={course} {...register("course_id")} />

            <section className="grid grid-cols-1  px-5 gap-x-5 gap-y-1 max-w-2xl">
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
            </section>
            <div className="flex items-center justify-center mt-7 max-w-2xl">
              <button
                type="submit"
                className="px-10 py-2 bg-primary text-white rounded-full flex items-center gap-2"
              >
                <span>Update</span>
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

export default EditSchedule;
