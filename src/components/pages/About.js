import React from "react";
import profilePic from "../../assets/profilepic.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Row, Col} from 'react-bootstrap';


function About() {
  return (
    <Row id="about" xs={1} md={2} className="g-4 m-3">
    <Col>
      <h1>Who Am I?</h1>
      <br></br>
      <p>
        Hi! I'm Jess, a developer from Ottawa, Canada.
      </p>
      <p>
        I started my professional life as a registered nurse. I chose nursing as I loved the growth and continous learning the field provided. I also loved that it gifted me the opportunity to make a positive impact in people's lives.
      </p>
      <p>
        Although I enjoyed nursing, I was drawn to the problem solving and challenges that the world of software development offered. I also see how technology can make a positive impact in people's lives, and I want to be part of that.
      </p>
      <p>
        Let's build something great together!
      </p>
      </Col>
      <Col>
      <Image fluid src={profilePic} alt="Jess Smiling" width="300" ></Image>
      </Col>
    </Row>
  )
}

export default About