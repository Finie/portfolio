import React from 'react'
import { BsFillPersonLinesFill } from "react-icons/bs";
import './About.css'
import {
    FaReact,
    FaNode,
    FaJava,
  } from "react-icons/fa";
  import { SiMysql } from "react-icons/si";
  import { MdAndroid } from "react-icons/md";

const about = props =>(

    <div className="about-container">
        About

<div className="about-card-holder">

        <div className="about-card">
            <div className="name-holder">
        <BsFillPersonLinesFill style={{color:'#000000'}}/> <header><b>Who I am</b></header>
            </div>

          
            <section>I am a full stack software developer, experienced in building mobile apps and web apps 
                technologies at my disposal include Java, MySQL, React, React native and Node Js
            </section>

            <section>
                Technologies
                <div  className="name-holder">
<FaJava style={{marginLeft:16, height:30,width:30,marginTop:16}}/> <SiMysql style={{marginLeft:16, height:30,width:30,marginTop:16}}/> <FaNode style={{marginLeft:16, height:30,width:30,marginTop:16}}/> <FaReact style={{marginLeft:16, height:30,width:30,marginTop:16}}/> <MdAndroid style={{marginLeft:16, height:30,width:30,marginTop:16}}/>
                </div>
            </section>

        </div>

    

        <div className="about-card">
            <header>Milestones</header>
            <section>
                Some of the projects i have worked with are as listed below
                <ul>
                    <li>Tospay core mobile library</li>
                    <li>Madaraka Express mobile app</li>
                    <li>KPA Biller24 mobile app</li>
                </ul>
            </section>

            <section>
                Companies:
                <a style={{marginLeft:16}} href="https://www.linkedin.com/company/tospay/" rel="noopener noreferrer" target="_blank" >Tospay Ltd</a>
            </section>


        </div>


</div>
    </div>
);

export default about;