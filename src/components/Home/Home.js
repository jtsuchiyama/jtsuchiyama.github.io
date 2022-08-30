import './Home.css';
import headshot from './headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <div>
            <div className="intro">
                <div className="headline">Full-stack developer and so much more...</div>
                <img className="headshot" src={headshot} alt="headshot" />
                <p>I am an aspiring full-stack developer with an interest in building consumer-facing applications.</p>
                <p>I am proficient in languages such as Python, C, and JavaScript and also have experience with React and Unity.</p>

                <div className="home-icons">
                    <a href="https://www.linkedin.com/in/jake-tsuchiyama" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
                    <a href="https://github.com/jtsuchiyama" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="lg"/></a>
                    <a href="https://www.youtube.com/c/jtkulele" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} size="lg"/></a>
                </div>
            </div>
            <div className="story">
                <div className="headline">My Story</div>
                <div className="story-list">
                    <ul>
                        <li>Born on March 27, 2001 in Tokyo, Japan</li>
                        <li>Adopted and grew up in Honolulu, Hawaii</li>
                        <li>Let's fast forward, I graduate Iolani High School w/ zero coding experience</li>
                        <li>Santa Clara University for my B.S. Computer Science and Engineering, 2023</li>
                        <li>Turns out coding is fun!</li>
                        <li>Analytics Engineering Intern at TCW during Summer 2021</li>
                        <li>Software Engineer Intern at Nike during Summer 2022</li>
                        <li>W.I.P.</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Home;