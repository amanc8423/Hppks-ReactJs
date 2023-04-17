import React, { createContext, useState } from 'react'
import U1 from './U1';

const U = createContext();

export const Contextapi = () => {
    const[data,setData]=useState("aman");
  return (
    <div>
   
   <U.Provider value={data}> 

   <U1/>
   
         </U.Provider> 
      


    </div>
  )
}

export default Contextapi
export{U}
// createcontext-provider-consumer
// this is context api // we will nedd nested consumer function


