import React from 'react'

const Listrender = () => {

    const ipl = ["csk","mi","rcb"]
// const result = ipl.map((e)=> <h1>{e}</h1> )

  return (
    <>
      
<div>
    {ipl.map((e,i)=>(
        <li >{e}</li>
    )) }
</div>


{/* <div>{result}</div> */}

    </>
  )
}

export default Listrender


// react is based on virtual dom