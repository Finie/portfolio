import React from 'react'
import './Profile.css'
import dev_image from '../../assets/dev_image.jpg'

const profile = props => (

    <div className="profile-container">
        <img className="profile-image" src={dev_image}/>
        <div className="profile-description">
           Software Engineer
            <span>-descriprion</span>
            <p>Here is some description about fin as a software enginner</p>
        </div>
    </div>
);


export default profile;