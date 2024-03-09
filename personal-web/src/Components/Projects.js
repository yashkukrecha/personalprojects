import '../Styles/Projects.css';
import '../Styles/App.css';
import IndividualProject from './IndividualProject';

export default function Projects() {

    const list = ["To-Do Application", "Personal Website","Huffman Coding Project","MediGuard","Brain Tumor Classification","Computer Price Estimator"];
    const desc = ["It's what it sounds like! The To-Do Application makes it easy to add, remove, and maintain tasks using a React frontend and Express backend.",
                "The website you're looking at! Created a project portfolio website using React, combining powerful front-end interactivity and efficient content management.",
                "The Huffman Coding project uses Java to compress and decompress any file, incorporating complex data structures to save system storage.",
                "MediGuard is a full-stack application built with a Streamlit frontend and machine learning backend to automate medical billing error detection down to 3 simple clicks!",
                "The Brain Tumor Classifier utilizes a convolutional neural network to detect the presence of a tumor in a brain's MRI scan.",
                "The Computer Price Estimator estimates the cost of a computer based on given specifications such as RAM, storage, etc. It uses a neural network to do this!"];
    
    return (
        <div className="column-container" id="grey">
            <h2 className="titles"> 
                <a className="tags" href="https://github.com/yashkukrecha/personalprojects" target="_blank"> Personal Projects 🔗 </a>
            </h2>
            <div className="row-container" id="projects"> 
                {list.map((project, index) => (<IndividualProject project={project} desc={desc[index]} />))}
            </div>
        </div>
    )
}