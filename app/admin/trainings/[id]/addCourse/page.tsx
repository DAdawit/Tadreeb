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
import {
  fetchCertifications,
  fetchTrainingFormats,
  fetchVenues,
} from "@/services/admin";
import PageTitle from "@/common/PageTitle";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const TextEditorDescription = dynamic(
  () => import("@/common/Editor/TextEditorDescription"),
  { ssr: false }
);
const TextEditorCourseOutline = dynamic(
  () => import("@/common/Editor/TextEditorCourseOutline"),
  { ssr: false }
);
type FormValues = {
  title: string;
  certificate_id: string;
  description?: string;
  course_outline?: string;
  start_date: string;
  end_date: string;
  venue_id: string;
  format_id: string;
  training_id?: string;
  category_id?: string;
};

const schema: ZodType<FormValues> = z.object({
  title: z.string().min(1, "title is required"),
  certificate_id: z.string().min(1, "Certification is required"),
  // description: z.string().min(1, "Description is required"),
  // course_outline: z.string().min(1, "Course Outline is required"),
  start_date: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "start_date must be a valid date string",
  }),
  end_date: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "end_date must be a valid date string",
  }),
  venue_id: z.string().min(1, { message: "Venue is required" }),
  format_id: z.string().min(1, { message: "Training Format is required" }),
});

const Page: React.FC = () => {
  const { id } = useParams();
  // console.log(id);
  const searchParam = useSearchParams();
  const category = searchParam.get("category");
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [addError, setAddError] = useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = useState("");
  const [course_outline, SetCourseOutline] = useState("");
  const [descriptionError, SetDescriptionError] = useState("");
  const [courseError, SetCourseError] = useState("");

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
    data: certifications,
    isLoading: loadingCertifications,
    error: errorCertifications,
    refetch: refetchCertifications,
  } = useQuery({
    queryKey: ["fetchCertifications"],
    queryFn: fetchCertifications,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const submitData = async (values: FormValues) => {
    // Manually validate description and course_outline
    values.description = description;
    values.course_outline = course_outline;
    if (!description || description.trim() === "") {
      SetDescriptionError("Description is required");
      setLoading(false);
      return;
    }
    if (!course_outline || course_outline.trim() === "") {
      SetCourseError("Course outline is required");
      setLoading(false);
      return;
    }

    values.training_id = String(id) ?? "";
    values.category_id = String(category) ?? "";
    setLoading(true);
    setAddError("");
    console.log("hello", values);

    await api
      .post("/courses", values)
      .then((res) => {
        notify("training format added successfully", "success");
        reset();
        router.push(`/admin/trainings/${id}`);
      })
      .catch((err) => {
        notify(err.response.data.errors.detail[0], "error");
        console.log("hello", err.message);
        notify(err.response.data.errors.message, "error");
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    document.title = "add course";
  }, []);
  return (
    <div className="mb-8">
      <div className="flex justify-center">
        <PageTitle title="Add Course" />
      </div>
      <div className="max-w-lg mx-auto pl-5">
        <Link
          href={`/admin/trainings/${id}`}
          className="text-gray text-lg font-semibold"
        >
          back
        </Link>
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
            <label htmlFor="venue_id" className="capitalize pl-3 font-semibold">
              Certification *
            </label>

            <select
              id="certificate_id"
              {...register("certificate_id")}
              className="w-full"
            >
              <option value="" selected disabled>
                select option
              </option>
              {certifications?.data.map((certification) => (
                <option key={certification.id} value={certification.id}>
                  {certification.attributes.name}
                </option>
              ))}
            </select>
            {errors?.certificate_id && (
              <small className="text-red-500 pl-2">
                {errors.certificate_id.message}
              </small>
            )}
          </div>
          <div className="grid gap-y-1 mt-5">
            <label
              htmlFor="description"
              className="capitalize pl-3 font-semibold"
            >
              Description *
            </label>

            <TextEditorDescription
              description={description}
              setDescription={setDescription}
            />

            {descriptionError !== "" && (
              <small className="text-red-500 pl-2">{descriptionError}</small>
            )}
          </div>
          <div className="grid gap-y-1 mt-20">
            <label
              htmlFor="course_outline"
              className="capitalize pl-3 font-semibold"
            >
              Course Outline *
            </label>
            <TextEditorCourseOutline
              course_outline={course_outline}
              SetCourseOutline={SetCourseOutline}
            />
            {courseError !== "" && (
              <small className="text-red-500 pl-2">{courseError}</small>
            )}
          </div>
        </section>
        <div className="flex items-center justify-center mt-24 max-w-sm mx-auto ">
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
