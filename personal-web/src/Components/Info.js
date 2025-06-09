import '../Styles/App.css';
import '../Styles/Info.css';

export default function Info(props) {
    return (
        <div className="column-container" style={{width: "150px"}}>
            {props.index >= 1 && <a id="phonetags" className="tags" href={props.link} target="_blank"> {props.method}🔗 </a>}
            {props.index === 0 && <h2 className="desc"> {props.link} </h2>}
        </div>
    )
}