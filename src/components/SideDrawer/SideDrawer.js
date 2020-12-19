import React from 'react'
import './SideDrawe.css'


const sideDrawer = props =>{
    let drawersClass = 'side-drawer'
    
    if(props.show){
        drawersClass = 'side-drawer open'
    }
    
    return(

    <nav className={drawersClass}>
        <ul>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">About</a></li>
        </ul>
    </nav>
);
}

export default sideDrawer;