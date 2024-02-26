function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [withdrawal, setWithdrawal] = React.useState('');
  const [totalState, setTotalState] = React.useState(ctx.totalBalance);
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [show, setShow] = React.useState(true);
  const [error, setError] = React.useState('');

  let balance = `Balance $ ${totalState} `;

  function handleChange (event) {
    console.log(Number(event.target.value));
    const input = Number(event.target.value);
    if (isNaN(input) || input <= 0) {
      setError('Error: No text or negatives.');
      setTimeout(() => setError(''),3000);
      return setValidTransaction(false);
    } else if (input > totalState){
	    setError('Error: Overdraft. The amount of $' + input + ' is over the current $' +totalState +' balance.');
      setTimeout(() => setError(''),4000);
      setWithdrawal('');
      return setValidTransaction(false);
	} else {
      setValidTransaction(true);
    }
    setWithdrawal(input);
  }

  function handleSubmit (event) {
    let newTotal = totalState - withdrawal;
    setTotalState(newTotal);
    setValidTransaction(false);
    setShow(false);
    ctx.setTotalBalance(newTotal);
    event.preventDefault();
  }

  function clearForm(){
    setWithdrawal('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      body={show ? (  
              <>
              <div>{balance}</div>
              <br/>
              <input type="input" className="form-control" id="deposit" placeholder="Enter amount" value={withdrawal} onChange={handleChange} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleSubmit} disabled={!validTransaction}>Submit</button>
              {error && <p style={{ color: 'white' }}>{error}</p>}
              </>
            ):(
              <>
              <h5>Successfully withdrawn!</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Process another withdrawal</button>
              </>
            )}
   />
  )
}
