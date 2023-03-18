import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 294.37,
      date: new Date(23, 3, 23),
    },
    { id: 2, title: "New TV", amount: 100.37, date: new Date(23, 4, 23) },
    { id: 3, title: "Toilet Paper", amount: 94.37, date: new Date(23, 3, 23) },
    { id: 4, title: "New Phone", amount: 394.37, date: new Date(23, 3, 23) },
    { id: 5, title: "New Car", amount: 195.37, date: new Date(23, 3, 23) },
  ];

  return (
    <div>
      <h1>My Todosss</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
