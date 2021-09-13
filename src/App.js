import "./App.css";
import Header from "./components/Header/Header";
import Balance from "./components/Main/Balance";
import Income from "./components/Main/IncomeExpense";
import Transaction from "./components/Main/Transaction";
import History from "./components/History/History";
import Footer from "./components/footer/footer"
import { useEffect, useState } from "react";

const App = () => {

  const history = [
   
  ]

  const [historyData , sethistoryData] = useState(history) ;
  const [income , setIncome] = useState("") ;
  const [expense , setExpense] = useState("") ;
  const [balance , setBalance] = useState("") ;


  const addTransaction=(transaction , amount)=>{
  
      const myTransaction =  [ ...historyData ,{title : transaction.toUpperCase() , amount : +amount}] 
      sethistoryData(myTransaction)
      console.log(historyData)
    
  }

  const deleteTransaction =(index) => {
    const remove = historyData.filter((val,idx) => {
      return idx !== index ;
    })
    sethistoryData(remove) ;
  }

  useEffect(() => {
    const prevHistory = JSON.parse(localStorage.getItem("lists"));
    if (prevHistory) {
      sethistoryData(prevHistory)
    }
  }, [])

  useEffect(() => {
  localStorage.setItem("lists" , JSON.stringify(historyData))
  }, [historyData])
 
  return (
    <> 
      <Header />
      <div className="container">
        <Balance balance={balance} setBalance={setBalance} historyData ={historyData}/>
        <Income plus={income} minus={expense} setIncome={setIncome} setExpense={setExpense} historyData ={historyData}/>
        <History historyData ={historyData} deleteTransaction={deleteTransaction}/>
        <Transaction addTransaction ={addTransaction}/>
        <Footer />
      </div>
    </>
  );
};

export default App;
