//Task 9
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
//import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    //Card
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;

//task8
// import React, { useState } from "react";

// import ExpenseDate from "./ExpenseDate";
// //import Card from "../UI/Card";
// import "./ExpenseItem.css";

// const ExpenseItem = (props) => {
//   // function clickHandler() {}
//   const [title, setTitle] = useState(props.title);
//   console.log("ExpenseItem evaluated by React");

//   const clickHandler = () => {
//     setTitle("Updated!");
//     console.log(title);
//   };

//   return (
//     <div className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>Change Title</button>
//     </div>
//   );
// };

// export default ExpenseItem;

// import "./ExpenseItem.css";
// import Card from "../UI/Card";

// import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "./ExpenseDetails";
// import { useState } from "react";

// function ExpenseItem(props) {
//   const clickHandler = (e) => {
//     console.log("clicked!!!!!!!!!!!!");

//     let item = e.target.parentElement;
//     item.remove();
//     item.remove();
//   };
//   const [title, setTitle] = useState(props.item.title);
//   const [amount, setAmount] = useState(props.amount);

//   const editButton = (e) => {
//     setTitle("Updated!");
//     console.log(title);
//     setAmount("100$");
//     //console.log(amount);
//   };

//   return (
//     <Card className="expense-item">
//       <div className="expense-item">
//         <ExpenseDate date={props.item.date} />
//         <ExpenseDetails
//           // id={props.item.id}
//           // title={props.item.title}
//           // amount={props.item.amount}
//           //  location={props.location}
//           id={props.item.id}
//           title={title} // Use the updated title state
//           amount={amount} // Use the updated amount state
//         ></ExpenseDetails>
//         <button onClick={clickHandler}>Delete Expense</button>
//         <button onClick={editButton}> Edit Expense</button>
//       </div>
//     </Card>
//   );
// }
// export default ExpenseItem;
