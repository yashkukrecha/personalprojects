import '../Styles/Hobbies.css';
import '../Styles/App.css';

export default function Projects() {

    const list = [{hobby: "Jazz", description: "Jazz trombone has been a passion of mine for the past 4 years. I enjoy the creativity and impromptu spirit of jazz, and I continue gigging with my combo and performing with the UT Austin big band.", image: "jazz"}, 
                {hobby: "Sports", description: "Basketball and badminton are my favorite sports. Whenever I'm back home from college, I enjoy going to the recreation center and hooping with my friends.", image: "badminton"}, 
                {hobby: "Exploring Austin", description: "There's so much to explore! I enjoy walking around the city, finding live music, and looking at the holiday decorations in Austin!", image: "austin"}];
    let index = 0;

    function nextHobby() {
        index = (index + 1) % list.length;
        document.querySelector("#hobby-name").innerText = list[index].hobby;
        document.querySelector("#hobby-desc").innerText = list[index].description;
        document.querySelector("#image").src = require(`../Icons/${list[index].image}.png`);
    }

    function backHobby() {
        index = (index + 2) % list.length;
        document.querySelector("#hobby-name").innerText = list[index].hobby;
        document.querySelector("#hobby-desc").innerText = list[index].description;
        document.querySelector("#image").src = require(`../Icons/${list[index].image}.png`);
    }

    return (
        <div className="column-container"> 
            <h2 className="titles"> Hobbies </h2>
            <div className="row-container">
                <div className="column-container" id="hobby-container">
                    <h3 id="hobby-name"> {list[index].hobby} </h3>
                    <h4 className="desc" id="hobby-desc"> {list[index].description} </h4>
                </div>
                <img id="image" alt="hobby-icon" src={require(`../Icons/${list[index].image}.png`)}></img>
            </div>
            <div className="row-container">
                <button className="button" onClick={backHobby}> {"<"} back </button>
                <button className="button" onClick={nextHobby}> next {">"} </button>
            </div>
        </div>
    )
}