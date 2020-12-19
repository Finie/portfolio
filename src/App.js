import React from 'react';
import Toolbar from "./components/Toolbar/Toolbar"
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import { useState } from 'react';
 
function App() {

  const [isSideDrawerOpen,setIsSideDrawerOpen] = useState(false);

  const drawerToggleButtonHandler = () =>{
    setIsSideDrawerOpen((!isSideDrawerOpen))
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
<Toolbar clickHandler={drawerToggleButtonHandler}/>
<SideDrawer show={isSideDrawerOpen} />
{backDrop}
<main style={{marginTop:76}}>
<p>This is the page context</p>
</main>
    </div>
  );
}

export default App;
