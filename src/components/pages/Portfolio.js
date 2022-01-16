import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap';


function Portfolio() {

  return (
    <Row id="portfolio" xs={1} md={2} className="g-4 mt-2">

      <Col>
        <Card className="mb-3 text-center">
          <Card.Img target="_blank" src="https://user-images.githubusercontent.com/59127869/144726238-13142112-1a62-4314-a4e4-a48fee64c4d7.png" /> 
          <Card.Body>
            <Card.Title>Sputtle</Card.Title>
            <Card.Link href="https://github.com/jhugray/music-battle-spotify">https://github.com/jhugray/music-battle-spotify</Card.Link>
            <br></br>
            <Card.Text>
            <p>
            Sputtle uses the Spotify API to battle songs against each other to see who will rise to the top of the leaderboard. It’s a fun way to listen to music and discover new songs.
            </p>
            <p>
              Login: sputtle.user@gmail.com 
            <br></br>
              Password: sputtle-demo-password
            </p>
            </Card.Text>
        
            <Button variant="primary"  href="https://music-battle-spotify.herokuapp.com/" target="_blank">Check it out!</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>    
        <Card className="mb-3 text-center">
          <Card.Img target="_blank" src="https://user-images.githubusercontent.com/59127869/135762566-01811582-1867-49da-846b-8afa70a7f11c.png" /> 
          <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Link href="https://github.com/jhugray/weatherdashboard">https://github.com/jhugray/weatherdashboard</Card.Link>
            <br></br>
          <Card.Text>
            <p>
              This is a user friendly interface where you can easily look up weather by city. Your recent searches are saved in quick access buttons to easily flip between your common locations. 
            </p>
          </Card.Text>
          <Button variant="primary" href="https://jhugray.github.io/weatherdashboard/" target="_blank">Check it out!</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>    
        <Card className="mb-3 text-center">
          <Card.Img target="_blank" src="https://user-images.githubusercontent.com/59127869/143130090-1784fc09-ffc6-453b-9800-c896e3ef88e2.png" /> 
          <Card.Body>
          <Card.Title>MVC (Model-View-Controller) Blog</Card.Title>
          <Card.Link href="https://github.com/jhugray/mvc-tech-blog">https://github.com/jhugray/mvc-tech-blog</Card.Link>
            <br></br>
          <Card.Text>
            <p>
            A tech blog for sharing all your thoughts and ideas. Users can log in to post. Set up using an MVC pattern.            
            </p>
          </Card.Text>
          <Button variant="primary" href="https://mvc-tech-blog-by-jhu.herokuapp.com/" target="_blank">Check it out!</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>    
        <Card className="mb-3 text-center">
          <Card.Img target="_blank" src="https://user-images.githubusercontent.com/59127869/147973811-45c6c7cd-07da-420e-868d-5ea175897c52.png" /> 
          <Card.Body>
          <Card.Title>Budget Progressive Web App</Card.Title>
          <Card.Link href="https://github.com/jhugray/budgetPWA">https://github.com/jhugray/budgetPWA</Card.Link>
            <br></br>
          <Card.Text>
            <p>
              A PWA to manage your budget, online or offline!
            </p>
          </Card.Text>
          <Button variant="primary" href="https://a19budget-tracker-pwa.herokuapp.com/" target="_blank">Check it out!</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>    
        <Card className="mb-3 text-center">
          <Card.Img target="_blank" src="https://user-images.githubusercontent.com/59127869/140653265-0366ee2c-acee-4665-afe8-be5df72c93b9.png" /> 
          <Card.Body>
          <Card.Title>Note Taker</Card.Title>
          <Card.Link href="https://github.com/jhugray/note-tracker">https://github.com/jhugray/note-tracker</Card.Link>
            <br></br>
          <Card.Text>
            <p>
              I designed the backend using express for this note taker app. 
            </p>
          </Card.Text>
          <Button variant="primary" href="https://note-tracker-by-jess.herokuapp.com/" target="_blank">Check it out!</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>    
        <Card className="mb-3 text-center">
          <Card.Img target="_blank" src="https://user-images.githubusercontent.com/59127869/133896933-1b60f67d-b6a4-4b5d-88fe-e5b38bb4b905.png" /> 
          <Card.Body>
          <Card.Title>Code Quiz</Card.Title>
          <Card.Link href="https://github.com/jhugray/code-quiz">https://github.com/jhugray/code-quiz</Card.Link>
            <br></br>
          <Card.Text>
            <p>
              A fun quiz game to test your coding knowledge. 
            </p>
          </Card.Text>
          <Button variant="primary" href="https://jhugray.github.io/code-quiz/" target="_blank">Check it out!</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>    
        <Card className="mb-3 text-center">
          <Card.Img target="_blank" src="https://user-images.githubusercontent.com/59127869/138617343-31729736-84c1-47e9-8044-1c1bf4640176.png" /> 
          <Card.Body>
          <Card.Title>ReadMe Generator</Card.Title>
          <Card.Link href="https://github.com/jhugray/README-generator">https://github.com/jhugray/README-generator</Card.Link>
            <br></br>
          <Card.Text>
            <p>
              Easily generate Readme's from the command line using this convenient app. 
            </p>
          </Card.Text>
          <Button variant="primary" href="https://github.com/jhugray/README-generator" target="_blank">Check it out!</Button>
          </Card.Body>
        </Card>
      </Col>

    

  </Row>
  )
}

export default Portfolio;