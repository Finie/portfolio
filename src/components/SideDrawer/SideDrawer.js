import React from 'react'
import './SideDrawe.css'
import {Link} from 'react-scroll'
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
            <li ><Link
               activeClass="active"
               spy={true}
               smooth={true}
               offset={-70}
               duration={1000}
               to='profile'        
            onClick={props.backdropClick} >Profile</Link></li>

 
           <li ><Link
               activeClass="active"
               spy={true}
               smooth={true}
               offset={-70}
               duration={1000}
               to='project'        
            onClick={props.backdropClick} >Project</Link></li>


         <li ><Link
               activeClass="active"
               spy={true}
               smooth={true}
               offset={-70}
               duration={1000}
               to='about'        
            onClick={props.backdropClick} >About</Link></li>



           <li ><Link
               activeClass="active"
               spy={true}
               smooth={true}
               offset={-70}
               duration={1000}
               to='contact'        
            onClick={props.backdropClick} >Contacts</Link></li>




        </ul>
    </nav>
);
}

export default sideDrawer;