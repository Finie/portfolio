import React from 'react';
import Toolbar from "./components/Toolbar/Toolbar"
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import { useState } from 'react';


import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Project'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

import './App'
 
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

  return (
    <div style={{
      height: "100%"
    }} className="App">
<Toolbar scrollListener={sectionSelected} clickHandler={drawerToggleButtonHandler}/>
<SideDrawer show={isSideDrawerOpen} />
{backDrop}
<main className="main" style={{marginTop:76, width: "100%"}}>
  <Profile />
  <Projects />
  <About />
  <Footer/>
</main>

    </div>
  );
}

export default App;
