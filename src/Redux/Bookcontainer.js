import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import BookAction from './BookAction'

const Bookcontainer = () => {
   const noOfBooks =  useSelector(state=>state.NumberOfBooks)
   const dispatch = useDispatch();
  return (
    <>
      <div>BookContainer</div>
      <h2>No of Books: {noOfBooks}</h2>
      <button onClick={()=>{dispatch(BookAction())}}>Buy Book</button>
    </>
  )
}

export default Bookcontainer
