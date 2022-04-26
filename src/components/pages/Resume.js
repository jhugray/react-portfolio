import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Ratio } from 'react-bootstrap';

function Resume() {
  return(
    <Container>    
      <Row className="mt-5 m-4 mb-0">
        <Col> 
        <Button className="m-2" href="https://docs.google.com/document/d/e/2PACX-1vQXRNA4Al0iY9E4UeTS9W86shXW-u3QUFbGxFnoeayF0vLymm-4-cKRKw1SQfDqDm2YY1LVPIsJjIkD/pub" target="_blank">
          <h2>Open my resume in a new window</h2>
          <p>You can view it in a larger window and right click to save it!</p>
        </Button>
        </Col>
       
      </Row>
      <Row style={{ width: 'auto', height: 'auto' }}>
        <Ratio>
          <iframe id="resume" src="https://docs.google.com/document/d/e/2PACX-1vQXRNA4Al0iY9E4UeTS9W86shXW-u3QUFbGxFnoeayF0vLymm-4-cKRKw1SQfDqDm2YY1LVPIsJjIkD/pub"></iframe>
        </Ratio>
      </Row>
    </Container>
  
    
  )
}


export default Resume;
