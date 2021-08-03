import React, { Component } from 'react';


class Account extends Component {
  constructor(){
    super()
    this.state = {
      amount: 0,
      balance: 0,
      input:0
    }
  }

  deposit = ()=>{
    if(!isNaN(this.state.input)){
      this.setState({
        balance: this.state.amount+this.state.balance
      })
    }
  }

  withdraw = ()=>{
    if(!isNaN(this.state.input)){
      this.setState({
        balance: this.state.balance-this.state.amount
      })
    }
  }

  handleChange = (e)=>{
    if(!isNaN(e.target.value)){
      this.setState({
        amount: parseInt(e.target.value)
      })
    }
  }
  
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={this.state.balance===0?"zero":"balance"}>${this.state.balance}</div>
        <input type="text" onChange={this.handleChange} placeholder="enter an amount" />
        <input type="button" onClick={this.deposit} value="Deposit" />
        <input type="button" onClick={this.withdraw} value="Withdraw" />
      </div>
    )
  }
}

export default Account;
