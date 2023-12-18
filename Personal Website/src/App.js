import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Hobbies from "./Pages/Hobbies";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/hobbies" element={<Hobbies />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
