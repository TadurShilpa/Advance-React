import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expense found</p>;
  if (filteredExpenses.length === 1) {
    expensesContent = <p>Only Single Expense here.Please add more...</p>;
  } else if (filteredExpenses.length > 1) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </div>
  );
};

export default Expenses;

// import React from "react";
// import ExpenseItem from "./ExpenseItem";
// // import Card from "../UI/Card";
// import "./Expense.css";

// const Expenses = (props) => {
//   return (
//     // <div className="expenses">
//     //   <ExpenseItem
//     //   title={props.items[0].title}
//     //   amount={props.items[0].amount}
//     //   date={props.items[0].date}
//     //   //LocationOfExpenditure={props.items[0].locationOfExpenditure}
//     // />
//     // <ExpenseItem
//     //   title={props.items[1].title}
//     //   amount={props.items[1].amount}
//     //   date={props.items[1].date}
//     //   //LocationOfExpenditure={props.items[1].locationOfExpenditure}
//     // />
//     // <ExpenseItem
//     //   title={props.items[2].title}
//     //   amount={props.items[2].amount}
//     //   date={props.items[2].date}
//     //   //LocationOfExpenditure={props.items[2].locationOfExpenditure}
//     // />
//     // <ExpenseItem
//     //   title={props.items[3].title}
//     //   amount={props.items[3].amount}
//     //   date={props.items[3].date}
//     //   //LocationOfExpenditure={props.items[3].locationOfExpenditure}
//     // />
//     <div className="expenses">
//       {props.items.map((expense) => (
//         <ExpenseItem
//           key={expense.id}
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//         />
//       ))}
//     </div>
//   );
// };

// export default Expenses;
