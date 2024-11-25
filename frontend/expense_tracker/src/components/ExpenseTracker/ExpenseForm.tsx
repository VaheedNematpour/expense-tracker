interface Props {
  isDark: boolean;
}

function ExpenseForm({ isDark }: Props) {
  return (
    <>
      <h2
        className={`text-xl ${
          isDark ? "text-gray-300" : "text-gray-800"
        } font-medium my-3 xl:text-2xl`}
      >
        Expense Form
      </h2>

      <form className="space-y-3">
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
            type="text"
            id="title"
            className={`block w-full bg-gray-300 px-6 py-2 text-lg rounded xl:text-xl`}
            placeholder="Title"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="description"
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-800"
            } font-medium xl:text-xl`}
          >
            Description
          </label>
          <textarea
            placeholder="description"
            className={`block w-full bg-gray-300 px-6 py-2 text-lg rounded xl:text-xl`}
          ></textarea>
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
            type="number"
            placeholder="Amount"
            className={`block w-full bg-gray-300 px-6 py-2 text-lg rounded xl:text-xl`}
          />
        </div>

        <button>Add</button>
      </form>
    </>
  );
}

export default ExpenseForm;
