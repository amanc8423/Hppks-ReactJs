import axios from 'axios';
import React, { useState } from 'react'

const Axiospost = () => {

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

    
  return (
    <div>
      first name: <input type="text" name="fname" value={id.fname}
        onChange={handledata}
      /> <br />
      last name: <input type="text" name="lname" value={id.lname}
        onChange={handledata}  
      /> <br />

<button onClick={handlesubmit} >submit</button>

    </div>
  )
}

export default Axiospost


/*
In the given code, the button and input elements are not wrapped with a form tag. However, the onClick event on the button element is still able to access the values of the input elements because they are controlled components. This means that the value of each input element is being controlled by the useState hook on the component level.

When handledata function is called on the onChange event of an input element, it updates the state id with the new value of the input. Therefore, when the handleSubmit function is called on the onClick event of the button element, it is able to access the value of each input element from the id state.

In other words, since the value of the input elements is being managed by state, the handleSubmit function has access to their values regardless of whether they are inside a form element or not.

*/
