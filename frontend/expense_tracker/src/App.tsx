import { useState } from "react";
import NavBar from "./components/NavBar";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";
import ExpenseFilter from "./components/ExpenseTracker/ExpenseFilter";
import useCategory from "./components/hooks/useCategory";

function App() {
  const [dark, setDark] = useState(false);

  const { data } = useCategory();

  return (
    <div className={`h-screen ${dark ? "bg-gray-800" : "bg-gray-100"}`}>
      <header className="px-6 py-8">
        <NavBar isDark={dark} handleDark={() => setDark(!dark)} />
      </header>

      <main className="px-6 py-8">
        <ExpenseFilter isDark={dark} category={data ? data : []} />
        <ExpenseList isDark={dark} />
      </main>
    </div>
  );
}

export default App;
