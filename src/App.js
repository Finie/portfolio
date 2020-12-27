import React from 'react';
import Toolbar from "./components/Toolbar/Toolbar"
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import { useState } from 'react';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import './App'
import home from './components/Home/Home';
import Footer from './components/Footer/Footer';
 
function App() {

  const [isSideDrawerOpen,setIsSideDrawerOpen] = useState(false);

  const drawerToggleButtonHandler = () =>{
    setIsSideDrawerOpen((!isSideDrawerOpen))
  }


  const sectionSelected = props=> {

    console.log(props.section)
  }

  
  const backdropClickHandler = () =>{
    setIsSideDrawerOpen(false)
  }
  let backDrop = null;

  if(isSideDrawerOpen){
    backDrop = <Backdrop backdropClick={backdropClickHandler} />
  }

  // const scrollToProfile = () =>{

  // }


  return (


    
    <div style={{
      height: "100%"
    }} >

<Router>

<Toolbar scrollListener={sectionSelected} clickHandler={drawerToggleButtonHandler}/>
<SideDrawer show={isSideDrawerOpen} />
{backDrop}
  <Switch>
    <Route exact path="/" component={home} />
  <Route path="/profile" component={home}/>
  </Switch>
  <Footer />
</Router>
    </div>



  );
}

export default App;
