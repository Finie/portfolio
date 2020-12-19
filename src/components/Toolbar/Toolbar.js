import React from 'react'
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
                <li><a onClick={props.scrollListener("Profile")} href="/">Profile</a></li>
                <li><a onClick={props.scrollListener("Project")}  href="/">Projects</a></li>
                <li><a onClick={props.scrollListener("About")}  href="/">About</a></li>
                <li><a onClick={props.scrollListener("Contact")}  href="/">Contacts</a></li>
            </ul>
        </div>
    </nav>
</header>
);



export default toolbar;