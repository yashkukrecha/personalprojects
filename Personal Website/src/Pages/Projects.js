import '../Styles/Projects.css';
import Project from "../Components/Project";

export default function Projects() {

    const list = ["Personal Website","Huffman Coding Project","MediGuard","Brain Tumor Classification","Computer Price Estimator"];
    const desc = ["The website you're looking at! Created a project portfolio website using React, combining powerful front-end interactivity and efficient content management.",
                "The Huffman Coding project uses Java to compress and decompress any file, incorporating complex data structures to save system storage.",
                "MediGuard is a full-stack application built with a Streamlit frontend and machine learning backend to automate medical billing error detection down to 3 simple clicks!",
                "The Brain Tumor Classifier utilizes a convolutional neural network to detect the presence of a tumor in a brain's MRI scan.",
                "The Computer Price Estimator estimates the cost of a computer based on given specifications such as RAM, storage, etc. It uses a neural network to do this!"];
    
    return (
        <div id="all-projects-container">
            <h2 id="title" className="titles"> 
                <a id="personal-proj" href="https://github.com/yashkukrecha/personalprojects" target="_blank">
                    Personal Projects 💻 
                </a>
            </h2>
            <div id="projects-container"> 
                {list.map((project, index) => (<Project project={project} desc={desc[index]} />))}
            </div>
        </div>
    )
}