import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axiosget = () => {
const[userdata,setdata] = useState([])
  useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response)=>{console.log(response)
  setdata(response.data)})
  },[])
  return (
    <>
      <div>axios</div>
      {userdata.map((e,i)=>
      <div >{userdata[i].name}</div>
      )}
    </>
  )
}

export default Axiosget

// https://axios-http.com/docs/intro
// how api calss work in react ? 
//in react we use external package for api request 
//https://www.youtube.com/watch?v=Gl-vOU7ZU9A

/*
 axios is a promise based module in  js applications to handle http request , it is updated version of fetch api
// axios give data in json format


Yes, axios is a promise-based module in React JS. It is a popular JavaScript library that is used to make HTTP requests from the browser or Node.js. The library is promise-based, which means it returns promises as a result of asynchronous operations like sending an HTTP request or receiving a response.

Axios allows developers to make GET, POST, PUT, DELETE, and other HTTP requests, and it provides numerous options for handling responses, including interceptors, error handling, and other features. Being promise-based, Axios allows developers to write clean and concise code using async/await syntax, promises chaining or other patterns that leverage built-in promise methods, such as then or catch.

Promise based HTTP client for the browser and node.js what it means
The term 'Promise-based HTTP client' refers to the capability of a library or module to handle HTTP requests asynchronously using Promises. In the case of Axios, it is a JavaScript library used for making HTTP requests from web browsers, and it is also compatible with Node.js.

Axios is a Promise-based HTTP client that uses the Promise API for handling asynchronous requests . This means that when a request is sent using Axios, it returns a Promise object that resolves when the request succeeds or rejects when the request fails. This makes it easier to handle the response data and error messages from the server.

Using Axios, developers can send GET, POST, PUT, and DELETE requests easily from both browser and Node.js environments. It also supports response interceptors, which allows developers to modify or reject the server response before it reaches the application.

Overall, the Promise-based feature of Axios simplifies the handling of HTTP requests and responses, making it a popular choice for JavaScript developers.

*/