import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <button>
        <FontAwesomeIcon icon={faBars} />
        </button>
    )
}

export default Navbar;