import React, { useLayoutEffect, useState } from 'react'
import { useEffect } from 'react'

const Uselayouteffect = () => {


    useEffect(()=>{
        console.log("first use-effect")
      },[])

useLayoutEffect(()=>{
    console.log("i am always first who am i ?")
})

      useEffect(()=>{
        console.log("second use-effect")
      },[])

      

      useEffect(()=>{
        console.log("third use-effect")
      },[])

      useLayoutEffect(()=>{
        console.log("i am always first who am i ?")
    })
    
          useEffect(()=>{
            console.log("second use-effect")
          },[])



  return (
    <div>
      

    </div>
  )
}

export default Uselayouteffect

/*
useEffect - run async and after a render is painted to screen
useLayoutEffect - runs sync  after render but before screen is updated
*/