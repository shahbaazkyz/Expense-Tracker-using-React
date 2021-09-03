function HistoryItem(prop) {
  const {historyData , deleteTransaction} = prop ;
  return (
    <ul id="list" className="list">
      {
        historyData.map((value , index) => {
          return(
        
            <li className= { +(value.amount) > 0 ? "plus" : "minus" }>
              {value.title}
              <span><b>Rs:</b> {value.amount}</span>
              <button class="delete-btn" onClick={(e) => { e.stopPropagation(); deleteTransaction(index)}}>x</button>
              </li>
        
          )
        }
        )
      }
      {/* <li className="minus">
        Rent <span>-$300</span>
        <button class="delete-btn">x</button>
      </li> */}
    </ul>
  );
}

export default HistoryItem;
