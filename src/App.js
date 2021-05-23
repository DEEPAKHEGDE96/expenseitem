import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "goods",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e2",
      title: "new tv",
      amount: 98.12,
      date: new Date(2021, 2, 8),
    },
    {
      id: "e3",
      title: "air cooler",
      amount: 99.12,
      date: new Date(2021, 4, 10),
    },
    {
      id: "e4",
      title: "home teatre",
      amount: 95.12,
      date: new Date(2021, 7, 7),
    },
  ];

  return (
    <div>
      <h2>lets get started</h2>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
