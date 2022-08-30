import './Projects.css';
import Card from './Card.js';
import covidtracker from './images/covidtracker.png';

function Projects() {
    return (
        <div>
            <div className="projects-headline">Projects</div>
            <div className="projects">
                <Card title='Covid Tracker' lang='Python' tech='Beautiful Soup, Pandas, Matplotlib, Twilio' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' link='https://github.com/' image={covidtracker} alt='Covid Tracker'></Card>
                <Card title='Covid Tracker' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' link='https://github.com/' image={covidtracker} alt='Covid Tracker'></Card>
                <Card title='Covid Tracker' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' link='https://github.com/' image={covidtracker} alt='Covid Tracker'></Card>
                <Card title='Covid Tracker' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' link='https://github.com/' image={covidtracker} alt='Covid Tracker'></Card>
            </div>
        </div>
    )
}

export default Projects;