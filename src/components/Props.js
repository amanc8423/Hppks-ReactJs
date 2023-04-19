import React from 'react'

const Props = (props) => {
    debugger;
    console.log(props)
    // props.name = "abc"; // will give error bec props are read only cant be changed again
  return (
    <>
      
<div>my name is {props.name}</div>

    </>
  )
}

export default Props
