import '../Styles/Navbar.css';

export default function Navbar() {
	return (
		<nav>
			<a className="link" href="/"> About Me </a>
			<a className="link" href="skills"> Skills </a>
			<a className="link" href="projects"> Projects </a>
			<a className="link" href="hobbies"> Hobbies </a>
			<a className="link" href="contact"> Contact Information </a>
		</nav>
	);
};
