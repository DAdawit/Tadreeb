"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState } from "react";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import { Spinner } from "@/assets/icons/Spinner";
import { min } from "moment";
import HomeMaxIcon from "@mui/icons-material/HomeMax";
import { HeroType } from "@/Types";

type FormType = {
  title: string;
  description: string;
  image?: FileList;
};

const schema: ZodType<FormType> = z.object({
  title: z.string().min(3, { message: "Title is required" }),
  description: z.string().min(3, { message: "Description is required" }),
  image: z.any(),
});

type PropType = {
  hero: HeroType | undefined;
  refetch: () => void;
};

const EditHero: React.FC<PropType> = ({ refetch, hero }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: hero?.attributes.title,
      description: hero?.attributes.description,
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitData = async (values: FormType) => {
    setError("");
    setLoading(true);
    console.log(values);

    let formdata = new FormData();

    if (values.title) formdata.append("title", values.title);
    if (values.description) formdata.append("description", values.description);

    if (values.image && values.image[0]) {
      formdata.append("image", values.image[0]);
    }

    await api
      .post(`/update-hero/${hero?.id}`, formdata)
      .then((res) => {
        refetch();
        handleClose();
        notify("Hero section added successfully !", "success");
        reset();
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Tooltip title="Edit" placement="top">
        <button className="text-primary" onClick={handleClickOpen}>
          <EditIcon fontSize="small" />
        </button>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Hero Section"}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-sm"
            encType="multipart/form-data"
          >
            <section className="grid gap-x-5 gap-y-1">
              <div>
                <label htmlFor="title" className="capitalize pl-3 lightText">
                  Title *
                </label>
                <input
                  {...register("title")}
                  placeholder="Name"
                  name="title"
                  id="title"
                  className="w-full"
                />
                {errors?.title && (
                  <small className="text-red-500 pl-2">
                    {errors.title.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1 mt-2">
                <label
                  htmlFor="description"
                  className="capitalize pl-3 lightText"
                >
                  Description *
                </label>
                <textarea
                  id="description"
                  {...register("description")}
                ></textarea>
                {errors?.description && (
                  <small className="text-red-500 pl-2">
                    {errors.description.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1 mt-2">
                <label
                  htmlFor="account_number"
                  className="capitalize pl-3 lightText"
                >
                  Hero Image *
                </label>
                <input
                  {...register("image")}
                  placeholder="Banner Image"
                  name="image"
                  id="image"
                  className="w-full"
                  type="file"
                />
                {errors?.image && (
                  <small className="text-red-500 pl-2">
                    {errors?.image?.message || ""}
                  </small>
                )}
              </div>
            </section>
            <small className="text-red-500 pl-2">{error}</small>

            <div className="flex items-center justify-center mt-7">
              <button
                type="submit"
                className="px-10 py-2 bg-primary text-white rounded-full flex items-center gap-x-2"
              >
                <span>Submit</span>
                <span>{loading ? <Spinner /> : null}</span>
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditHero;
