import logo from './../images/logos/DHBW-Logo.svg.png';
import './../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav>
           <img className="nav-logo" src={logo}></img>
           <ul className="nav-list">
            <li>IMBIT</li>
            <li>Journey</li>
            <li>Success Stories</li>
            <li>FAQ</li>
           </ul>
           <button className="nav-button">Bewerben</button>
        </nav>
    )
}

export default Navbar;

