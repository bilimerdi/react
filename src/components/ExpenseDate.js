import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-Us", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense__month">{month}</div>
      <div className="expense__year">{year}</div>
      <div className="expense__date">{day}</div>
    </div>
  );
}

export default ExpenseDate;
