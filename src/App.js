import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const dummyExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 34.9,
      date: new Date(2022, 5, 26),
    },
    { id: "e2", title: "New TV", amount: 1799.49, date: new Date(2020, 5, 25) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 2530.67,
      date: new Date(2019, 5, 24),
    },
    {
      id: "e4",
      title: "New Desk ",
      amount: 450,
      date: new Date(2022, 5, 23),
    },
  ];
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
