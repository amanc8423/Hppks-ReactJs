import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const[add,setAdd]=useState(0);
    const[minus,setMinus]=useState(50);

//   const mult=()=>{
//     console.log("hi")
//     return add*10
//   }

    const mult1=useMemo(
        function mult(){
          console.log("hi")
          return add*10
        },[add])

// now mult will only run when add will update
    return (
    <div>
       {/* {mult()} <br /> */}

       {mult1} <br />

<div >{add}</div>
<button onClick={()=>setAdd(add+1)} >+</button>
     
<div>{minus}</div>
<button onClick={()=>setMinus(minus-1)}>-</button>

    </div>
  )
}

export default Usememo

// it uses memoization
