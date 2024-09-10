import '../Styles/Skills.css';
import '../Styles/App.css';

import BarChart from "./BarChart";

export default function Skills() {

    const data = {
        labels: ["Java", "Python", "React", "JavaScript", "HTML", "CSS", "Google Firebase", "Node.js", "Express.js", "C", "React Native", "SQL", "Flask", "C++", "Assembly"],
        datasets: [
            {
              label: 'Months of Experience',
              data: [36, 23, 15, 15, 15, 15, 12, 9, 9, 8, 7, 4, 4, 2, 2],
              backgroundColor: "#BF5700",
            },
        ],
    }

    const options = {
        indexAxis: 'y'
    };

    return (
        <div className="column-container"> 
            <h2 className="titles"> Languages/Frameworks </h2>
            <div id="bar-chart">
                <BarChart data={data} options={options} />
            </div>
            <h2 className="titles"> Certifications </h2>
            <div className="row-container" id="certifications">
                <div className="column-container" id="oracle">
                    <img id="o-icon" alt="oracle-icon" src={require("../Icons/oracle.png")}></img>
                    <h3 className="desc"> Oracle Certified Associate, Java SE 8 Programmer </h3>
                </div>
            </div>
        </div>
    )
}