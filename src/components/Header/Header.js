import './Header.css';
import Navbar from './Navbar.js';

function Header() {
    return (
        <nav>
            <div className="links links-left">
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
            </div>
            <div className="header-title">Jake Tsuchiyama</div>
            <div className="links links-right">
                <a href="/music">Music</a>
                <a href="/aboutme">More About Me</a>
            </div>
            <Navbar></Navbar>
        </nav>
    )
}

export default Header;  