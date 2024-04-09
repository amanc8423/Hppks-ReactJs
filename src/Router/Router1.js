// router help to create sigle page appli.
// it helps us to render only related aprt
// npm i react-roter-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";


import React from 'react'
import Routerhome from "./Routerhome";
import Routerabout from "./Routerabout";
import Routercontact from "./Routercontact";
import Notfound from "./Notfound";

const Router1 = () => {
  return (
    <>
      
<BrowserRouter>
    <Routes>
      
{/*       
        <Route path='/' element={ <div>i am home page</div> }></Route>
        <Route path='/about' element={ <div>i about page</div> }></Route>
        <Route path='/contact' element={ <div>i am contact page</div> }></Route>
     */}
    
<Route exact path='/' element={ <Routerhome/> } ></Route>
    
<Route exact path='/about/:name' element={ <Routerabout/> } ></Route>

<Route exact path='/contact' element={ <Routercontact/> } ></Route>

<Route exact path="*" element={<Notfound/>}></Route>
    </Routes>
</BrowserRouter>

    </>
  )
}

export default Router1


// web dev simplified router 
// https://www.youtube.com/watch?v=Ul3y1LXxzdU












