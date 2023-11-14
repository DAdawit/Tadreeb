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
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/services/admin";
import dynamic from "next/dynamic";

const TextEditorDescription = dynamic(
  () => import("@/common/Editor/TextEditorDescription"),
  { ssr: false }
);
type FormValues = {
  name: string;
  description?: string;
  category_id: string;
};

// port=3307

const schema: ZodType<FormValues> = z.object({
  name: z.string().min(1, "Name is required"),
  // description: z.string().min(1, "Description is required"),
  category_id: z.string().min(1, "Category is required"),
});

type PropType = {
  refetch: () => void;
  name: string | undefined;
  category_id: string | undefined;
  description: string | undefined;
  id: string | undefined;
};

const EditTraining: React.FC<PropType> = ({
  refetch,
  name,
  category_id,
  description,
  id,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [editError, setEditError] = useState<string>("");
  const [description2, setDescription2] = useState(description);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: name,
      category_id: category_id,
      description: description,
    },
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: fetchCategories,
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitData = async (values: FormValues) => {
    setEditError("");
    setLoading(true);
    // console.log(values);
    values.description = description2;

    await api
      .put(`/trainings/${id}`, values)
      .then((res) => {
        refetch();
        handleClose();
        notify("Training updated successfully !", "success");
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
        PaperProps={{
          style: {
            width: "80%", // or any value you want
            maxWidth: "none", // optional, if you want to remove the maxWidth limit
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Edit Training"}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(submitData)}
            className="max-w-2xl mx-auto"
          >
            <section className="grid grid-cols-1  px-5 gap-x-5 gap-y-1 max-w-2xl">
              <div className="grid gap-y-1">
                <label
                  htmlFor="amount"
                  className="capitalize pl-3 lightText font-semibold"
                >
                  Name *
                </label>
                <input
                  {...register("name")}
                  placeholder="Name"
                  name="name"
                  id="name"
                  className="w-full"
                  type="text"
                />
                {errors?.name && (
                  <small className="text-red-500 pl-2">
                    {errors.name.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="category_id"
                  className="capitalize pl-3 font-semibold"
                >
                  Category *
                </label>

                <select
                  id="category_id"
                  {...register("category_id")}
                  className="w-full"
                >
                  <option value="" selected disabled>
                    select option
                  </option>
                  {data?.data.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.attributes.name}
                    </option>
                  ))}
                </select>
                {errors?.category_id && (
                  <small className="text-red-500 pl-2">
                    {errors.category_id.message}
                  </small>
                )}
              </div>
              <div className="grid gap-y-1">
                <label
                  htmlFor="description"
                  className="capitalize pl-3 font-semibold"
                >
                  Description *
                </label>
                <TextEditorDescription
                  description={description2}
                  setDescription={setDescription2}
                />
                {/* <ReactQuill
                  style={{ height: "200px" }}
                  theme="snow"
                  value={description2}
                  modules={toolbarOptions}
                  onChange={setDescription2}
                /> */}

                {errors?.description && (
                  <small className="text-red-500 pl-2">
                    {errors.description.message}
                  </small>
                )}
              </div>
            </section>
            <div className="flex items-center justify-center mt-24 max-w-sm mx-auto">
              <button
                type="submit"
                className="px-10 py-2 bg-primary text-white rounded-full flex justify-center w-full items-center gap-2"
              >
                <span>Update</span>
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

export default EditTraining;
