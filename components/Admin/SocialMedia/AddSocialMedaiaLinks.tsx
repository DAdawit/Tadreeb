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
import AddLinkIcon from "@mui/icons-material/AddLink";
type FormType = {
  facebook: string;
  linkedin: string;
  instagram: string;
  whatsUp: string;
};

const schema: ZodType<FormType> = z.object({
  facebook: z.string(),
  linkedin: z.string(),
  instagram: z.string(),
  whatsUp: z.string(),
});

type PropType = {
  refetch: () => void;
};

const AddSocialMedaiaLinks: React.FC<PropType> = ({ refetch }) => {
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
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitData = (values: FormType) => {
    setError("");
    setLoading(true);
    console.log(values);

    api
      .post(`/social-media`, values)
      .then((res) => {
        refetch();
        handleClose();
        notify("Social Media added successfully !", "success");
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
        <button
          className="text-white bg-primary rounded-full px-4 py-2 flex items-center justify-center gap-x-2"
          onClick={handleClickOpen}
        >
          <span>Add Links</span>
          <AddLinkIcon fontSize="small" />
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
          <form onSubmit={handleSubmit(submitData)} className="max-w-sm">
            <section className="grid gap-x-5 gap-y-1">
              <div>
                <label htmlFor="title" className="capitalize pl-3 lightText">
                  Facebook
                </label>
                <input
                  {...register("facebook")}
                  placeholder="facebook"
                  name="facebook"
                  id="facebook"
                  className="w-full"
                />
                {errors?.facebook && (
                  <small className="text-red-500 pl-2">
                    {errors.facebook.message}
                  </small>
                )}
              </div>
              <div>
                <label
                  htmlFor="instagram"
                  className="capitalize pl-3 lightText"
                >
                  Instagram
                </label>
                <input
                  {...register("instagram")}
                  placeholder="instagram"
                  name="instagram"
                  id="instagram"
                  className="w-full"
                />
                {errors?.instagram && (
                  <small className="text-red-500 pl-2">
                    {errors.instagram.message}
                  </small>
                )}
              </div>
              <div>
                <label htmlFor="linkedin" className="capitalize pl-3 lightText">
                  Linkedin
                </label>
                <input
                  {...register("linkedin")}
                  placeholder="linkedin"
                  name="linkedin"
                  id="linkedin"
                  className="w-full"
                />
                {errors?.linkedin && (
                  <small className="text-red-500 pl-2">
                    {errors.linkedin.message}
                  </small>
                )}
              </div>
              <div>
                <label htmlFor="WhatsUp" className="capitalize pl-3 lightText">
                  WhatsUp
                </label>
                <input
                  {...register("whatsUp")}
                  placeholder="whatsUp"
                  name="whatsUp"
                  id="whatsUp"
                  className="w-full"
                />
                {errors?.whatsUp && (
                  <small className="text-red-500 pl-2">
                    {errors.whatsUp.message}
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

export default AddSocialMedaiaLinks;
