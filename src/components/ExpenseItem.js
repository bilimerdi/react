import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card";
import React, { useState } from "react";

function ExpenseItem({ title, date, amount }) {
  const [newTitle, setNewTitle] = useState(title);
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setNewTitle("Updated");
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={increment}>+</button>
        {count}
        <button onClick={decrement}>-</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
