import React from 'react'
import { useParams } from 'react-router-dom'

const Routerabout = () => {
  const {name} = useParams();
  console.log(name);
  return (
    <div>
      welcome in about page {name}.
    </div>
  )
}

export default Routerabout


