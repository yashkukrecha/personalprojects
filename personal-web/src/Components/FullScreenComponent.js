import "../Styles/FullScreenComponent.css";
import "../Styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function FullScreenComponent(props) {
  const img = props.project.title.toLowerCase();

  return (
    <div className="column-container" id="full-screen">
      <button
        className="button"
        id="close-button"
        onClick={() => props.setTrigger(false)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <h2 id="fullscreen-title">
        {" "}
        {props.project.title}{" "}
      </h2>
      <p id="fullscreen-date">{props.project.date}</p>
      <div className="row-container" id="icon-tech-container">
        <img
          id="fullscreen-icon"
          alt="project-icon"
          src={require(`../Icons/${img}.png`)}
        ></img>
        <div>
          <h4 id="fullscreen-desc" className="desc">
            {" "}
            {props.project.description}{" "}
          </h4>
          <ul className="experience-techstack">
            {props.project.stack.map((tech, index) => (
              <li key={index} className="tech-item">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
