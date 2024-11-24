import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Category } from "./useCategory";

interface Expense {
  id: number;
  title: string;
  category: Category;
  amount: number;
}

const useExpense = () => {
  return useQuery<Expense[], Error>({
    queryKey: ["expenses"],
    queryFn: () =>
      axios.get("http://localhost:8000/expenses/").then((res) => res.data),
  });
};

export default useExpense;
