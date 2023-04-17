import React, { useContext } from 'react'
import {U} from './Contextapi'

const U4 = () => {
    // const d = useContext(U);
    // console.log(d);
  return (
    <div>
    {/* consumer can have only function inside it */}
    <U.Consumer> 
    {
        (data)=>{
            return(
                <div>My name is {data}</div>
            )
        }
    }
     </U.Consumer>
     
    </div>
  )
}

export default U4
