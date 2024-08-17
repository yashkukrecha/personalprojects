import '../Styles/Projects.css';
import '../Styles/IndividualProject.css';
import '../Styles/App.css';
import IndividualProject from './IndividualProject';
import FullScreenComponent from './FullScreenComponent';
import {useState, useEffect} from 'react';

export default function Projects() {

    const list = ["HoopVision", "Motiv8", "To-Do Application", "Personal Website","Huffman Coding Project","MediGuard","Brain Tumor Classification","Computer Price Estimator"];
    const desc = ["This application simulates a 5-stage NBA draft using a K-Means algorithm and then provides predictive analysis of the chosen NBA players in the upcoming season using an ExtraTreesRegressor model!",
                "Motiv8 is a React Native and Expo mobile app created to celebrate users' exercise achievements by capturing moments through pictures and relaying it to friends.",
                "It's what it sounds like! The To-Do Application makes it easy to add, remove, and maintain tasks using a React frontend and Express backend.",
                "The website you're looking at! Created a project portfolio website using React, combining powerful front-end interactivity and efficient content management.",
                "The Huffman Coding project uses Java to compress and decompress any file, incorporating complex data structures to save system storage.",
                "MediGuard is a full-stack application built with a Streamlit frontend and machine learning backend to automate medical billing error detection down to 3 simple clicks!",
                "The Brain Tumor Classifier utilizes a convolutional neural network to detect the presence of a tumor in a brain's MRI scan.",
                "The Computer Price Estimator estimates the cost of a computer based on given specifications such as RAM, storage, etc. It uses a neural network to do this!"];
    
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