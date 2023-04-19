import React, { useState } from 'react'

const Usestateobject = () => {

   const[value,setValue]= useState({fn:" ",ln:"ajay"})
  
   const handleonClick=()=>{

setValue({...value,fn:"aman",ln:""})
   }
  
   return (
   <>
      <div>my name is {value.fn} {value.ln}</div>
<button onClick={handleonClick}>button</button>
    </>
  )
}

export default Usestateobject
