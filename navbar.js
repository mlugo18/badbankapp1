function NavBar(){
  $(function () {
    $('[data-toggle="popover"]').popover();
  });

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light mynav">
      <a className="navbar-brand" href="#">Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" data-toggle="popover" data-placement="bottom" title="Click to create a new account to get started.">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-toggle="popover" data-placement="bottom" title="Click to create a new deposit transaction to add to your bank balance.">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-toggle="popover" data-placement="bottom" title="Click to create a new withdrawal transaction.">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-toggle="popover" data-placement="bottom" title="Click to view all created customer records.">All Data</a>
          </li>         
        </ul>
      </div>
    </nav>
    </>
  )
}