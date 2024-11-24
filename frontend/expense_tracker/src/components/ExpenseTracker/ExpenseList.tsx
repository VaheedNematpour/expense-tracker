import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Expense {
  id: number;
  title: string;
}

interface Props {
  isDark: boolean;
}

function ExpenseList({ isDark }: Props) {
  const { data } = useQuery<Expense[]>({
    queryKey: ["expenses"],
    queryFn: () =>
      axios.get("http://localhost:8000/expenses/").then((res) => res.data),
  });

  return (
    <>
      <h2
        className={`text-xl ${
          isDark ? "text-gray-300" : "text-gray-800"
        } font-medium my-4`}
      >
        Expense List
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr>
            <th
              scope="row"
              className={`px-6 py-3 text-lg ${
                isDark ? "text-gray-300" : "text-gray-800"
              } font-medium xl:text-xl`}
            >
              Title
            </th>
            <th
              scope="row"
              className={`px-6 py-3 text-lg ${
                isDark ? "text-gray-300" : "text-gray-800"
              } font-medium xl:text-xl`}
            >
              Category
            </th>
            <th
              scope="row"
              className={`px-6 py-3 text-lg ${
                isDark ? "text-gray-300" : "text-gray-800"
              } font-medium xl:text-xl`}
            >
              Amount
            </th>
            <th
              scope="row"
              className={`px-6 py-3 text-lg ${
                isDark ? "text-gray-300" : "text-gray-800"
              } font-medium xl:text-xl`}
            ></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((expense) => (
              <tr key={expense.id}>
                <td scope="col" className={`px-6 py-4`}>
                  {expense.title}
                </td>
                <td scope="col" className={`px-6 py-4`}></td>
                <td scope="col" className={`px-6 py-4`}></td>
                <td scope="col" className={`px-6 py-4`}></td>
              </tr>
            ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}

export default ExpenseList;
