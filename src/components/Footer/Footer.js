import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
            <div className="copyright">Jake Tsuchiyama</div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/jake-tsuchiyama" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/jtsuchiyama" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.youtube.com/c/jtkulele" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
        </footer>
    )
}

export default Footer;