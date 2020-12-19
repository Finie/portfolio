import React from 'react'

import './Projects.css'

import fin_image from '../../assets/mobile.jpg'

const project = props =>(
<div className="project-container">
    Title of project
    <span>description of project</span>
    <div className="img-container">
    <div className="project-images">
       <img className="project-image" src={fin_image}/>
    </div>
    <div className="project-images">
    </div>

    <div className="project-images">
    </div>

    <div className="project-images">
    </div>

    <div className="project-images">
    </div>

    <div className="project-images">
    </div>
    </div>
</div>
);

export default project;