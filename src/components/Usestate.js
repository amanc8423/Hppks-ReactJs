import React, { useState } from 'react'

const Usestate = () => {

    const[data,setData]=useState({
        username:" ",
        useremail:" "
    });

    const c = (e)=>{
let name =e.target.name;
let value= e.target.value;
setData((args)=>{return{...args,[name]:value}}) 
    }
    const sub = (e)=>{
        e.preventDefault();
        let d =document.getElementById("final");
        d.innerHTML = `Username is ${data.username} and Useremail is ${data.useremail}`
    }

  return (
    <>
      
<form action="#" onSubmit={sub}>
<fieldset>
    <legend>Form</legend>

<label htmlFor="name">Name: </label>
<input type="text" id="name" name="username" value={data.username} onChange={c}/> <br />
<label htmlFor="email">Email: </label>
<input type="email" id="email" name="useremail" value={data.useremail} onChange={c}/> <br />
<input type="submit" value="Submit" />
</fieldset>
</form>

<div id="final"></div>


    </>
  )
}

export default Usestate
