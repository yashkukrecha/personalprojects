import React, { useState } from "react";
import "../Styles/Experience.css";
import IndividualExperience from "../Components/IndividualExperience";

const experiences = [
  {
    company: "Company A",
    image: "/images/companyA.png",
    description: "Worked on frontend development and UI design.",
  },
  {
    company: "Company B",
    image: "/images/companyB.png",
    description: "Led backend API development and deployment.",
  },
  {
    company: "Company C",
    image: "/images/companyC.png",
    description: "Managed cloud infrastructure and DevOps pipelines.",
  },
];

const Experience = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="column-container">
      <h2 className="titles"> Experience </h2>
      <div className="experience-carousel">
        <IndividualExperience {...experiences[current]} />
        <div className="carousel-arrows">
          <button className="arrow left" onClick={prevSlide}>
            &lt;
          </button>
          <button className="arrow right" onClick={nextSlide}>
            &gt;
          </button>
        </div>
        <div className="carousel-dots">
          {experiences.map((_, idx) => (
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

export default Experience;
