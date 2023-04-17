import React, { createContext } from 'react'
import Us1 from './Us1'

const data = createContext();
const data1 = createContext();

const Usecontext = () => {
    const name = "aman"
    const lname = "ajay"
  return (
    <div>
    <data.Provider value={name}> 
    
    <data1.Provider value={lname}> 
    
    <Us1/>

     </data1.Provider>
    
     </data.Provider>
      
    </div>
  )
}

export default Usecontext
export{data,data1}

////useContext hook
//createcontext-provider-usecontext