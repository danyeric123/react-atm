import React, { useState } from 'react';

export default function Account({name}) {
  const [balance, setBalance] = useState(0)
  let input
  const deposit = ()=>{
    if(!isNaN(input.current.value)){
      setBalance(balance+Number(input.current.value))
    }
  }

  const withdraw = ()=>{
    if(!isNaN(input.current.value)){
      setBalance(balance-Number(input.current.value))
    }
  }
  return (
    <div className="account">
        <h2>{name}</h2>
        <div className={balance===0?"zero":"balance"}>${balance}</div>
        <input type="text" ref={input=React.createRef()} placeholder="enter an amount" />
        <input type="button" onClick={deposit} value="Deposit" />
        <input type="button" onClick={withdraw} value="Withdraw" />
    </div>
  )
}
