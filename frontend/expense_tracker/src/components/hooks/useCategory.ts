import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Category {
  id: number;
  title: string;
}

const useCategory = () => {
  return useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: () =>
      axios.get("http://localhost:8000/categories/").then((res) => res.data),
  });
};

export default useCategory;
