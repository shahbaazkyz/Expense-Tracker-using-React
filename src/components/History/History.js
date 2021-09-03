import HistoryItem from "./HistoryItem";

function History(prop) {
  const {historyData , deleteTransaction} = prop ;
  return (
    <>
      <h3>History</h3>
      <HistoryItem historyData={historyData} deleteTransaction={deleteTransaction}/>
    </>
  );
}

export default History;
