import React from "react";

const IndividualExperience = ({ company, image, description }) => (
  <div className="experience-slide">
    <h2 className="experience-title">{company}</h2>
    <img src={image} alt={company} className="experience-image" />
    <p className="experience-description">{description}</p>
  </div>
);

export default IndividualExperience;