// if we want to sned data form child to parent it is Lifting state up

import React, { useState } from 'react'

const Liftingstateup = (props) => {
    const[name,setName]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.getData(name)
    }
  return (
    <div>
      

<form action="" onSubmit={handleSubmit}>

    <input type="text" value ={name} 
    onChange={(e)=>{setName(e.target.value)}} />
    <button type='submit'>submit</button>
</form>

    </div>
  )
}

export default Liftingstateup
