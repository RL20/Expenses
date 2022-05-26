import ExpenseItem from "./components/ExpenseItem";
function App() {
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
  return (
    <div>
      <h2>Harel</h2>
      <ExpenseItem date={expenses[0].date} amount={expenses[0].amount} title={expenses[0].title} />
      <ExpenseItem date={expenses[1].date} amount={expenses[1].amount} title={expenses[1].title} />
      <ExpenseItem date={expenses[2].date} amount={expenses[2].amount} title={expenses[2].title} />
      <ExpenseItem date={expenses[3].date} amount={expenses[3].amount} title={expenses[3].title} />
    </div>
  );
}

export default App;
