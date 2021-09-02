import "./App.css";
import Header from "./components/Header/Header";
import Balance from "./components/Main/Balance";
import Income from "./components/Main/IncomeExpense";
import Transaction from "./components/Main/Transaction";
import History from "./components/History/History";
import { useState } from "react";

const App = () => {

  const history = [
    {
      title:"rent",
      amount:"2000",
    },
    {
      title:"cash",
      amount:"2000",
    }
  ]

  const [historyData , sethistoryData] = useState(history) ;

  
  return (
    <>
      <Header />
      <div class="container">
        <Balance />
        <Income />
        <History historyData ={historyData} />
        <Transaction />
      </div>
    </>
  );
};

export default App;
