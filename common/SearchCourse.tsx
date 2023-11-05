import { useQuery } from "@tanstack/react-query";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Resolver } from "react-hook-form";
import React from "react";
import { Spinner } from "@/assets/icons/Spinner";
import {
  fetchSearchCategories,
  fetchSearchTrainingFormats,
  fetchSearchVenues,
} from "@/services/user";
type FormValues = {
  venue_id: string;
  format_id: string;
  category_id: string;
};

const schema: ZodType<FormValues> = z.object({
  format_id: z.string(),
  venue_id: z.string(),
  category_id: z.string(),
});

const SearchCourse = () => {
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
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
    refetch: refetchCategories,
  } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: fetchSearchCategories,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  console.log(venues, formats, categories);

  return (
    <>
      <div className="max-w-6xl xll:max-w-7xl mx-auto w-full">
        <form action="" className="w-full">
          <div className="flex justify-between lg:gap-16">
            <div className="w-full">
              <select
                id="venue_id"
                {...register("venue_id")}
                className="w-full"
                placeholder="Program Category"
              >
                <option value="" selected disabled>
                  Program Title
                </option>
                {categories &&
                  Array.isArray(categories.data) &&
                  categories.data.map((category, index) => (
                    <option key={category.id} value={category.id}>
                      {category.attributes.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="w-full">
              <select
                id="venue_id"
                {...register("venue_id")}
                className="w-full"
                placeholder="Program Title"
              >
                <option value="" selected disabled>
                  Program Title
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
                <option value="" selected disabled>
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

            <button className="bg-secondary text-white px-5">SEARCH</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchCourse;
