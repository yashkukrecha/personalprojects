import "../Styles/App.css";
import "../Styles/Home.css";

export default function Home() {
  return (
    <div className="row-container" id="grey">
      <img id="pfp" alt="profile" src={require(`../Icons/linkedin.jpg`)}></img>
      <div className="column-container">
        <h1 className="header" id="name">
          {" "}
          🤘 Yash Kukrecha 🤘{" "}
        </h1>
        <h3 className="desc" id="bio">
          Hi, my name is Yash Kukrecha! I'm a sophomore studying computer
          science with a minor in statistics and data science at the University
          of Texas at Austin with an expected graduation date in 2027. I'm
          interested in systems and core programming, machine learning, and have
          experience in full-stack development. Feel free to contact me to chat!
        </h3>
      </div>
    </div>
  );
}
