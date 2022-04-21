import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap';


function Portfolio() {
  const appList = [
    // { 
    //   name: "", 
    //   appURL: "", 
    //   repo: "", 
    //   image: "", 
    //   text: "",
    //   tech: ""
    // },
        { 
      name: "Cherry Planner", 
      appURL: "https://cherryplanner.herokuapp.com/", 
      repo: "https://github.com/jhugray/cherryplanner", 
      image: "https://user-images.githubusercontent.com/59127869/156824506-998e0496-c32f-4b6a-8582-2e0f700a42f4.png", 
      text: "Plan your day with Cherry Planner! Log in to save your day across devices.",
      tech: "Javascript, Node.js, Express, MySQL, Sequelize, RESTful API, Handlebars, Heroku"
    },
        { 
      name: "|Paint|", 
      appURL: "https://paintbetweenthelines.herokuapp.com/", 
      repo: "https://github.com/jhugray/colouring", 
      image: "https://user-images.githubusercontent.com/85147307/152003893-e56946e1-565f-4609-997b-1956f47ba182.png", 
      text: "A fun colouring app with the ability to login and save your work, that is also a PWA.",
      tech: "HTML, CSS, JavaScript, Node.js GraphQL, MongoDB, Mongoose, Chakra-UI, React, JSON web token, Heroku, Apollo, Express, PWA"
    },
    { 
      name: " Sputtle", 
      appUrl: "", 
      repo: "https://github.com/jhugray/music-battle-spotify", 
      image: "https://user-images.githubusercontent.com/59127869/144726238-13142112-1a62-4314-a4e4-a48fee64c4d7.png", 
      text: "Sputtle uses the Spotify API to battle songs against each other to see who will rise to the top of the leaderboard. It is a fun way to listen to music and discover new songs. Login: sputtle.user@gmail.com Password: sputtle-demo-password",
      tech: "Javascript, Node.js, RESTful API, MySQL, Sequelize, Express, Handlebars, JQuery, Bulma, Heroku"
    },
    { 
      name: "Weather Dashboard", 
      appURL: "https://github.com/jhugray/weatherdashboard", 
      repo: "https://jhugray.github.io/weatherdashboard/", 
      image: "https://user-images.githubusercontent.com/59127869/135762566-01811582-1867-49da-846b-8afa70a7f11c.png", 
      text: "This is a user friendly interface where you can easily look up weather by city. Your recent searches are saved in quick access buttons to easily flip between your common locations.",
      tech: "HTML, CSS, Javascript, Bootstrap, APIs"
    },
    { 
      name: "MVC (Model-View-Controller) Blog", 
      appURL: "https://mvc-tech-blog-by-jhu.herokuapp.com/", 
      repo: "https://github.com/jhugray/mvc-tech-blog", 
      image: "https://user-images.githubusercontent.com/59127869/143130090-1784fc09-ffc6-453b-9800-c896e3ef88e2.png", 
      text: "A tech blog for sharing all your thoughts and ideas. Users can log in to post. Set up using an MVC pattern.",
      tech: "MVC paradigm, Javascript, TDD, Jest, Express, BCrypt, MySQL, Sequelize, Handlebars, Node.js"
    },
    { 
      name: "Budget Progressive Web App", 
      appURL: "https://a19budget-tracker-pwa.herokuapp.com/", 
      repo: "https://github.com/jhugray/budgetPWA", 
      image: "https://user-images.githubusercontent.com/59127869/147973811-45c6c7cd-07da-420e-868d-5ea175897c52.png", 
      text: "A PWA to manage your budget, online or offline!",
      tech: "Progressive web app (PWA), Express, Node.js, HTML, CSS, Javascript"
    },
    { 
      name: "Note Taker", 
      appURL: "https://note-tracker-by-jess.herokuapp.com/", 
      repo: "https://github.com/jhugray/note-tracker", 
      image: "https://user-images.githubusercontent.com/59127869/140653265-0366ee2c-acee-4665-afe8-be5df72c93b9.png", 
      text: "I designed the backend using express for this note taker app.",
      tech: "HTML, CSS, Javascript, Node.js, Express, MySQL, Heroku"
    },
    { 
      name: "Code Quiz", 
      appURL: "https://jhugray.github.io/code-quiz/", 
      repo: "https://github.com/jhugray/code-quiz", 
      image: "https://user-images.githubusercontent.com/59127869/133896933-1b60f67d-b6a4-4b5d-88fe-e5b38bb4b905.png", 
      text: "A fun quiz game to test your coding knowledge.",
      tech: "HTML, CSS, Javascript"
    },
    { 
      name: "ReadMe Generator", 
      appURL: "https://github.com/jhugray/README-generator", 
      repo: "https://github.com/jhugray/README-generator", 
      image: "https://user-images.githubusercontent.com/59127869/138617343-31729736-84c1-47e9-8044-1c1bf4640176.png", 
      text: "Easily generate Readme's from the command line using this convenient Node.js app.",
      tech: "Node.js"
    }
  ]

  return (
    <Row id="portfolio" xs={1} md={2} className="g-4 mt-2">
      {appList.map(app => {
        return (
          <Col>
          <Card className="mb-3 text-center">
            <Card.Img target="_blank" src={ app.image } /> 
            <Card.Body>
              <Card.Title>{ app.name }</Card.Title>
              <Card.Link href={ app.repo } target="_blank">{ app.repo }</Card.Link>
              <br></br>
              <Card.Text> { app.text } </Card.Text>
              <Card.Text> Technologies: { app.tech } </Card.Text>
              <Button href={ app.appURL} target="_blank">Check it out!</Button>
            </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  ) 
}

export default Portfolio;