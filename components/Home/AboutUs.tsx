"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import { ZodType, z } from "zod";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import { Spinner } from "@/assets/icons/Spinner";
import ContactUsForm from "../ContactUs/ContactUsForm";

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
                  To provide exceptional training and consulting services that
                  empower individuals and organizations to achieve their full
                  potential. We strive to be the preferred partner of our
                  clients by delivering high quality, customized solutions that
                  address their unique needs and challenges.
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
            <ContactUsForm buttonLabel="Request a Call Back" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
