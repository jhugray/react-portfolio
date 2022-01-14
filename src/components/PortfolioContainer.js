import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

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
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
      <footer>
      <h3>Contact Me</h3>
          <nav>
            <ul>
              <li>
                <a href="" target="_blank" >Email@email.email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jess-hause-ugray" target="_blank" class="fa fa-linkedin"></a>
              </li>
              <li>
                <a href= "https://github.com/jhugray" target="_blank">Github.com/jhugray</a>
              </li>
            </ul>
          </nav>
      </footer>
    </div>
  );
}

export default PortfolioContainer;
