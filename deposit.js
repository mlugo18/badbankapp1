function Deposit(){
  const ctx = React.useContext(UserContext);
  const [deposit, setDeposit] = React.useState('');
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
      setDeposit('');
      return setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(input);
  }

  function handleSubmit (event) {
    let newTotal = totalState + deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    setShow(false);
    ctx.setTotalBalance(newTotal);
    event.preventDefault();
  }

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      body={show ? (  
              <>
              <div>{balance}</div>
              <br/>
              <input type="input" className="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={handleChange} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleSubmit} disabled={!validTransaction}>Submit</button>
              {error && <p style={{ color: 'white' }}>{error}</p>}
              </>
            ):(
              <>
              <h5>Successfully deposited!</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another deposit</button>
              </>
            )}
   />
  )
}