import React, { useCallback, useState } from 'react'
import Use1 from './Use1'

const Usecallback = () => {

    const[add,setAdd]=useState(0)
   // const Learning = ()=>{console.log("learn")}
   const Learning =  useCallback( ()=>{console.log("learn")},[])
  
    return (
    <div> 
      <div>{add}</div>
      <button onClick={()=>{setAdd(add+1)}}>+</button>
<Use1 learning={Learning} /> 
{/* if learning function eas not above then memo would work fine but now it will re-render and we have to use useCallabck  */}
    </div>
  )
}

export default Usecallback
