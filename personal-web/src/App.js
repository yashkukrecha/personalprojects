import './Styles/App.css';
import NavBar from './Components/NavBar.js';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <NavBar/>

      <button className="button" id="scroll-to-top-button" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

    </div>
  );
}
export default App;
