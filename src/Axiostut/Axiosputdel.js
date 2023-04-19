import axios from 'axios';
import React, { useState } from 'react'

const Axiosputdel = () => {

    const data={fname:"",lname:""};
    const[id,sid]= useState(data);

    const handledata=(e)=>{
        sid({...id,[e.target.name]:[e.target.value]})
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",id)
        .then((res)=>{
            console.log(res);
        })
    }

    const handleupdate=(e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",id)
        .then((res)=>{
            console.log(res);
        })
    }

    const handledel=(e)=>{
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((res)=>{
            console.log(res);
        })
    }


    
  return (
    <div>
      first name: <input type="text" name="fname" value={id.fname}
        onChange={handledata}
      /> <br />
      last name: <input type="text" name="lname" value={id.lname}
        onChange={handledata}  
      /> <br />

<button onClick={handlesubmit} >submit</button>

<button onClick={handleupdate} >update</button>

<button onClick={handledel} >delete</button>
    
    
    </div>
  ) 
}

export default Axiosputdel


