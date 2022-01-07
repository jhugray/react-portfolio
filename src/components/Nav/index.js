import React from 'react';

function Nav() {
 
  return (
    <header> 
      <h1>Jess Hause Ugray</h1>
      <nav>
      <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
            
          </li>
          <li>
            <a href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
  
    </header>
  );
}

export default Nav;