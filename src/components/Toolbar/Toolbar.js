import React from 'react'
import './Toolbar.css';
import Humbuger from '../SideDrawer/ToggleButton'
const toolbar = props => (

<header className="toolbar">
    <nav className="toolbar-nav">
        <div className="humbagur-button">
            <Humbuger click={props.clickHandler} />
        </div>
        <div className="toolbar-logo"><a href="">Logo</a></div>
        <div className="spacer"/>
        <div className="tolbar-nav-items">
            <ul>
                <li><a href="/">Profile</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </div>
    </nav>
</header>
);



export default toolbar;