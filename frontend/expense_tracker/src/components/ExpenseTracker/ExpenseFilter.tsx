import { useState } from "react";
import useCategory from "../hooks/useCategory";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Props {
  isDark: boolean;
}

function ExpenseFilter({ isDark }: Props) {
  const { data } = useCategory();
  const [expaded, setExpanded] = useState(false);

  return (
    <>
      <h2
        className={`text-xl ${
          isDark ? "text-gray-300" : "text-gray-800"
        } font-medium my-4`}
      >
        Expense Filter
      </h2>

      <div>
        <div
          className={`flex items-center justify-between border-2 ${
            isDark ? "border-gray-300" : "border-gray-800"
          } text-lg px-6 py-2 rounded xl:text-xl`}
          onClick={() => setExpanded(!expaded)}
        >
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-800"
            } xl:text-xl`}
          >
            All Categories
          </p>

          <button className={`${isDark ? "text-gray-300" : "text-gray-800"}`}>
            {expaded ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        {expaded && (
          <ul className="my-1 border-2 border-gray-300 rounded">
            <li className="py-4 hover:bg-gray-300"></li>
            {data &&
              data.map((category) => (
                <li
                  className={`px-6 py-2 text-xl ${
                    isDark ? "text-gray-300" : "text-gray-800"
                  } font-medium my-4 hover:bg-gray-400`}
                  key={category.id}
                >
                  {category.title}
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ExpenseFilter;