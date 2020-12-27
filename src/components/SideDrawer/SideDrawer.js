import React from 'react'
import './SideDrawe.css'
import {} from 'react-router-dom'
import dev_image from '../../assets/dev_image.jpg'


const sideDrawer = props =>{
    let drawersClass = 'side-drawer'
    
    if(props.show){
        drawersClass = 'side-drawer open'
    }
    
    return(

    <nav className={drawersClass}>
        <div className="img-holder-div">
          <img className="profile-image" alt="alternative 1" src={dev_image}/>
        </div>
        <ul>
            <li ><a onClick={props.backdropClick} href="/">Profile</a></li>
        </ul>
    </nav>
);
}

export default sideDrawer;