import React, { useState } from "react";
import "../Styles/Hobbies.css";
import "../Styles/App.css";
import IndividualHobby from "../Components/IndividualHobby";

const list = [
  {
    hobby: "Jazz",
    description:
      "Jazz trombone has been a passion of mine for the past 4 years. I enjoy the creativity and impromptu spirit of jazz, and I continue gigging with my combo and performing with the UT Austin big band.",
    image: "jazz",
  },
  {
    hobby: "Sports",
    description:
      "Basketball and badminton are my favorite sports. Whenever I'm back home from college, I enjoy going to the recreation center and hooping with my friends.",
    image: "basketball",
  },
  {
    hobby: "Exploring Austin",
    description:
      "There's so much to explore! I enjoy walking around the city, finding live music, and looking at the holiday decorations in Austin!",
    image: "austin",
  },
  {
    hobby: "Baking",
    description:
      "I've made apple pie, brownies, chocolate chip cookies, cinnamon rolls, tiramisu, and banana bread so far!",
    image: "baking",
  },
];

const Hobbies = () => {
  const [current, setCurrent] = useState(0);

  const prevHobby = () => {
    setCurrent((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const nextHobby = () => {
    setCurrent((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="column-container" id="grey">
      <h2 className="titles"> Hobbies </h2>
      <div className="hobby-carousel">
        <IndividualHobby {...list[current]} />
        <div className="carousel-arrows">
          <button className="arrow left" onClick={prevHobby}>
            &lt;
          </button>
          <button className="arrow right" onClick={nextHobby}>
            &gt;
          </button>
        </div>
        <div className="carousel-dots">
          {list.map((_, idx) => (
            <span
              key={idx}
              className={`dot${idx === current ? " active" : ""}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
