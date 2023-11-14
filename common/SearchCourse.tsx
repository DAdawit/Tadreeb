"use client";
import { useQuery } from "@tanstack/react-query";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import React, { useState } from "react";
import { Spinner } from "@/assets/icons/Spinner";
import {
  fetchAllCoursesOnCurrentMonth,
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
  venue_id?: string;
  format_id?: string;
  training_id?: string;
  search?: string;
};

const schema: ZodType<FormValues> = z.object({
  venue_id: z.string(),
  format_id: z.string(),
  training_id: z.string(),
  search: z.string(),
});

const SearchCourse = () => {
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
    data: venues,
    isLoading: venueLoading,
    error: venueError,
    refetch: venueRefetch,
  } = useQuery({
    queryKey: ["fetchVenues"],
    queryFn: fetchSearchVenues,
  });

  const {
    data: formats,
    isLoading: formatsLoading,
    error: formatError,
    refetch: formatsRefetch,
  } = useQuery({
    queryKey: ["fetchTrainingFormats"],
    queryFn: fetchSearchTrainingFormats,
  });

  const {
    data: trainings,
    isLoading: trainingsLoading,
    error: trainingsError,
    refetch: refetchTrainings,
  } = useQuery({
    queryKey: ["fetchSearchTrainings"],
    queryFn: fetchSearchTrainings,
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
    // alert("hello");
    if (
      values.format_id === "" &&
      values.training_id === "" &&
      values.venue_id === "" &&
      values.search === ""
    ) {
      return notify("At least fill one ot the search fields", "error");
    }
    setLoading(true);
    setSearch(true);
    api
      .get("/search-courses", { params: values })
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
      <div className=" bg-bgPrimary py-8">
        <div className="max-w-6xl xll:max-w-7xl mx-auto w-full">
          <form onSubmit={handleSubmit(submitData)} className="w-full">
            <div className="flex justify-between lg:gap-16">
              <div className="w-full">
                <select
                  id="training_id"
                  {...register("training_id")}
                  className="w-full"
                  placeholder="Program Category"
                >
                  <option value="" selected>
                    Program Category
                  </option>
                  {trainings &&
                    Array.isArray(trainings.data) &&
                    trainings.data.map((training) => (
                      <option key={training.id} value={training.id}>
                        {training.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="w-full">
                <select
                  id="format_id"
                  {...register("format_id")}
                  className="w-full"
                  placeholder="Program Title"
                >
                  <option value="" selected>
                    Program Format
                  </option>

                  {formats &&
                    Array.isArray(formats.data) &&
                    formats.data.map((format, index) => (
                      <option key={format.id} value={format.id}>
                        {format.attributes.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="w-full">
                <select
                  id="venue_id"
                  {...register("venue_id")}
                  className="w-full"
                  placeholder="Location"
                >
                  <option value="" selected>
                    Location
                  </option>

                  {venues &&
                    Array.isArray(venues.data) &&
                    venues.data.map((venue, index) => (
                      <option key={venue.id} value={venue.id}>
                        {venue.attributes.name}
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
              <button className="bg-secondary text-white px-5" type="submit">
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </div>
      {search ? (
        <>
          <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto mb-8 px-5">
            <div className="relative overflow-x-auto min-h-screen  bg-white px-5 mt-8">
              <button
                className="bg-white text-primary p-1 underline underline-offset-2"
                onClick={() => ClearSearch()}
              >
                Cancel Seach
              </button>
              <table className="w-full text-sm text-left text-gray-500 ">
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
                      Course
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      Date
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      Training Format
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      Training
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      Venue
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      Book Now
                    </th>
                  </tr>
                </thead>

                <>
                  {" "}
                  <tbody>
                    {loading ? <Spinner /> : null}
                    <>
                      {searchResults?.total === 0 && (
                        <p>No search reasult found.</p>
                      )}
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
          </div>
        </>
      ) : null}

      {path === "/course-finder" && !search ? (
        <>
          {" "}
          <div className="max-w-6xl mx-auto  xll:max-w-7xl xll:mx-auto mb-8 px-5">
            <div className="relative overflow-x-auto min-h-screen  bg-white px-5 mt-8">
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
                      Course
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      Date
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50 whitespace-nowrap"
                    >
                      Training Format
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      Training
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      Venue
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 border-r-2 border-gray-50"
                    >
                      Book Now
                    </th>
                  </tr>
                </thead>

                <>
                  {" "}
                  <tbody>
                    {loading ? <Spinner /> : null}
                    <>
                      {courses?.total === 0 && <p>No search reasult found.</p>}
                      {courses?.data &&
                        Array.isArray(courses.data) &&
                        courses.data.map((course, index) => (
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
          </div>
        </>
      ) : null}
    </>
  );
};

export default SearchCourse;
