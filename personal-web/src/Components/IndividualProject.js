import '../Styles/IndividualProject.css';
import '../Styles/App.css';

export default function IndividualProject(props) {
    const img = props.project.title.toLowerCase();

    return (
        <div>
            <img id="project-icon" alt="project-icon" src={require(`../Icons/${img}.png`)}></img>
            <h2 id="project-title"> {props.project.title} </h2>
            <h4 className="desc"> {props.project.description} </h4>
        </div>
    )
}