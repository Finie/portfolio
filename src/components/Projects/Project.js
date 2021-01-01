import React from 'react'

import './Projects.css'



function project(props){

    return(  <div id="project" className="project-container">
    {props.data.title}
    <span>{props.data.description}</span>
      <div className="img-container">
    {props.data.images.map((image)=><div className="project-images">
          <img className="project-image" alt="alternate 1" src={image.image_url}/></div>)}

    </div>


</div>

    );
}




export default project;