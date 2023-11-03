"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import { ZodType, z } from "zod";
import { useState } from "react";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import { Spinner } from "@/assets/icons/Spinner";
type SeedType = {
  amount: number;
  description: string;
  round: string;
  file_upload?: FileList;
};

const schema: ZodType<SeedType> = z.object({
  amount: z.number(),
  round: z.string().min(2).max(30),
  description: z.string(),
  file_upload: z.any(),
});

type PropType = {
  refetch: () => void;
  fee: SeedType;
  id: string;
};

const EditSeedDialog: React.FC<PropType> = ({ refetch, fee, id }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SeedType>({
    resolver: zodResolver(schema),
    defaultValues: {
      amount: fee.amount,
      round: fee.round,
      description: fee.description,
      file_upload: undefined,
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitData = (values: SeedType) => {
    setError("");
    setLoading(true);
    api
      .patch(`/seeds/${id}`, values)
      .then((res) => {
        refetch();
        handleClose();
        notify("Service Charge updated successfully !", "success");
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
        <button className="text-orange-500" onClick={handleClickOpen}>
          <EditIcon fontSize="small" />
        </button>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Service Charge"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(submitData)} className="max-w-sm">
            <section className="grid gap-x-5 gap-y-1">
              <div>
                <label htmlFor="amount" className="capitalize pl-3 lightText">
                  Amount *
                </label>
                <input
                  {...register("amount", { valueAsNumber: true })}
                  placeholder="Amount"
                  name="amount"
                  id="amount"
                  className="w-full rounded-full"
                />
                {errors?.amount && (
                  <small className="text-red-500 pl-2">
                    {errors.amount.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label htmlFor="amount" className="capitalize pl-3 lightText">
                  Round *
                </label>

                <select
                  id="city"
                  {...register("round")}
                  className="w-full rounded-full"
                >
                  <option value="" disabled>
                    select option
                  </option>
                  {rounds.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                {errors?.round && (
                  <small className="text-red-500 pl-2">
                    {errors.round.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="account_number"
                  className="capitalize pl-3 lightText"
                >
                  Description
                </label>
                <textarea
                  {...register("description")}
                  placeholder="Payment Description"
                  name="description"
                  id="description"
                  className="w-full h-36 rounded-lg"
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
                  Payment Proof Picture *
                </label>
                <input
                  {...register("file_upload")}
                  placeholder="Payment Proof Image"
                  name="file_upload"
                  id="file_upload"
                  className="w-full"
                  type="file"
                />
                {errors?.file_upload && (
                  <small className="text-red-500 pl-2">
                    {errors?.file_upload?.message || ""}
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
                <span>Update </span>
                <span>{loading ? <Spinner /> : null}</span>
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditSeedDialog;
