import React, { useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  // const [newExpense, setNewExpense] = useState("");
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesList />
    </div>
  );
}

export default App;
