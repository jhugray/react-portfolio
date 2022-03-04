import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col, Button } from 'react-bootstrap';


function Contact() {
 
  return (
    <Container>
    <Row className="m-3">
      <h1 >Contact me</h1>
    </Row>
    <Row className="m-3">
      <p>Please feel free to reach out and say hi!</p>
      <p>I am always happy to connect with people who share my interest in development! </p>
    </Row>
    <Row className="m-4">
      <h4 >Email:
        <a href= "mailto:jess.ugray@gmail.com"> jess.ugray@gmail.com</a>
      </h4>
      <h4> Github:
        <a href="https://github.com/jhugray"> github.com/jhugray</a>
      </h4>
      <h4> Linkedin:
        <a href="https://www.linkedin.com/in/jess-hause-ugray/"> linkedin.com/in/jess-hause-ugray</a>
      </h4>

     
    </Row>

  </Container>
  );
}

export default Contact;