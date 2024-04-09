import React from 'react'

const State = () => {
    let k = 10;
    const p = ()=>{
        k = 20;
        console.log(k);
    }

  return (
    <div>

      <div>value of k is {k}</div>
      <button onClick={p}>CLICK</button>
    </div>
  )
}

export default State
//  we cant change state of varibale like that in react
// becuase when we click it will rerender component and the refernce of variable will again get set and fucntion will be declare
// i thought this above way but it seems wrong

// onclick doenst rerender page at all k is local variable and it does not get managed by react's state management system so k=20 will not trigger a re-render
// though console will output 20 but k inside div will not update so state management is different in reactjs