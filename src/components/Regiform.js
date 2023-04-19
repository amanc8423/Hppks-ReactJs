import React, { useEffect, useState } from 'react'

const Regiform = () => {
    const[data,setData]=useState({
        name:"",eml:"",pswd:""
    });

    const[flag,setFlag]=useState(false);
debugger;
    useEffect(()=>{
alert("REGISTERED!!!")
    },[flag])

const handleChange=(e)=>{
setData({...data,[e.target.name]:e.target.value});
}

const handleSubmit= (e)=>{
e.preventDefault();
if(!data.name ||!data.eml || !data.pswd){
    alert("plz fill al forms");
}
else{setFlag(true);}
}



  return (

    <>

    <pre>{flag?"you have registered successfully":""}  </pre>
      
      <form action="" onSubmit={handleSubmit}>

Name: <input type="text"  name="name" value={data.name} onChange={handleChange} /> <br />
Email: <input type="email" name="eml"  value={data.eml} onChange={handleChange}  /> <br />
Password: <input type="password"  name="pswd"  value={data.pswd} onChange={handleChange}  /> <br />

<button type='submit'>SUBMIT</button>

      </form>
    </>
  )
}

export default Regiform
