import '../Styles/Info.css';

export default function Info(props) {
    return (
        <div id="main">
            <img className="info-icon" alt="contact-icon" src={require(`../Icons/${props.image}.png`)}></img>
            <div id="info">
                {props.index % 2== 1 && <a className="unbold" id="link" href={props.link} target="_blank"> {props.method} </a>}
                {props.index % 2 == 0 && <h2 id="method"> {props.method} </h2>}
                {props.index % 2 == 0 && <h2 id="desc"> {props.link} </h2>}
            </div>
        </div>
    )
}