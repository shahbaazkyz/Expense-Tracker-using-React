function Balance(prop) {
  const {balance , setBalance , historyData} = prop ;

  const result = () => {
    const amounts = historyData.map(transaction => transaction.amount);
    const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    setBalance(balance)
  }
  result();
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance"><b>Rs: </b>{balance}</h1>
    </>
  );
}

export default Balance;
