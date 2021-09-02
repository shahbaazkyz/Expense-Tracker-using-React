import HistoryItem from "./HistoryItem";

function History(prop) {
  const {historyData} = prop ;
  return (
    <>
      <h3>History</h3>
      <HistoryItem historyData={historyData}/>
    </>
  );
}

export default History;
