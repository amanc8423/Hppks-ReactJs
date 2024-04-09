import React, { useEffect, useRef, useState } from 'react'

function Useref() {
    const[s,sd]=useState("")
    const ref = useRef(0);
    const ref1=useRef(); // directly access dom
    const ref2=useRef();
    useEffect(()=>{
        ref.current=ref.current+1; // it will not re-render component
        console.log("ref is ",ref);
    ref2.current.value = ref1.current.value;
    ref2.current.style.backgroundColor="black";
    ref2.current.style.color="white";
    })


  return (
    <div>
      input text <input ref={ref1} type="text" onChange={(e)=>{sd(e.target.value)}} value={s} />

<div>render time is : {ref.current}</div>

input text 2 <input ref={ref2} type="text"  value={s} />

    </div>
  )
}

export default Useref


// useref used to manipulate dom
// see w3schools
/*
The useRef Hook allows you to persist(prserve) values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.
*/