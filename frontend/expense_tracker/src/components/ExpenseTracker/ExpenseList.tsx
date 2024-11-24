import useExpense from "../hooks/useExpense";

interface Props {
  isDark: boolean;
}

function ExpenseList({ isDark }: Props) {
  const { data, error } = useExpense();

  if (error)
    return <p className="text-lg text-red-400 xl:text-xl">{error.message}</p>;

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
