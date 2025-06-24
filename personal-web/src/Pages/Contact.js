import '../Styles/App.css';
import '../Styles/Contact.css';
import Info from "../Components/Info";

export default function Contact() {

    const list = [{method: "Email", link: "ykukrecha@utexas.edu"},
        {method: "LinkedIn", link: "https://www.linkedin.com/in/yash-kukrecha-676a23279/"},
        {method: "GitHub", link: "https://github.com/yashkukrecha"}];

    return (
        <div className="column-container"> 
            <h2 id="contact-title"> Contact Information </h2>
            <div className="row-container" id="contact-container">
                {list.map((element, index) => (<Info index={index} method={element.method} link={element.link}/>))}
            </div>
        </div>
    )
}