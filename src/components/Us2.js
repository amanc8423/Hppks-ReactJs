import React, { useContext } from 'react'
import{data,data1} from './Usecontext'

const Us2 = () => {
    const name = useContext(data);
    const lname = useContext(data1);
  return (
    <div>
      
<div>My name is {name} {lname}</div>

    </div>
  )
}

export default Us2
