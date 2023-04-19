import React from 'react'

const Listkey = () => {
    const ipl = ["csk","mi","rcb"]
    
      return (
        <>
          
    <div>
        {ipl.map((e,i)=>(
            <li key={i}>{e} index is {i}</li>
        )) }
    </div>
    
    </>
  )
}

export default Listkey
// https://www.youtube.com/watch?v=bgmiKEPx2pY&list=PLp18NAIKHWnvpLpioGs6ZAiMlpfx49KOz&index=20

// key helps to stop re-render