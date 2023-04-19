import React, { useState } from 'react'

const Form = () => {
const [name ,setName]=useState("");
const [num ,setNum]=useState();

// if i put useState empty it will be undefined
console.log(name);

const handleOnChange=(event)=>{
      //  console.log(event);
      //  console.log(event.target.value);
        //setName(event.target.value);

        if(event.target.name==="name"){setName(event.target.value);}

        else if(event.target.name==="number"){setNum(event.target.value);}
    // we can also do same thing by creating an object like in w3schools object
    }

  return (
    <>

      
<form action="">
    <label htmlFor="">First Name</label>
   
    {/* <input type="text" value="aman" />  */}
    {/* form handling is different in reacts js here valie is treated as prop which is read only there we cant simply change */}

    {/* <input type="text" defaultValue="aman" /> */}
     {/* // thorugh this i can inout delete but how to handle it so i use controlled components */}

     <input type="text" name="name" value={name} onChange={handleOnChange} />

     <label htmlFor="">NUM Name</label>

    <input type="number" name="number" value={num} onChange={handleOnChange} />



</form>


    </>
  )
}

export default Form

// https://www.youtube.com/watch?v=Vd8kcLbLItc&list=PLp18NAIKHWnvpLpioGs6ZAiMlpfx49KOz&index=18

// 1. controlled compo control by react uncontrol are by dom
// 2.  if we want to use controlled we can use vent handlers,usestate hooks and for uc we can use useRef hooks


// we use controlled components to update form



/*

Aman Choudhary
Controlled vs uncontrolled components in reactjs 

In ReactJS, a component can be either controlled or uncontrolled depending on how it manages and updates its own state.

A controlled component is a component where the state is managed by React, and any updates to that state are made through callbacks provided by React. In other words, the component's state is "controlled" by React. This means that any changes to the component's state can only occur through a predefined set of events, such as an onChange event.

On the other hand, an uncontrolled component is a component where the state is managed by the browser or DOM, and the component updates its own state based on user interactions or other events. The component's state is not "controlled" by React. An example of an uncontrolled component is an input element with a default value that the user can modify.

Controlled components are preferred in React because they offer more control over the state of the component and can prevent unexpected behavior that can occur with uncontrolled components. However, there are cases where uncontrolled components may be more appropriate, such as in cases where the component's state needs to be managed by the browser or DOM.





Aman Choudhary
Give example 

Sure, here are examples of both controlled and uncontrolled components in React:

Example of a Controlled Component:

kotlin
Copy code
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }
  render() {
    return (
      <input
        type="text"
        value={this.state.inputValue}
        onChange={this.handleChange}
      />
    );
  }
}
In this example, the ControlledInput component is a controlled component because its state is managed by React. The component's state inputValue is set in the constructor and updated by the handleChange method whenever the input value changes. The input element's value is set to the component's state inputValue and any changes to the input are handled by the handleChange method.

Example of an Uncontrolled Component:

arduino
Copy code
class




Aman Choudhary
Give example in functional components 

Certainly! Here are examples of both controlled and uncontrolled components using functional components in React:

Example of a Controlled Component:

javascript
Copy code
import React, { useState } from 'react';

function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
    />
  );
}
In this example, the ControlledInput component is a controlled component because its state is managed by React through the useState hook. The component's state inputValue is initialized to an empty string and updated by the handleChange function whenever the input value changes. The input element's value is set to the component's state inputValue and any changes to the input are handled by the handleChange function.

Example of an Uncontrolled Component:

javascript
Copy code
import React from 'react';

function UncontrolledInput() {
  const inputRef = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        defaultValue="Hello World"
        ref={inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
In this example, the UncontrolledInput component is an uncontrolled component because the input value is managed by the DOM. The defaultValue attribute of the input element is set to "Hello World", which is the initial value of the input. The inputRef is used to access the current value of the input element in the handleSubmit function, which is triggered when the form is submitted
*/