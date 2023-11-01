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
import { useQuery } from "@tanstack/react-query";
import PersonIcon from "@mui/icons-material/Person";
import { fetchPaymentMethods } from "@/services/user";
import PageLoader from "@/common/PageLoader";
import { cities } from "@/data/data";
import { Spinner } from "@/assets/icons/Spinner";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
type FormValues = {
  country: string | undefined;
  city: string | undefined;
  birth_date: string | undefined;
  account_name: string | undefined;
  account_number: number | undefined;
  payment_type: string | undefined;
  profile_pic?: FileList | undefined;
};

const schema: ZodType<FormValues> = z.object({
  country: z.string().min(2),
  city: z.string().min(2),
  birth_date: z.string(),
  account_name: z.string().min(2).max(30),
  account_number: z.number(),
  payment_type: z.string(),
  profile_pic: z.any(),
});

type PropType = {
  user: FormValues;
  id?: string | null;
};
const EditProfile: React.FC<PropType> = ({ id, user }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [addError, setAddError] = useState<string>("");
  const [open, setOpen] = useState(false);
  const { setUserData } = useContext(AuthContext);
  const { isLoading, data, error } = useQuery({
    queryKey: ["paymentMethods"],
    queryFn: fetchPaymentMethods,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      country: user?.country,
      city: user?.city,
      birth_date: user?.birth_date,
      account_name: user?.account_name,
      payment_type: user?.payment_type,
      account_number: user?.account_number,
    },
  });

  if (isLoading) {
    return <PageLoader />;
  }
  // console.log(data);
  const submitData = (values: FormValues) => {
    setLoading(true);
    setAddError("");

    let formdata = new FormData();
    if (values.country) formdata.append("country", values.country);
    if (values.city) formdata.append("city", values.city);
    if (values.birth_date) formdata.append("birth_date", values.birth_date);
    if (values.account_name)
      formdata.append("account_name", values.account_name);
    if (values.account_number)
      formdata.append("account_number", values.account_number.toString());
    if (values.payment_type)
      formdata.append("payment_type", values.payment_type);
    if (values.profile_pic && values.profile_pic[0]) {
      formdata.append("profile_pic", values.profile_pic[0]);
    }

    api
      .patch(`/user-profile-rud`, formdata)
      .then((res) => {
        console.log(res.data);
        notify("profile added successfully", "success");
        handleClose();
        reset();
        api
          .get("/verify-token")
          .then((res) => {
            setUserData(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
        notify(err.response.data.errors.detail[0], "error");
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className="text-primary text-sm border-[1px] border-primary px-2 py-1 rounded-full flex justify-center items-center gap-x-2 transition-all hover:scale-105"
        onClick={handleClickOpen}
      >
        <h3>Edit Profile</h3>
        <PersonIcon />
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Complete Your Profile"}
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-lg mx-auto"
          >
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

            <section className="grid grid-cols-1  px-5 gap-x-5 gap-y-1 max-w-2xl">
              <div className="grid gap-y-1">
                <label htmlFor="country" className="capitalize pl-3 lightText">
                  Country *
                </label>
                <select
                  id="country"
                  {...register("country")}
                  className="w-full rounded-full"
                >
                  <option value="" disabled>
                    select option
                  </option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Eritrea ">Eritrea </option>
                  <option value="Sudan">Sudan</option>
                </select>

                {errors?.country && (
                  <small className="text-red-500 pl-2">
                    {errors.country.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label htmlFor="city" className="capitalize pl-3 lightText">
                  City *
                </label>
                <select
                  id="city"
                  {...register("city")}
                  className="w-full rounded-full"
                >
                  <option value="" disabled>
                    select option
                  </option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {errors?.city && (
                  <small className="text-red-500 pl-2">
                    {errors.city.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="account_number"
                  className="capitalize pl-3 lightText"
                >
                  Date of Birth *
                </label>
                <input
                  {...register("birth_date")}
                  placeholder="Birth date"
                  name="birth_date"
                  id="birth_date"
                  className="w-full rounded-full"
                  type="date"
                />
                {errors?.birth_date && (
                  <small className="text-red-500 pl-2">
                    {errors.birth_date.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="payment_type"
                  className="capitalize pl-3 lightText"
                >
                  Payment Method *
                </label>
                <select
                  id="payment_type"
                  {...register("payment_type")}
                  className="w-full rounded-full"
                >
                  <option value="" disabled>
                    select option
                  </option>
                  {data &&
                    Array.isArray(data) &&
                    data.map((payment) => (
                      <option key={payment.id} value={payment.id}>
                        {payment.name}
                      </option>
                    ))}
                </select>
                {errors?.payment_type && (
                  <small className="text-red-500 pl-2">
                    {errors.payment_type.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="account_name"
                  className="capitalize pl-3 lightText"
                >
                  Account Name *
                </label>
                <input
                  {...register("account_name")}
                  placeholder="Ato/Wro. ****"
                  name="account_name"
                  id="account_name"
                  className="w-full rounded-full"
                />
                {errors?.account_name && (
                  <small className="text-red-500 pl-2">
                    {errors.account_name.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="account_number"
                  className="capitalize pl-3 lightText"
                >
                  Account Number *
                </label>
                <input
                  {...register("account_number", { valueAsNumber: true })}
                  placeholder="Account Number"
                  name="account_number"
                  id="account_number"
                  className="w-full rounded-full"
                />
                {errors?.account_number && (
                  <small className="text-red-500 pl-2">
                    {errors.account_number.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1 mt-2">
                <label
                  htmlFor="account_number"
                  className="capitalize pl-3 lightText"
                >
                  Profile Picture *
                </label>
                <input
                  {...register("profile_pic")}
                  placeholder="profile_pic"
                  name="profile_pic"
                  id="profile_pic"
                  className="w-full"
                  type="file"
                />
                {errors?.profile_pic && (
                  <small className="text-red-500 pl-2">
                    {errors?.profile_pic?.message || ""}
                  </small>
                )}
              </div>
            </section>
            <div className="flex items-center justify-center mt-7 max-w-2xl">
              <button
                type="submit"
                className="px-10 py-2 bg-primary text-white rounded-full flex items-center gap-2"
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

export default EditProfile;
