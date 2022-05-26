import React from "react";
import ReactDOM from "react-dom";

const fName = "Mahesh";
const lName = "Patro";
const num = 98;
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}</p>
    <p>Copyright {year}</p>
    <p>Copyright {currentDate.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);