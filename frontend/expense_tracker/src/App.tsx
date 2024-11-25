import { useState } from "react";
import NavBar from "./components/NavBar";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";
import ExpenseFilter from "./components/ExpenseTracker/ExpenseFilter";
import useCategory from "./components/hooks/useCategory";
import useExpense from "./components/hooks/useExpense";
import ExpenseForm from "./components/ExpenseTracker/ExpenseForm";

function App() {
  const [dark, setDark] = useState(false);

  const { data: category } = useCategory();
  const { data: expenses, error } = useExpense();

  if (error)
    return <p className="text-lg text-red-400 xl:text-xl">{error.message}</p>;

  return (
    <div className={`h-screen ${dark ? "bg-gray-800" : "bg-gray-100"}`}>
      <header className="px-6 py-8">
        <NavBar isDark={dark} handleDark={() => setDark(!dark)} />
      </header>

      <main className="px-6 pb-8">
        <ExpenseForm isDark={dark} />
        <ExpenseFilter isDark={dark} category={category ? category : []} />
        <ExpenseList isDark={dark} expenses={expenses ? expenses : []} />
      </main>
    </div>
  );
}

export default App;
