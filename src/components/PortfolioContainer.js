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
      <header>
        <h1>Jess Hause Ugray</h1>
      </header>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
      <footer>
        <h3>Contact Me</h3>
          <nav>
            <a href="jess.ugray@gmail.com" target="_blank" class="fa fa-envelope fa-2xl" ></a>
            <a href="https://www.linkedin.com/in/jess-hause-ugray" target="_blank" class="fa fa-linkedin"></a>
            <a href= "https://github.com/jhugray" target="_blank" class="fa fa-github"></a>
          </nav>
      </footer>
    </div>
    
  );
}

export default PortfolioContainer;
