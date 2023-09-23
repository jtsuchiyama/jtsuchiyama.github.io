import './Home.css';
import headshot from './headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <div>
            <div className="intro">
                <div className="headline">Full-stack developer and so much more...</div>
                <img className="headshot" src={headshot} alt="headshot credits to jenna yoshimi" />
                <h3>Current Role: Global Technology Rotational Engineer at Nike</h3>
                <p>I am an aspiring full-stack developer with an interest in bettering lives through building consumer-facing applications.</p>
                <p>I am proficient in languages such as Python, C#, C, and JavaScript and also have experience with Unity and React.</p>

                <div className="home-icons">
                    <a className="linkedin" href="https://www.linkedin.com/in/jake-tsuchiyama" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></a>
                    <a className="github" href="https://github.com/jtsuchiyama" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2xl"/></a>
                    <a className="youtube" href="https://www.youtube.com/c/jtkulele" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} size="2xl"/></a>
                </div>
            </div>
            <div className="story">
                <div className="headline">My Story</div>
                <div className="story-list">
                    <ul>
                        <li>Born on <b>March 27, 2001</b> in <b>Tokyo, Japan</b></li>
                        <li>Adopted and grew up in <b>Honolulu, Hawaii</b></li>
                        <li>Let's fast forward, graduated from <b>Iolani High School</b> in <b>June 2019</b></li>
                        <li><b>Analytics Engineering Intern</b> at <b>TCW</b> during <b>Summer 2021</b></li>
                        <li><b>Software Engineer Intern</b> at <b>Nike</b> during <b>Summer 2022</b></li>
                        <li>Graduated from <b>Santa Clara University</b> with my <b>B.S. Computer Science and Engineering</b> in <b>June 2023</b></li>
                        <li>Currently working as a <b>Global Technology Rotational Engineer</b> at <b>Nike WHQ in Beaverton, Oregon</b></li>
                        <li>Loading...</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Home;