import React, { useState } from "react";
import "../Styles/Experience.css";
import IndividualExperience from "../Components/IndividualExperience";

const experiences = [
  {
    company: "Cox Automotive",
    image: "cox",
    description: "Built internal tools improving vehicle metadata search and APIs.",
    techStack: ["Go", ".NET", "Flask", "AWS", "Terraform", "NUnit", "Cake", "React"],
    dates: "May 2025 - Present",
  },
  {
    company: "Scale AI",
    image: "scale",
    description: "Evaluated and authored LLM code prompts and datasets.",
    techStack: ["C++", "Rust", "C", "Python"],
    dates: "February 2025 - Present",
  },
  {
    company: "Seedling",
    image: "seedling volunteer portal",
    description: "Built full-stack portal for volunteer hour tracking automation.",
    techStack: ["React", "JavaScript", "Node.js", "Express.js", "AWS", "Firebase Authentication"],
    dates: "August 2024 - Present",
  },
  {
    company: "TPEO",
    image: "tpeo",
    description: "Led curriculum, recruitment, and engineering management as engineering director.",
    techStack: ["React + React Native", "JavaScript", "Node.js", "Express.js", "Google Cloud Platform", "Docker", "Vercel", "Git"],
    dates: "September 2023 - Present",
  },
  {
    company: "Longhorn Developers",
    image: "longhorn developers",
    description: "Engineered student-facing registration tools such as UT Registration Plus.",
    techStack: ["React", "TypeScript", "MySQL"],
    dates: "February 2025 - May 2025",
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
