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
import { Spinner } from "@/assets/icons/Spinner";
type FormValues = {
  old_password: string;
  new_password: string;
  confirm_password: string;
};

const schema: ZodType<FormValues> = z
  .object({
    old_password: z.string().min(5).max(30),
    new_password: z.string().min(6).max(30),
    confirm_password: z.string().min(6).max(30),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Password do not match",
    path: ["Confirm Password"],
  });

const ChangePassword: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
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
    setError("");
    api
      .patch("/change-password", values)
      .then((res) => {
        console.log(res.data);
        notify("Password changed successfully !", "success");
        handleClose();
        reset();
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.response.data.errors.old_password[0]);

        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
    // console.log(values);
  };

  return (
    <div>
      <button
        className="text-primary text-sm border-[1px] border-primary px-2 py-1 rounded-full flex justify-center items-center gap-x-2 transition-all hover:scale-105"
        onClick={handleClickOpen}
      >
        <h3>Change Password</h3>
        <SecurityIcon />
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Change password"}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-lg mx-auto"
          >
            <section className="grid grid-cols-1  px-5 gap-x-5 gap-y-1 max-w-2xl">
              <div className="grid gap-y-1">
                <label
                  htmlFor="old_password"
                  className="capitalize pl-3 lightText"
                >
                  Old Password *
                </label>
                <input
                  type="password"
                  {...register("old_password")}
                  placeholder="old password"
                  name="old_password"
                  id="old_password"
                  className="w-full rounded-full"
                />
                {errors?.old_password && (
                  <small className="text-red-500 pl-2">
                    {errors.old_password.message}
                  </small>
                )}
                <small className="text-red-500 pl-2">{error}</small>
              </div>

              <div className="grid gap-y-1">
                <label htmlFor="link" className="capitalize pl-3 lightText">
                  New Password *
                </label>
                <input
                  {...register("new_password")}
                  type="password"
                  placeholder="New password"
                  name="new_password"
                  id="new_password"
                  className="w-full rounded-full"
                />
                {errors?.new_password && (
                  <small className="text-red-500 pl-2">
                    {errors.new_password.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label htmlFor="link" className="capitalize pl-3 lightText">
                  Confirm Password *
                </label>
                <input
                  {...register("confirm_password")}
                  type="password"
                  placeholder="Confirm password"
                  name="confirm_password"
                  id="confirm_password"
                  className="w-full rounded-full"
                />
                {errors?.confirm_password && (
                  <small className="text-red-500 pl-2">
                    {errors.confirm_password.message}
                  </small>
                )}
              </div>
            </section>
            <div className="flex items-center justify-center mt-7 max-w-2xl">
              <button
                type="submit"
                className="px-10 py-2 bg-primary text-white rounded-full flex items-center gap-2"
              >
                <span>Change password</span>
                <span>{loading ? <Spinner /> : null}</span>
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChangePassword;
