import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ expenses }) {
  const itemList = expenses.map((item) => <ExpenseItem key={item.id} date={item.date} amount={item.amount} title={item.title} />);

  if (expenses.length === 0) return <h2 className="expenses-list__fallback"> No Expenses found for this year </h2>;
  return <ul className="expenses-list ">{itemList}</ul>;
}

export default ExpensesList;
