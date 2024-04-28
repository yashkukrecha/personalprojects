import '../Styles/IndividualProject.css';
import '../Styles/App.css';

export default function IndividualProject(props) {
    const pro = props.project.toLowerCase();

    return (
        <div>
            <img id="project-icon" alt="project-icon" src={require(`../Icons/${pro}.png`)}></img>
            <h2 id="project-title"> {props.project} </h2>
            <h4 className="desc"> {props.desc} </h4>
        </div>
    )
}