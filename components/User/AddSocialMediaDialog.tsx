"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState } from "react";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import SecurityIcon from "@mui/icons-material/Security";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { fetchSocialMedias } from "@/services/user";
import { AuthContext } from "@/context/AuthContext";
import PageLoader from "@/common/PageLoader";
import { Spinner } from "@/assets/icons/Spinner";
import PublicIcon from "@mui/icons-material/Public";

type FormValues = {
  social_media: string;
  link: string;
  user_profile?: string | undefined;
};

const schema: ZodType<FormValues> = z.object({
  social_media: z.string().min(2),
  link: z.string().min(2),
});

const AddSocialMediaDialog: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [addError, setAddError] = useState<string>("");
  const { isLoading, data, error } = useQuery({
    queryKey: ["socialMedias"],
    queryFn: fetchSocialMedias,
  });
  const { user, admin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      social_media: "",
      link: "",
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitData = (values: FormValues) => {
    setLoading(true);
    setAddError("");
    // values.user_profile = user.id;
    console.log(values);

    api
      .post("/social-media-links", values)
      .then((res) => {
        console.log(res.data);
        notify("Social Media link added successfully", "success");
        handleClose();
        reset();
      })
      .catch((err) => {
        console.log(err.message);
        notify(err.response.data.errors.detail[0], "error");
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
    // console.log(values);
  };
  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div>
      <button
        className="text-primary text-sm border-[1px] border-primary px-2 py-1 rounded-full flex justify-center items-center gap-x-2 transition-all hover:scale-105"
        onClick={handleClickOpen}
      >
        <h3>Social Medias</h3>
        <PublicIcon />
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Social Media Accounts"}
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-lg mx-auto"
          >
            <section className="grid grid-cols-1  px-5 gap-x-5 gap-y-1 max-w-2xl">
              <div className="grid gap-y-1">
                <label
                  htmlFor="newPassword"
                  className="capitalize pl-3 lightText"
                >
                  Social Media *
                </label>
                <select
                  id="name"
                  {...register("social_media")}
                  className="w-full rounded-full"
                >
                  <option value="" selected disabled>
                    select option
                  </option>
                  {data &&
                    Array.isArray(data) &&
                    data.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
                {errors?.social_media && (
                  <small className="text-red-500 pl-2">
                    {errors.social_media.message}
                  </small>
                )}
              </div>

              <div className="grid gap-y-1">
                <label htmlFor="link" className="capitalize pl-3 lightText">
                  Social Media Link *
                </label>
                <input
                  {...register("link")}
                  placeholder="https://www.facebook.com/****"
                  name="link"
                  id="link"
                  className="w-full rounded-full"
                />
                {errors?.link && (
                  <small className="text-red-500 pl-2">
                    {errors.link.message}
                  </small>
                )}
              </div>
            </section>
            <div className="flex items-center justify-center mt-7 max-w-2xl">
              <button
                type="submit"
                className="px-10 py-2 bg-primary text-white rounded-full flex items-center gap-2"
              >
                <span>Add</span>
                <span>{loading ? <Spinner /> : <AddIcon />}</span>
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddSocialMediaDialog;
