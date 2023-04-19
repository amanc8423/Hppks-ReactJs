import React from 'react'
import { useSelector } from 'react-redux'

const Bookcontainer = () => {
   const noOfBooks =  useSelector(state=>state.NumberOfBooks)
  return (
    <div>
      <div>BookContainer</div>
      <h2>No of Books - {noOfBooks}</h2>
    </div>
  )
}

export default Bookcontainer
