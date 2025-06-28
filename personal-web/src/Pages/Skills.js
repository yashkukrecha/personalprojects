import "../Styles/Skills.css";
import "../Styles/App.css";

import BarChart from "../Components/BarChart";

export default function Skills() {
  const data = {
    labels: [
      "Java",
      "Python",
      "React",
      "JavaScript",
      "GCP",
      "C++",
      "C",
      "AWS",
      "Express.js",
      "Flask",
      "SQL",
      "React Native",
      "Rust",
      "Go",
      ".NET (C#)",
      "R",
      "Assembly",
    ],
    datasets: [
      {
        label: "Months of Experience",
        data: [38, 25, 17, 17, 14, 12, 12, 12, 12, 12, 12, 8, 5, 3, 3, 2, 2],
        backgroundColor: "#BF5700",
      },
    ],
  };

  const options = {
    indexAxis: "y",
  };

  return (
    <div className="column-container">
      <h2 className="titles"> Skills </h2>
      <div id="bar-chart">
        <BarChart data={data} options={options} />
      </div>
      <p></p>
      <div className="row-container" id="certifications">
        <div className="column-container" id="oracle">
          <img
            id="o-icon"
            alt="oracle-icon"
            src={require("../Icons/oracle.png")}
          ></img>
          <h3 className="desc">
            {" "}
            Oracle Certified Associate, Java SE 8 Programmer{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}
