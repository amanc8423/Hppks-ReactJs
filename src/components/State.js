import React from 'react'

const State = () => {
    let k = 10;
    const p = ()=>{
        k = 20;
    }

  return (
    <div>

      <div>value of k is {k}</div>
      <button onClick={p}>CLICK</button>
    </div>
  )
}

export default State
//  we cant change state of varibale like that in react