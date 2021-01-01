import React from 'react'
import {Link} from 'react-scroll'
import './Toolbar.css';
import Humbuger from '../SideDrawer/ToggleButton'


const toolbar = props => (

<header className="toolbar">
    <nav className="toolbar-nav">
        <div className="humbagur-button">
            <Humbuger click={props.clickHandler} />
        </div>
        <div className="toolbar-logo"><a href="/">Phenius Muthomi</a></div>
        <div className="spacer"/>
        <div className="tolbar-nav-items">
            <ul>
                <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to='profile'
                
                >
                <li>Profile</li>
                </Link>

                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                to='project'>
                <li>Projects</li>
                </Link>

                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  to='about'>
                <li>About</li>
                </Link>

                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  to='contact'>
                <li>Contacts</li>
                </Link>

            </ul>
        </div>
    </nav>
</header>
);



export default toolbar;