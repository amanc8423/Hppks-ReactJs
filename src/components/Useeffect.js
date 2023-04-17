import React, { useEffect, useState } from 'react'

const Useeffect = () => {
const[c,d]=useState(0);
const p = ()=> { d(c+1)};

const[c1,d1]=useState(0);
const p1 = ()=> { d1(c1+1)}

useEffect(()=>{
    document.title = c;
    console.log("hi"); // even if i click c1 this will run it run on every render
let d1=document.getElementById("h");
d1.innerHTML = `c is ${c} .  c1 is ${c1}`;

  })

// we can add dependency to control useEffect like [],[props,state]
  // go for w3schools

return (
    <div>

<div>{c}cc</div>
<div>{c1}c1</div>
<div id="h"></div>

      <button onClick={p}>+c</button>
      <button onClick={p1}>+c1</button>
    </div>
  )
}

export default Useeffect

/*https://felixgerschau.com/react-rerender-components/#:~:text=In%20function%20components%2C%20the%20execution,t%20even%20receive%20any%20props.*/