import '../Styles/Language.css';

export default function Language(props) {
    const lan = props.language.toLowerCase();
    return (
        <div id="lang-container">
            <img className="language" alt="language-icon" src={require(`../Icons/${lan}.png`)}></img>
            <h3 id="lang-text" className="unbold"> {props.language} </h3>
        </div>
    )
}