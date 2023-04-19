import React from 'react'
import { useLocation } from 'react-router-dom'

const Routercontact = () => {
    const location = useLocation();
    console.log(location.state);
  return (
    <>
      contact

      my id is {location.state.id}
    </>
  )
}

export default Routercontact
