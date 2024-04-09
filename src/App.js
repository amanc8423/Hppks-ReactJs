import './App.css';
import Usestate from './components/Usestate';
import Useeffect from './components/Useeffect';
import Contextapi from './components/Contextapi';
import Usecontext from './components/Usecontext';
import State from './components/State';
import Useref from './components/Useref';
import Usereducer from './components/Usereducer';
import Uselayouteffect from './components/Uselayouteffect';
import Usememo from './components/Usememo';
import Usecallback from './components/Usecallback';
import Customhook from './components/Customhook';
import Basic1 from './components/Basic1';
import Props from './components/Props';
import Propsdefault from './components/Propsdefault';
import Form from './components/Form';
import Formuncontrol from './components/Formuncontrol';
import Liftingstateup from './components/Liftingstateup';
import Regiform from './components/Regiform';
import { useState } from 'react';
import Listrender from './components/Listrender';
import Listkey from './components/Listkey';
import Usestateobject from './components/Usestateobject';
import Usestatearray from './components/Usestatearray';
import Axiosget from './Axiostut/Axiosget';
import Axiospost from './Axiostut/Axiospost';
import Axiosputdel from './Axiostut/Axiosputdel';
import Router1 from './Router/Router1';
import Redux1 from './Redux/Redux1';
import List from './components/List';
import Fetchuse from './Axiostut/Fetchuse';

function App() {
const [state,setState]=useState(0);
const f=()=>{
  setState(state+1);
  console.log(state);
}

  const getData=(data)=>{
    console.log(data);
  }

  const items = [{
    text:"aman"
    }, { 
      text:"kamal"
    }, { 
    text:"ajay"
    } 
    
    ]
  

// below functin is for lifting stateup


  return (
  <>


{/* <hr />
<div>STATES IN REACT</div> <br />
<State/>  */}



{/* <hr />
<div>useEffect IN REACT</div> <br />
<Useeffect/> */}

{/* <hr />
<div>contextapi IN REACT</div> <br />
<Contextapi/> */}

{/* <hr />
<div>useContext hook IN REACT</div> <br />
<Usecontext/> */}

 {/* <hr />
<div>useRef IN REACT</div> <br />
<Useref/> */}
{/* 
<hr />
<div>useReducer IN REACT</div> <br />
<Usereducer/> */}

{/* <hr />
<div>useLayoutEffect IN REACT</div> <br />
<Uselayouteffect/> */}

{/* <hr />
<div>useMemo IN REACT</div> <br />
<Usememo/> */}
{/* 
 <hr />
<div>useCallback IN REACT</div> <br />
<Usecallback/>   */}

{/* <hr />
<div>customhooks IN REACT</div> <br />
<Customhook/> */}

{/* <hr />
<div>Basic1 IN REACT</div> <br />
<Basic1/> */}

{/* <hr />
<div>Props IN REACT</div> <br />
<Props name="aman"/>
<Props name="ajay"/>
<Props name="atul"/> */}


{/* <hr />
<div>PropTypes IN REACT</div> <br />
<Propsdefault name = "avi" age={10} city="kota" />
<Propsdefault  age={10} city="kota" />
<Propsdefault name = "avi"  city="kota" /> */}


{/* <hr />
<div>Form IN REACT</div> <br />
<Form/> */}

{/* <hr />
<div>Formuncontrol IN REACT</div> <br />
<Formuncontrol/> */}

{/* <hr />
<div>Lifting state up IN REACT</div> <br />
<Liftingstateup getData={getData}/> */}

{/* <hr />
<div>Registartion form IN REACT</div> <br />
<Regiform/> */}


{/* <hr />
<div>async setState IN REACT</div> <br />
   <div>state is {state} . Check value in console it will always be 1 less than that of in this div</div>
   <button onClick={f}>button</button> */}

   

  {/* <hr />
<div>listkey IN REACT</div> <br />
  <Listkey/> */}
  

   {/* <hr />
<div>usestate with object IN REACT</div> <br />
  <Usestateobject/> */}

  {/* <hr />
<div>usestate with array IN REACT</div> <br />
  <Usestatearray/> */}

  {/* <hr />
<div>axios get IN REACT</div> <br />
  <Axiosget/> */}

  
  {/* <hr />
<div>axios post IN REACT</div> <br />
  <Axiospost/> */}

  {/* <hr />
<div>axios put del IN REACT</div> <br />
  <Axiosputdel/> */}

  {/* <hr />
<div>Fetch() IN REACT</div> <br />
  <Fetchuse/> */}

  <hr />
<div>router IN REACT</div> <br />
  <Router1/>

  {/* <hr />
<div>redux IN REACT</div> <br />
  <Redux1/> */}
{/* 
  <hr />
<div>List for steeleye</div> <br />
  <List items={items}/> */}

  
  



</>

  );
}

export default App;

// useRouter -> https://usehooks.com/useRouter/