import React from 'react'
import { ajiraConnect,sgrProject } from '../../assets/data/data'
import About from '../About/About';
import Project from '../Projects/Project'
import Profile from '../Profile/Profile'

const home = props =>(
<main className="main" style={{marginTop:76,overflow:'hidden',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', width: "100%"}}>
 
  <Profile />
  <Project data={ajiraConnect} />
  <Project data={sgrProject} />
  <About />
</main>
);


export default home;