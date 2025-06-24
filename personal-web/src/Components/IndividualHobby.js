import React from "react";

const IndividualHobby = ({ hobby, description, image }) => (
  //   <div className="experience-slide">
  //     <h2 className="experience-title">{hobby}</h2>
  //     <img
  //       src={require(`../Icons/${image}.png`)}
  //       alt={hobby}
  //       className="experience-image"
  //     />
  //     <p className="experience-description">{description}</p>
  //   </div>
  <div className="row-container">
    <div className="column-container" id="hobby-container">
      <h3 id="hobby-name"> {hobby} </h3>
      <h4 className="desc" id="hobby-desc">
        {" "}
        {description}{" "}
      </h4>
    </div>
    <img
      id="image"
      alt="hobby-icon"
      src={require(`../Icons/${image}.png`)}
    ></img>
  </div>
);

export default IndividualHobby;
