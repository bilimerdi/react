import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.37, date: new Date(23, 3, 23) },
    { title: "New TV", amount: 100.37, date: new Date(23, 4, 23) },
    { title: "Toilet Paper", amount: 94.37, date: new Date(23, 3, 23) },
    { title: "New Phone", amount: 394.37, date: new Date(23, 3, 23) },
  ];
  return (
    <div>
      <h1>My Todosss</h1>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
