import '../Styles/Contact.css';
import Info from "../Components/Info";

export default function Contact() {

    const list = [{method: "Email", link: "ykukrecha@utexas.edu", image: "email"},
        {method: "LinkedIn", link: "https://www.linkedin.com/in/yash-kukrecha-676a23279/", image: "linkedin"},
        {method: "Phone", link: "(469) 512 - 9867", image: "phone"},
        {method: "GitHub", link: "https://github.com/yashkukrecha/personalprojects", image: "github"}];

    return (
        <div id="contact-container"> 
            <h2 className="titles"> Contact Information </h2>
            <div id="contacts">
                {list.map((element, index) => (<Info index={index} method={element.method} link={element.link} image={element.image} />))}
            </div>
        </div>
    )
}