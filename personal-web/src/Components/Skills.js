import '../Styles/Skills.css';
import '../Styles/App.css';

import BarChart from "./BarChart";

export default function Skills() {

    const data = {
        labels: ["Java", "Python", "React", "JavaScript", "HTML", "CSS", "Express", "React Native", "C", "SQL"],
        datasets: [
            {
              label: 'Months of Experience',
              data: [30, 17, 6, 6, 6, 6, 5, 3, 3, 1],
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