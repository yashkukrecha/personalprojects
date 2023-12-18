import '../Styles/Project.css';

export default function Project(props) {
    const pro = props.project.toLowerCase();
    return (
        <div id="project-container">
            <img className="project-icon" alt="project-icon" src={require(`../Icons/${pro}.png`)}></img>
            <h2 id="project-title"> {props.project} </h2>
            <h4 className="unbold" id="project-desc"> {props.desc} </h4>
        </div>
    )
}