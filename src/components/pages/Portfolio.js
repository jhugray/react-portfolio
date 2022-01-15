import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap';


function Portfolio() {

  return (
    <Row id="portfolio" xs={1} md={2} className="g-4">
     
      <Col>
      
      
    <Card className="mb-3 text-center">
      <Card.Img target="_blank" src="https://user-images.githubusercontent.com/59127869/144726238-13142112-1a62-4314-a4e4-a48fee64c4d7.png" /> 
      <Card.Body>
      <Card.Title>Sputtle</Card.Title>
      <Card.Text>
        This is an app that does ... 
      </Card.Text>
      <Button variant="primary" href="https://music-battle-spotify.herokuapp.com/" target="_blank">Check it out!</Button>
      </Card.Body>
    </Card>

    </Col>
    <Col>

    <Card className="mb-3 text-center">
      <Card.Img target="_blank" src="https://user-images.githubusercontent.com/59127869/144726238-13142112-1a62-4314-a4e4-a48fee64c4d7.png" /> 
      <Card.Body>
        <Card.Title>Sputtle</Card.Title>
        <Card.Text>
        This is an app that does ... 
        </Card.Text>
        <Button variant="primary"  href="https://music-battle-spotify.herokuapp.com/" target="_blank">Check it out!</Button>
      </Card.Body>
      
    </Card>
</Col>
<Col>
    <Card className="mb-3 text-center">
      <Card.Img target="_blank" src="https://user-images.githubusercontent.com/59127869/144726238-13142112-1a62-4314-a4e4-a48fee64c4d7.png" /> 
      <Card.Title>Sputtle</Card.Title>
      <Card.Text>
        This is an app that does ... 
      </Card.Text>
    </Card>

      </Col>
     


  
    {/* <a href="https://music-battle-spotify.herokuapp.com/" target="_blank" class="project-main sputtle">
      <h4>Sputtle</h4>
    </a>

    <a href="https://jhugray.github.io/run-buddy/" target="_blank" class="project-ex runbuddy">
      <h4>Run Buddy</h4>
    </a>


    <a href="https://jhugray.github.io/horiseon/" target="_blank" class="project-ex horiseon">
     <h4>Horiseon</h4> 
    </a>

    <a href="https://jhugray.github.io/weatherdashboard/" target="_blank" class="project-ex weatherDashboard">
      <h4>Weather<br />Dashboard</h4>
    </a>

    <a href="https://github.com/azuryte5/Nutrition-Sustenance-Value" target="_blank" class="project-ex nutrivalue">
      <h4>Nutrivalue</h4>
    </a>

    <a href="" target="_blank" class="project-ex project5">
      <h4>Project 5</h4>
    </a>

    <a href="" target="_blank" class="project-ex project5">
      <h4>Project 5</h4>
    </a> */}


  </Row>
  )
}

export default Portfolio;