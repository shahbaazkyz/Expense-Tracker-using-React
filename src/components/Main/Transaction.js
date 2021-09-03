import { useState } from "react";

function Transaction(prop) {
  const {addTransaction} = prop ;
  const [textVal , setTextVal] =  useState("")
  const [amountVal , setamountVal] =  useState("")

  function sent(e) {
    
    e.preventDefault();
    if (textVal.trim() === "") {
      alert("You must write and add amount!");
      console.log("empty");
    } else if (amountVal === 0) {
      alert("Enter amount");
    }
    else {
      addTransaction(textVal, amountVal)
      setTextVal("")
      setamountVal("")
    }
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label>Text</label>
          <input type="text" id="text" placeholder="Enter text..." value={textVal} onChange={(e)=>setTextVal(e.target.value)}/>
        </div>
        <div className="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." value={amountVal} onChange={(e)=>setamountVal(e.target.value)}/>
        </div>
        <button className="btn" onClick ={sent}>Add transaction</button>
      </form>
    </>
  );
}

export default Transaction;
