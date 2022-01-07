import React from "react";
import profilePic from "../../assets/profilepic.png";

function About() {
  return (
    <section id="about">
      <h1>Who Am I?</h1>
      <p>Hi! I'm Jess, a developer from Ottawa, Canada. I have a passion for programming.</p>
      <img src={profilePic}></img>
    </section>
  )
}

export default About