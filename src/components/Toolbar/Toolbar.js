import React from 'react'
import {Link} from 'react-router-dom'
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
                <Link to='/profile'>
                <li>Profile</li>
                </Link>

                {/* <Link to='project'>
                <li>Projects</li>
                </Link>

                <Link to='/about'>
                <li>About</li>
                </Link>

                <Link to='/contact'>
                <li>Contacts</li>
                </Link> */}

            </ul>
        </div>
    </nav>
</header>
);



export default toolbar;