import React from 'react'
import './Profile.css'
import dev_image from '../../assets/dev_image.jpg'


function profile (){

return (

<div className="outer-contaner" id="profile">
    <div className="left-right-div"/>
    <div className="profile-container">
        <img className="profile-image" alt="alternative 1" src={dev_image}/>
        <div className="profile-description">
           Software Engineer
            <p>I am a fullstack software engineer, experienced in MySQL, Java, React, React native,and Android technologies. I have great parssion in building user friendly and user centric apps with more than 1+ years of experience</p>
        </div>
    </div>
    <div className="left-right-div"/>
</div>
);

}
export default profile;