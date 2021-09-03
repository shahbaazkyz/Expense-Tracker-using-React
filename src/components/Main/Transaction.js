import { useState } from "react";

function Transaction(prop) {
  const {addTransaction} = prop ;
  const [textVal , setTextVal] =  useState("")
  const [amountVal , setamountVal] =  useState(null)

  function sent(e){
    addTransaction(textVal,amountVal)
    e.preventDefault();
    setTextVal("")
    setamountVal("")
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." value={textVal} onChange={(e)=>setTextVal(e.target.value)}/>
        </div>
        <div class="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." value={amountVal} onChange={(e)=>setamountVal(e.target.value)}/>
        </div>
        <button class="btn" onClick ={sent}>Add transaction</button>
      </form>
    </>
  );
}

export default Transaction;
