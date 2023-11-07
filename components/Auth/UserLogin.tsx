"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/app/axios";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Spinner } from "@/assets/icons/Spinner";
import { LoginIcon } from "@/assets/icons/loginIcon";
import { useRouter } from "next/navigation";
type PropType = {
  setLogin: () => void;
};
const UserLogin: React.FC<PropType> = ({ setLogin }) => {
  const router = useRouter();
  const { user, auth, setUserData, setLoadingFalse } = useContext(AuthContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  type FormDataType = {
    email: string;
    password: string;
  };

  const schema: ZodType<FormDataType> = z.object({
    email: z.string().email(),
    password: z.string().min(2).max(30),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "dawit@gmail.com",
      password: "admin123",
    },
  });

  const submitData = (values: FormDataType) => {
    setError("");
    setLoading(true);
    api
      .post("/login", values)
      .then((res) => {
        console.log(res.data.data);
        setUserData(res.data.data.user);
        localStorage.setItem("token", res?.data?.data?.token);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res?.data?.data?.token}`;
        router.push("/admin/dashboard");
      })
      .catch((err) => {
        setError(err.response.data.errors.detail[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(auth, null, 2)}</pre>

      <section className="">
        <h1 className="text-3xl font-semibold text-primary text-center tracking-wide max-w-lg mx-auto ">
          Admin
        </h1>
        <form
          onSubmit={handleSubmit(submitData)}
          className="grid py-3 max-w-sm mx-auto px-5"
        >
          {/* <h1 className="text-2xl font-bold text-center text-gray-800 my-2">
            Welcome back !
          </h1> */}
          <div className="grid mt-2">
            <label htmlFor="name" className="pl-3">
              Email *
            </label>
            <input
              {...register("email")}
              placeholder="email"
              type="text"
              className="rounded-full"
            />
            {errors?.email && (
              <small className="text-red-500 pl-2">
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="grid mt-2">
            <label htmlFor="password" className="pl-3">
              Password *
            </label>

            <input
              {...register("password")}
              placeholder="password"
              type="password"
              className="rounded-full"
            />
            {errors?.password && (
              <small className="text-red-500 pl-2">
                {errors.password.message}
              </small>
            )}
          </div>
          <small className="text-red-500 pl-2">{error}</small>
          <button
            className="mt-5 w-full bg-primary text-white  py-2 flex justify-center items-center gap-x-2 hover:-translate-y-px rounded-full"
            disabled={loading}
          >
            <span className="">Login</span>
            {loading ? <Spinner /> : <LoginIcon />}
          </button>
          <div className="flex text-sm gap-1 mt-5">
            <button>
              Forgot your password?
              <span
                className="text-primary cursor-pointer font-normal underline"
                onClick={setLogin}
              >
                Click here.
              </span>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default UserLogin;
