import React, { useState } from 'react'

const useCounter = () => {
    const[count,setCount]=useState(0);
    const i = ()=>{
setCount(count+1)
    }

    const d = ()=>{
        setCount(count-1)
            }

  return [count,i,d]
  
}

export default useCounter
