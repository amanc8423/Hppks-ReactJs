import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Routerhome = () => {

    const navigate = useNavigate();
    const id = 5;

const gotopage=()=>{
navigate("/about")
navigate("/contact",{state:{id:id}})
}
 
  return (
    <div>
      home
{/* <Link to="/about">about</Link> 
 with help of link it make about clickable and we can navigate page without changing address manually on url */}


 {/* another way to route is usenavigaet hook */}

 <button onClick={gotopage}>About</button>
 <button onClick={gotopage}>contact</button>

    </div>
  )
}

export default Routerhome
