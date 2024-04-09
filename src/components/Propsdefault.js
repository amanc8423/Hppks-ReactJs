//read from harry 
import React from 'react'
import PropTypes  from 'prop-types'

const Propsdefault = (props) => {
  return (
    <div>
      my name is {props.name}.
      I am {props.age} year old.
      I am from {props.city} city.
    </div>
  )
}

export default Propsdefault

Propsdefault.propTypes={name:PropTypes.string.isRequired,
age:PropTypes.number,city:PropTypes.string}

Propsdefault.defaultProps = {
    name:"input name it is required",
    age:"number expected",
    city:"cityname"
}



