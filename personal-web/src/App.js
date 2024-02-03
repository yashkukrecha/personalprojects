import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Hobbies from "./Pages/Hobbies";
import Contact from "./Pages/Contact";
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="link" to="about" smooth={true} duration={500} onClick={scrollToTop}>
              About Me
            </Link>
          </li>
          <li>
            <Link className="link" to="skills" smooth={true} duration={500} onClick={scrollToTop}>
              Skills
            </Link>
          </li>
          <li>
            <Link className="link" to="projects" smooth={true} duration={500} onClick={scrollToTop}>
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" to="hobbies" smooth={true} duration={500} onClick={scrollToTop}>
              Hobbies
            </Link>
          </li>
          <li>
            <Link className="link" to="contact" smooth={true} duration={500} onClick={scrollToTop}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <section name="about">
        <Home />
      </section>

      <section name="skills">
        <Skills />
      </section>

      <section name="projects">
        <Projects />
      </section>

      <section name="hobbies">
        <Hobbies />
      </section>

      <section name="contact">
        <Contact />
      </section>

      <button className="scroll-to-top-button" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

    </div>
  );
}

export default App;
