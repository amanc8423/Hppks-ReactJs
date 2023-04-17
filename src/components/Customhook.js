import React, { useState } from 'react'
import useCounter from './useCounter'

const Customhook = () => {
    // const[count,setCount]=useState(0);

    // const i=()=>{setCount(count+1)}
    
    // const d=()=>{setCount(count-1)}

    const[count,i,d]=useCounter()

  return (
    <div>
      
      <div>{count}</div>
      <button onClick={i}>+</button>
      <button onClick={d}>-</button>


    </div>
  )
}

export default Customhook
