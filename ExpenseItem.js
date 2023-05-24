import "./ExpenseItem.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
  const clickHandler = (e) => {
    console.log("clicked!!!!!!!!!!!!");
    // const expenseItem = document.getElementById(`expense-${props.item.id}`);
    // expenseItem.remove();
    let item = e.target.parentElement;
    item.remove();
  };
  return (
    <Card className="expense-item">
      <div className="expense-item">
        <ExpenseDate date={props.item.date} />
        <ExpenseDetails
          title={props.item.title}
          amount={props.item.amount}
          location={props.item.locationOfExpenditure}
        ></ExpenseDetails>
        <button onClick={clickHandler}>Delete Expense</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
