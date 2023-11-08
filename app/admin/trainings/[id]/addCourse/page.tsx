"use client";
import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState } from "react";
import { notify } from "@/app/toast";
import api from "@/app/axios";
import { Spinner } from "@/assets/icons/Spinner";
import { useQuery } from "@tanstack/react-query";
import { fetchTrainingFormats, fetchVenues } from "@/services/admin";
import PageTitle from "@/common/PageTitle";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
type FormValues = {
  title: string;
  fee: number;
  description: string;
  course_outline: string;
  start_date: string;
  end_date: string;
  venue_id: string;
  format_id: string;
  training_id?: string;
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
});

const Page: React.FC = () => {
  const { id } = useParams();
  // console.log(id);

  const router = useRouter();
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
    data: formats,
    isLoading: formatsLoading,
    error: formatsError,
    refetch: formatsRefetch,
  } = useQuery({
    queryKey: ["fetchTrainingFormats"],
    queryFn: fetchTrainingFormats,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const submitData = (values: FormValues) => {
    values.training_id = String(id) ?? "";
    setLoading(true);
    setAddError("");
    console.log("hello", values);
    api
      .post("/courses", values)
      .then((res) => {
        notify("training format added successfully", "success");
        reset();
        router.push(`/admin/trainings`);
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
    <div className="mb-8">
      <div className="flex justify-center">
        <PageTitle title="Add Course" />
      </div>

      <form onSubmit={handleSubmit(submitData)} className="max-w-lg mx-auto">
        <section className="grid grid-cols-1  px-5 gap-x-5 gap-y-1 max-w-2xl">
          <input
            type="hidden"
            value={id}
            disabled
            {...register("training_id")}
          />

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
              <small className="text-red-500 pl-2">{errors.fee.message}</small>
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
            <label htmlFor="venue_id" className="capitalize pl-3 font-semibold">
              Venue *
            </label>

            <select id="venue_id" {...register("venue_id")} className="w-full">
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
            <span className="text-white">{loading ? <Spinner /> : null}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
