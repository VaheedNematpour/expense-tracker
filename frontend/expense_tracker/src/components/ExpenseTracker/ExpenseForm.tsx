import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Expense } from "../hooks/useExpense";
import axios from "axios";

const schema = z.object({
  title: z.string().min(3),
  category: z
    .number({ invalid_type_error: "The Category field is required!" })
    .min(1),
  amount: z
    .number({ invalid_type_error: "The Amount field is required!" })
    .min(0.01)
    .max(999.99),
});

type FormData = z.infer<typeof schema>;

interface Props {
  isDark: boolean;
}

function ExpenseForm({ isDark }: Props) {
  const queryClient = useQueryClient();

  const addExpense = useMutation({
    mutationFn: (expense: Expense) =>
      axios
        .post("http://localhost:8000/expenses/", expense)
        .then((res) => res.data),

    onSuccess: (savedExpense, newExpense) => {
      queryClient.setQueryData<Expense[]>(["expenses"], (expenses) => [
        savedExpense,
        ...(expenses || []),
      ]);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <h2
        className={`text-xl ${
          isDark ? "text-gray-300" : "text-gray-800"
        } font-medium my-3 xl:text-2xl`}
      >
        Expense Form
      </h2>

      <form
        className="space-y-3"
        onSubmit={handleSubmit((data) => {
          addExpense.mutate({
            title: data.title,
            category: data.category,
            amount: data.amount,
          });
        })}
      >
        <div className="space-y-1">
          <label
            htmlFor="title"
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-800"
            } font-medium xl:text-xl`}
          >
            Title
          </label>
          <input
            {...register("title")}
            type="text"
            id="title"
            className={`block w-full bg-gray-300 px-6 py-2 text-lg rounded xl:text-xl`}
            placeholder="Title"
          />
          {errors.title && (
            <p className="text-lg text-red-400 xl:text-xl">
              {errors.title.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label
            htmlFor="category"
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-800"
            } font-medium xl:text-xl`}
          >
            Category
          </label>

          <select
            id="category"
            {...register("category", { valueAsNumber: true })}
            className={`block w-full px-6 py-1 text-lg text-gray-800 bg-gray-300 rounded`}
          >
            <option value=""></option>
            <option value="1">category 1</option>
            <option value="2">category 2</option>
            <option value="3">category 3</option>
          </select>
          {errors.category && (
            <p className="text-lg text-red-400 xl:text-xl">
              {errors.category.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label
            htmlFor="amount"
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-800"
            } xl:text-xl`}
          >
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            placeholder="Amount"
            className={`block w-full bg-gray-300 px-6 py-2 text-lg rounded xl:text-xl`}
          />
          {errors.amount && (
            <p className="text-lg text-red-400 xl:text-xl">
              {errors.amount.message}
            </p>
          )}
        </div>

        <button
          className={`w-full py-2 border-2 ${
            isDark
              ? "border-gray-300 text-gray-300"
              : "border-gray-800 text-gray-800"
          } text-lg rounded xl:text-xl`}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default ExpenseForm;
