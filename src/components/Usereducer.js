import React, { useReducer } from 'react'

const initialState = 10;
const reducer =(currstate,action) =>{
    if(action.type==="inc"){return(currstate+1); }
  }

function Usereducer() {
  
    const[state,dispatch]=useReducer(reducer,initialState);

  
    return (
    
    <div>
      <div>count is {state}</div>
<button onClick={()=>{dispatch({type:"inc"})}}>+</button>

    </div>
  )
}

export default Usereducer
