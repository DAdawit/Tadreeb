import { CategoryTrainings } from "@/Types";
import api from "@/app/axios";

export async function fetchCategoryTrainings(): Promise<CategoryTrainings[]> {
  return await api
    .get(`/category-trainings`)
    .then((res) => {
      // console.log(res.data.data);

      return res?.data.data;
    })
    .catch((err) => {
      return err;
    });
}
