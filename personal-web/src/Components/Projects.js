import '../Styles/Projects.css';
import '../Styles/IndividualProject.css';
import '../Styles/App.css';
import IndividualProject from './IndividualProject';
import FullScreenComponent from './FullScreenComponent';
import {useState, useEffect} from 'react';

export default function Projects() {

    const list = ["HoopVision", "Stock Trading Platform", "PINTOS", "BioDex", "Motiv8", "Seedling Volunteer Portal", "Personal Website", "MediGuard", "Brain Tumor Classification"];
    const desc = ["HoopVision simulates a 5-stage NBA draft using a K-Means algorithm and then provides predictive analysis of the chosen NBA players in the upcoming season using an ExtraTreesRegressor model!",
                "A multithreaded, socket-based stock trading platform that models real-time stock updates, order management, and client-server communication.",
                "PINTOS is an OS that manages concurrency with priority scheduling, system calls, virtual memory, page replacement mechanisms, a multilevel indexed file system, and synchronization.",
                "With BioDex, step outside, snap photos of local wildlife, and instantly turn them into collectible cards that reveal each animal's unique traits, rarity, and ecological significance.",
                "Motiv8 is a dynamic gym motivation app created to celebrate users' exercise achievements by capturing moments through pictures and relaying it to friends.",
                "Seedling's volunteer portal streamlines the mentor volunteer hour logging process with reduced bugs, CSV downloadability and a sleek UI to enhance the user experience.",
                "The website you're looking at! Created a project portfolio website using React, combining powerful front-end interactivity and efficient content management.",
                "MediGuard is a full-stack application built with a Streamlit frontend and machine learning backend to automate medical billing error detection down to 3 simple clicks!",
                "The Brain Tumor Classifier utilizes a convolutional neural network to detect the presence of a tumor in a brain's MRI scan."];
    
    const [clicked, setClicked] = useState(false);
    const [index, setIndex] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleProjectClick = (index) => {
        console.log("clicked");
        setClicked(true); 
        setIndex(index);
    };

    return (
        <div className="column-container" id="grey">
            {clicked && screenWidth > 600 && (<FullScreenComponent setTrigger={setClicked} project={list[index]} desc={desc[index]} index={index}/>)}
            <h2 className="titles"> 
                <a className="tags" href="https://github.com/yashkukrecha/personalprojects" target="_blank"> Personal Projects 🔗 </a>
            </h2>
            <h4 id="click"> (Click each project to enlarge) </h4>
            <div className="row-container" id="projects"> 
                {list.map((project, index) => (
                    <div id="project-container" className="column-container" onClick={() => handleProjectClick(index)}>
                        <IndividualProject project={project} desc={desc[index]}/>
                    </div>
                ))}
            </div>
        </div>
    )
}