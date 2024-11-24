import { Expense } from "../hooks/useExpense";
import CategoryTitle from "./CategoryTitle";

interface Props {
  isDark: boolean;
  expenses: Expense[];
}

function ExpenseList({ isDark, expenses }: Props) {
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
              } font-bold xl:text-xl`}
            >
              Title
            </th>
            <th
              scope="row"
              className={`px-6 py-3 text-lg ${
                isDark ? "text-gray-300" : "text-gray-800"
              } font-bold xl:text-xl`}
            >
              Category
            </th>
            <th
              scope="row"
              className={`px-6 py-3 text-lg ${
                isDark ? "text-gray-300" : "text-gray-800"
              } font-bold xl:text-xl`}
            >
              Amount
            </th>
            <th
              scope="row"
              className={`px-6 py-3 text-lg ${
                isDark ? "text-gray-300" : "text-gray-800"
              } font-bold xl:text-xl`}
            ></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td
                scope="col"
                className={`px-6 py-4 text-lg ${
                  isDark ? "text-gray-300" : "text-gray-800"
                } font-medium xl:text-xl`}
              >
                {expense.title}
              </td>
              <td
                scope="col"
                className={`px-6 py-4 text-lg ${
                  isDark ? "text-gray-300" : "text-gray-800"
                } font-medium xl:text-xl`}
              >
                <CategoryTitle category={expense.category} />
              </td>
              <td
                scope="col"
                className={`px-6 py-4 text-lg ${
                  isDark ? "text-gray-300" : "text-gray-800"
                } font-medium xl:text-xl`}
              >
                {expense.amount}
              </td>
              <td
                scope="col"
                className={`px-6 py-4 text-lg ${
                  isDark ? "text-gray-300" : "text-gray-800"
                } font-medium xl:text-xl`}
              >
                <button className="hover:text-red-400">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}

export default ExpenseList;
