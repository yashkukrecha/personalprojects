import '../Styles/App.css';
import '../Styles/Home.css';

export default function Home() {
    return (
        <div className="row-container" id="grey"> 
            <img id="pfp" alt="profile" src={require(`../Icons/linkedin.jpg`)}></img>
            <div className="column-container">
                <h1 className="header" id="name"> 🤘 Yash Kukrecha 🤘 </h1>
                <h3 className="desc" id="bio"> 
                    Hi, my name is Yash Kukrecha! I'm a freshman at the University of Texas at Austin with an expected graduation date in 2027. 
                    I'm interested in pursuing machine learning and artificial intelligence, but I also enjoy working on various fullstack projects.
                    Feel free to contact me to chat! I love meeting new people! 
                </h3>
            </div>
        </div>
    )
}