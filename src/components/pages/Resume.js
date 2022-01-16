import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Ratio } from 'react-bootstrap';

function Resume() {
  return(
    <Container>    
      <Row className="mt-5 m-4 mb-0">
        <Col> 
        <Button className="m-2" href="https://docs.google.com/document/d/e/2PACX-1vS3q53FrjJN1HFwznNgPTDQvlHBKocuTYvKZ8nF1-s2i1apmY-FpEPQVho0dzG5zJE3Rzd1ndqXBeQO/pub" target="_blank">
          <h2>Open my resume in a new window</h2>
          <p>You can view it in a larger window and right click to save it!</p>
        </Button>
        </Col>
       
      </Row>
      <Row style={{ width: 'auto', height: 'auto' }}>
        <Ratio>
          <iframe id="resume" src="https://docs.google.com/document/d/e/2PACX-1vS3q53FrjJN1HFwznNgPTDQvlHBKocuTYvKZ8nF1-s2i1apmY-FpEPQVho0dzG5zJE3Rzd1ndqXBeQO/pub"></iframe>
        </Ratio>
      </Row>
    </Container>
  
    
  )
}


export default Resume;
