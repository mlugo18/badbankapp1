function AllData(){
  const ctx = React.useContext(UserContext);
  
  const renderCard = (user, index) => {
  return (
    <Card key={index}
      bgcolor="primary"
      body={(
              <>
              <div className="card-header">{`Record # ${index + 1}`}</div>
              <div className="card-body">{`Name: ${user.name}`}</div>
              <div className="card-body">{`Email: ${user.email}`}</div>
              <div className="card-body">{`Password: ${user.password}`}</div>
              <div className="card-body">{`Balance: $ ${user.balance}`}</div>
              </>
            )}
      />
    )
  }

  return (
    <div className="container">
      <h2>User Records</h2>
      <div className="grid">
      {ctx.users.map((user, index) => renderCard(user, index))}
      </div>
    </div>
  )
}