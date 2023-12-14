"use client";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import { ZodType, z } from "zod";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import { Spinner } from "@/assets/icons/Spinner";
import { usePathname } from "next/navigation";
type FormValues = {
  fullName: string;
  location: string;
  email: string; // Add the email field here
  phoneNumber: number;
  message?: string;
};

const schema: ZodType<FormValues> = z.object({
  fullName: z.string().min(1, "FullName Number is required"),
  location: z.string().min(1, "Location Number is required"),
  email: z.string().min(1, "email is required"),
  phoneNumber: z.number().min(1, "Phone Number is required"),
  message: z.string(),
});
type PropsType = {
  buttonLabel: string;
};

const ContactUsForm: React.FC<PropsType> = ({ buttonLabel }) => {
  const [hideMessageInput, setHideMessageInput] = useState(false);
  const pathname = usePathname();

  const [loading, setLoading] = useState<boolean>(false);
  const [addError, setAddError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const submitData = (values: FormValues) => {
    setLoading(true);
    setAddError("");
    console.log(values);

    api
      .post("/contact", values)
      .then((res) => {
        notify("information send, we will contact you soon", "success");
        reset();
      })
      .catch((err) => {
        notify(err.response.data.errors.detail[0], "error");
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (pathname.startsWith("/contact-us")) {
      setHideMessageInput(true);
    }
  }, [pathname]);
  return (
    <>
      <div className="w-full flex items-center">
        <form action="#" className="w-full" onSubmit={handleSubmit(submitData)}>
          <div className="grid max-w-lg mx-auto ">
            <div className="grid mt-3">
              <input
                type="text"
                className=""
                placeholder="Your Full Name"
                {...register("fullName")}
              />
              {errors?.fullName && (
                <small className="text-red-500 pl-2">
                  {errors.fullName.message}
                </small>
              )}
            </div>
            <div className="grid mt-3">
              <input
                type="text"
                className=""
                placeholder="Your Location"
                {...register("location")}
              />
              {errors?.location && (
                <small className="text-red-500 pl-2">
                  {errors.location.message}
                </small>
              )}
            </div>
            <div className="grid mt-3">
              <input
                type="text"
                className=""
                placeholder="Your Contact Number"
                {...register("phoneNumber", { valueAsNumber: true })}
              />
              {errors?.phoneNumber && (
                <small className="text-red-500 pl-2">
                  {errors.phoneNumber.message}
                </small>
              )}
            </div>
            <div className="grid mt-3">
              <input
                type="email"
                className=""
                placeholder="Your Email"
                {...register("email")}
              />
              {errors?.email && (
                <small className="text-red-500 pl-2">
                  {errors.email.message}
                </small>
              )}
            </div>
            {hideMessageInput && (
              <div className="grid mt-3">
                <textarea
                  {...register("message")}
                  placeholder="your message"
                  className="h-36"
                ></textarea>
              </div>
            )}

            <button className="bg-primary rounded-lg text-white py-2 mt-3 flex justify-center items-center gap-x-3">
              <span> {buttonLabel}</span>
              {loading ? <Spinner /> : null}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUsForm;
