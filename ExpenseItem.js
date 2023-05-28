import "./ExpenseItem.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import { useState } from "react";

function ExpenseItem(props) {
  const clickHandler = (e) => {
    console.log("clicked!!!!!!!!!!!!");

    let item = e.target.parentElement;
    item.remove();
    item.remove();
  };
  const [title, setTitle] = useState(props.item.title);
  const [amount, setAmount] = useState(props.amount);

  const editButton = (e) => {
    setTitle("Updated!");
    console.log(title);
    setAmount("100$");
    console.log(amount);
  };

  return (
    <Card className="expense-item">
      <div className="expense-item">
        <ExpenseDate date={props.item.date} />
        <ExpenseDetails
          id={props.item.id}
          title={title}
          amount={amount}
        ></ExpenseDetails>
        <button onClick={clickHandler}>Delete Expense</button>
        <button onClick={editButton}> Edit Expense</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
