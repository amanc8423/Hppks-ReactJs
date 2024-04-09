import React from 'react'

const Fetchuse = () => {
let  fun = ()=>{
    const response = fetch("https://jsonplaceholder.typicode.com/users").then(
        (res)=>{console.log(res.json())}); }

        
        fun();
  return (
    <>
      
      
    </>
  )
}

export default Fetchuse
