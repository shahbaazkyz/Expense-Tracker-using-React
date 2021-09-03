function HistoryItem(prop) {
  const {historyData , deleteTransaction} = prop ;
  return (
    <ul id="list" className="list">
      {
        historyData.map((value , index) => {
          return(
        
            <li className= { +(value.amount) > 0 ? "plus" : "minus" } key={index}>
              {value.title}
              <span><b>Rs:</b> {value.amount}</span>
              <button className="delete-btn" onClick={(e) => { e.stopPropagation(); deleteTransaction(index)}}>x</button>
              </li>
        
          )
        }
        )
      }
     
    </ul>
  );
}

export default HistoryItem;
