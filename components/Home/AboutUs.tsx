"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import { ZodType, z } from "zod";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import { Spinner } from "@/assets/icons/Spinner";

type FormValues = {
  fullName: string;
  location: string;
  email: string; // Add the email field here
  phoneNumber: number;
};

const schema: ZodType<FormValues> = z.object({
  fullName: z.string().min(1, "FullName Number is required"),
  location: z.string().min(1, "Location Number is required"),
  email: z.string().min(1, "email is required"),
  phoneNumber: z.number().min(1, "Phone Number is required"),
});

const AboutUs = () => {
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
  return (
    <>
      <div
        className="relative mb-16 bg-aboutBg bg-center py-20"
        id="learn-more"
      >
        <div className="w-full h-full">
          <div className="px-8 grid  md:grid-cols-2 justify-items-center h-full">
            <div className="h-full flex items-center">
              <div className=" grid items-center">
                <h1 className="text-center font-bold text-xl xl:2xl xll:text-4xl mt-8 text-white">
                  About Us
                </h1>
                <p className="text-white mt-8 text-center">
                  About Us To provide exceptional training and consulting
                  services that empower individuals and organizations to achieve
                  their full potential. We strive to be the preferred partner of
                  our clients by delivering high quality, customized solutions
                  that address their unique needs and challenges.
                </p>
                <p className="text-white mt-8 text-center">
                  We are committed to continuously improving our services and
                  staying at the forefront of industry trends and best
                  practices. Our team of experienced professionals is dedicated
                  to delivering innovative, practical, and results-oriented
                  solutions that help our clients achieve their goals.
                </p>
              </div>
            </div>
            <div className="w-full flex items-center">
              <form
                action="#"
                className="w-full"
                onSubmit={handleSubmit(submitData)}
              >
                <div className="grid max-w-sm mx-auto ">
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

                  <button className="bg-primary rounded-lg text-white py-2 mt-3 flex justify-center items-center gap-x-3">
                    <span>Request a Call Back</span>
                    {loading ? <Spinner /> : null}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
