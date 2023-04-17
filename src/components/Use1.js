import React, { memo } from 'react'

const Use1 = (props) => {

  return (
    <div>
    {props.learning}
    { console.log("Use1")}
    </div>
  )
}

export default  memo (Use1)
