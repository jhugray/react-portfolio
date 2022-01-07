// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
      <About></About>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Contact></Contact>
      </main>
           <footer>
          <h3>Contact Me</h3>
          <nav>
            <ul>
              <li>
                <a href="" target="_blank" >Email@email.email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jess-hause-ugray" target="_blank" >Linkedin</a>
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

export default App;
