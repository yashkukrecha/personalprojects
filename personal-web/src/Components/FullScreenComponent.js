import '../Styles/FullScreenComponent.css';
import '../Styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function FullScreenComponent(props) {
    const index = props.index;
    const pro = props.project.toLowerCase();

    const info = [
        ["C++", "Multithreading (Pthread)", "Sockets", "TCP/IP", "Mutex", "Google Test", "CMake", "Valgrind"],
        ["Rust", "Cargo", "Egui", "Multithreading", "TCP/IP", "Synchronization", "Mutexes"],
        ["C", "Assembly", "Makefile", "GDB"],
        ["React", "Chart.js", "Flask", "SQLAlchemy", "Redis", "GCP", "Chart.js", "Python", "Scikit Learn", "Pandas", "Seaborn", "Matplotlib"],
        ["C", "Multithreading (Pragma)", "Makefile", "GDB"],
        ["React Native", "React Navigation", "Expo", "Svelte", "Flask", "Python", "GCP", "OpenAI API", "Google Maps API"], 
        ["React Native", "React Navigation", "React Native Calendar", "Expo", "Node.js", "GCP"], 
        ["React", "Node.js", "JSON-to-CSV", "DataTables", "AWS RDS", "PostgreSQL", "Firebase Authentication"],
        ["React.js", "JavaScript", "Chart.js"],
        ["Streamlit", "Python", "TensorFlow", "Pandas", "NumPy", "Google Bard API"],
        ["Python", "TensorFlow", "Pandas", "NumPy"]];

    const data = [
        "December 2024",
        "March 2025 - April 2025",
        "September 2024 - Present",
        "July 2024 - August 2024",
        "March 2025",
        "November 2024",
        "January 2024 - May 2024",
        "August 2024 - Present",
        "December 2023 - Present (Ongoing updates)",
        "November 2023",
        "August 2023"
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
                    <h4 id="tech">Tech Stack</h4>
                    <ul id="software" className="desc">
                        {info[index].map((item, idx) => (
                            <li id="bullets" key={idx}> {item}</li>
                        ))}
                    </ul>
                </div>
                
            </div>
            
            <h4 id="fullscreen-desc" className="desc"> {props.desc} </h4>
        </div>
    );
}