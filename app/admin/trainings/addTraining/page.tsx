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
import { fetchCategories } from "@/services/admin";
import PageTitle from "@/common/PageTitle";
import { useRouter } from "next/navigation";
type FormValues = {
  name: string;
  description: string;
  category_id: string;
};

const schema: ZodType<FormValues> = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  category_id: z.string().min(1, "Category is required"),
});

const Page: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [addError, setAddError] = useState<string>("");
  const [open, setOpen] = React.useState(false);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: fetchCategories,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

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
      .post("/trainings", values)
      .then((res) => {
        notify("training format added successfully", "success");
        reset();
        handleClose();
        router.push("/admin/trainings");
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
      <div className="flex justify-center">
        <PageTitle title="Add Training" />
      </div>

      <form onSubmit={handleSubmit(submitData)} className="max-w-lg mx-auto">
        <section className="grid grid-cols-1  px-5 gap-x-5 gap-y-1 max-w-2xl">
          <div className="grid gap-y-1">
            <label
              htmlFor="amount"
              className="capitalize pl-3 lightText font-semibold"
            >
              Name *
            </label>
            <input
              {...register("name")}
              placeholder="Name"
              name="name"
              id="name"
              className="w-full"
              type="text"
            />
            {errors?.name && (
              <small className="text-red-500 pl-2">{errors.name.message}</small>
            )}
          </div>
          <div className="grid gap-y-1">
            <label
              htmlFor="category_id"
              className="capitalize pl-3 font-semibold"
            >
              Category *
            </label>

            <select
              id="category_id"
              {...register("category_id")}
              className="w-full"
            >
              <option value="" selected disabled>
                select option
              </option>
              {data?.data.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.attributes.name}
                </option>
              ))}
            </select>
            {errors?.category_id && (
              <small className="text-red-500 pl-2">
                {errors.category_id.message}
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
