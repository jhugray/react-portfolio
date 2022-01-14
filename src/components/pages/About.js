import React from "react";
import profilePic from "../../assets/profilepic.png";


function About() {
  return (
    <div id="about">
    
      <h1>Who Am I?</h1>
      <p>Hi! I'm Jess, a developer from Ottawa, Canada. 
        I started my professional life as a registered nurse. I wanted to be a nurse as I loved the growth and continous learning the field provided. I also loved that it gifted me the opportunity to make a positive impact in people's lives.

        Although I enjoyed nursing, I was drawn to the problem solving and challenges that the world of software development offered. I also see how technology can make a positive impact in people's lives, and I want to be part of that.

        Let's build something great together!
      </p>
      <img src={profilePic}></img>
    </div>
  )
}

export default About