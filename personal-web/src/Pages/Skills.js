import '../Styles/Skills.css';
import Language from "../Components/Language";

export default function Skills() {

    const list = ["Java","Python","SQL","JavaScript","HTML","CSS","React","Express", "C"]

    return (
        <div id="skills-container"> 
            <h2 className="titles"> Languages/Frameworks </h2>
            <div id="languages">
                {list.map((language) => (<Language language={language} />))}
            </div>
            <h2 className="titles"> Certifications </h2>
            <div id="certifications">
                <div id="oracle">
                    <img className="o-icon" alt="oracle-icon" src={require("../Icons/oracle.png")}></img>
                    <h3 id="o-text" className="unbold"> Oracle Certified Associate, Java SE 8 Programmer </h3>
                </div>
            </div>
        </div>
    )
}