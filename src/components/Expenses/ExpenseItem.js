import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let currencyValue = "$";
  if (
    props.currency === "$" ||
    props.currency === "£" ||
    props.currency === "₹"
  ) {
    currencyValue = props.currency;
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          {currencyValue} {props.amount}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
