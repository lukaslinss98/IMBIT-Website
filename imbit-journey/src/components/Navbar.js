import logo from './../images/logos/DHBW-Logo.svg.png';
import './../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav>
           <img className="nav-logo" src={logo} alt=""></img>
           <ul className="nav-list">
            <li>IMBIT</li>
            <li>Journey</li>
            <li>Success Stories</li>
            <li>FAQ</li>
           </ul>
            <a href="https://www.mannheim.dhbw.de/dual-studieren/bachelor/wirtschaft/wirtschaftsinformatik/imbit/studienuebersicht" target="_blank" rel="noreferrer">
            <button className="nav-button">Bewerben</button>
            </a>
        </nav>
    )
}

export default Navbar;

