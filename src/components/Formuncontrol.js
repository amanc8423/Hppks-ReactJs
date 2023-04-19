import React from 'react'
import { useRef } from 'react'

const Formuncontrol = () => {
    const ref = useRef();

    const handleSubmit=(e)=>{
e.preventDefault();
console.log(ref.current.value);
// const d = document.getElementById("d");
// d.innerhtml=d.innerhtml + ref.current.value // not work bec of state
    }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <input type="text" ref={ref} />
      <button type='submit'>button</button>

      </form>
      <div id="d">hello this is </div>

    </div>
  )
}

export default Formuncontrol
