"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState } from "react";
import { notify } from "@/app/toast";

import api from "@/app/axios";
import PaymentIcon from "@mui/icons-material/Payment";
import { Spinner } from "@/assets/icons/Spinner";
type FormValues = {
  name: string;
};

const schema: ZodType<FormValues> = z.object({
  name: z.string(),
});

type propType = {
  refetch: () => void;
};
const AddTrainingFormat: React.FC<propType> = ({ refetch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [addError, setAddError] = useState<string>("");
  const [open, setOpen] = React.useState(false);

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
      .post("/formats", values)
      .then((res) => {
        notify("training format added successfully", "success");
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
      <button
        className="bg-primary text-white px-5 py-2 rounded-full flex justify-center items-center gap-x-2 transition-all hover:-translate-y-1"
        onClick={handleClickOpen}
      >
        <h3>Add Training Format</h3>
        <PaymentIcon />
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Registration Fee"}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-lg mx-auto"
          >
            <section className="grid grid-cols-1  px-5 gap-x-5 gap-y-1 max-w-2xl">
              <div className="grid gap-y-1">
                <label htmlFor="amount" className="capitalize pl-3 lightText">
                  Training format Name *
                </label>
                <input
                  {...register("name")}
                  placeholder="Name"
                  name="name"
                  id="name"
                  className="w-full rounded-full"
                  type="text"
                />
                {errors?.name && (
                  <small className="text-red-500 pl-2">
                    {errors.name.message}
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

export default AddTrainingFormat;
