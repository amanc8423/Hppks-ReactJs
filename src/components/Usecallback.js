import React, { useCallback, useState } from 'react'
import Use1 from './Use1'

const Usecallback = () => {

    const[add,setAdd]=useState(0)
   // const Learning = ()=>{console.log("learn")}
   const Learning =  useCallback( ()=>{console.log("learn")},[])
  
    return (
    <div> 
      <div>{add}</div>
      <button onClick={()=>{setAdd(add+1)}}>+</button>
<Use1 learning={Learning} /> 
{/* if learning function eas not above then memo would work fine but now it will re-render and we have to use useCallabck  */}
    </div>
  )
}

export default Usecallback


/*
`useMemo` and `useCallback` are both hooks in React that can be used to optimize the performance of functional components by memoizing values and functions, respectively.

The main difference between the two hooks is that `useMemo` is used to memoize a value, while `useCallback` is used to memoize a function.

Here's a more detailed breakdown of the differences:

- `useMemo` is used to memoize a value that is computationally expensive to calculate and doesn't change often. It takes a function as its first argument and an array of dependencies as its second argument. The function is called only when any of the dependencies change, and the result of the function is cached until the dependencies change again.

- `useCallback` is used to memoize a function that is expensive to create and doesn't change often. It takes a function as its first argument and an array of dependencies as its second argument. The memoized function is returned, and it will only be re-created when any of the dependencies change.

While both hooks are used for optimization, it's important to use them appropriately. If a value is being passed down as a prop to a child component and doesn't change often, `useMemo` can be used to memoize the value. If a function is being passed down as a prop to a child component and doesn't change often, `useCallback` can be used to memoize the function.

It's worth noting that overusing these hooks can actually hurt performance, as they add extra overhead. So it's important to only use them when necessary, and to use them judiciously.

*/