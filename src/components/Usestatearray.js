import React, { useState } from 'react'

const Usestatearray = () => {
     const[text,setText]= useState("")
     const [a,sa]=useState(["aman"]);
    // const array = a;
const handleonClick = (e)=>{
sa([...a,text])
setText("")
}

    return ( 
   <>

<input type="text" value={text} 
onChange={(e)=>setText(e.target.value)} />

<button onClick={handleonClick}>Add Data</button>

{a.map((el,i)=>
<div key={i}> {el} </div>
)}

    </>
  )
}

export default Usestatearray
