import React from 'react'

import './Projects.css'

import {projectOne} from '../../assets/data/data'

const project = props =>(
<div className="project-container">
    {projectOne.title}
    <span>{projectOne.description}</span>
    <div className="img-container">
    {projectOne.images.map((image)=><div className="project-images">
          <img className="project-image" alt="alternate 1" src={image.image_url}/></div>)}
          
    </div>
</div>
);

export default project;