import '../Styles/Home.css';

export default function Home() {
    return (
        <div id="home-container"> 
            <img className="pfp" alt="profile-picture" src="https://media.licdn.com/dms/image/D4E03AQGnqgGZtS95cw/profile-displayphoto-shrink_200_200/0/1686077189590?e=1707955200&v=beta&t=uNx295_YssbStty9YkeB2LWRoCEO4reVzeA9KboshvQ"></img>
            <h1 id="name"> 🤘 Yash Kukrecha 🤘 </h1>
            <h3 className="unbold" id="bio"> 
                Hi, my name is Yash Kukrecha! I'm a freshman at the University of Texas at Austin with an expected graduation date in 2027. 
                I'm interested in pursuing machine learning and artificial intelligence, but I also enjoy working on various fullstack projects.
                Feel free to contact me to chat! I love meeting new people! 
            </h3>
        </div>
    )
}