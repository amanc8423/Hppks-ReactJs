import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Routerhome = () => {

    const navigate = useNavigate();
    const id = 5;
    const name  = "ajay";

const gotopage=()=>{
navigate(`/about/${name}`)
// navigate("/contact",{state:{id:id}})
}
//  const {param} = useParams();
  return (
    <div>

{/* <Link to="/about">about</Link> 
 with help of link it make about clickable and we can navigate page without changing address manually on url */}


 {/* another way to route is usenavigaet hook */}

 <button onClick={gotopage}>About</button>
 <button onClick={gotopage}>contact</button>

    </div>
  )
}

export default Routerhome


// useParams() hook