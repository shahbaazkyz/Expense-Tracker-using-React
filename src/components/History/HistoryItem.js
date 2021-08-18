function HistoryItem() {
  return (
    <ul id="list" className="list">
      <li className="minus">
        Cash <span>-$400</span>
        <button class="delete-btn">x</button>
      </li>
      <li className="minus">
        Rent <span>-$300</span>
        <button class="delete-btn">x</button>
      </li>
    </ul>
  );
}

export default HistoryItem;
