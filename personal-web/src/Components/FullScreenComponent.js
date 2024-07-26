import '../Styles/FullScreenComponent.css';
import '../Styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function FullScreenComponent(props) {
    const index = props.index;
    const pro = props.project.toLowerCase();

    const info = [
        ["React", "Flask", "SQLAlchemy", "JavaScript", "Scikit Learn", "Pandas", "Seaborn"],
        ["React Native", "Expo Go", "Firebase", "JavaScript", "React Navigation", "Expo Camera/Image Integration"], 
        ["React", "Firebase", "Express.js", "JavaScript", "Postman"], 
        ["React", "JavaScript", "Chart.js"], 
        ["Java"], 
        ["Streamlit", "Python", "TensorFlow", "Pandas", "NumPy", "Google Bard API"], 
        ["Python", "TensorFlow", "Pandas", "NumPy"], 
        ["Python", "TensorFlow", "Pandas", "NumPy"]];

    const data = [
        "July 2024 - August 2024",
        "January 2024 - April 2024",
        "December 2023 - January 2024",
        "December 2023 - Present (Ongoing updates)",
        "November 2023",
        "November 2023",
        "August 2023",
        "August 2022"
    ]
    
    return (
        <div className="column-container" id="full-screen">
            <button className="button" id="close-button" onClick={() => props.setTrigger(false)}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <h2 className="titles" id="fullscreen-title"> {props.project} </h2>
            <text>{data[index]}</text>
            <div className='row-container' id="icon-tech-container">
                <img id="fullscreen-icon" alt="project-icon" src={require(`../Icons/${pro}.png`)}></img>
                <div id="list">
                    <h4 id="tech">Tech Stack:</h4>
                    <ul id="software" className="desc">
                        {info[index].map((item, idx) => (
                            <li style={{textAlign: 'left'}} key={idx}> {item}</li>
                        ))}
                    </ul>
                </div>
                
            </div>
            
            <h4 id="fullscreen-desc" className="desc"> {props.desc} </h4>
        </div>
    );
}