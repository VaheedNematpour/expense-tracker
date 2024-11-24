interface Props {
  isDark: boolean;
  handleDark: () => void;
}

function NavBar({ isDark, handleDark }: Props) {
  return (
    <>
      <nav className="flex items-center justify-between">
        <h1
          className={`text-xl ${
            isDark ? "text-gray-300" : "text-gray-800"
          } font-medium xl:text-2xl`}
        >
          Expense Tracker
        </h1>

        <button
          onClick={handleDark}
          className={`text-lg ${
            isDark ? "text-gray-300" : "text-gray-800"
          } xl:text-xl`}
        >
          {isDark ? "Set Light" : "Set Dark"}
        </button>
      </nav>
    </>
  );
}

export default NavBar;
