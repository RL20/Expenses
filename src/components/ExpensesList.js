import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 34.9,
      date: new Date(2022, 5, 26),
    },
    { id: "e2", title: "New TV", amount: 1799.49, date: new Date(2022, 5, 25) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 2530.67,
      date: new Date(2022, 5, 24),
    },
    {
      id: "e4",
      title: "New Desk ",
      amount: 450,
      date: new Date(2022, 5, 23),
    },
  ];
  const itemList = expenses.map((item) => <ExpenseItem key={item.id} date={item.date} amount={item.amount} title={item.title} />);
  return <div className="expenses">{itemList}</div>;
}

export default ExpensesList;
