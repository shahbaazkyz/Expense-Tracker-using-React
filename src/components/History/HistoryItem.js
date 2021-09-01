function HistoryItem(prop) {
  const {historyData} = prop ;
  return (
    <ul id="list" className="list">
      {
        historyData.map((value , index) => {
          return(
        
            <li className="minus">
              {value.title}
              <span>{value.amount}</span>
              <button class="delete-btn">x</button>
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
