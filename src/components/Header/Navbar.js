import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded ] = useState(false);

    return (
        <div class="nav">
            <button onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
                <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/music">Music</a>
                    </li>
                    <li>
                        <a href="/aboutme">More About Me</a>
                    </li>
                </ul>
            </div>
        </div> 
    )
}

export default Navbar;