function Spa() {
  const [totalBalance, setTotalBalance] = React.useState(0);
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users: [{name:"me",email:"me@gmail.com",password:"secret",balance:0}], totalBalance, setTotalBalance}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
