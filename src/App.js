import "./App.css";
import Header from "./components/Header/Header";
import Balance from "./components/Main/Balance";
import Income from "./components/Main/IncomeExpense";
import Transaction from "./components/Main/Transaction";
import History from "./components/History/History";

const App = () => {
  return (
    <>
      <Header />
      <div class="container">
        <Balance />
        <Income />
        <History />
        <Transaction />
      </div>
    </>
  );
};

export default App;
