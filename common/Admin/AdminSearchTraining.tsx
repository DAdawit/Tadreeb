"use client";
import { useQuery } from "@tanstack/react-query";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import React, { useState } from "react";
import { Spinner } from "@/assets/icons/Spinner";
import {
  fetchAllCoursesOnCurrentMonth,
  fetchCategoryTrainings,
  fetchSearchTrainingFormats,
  fetchSearchTrainings,
  fetchSearchVenues,
} from "@/services/user";
import api from "@/app/axios";
import { notify } from "@/app/toast";
import { SearchReasultCourseType } from "@/Types";
import CoursesList from "@/components/Admin/Courses/CoursesList";
import CourseSearchReasultList from "@/components/LoopComponents/CourseSearchReasultList";
import { usePathname } from "next/navigation";
type FormValues = {
  category_id?: string;
  search?: string;
};

const schema: ZodType<FormValues> = z.object({
  category_id: z.string(),
  search: z.string(),
});

const AdminSearchTraining = () => {
  const path = usePathname();
  // console.log(path);

  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [searchResults, setSearchResult] =
    useState<SearchReasultCourseType | null>(null);
  const {
    data: courses,
    isLoading: coursesLoading,
    error: coursesError,
    refetch: coursesRefetch,
  } = useQuery({
    queryKey: ["fetchAllCoursesOnCurrentMonth"],
    queryFn: fetchAllCoursesOnCurrentMonth,
  });

  const {
    data: categories,
    isLoading: categoiresLoading,
    error: categoriesError,
    refetch: categoriesRefetch,
  } = useQuery({
    queryKey: ["fetchCategoryTrainings"],
    queryFn: fetchCategoryTrainings,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const submitData = (values: FormValues) => {
    if (values.category_id === "" && values.search === "") {
      return notify("At least fill one ot the search fields", "error");
    }
    setLoading(true);
    setSearch(true);
    api
      .get("/admin-search-training", { params: values })
      .then((res) => {
        setSearchResult(res.data);
      })
      .catch((err) => {
        notify(err.response.data.errors.detail[0], "error");
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const ClearSearch = () => {
    setSearchResult(null);
    setSearch(false);
  };
  // console.log(courses);

  return (
    <>
      <div className="bg-bgPrimary py-8 flex px-5 ">
        <div className="max-w-6xl xll:max-w-7xl mx-auto">
          <form onSubmit={handleSubmit(submitData)} className="">
            <div className="w-full grid grid-cols-2 md:flex justify-between gap-5 ">
              <div className="w-full">
                <select
                  id="category_id"
                  {...register("category_id")}
                  className="w-full"
                  placeholder="Program Category"
                >
                  <option value="" selected>
                    Program Category
                  </option>
                  {categories &&
                    Array.isArray(categories) &&
                    categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="w-full">
                <input
                  type="text"
                  {...register("search")}
                  placeholder="Search course"
                  className="w-full"
                />
              </div>
              <div className="w-full h-full">
                <button
                  className="bg-secondary text-white px-5 h-full py-2"
                  type="submit"
                >
                  <span></span>
                  SEARCH
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {search ? (
        <>
          <pre>{JSON.stringify(searchResults, null, 2)}</pre>
          {/* <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto mb-8 px-5">
            <div className="relative overflow-x-auto m  bg-white px-5 mt-8">
              <button
                className="bg-white text-primary p-1 underline underline-offset-2"
                onClick={() => ClearSearch()}
              >
                Cancel Seach
              </button>
              <table className="w-full text-sm text-left text-gray-500 overflow-x-auto">
                <thead className="text-xs text-white uppercase bg-secondary">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                <>
                  {" "}
                  <tbody>
                    {loading ? <Spinner /> : null}
                    <>
                      {searchResults?.total === 0 && <p>empty.</p>}
                      {searchResults?.data &&
                        Array.isArray(searchResults.data) &&
                        searchResults.data.map((course, index) => (
                          <CourseSearchReasultList
                            key={index}
                            course={course}
                            index={index}
                          />
                        ))}
                    </>
                  </tbody>
                </>
              </table>
            </div>
          </div> */}
        </>
      ) : null}
    </>
  );
};

export default AdminSearchTraining;
