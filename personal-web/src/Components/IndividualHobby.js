import React from "react";

const IndividualHobby = ({ hobby, description, image }) => (
  <div id="hobby">
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
