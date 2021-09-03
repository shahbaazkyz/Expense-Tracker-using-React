function income(prop) {
  const {plus , minus , historyData , setIncome , setExpense}  = prop ;

  const plusAmount = () => {
    const amounts = historyData.map(transaction => transaction.amount);
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  setIncome(income)
  }
  plusAmount();

  const minusAmount =() => {
    const amounts = historyData.map(transaction => transaction.amount);
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);

    setExpense(expense)
  }
  minusAmount();

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            Rs {plus}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            Rs {minus}
          </p>
        </div>
      </div>
    </>
  );
}

export default income;
