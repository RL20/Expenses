import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  //pass function to child so the chile will return the value back to parent
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseDateHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
