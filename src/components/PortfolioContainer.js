import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';



import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';





function PortfolioContainer() {
  // Using useState, set the default value for currentPage to 'About'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <Container className="d-flex flex-column min-vh-100">

        <div class="has-bg-img banner fluid">
      <header>
      
        <h1>Jess Hause Ugray</h1>
        
         {/* Pass the state value and the setter as props to NavTabs */}
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      </div>
       {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>


      <footer className="mt-auto text-center">
        <MDBBtn className="m-3" size='lg' floating style={{ backgroundColor: '#333333' }} href='https://github.com/jhugray' target="_blank">
          <MDBIcon fa icon='github' />
        </MDBBtn>

        <MDBBtn className='m-3' size='lg' floating style={{ backgroundColor: '#0082ca' }} href="https://www.linkedin.com/in/jess-hause-ugray" target="_blank">
          <MDBIcon fa icon='linkedin' />
        </MDBBtn>

        <MDBBtn className='m-3' size='lg' style={{ backgroundColor: '#55acee' }} href="https://twitter.com/JessUgray" target="blank">
          <MDBIcon fa icon='twitter' />
        </MDBBtn>

        {/* <a href="jess.ugray@gmail.com" target="_blank" class="fa fa-envelope fa-2xl" ></a>
        <a href="https://www.linkedin.com/in/jess-hause-ugray" target="_blank" class="fa fa-linkedin"></a>
        <a href= "https://github.com/jhugray" target="_blank" class="fa fa-github"></a> */}        
      </footer>

    </Container>
    
  );
}

export default PortfolioContainer;
