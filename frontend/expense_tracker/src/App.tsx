import { useState } from "react";
import NavBar from "./components/NavBar";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";
import ExpenseFilter from "./components/ExpenseTracker/ExpenseFilter";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`h-screen ${dark ? "bg-gray-800" : "bg-gray-100"}`}>
      <header className="px-6 py-8">
        <NavBar isDark={dark} handleDark={() => setDark(!dark)} />
      </header>

      <main className="px-6 py-8">
        <ExpenseFilter isDark={dark} />
        <ExpenseList isDark={dark} />
      </main>
    </div>
  );
}

export default App;
