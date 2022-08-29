import './Projects.css';
import Card from './Card.js';
import covidtracker from './images/covidtracker.png';

function Projects() {
    return (
        <div className="projects">
            <Card title='hi' body='hi' link='https://github.com/' image={covidtracker} alt='Covid Tracker'></Card>
            <Card title='hi' body='hi' link='https://github.com/' image={covidtracker} alt='Covid Tracker'></Card>
            <Card title='hi' body='hi' link='https://github.com/' image={covidtracker} alt='Covid Tracker'></Card>
            <Card title='hi' body='hi' link='https://github.com/' image={covidtracker} alt='Covid Tracker'></Card>
            <Card title='hi' body='hi' link='https://github.com/' image={covidtracker} alt='Covid Tracker'></Card>
            <Card title='hi' body='hi' link='https://github.com/' image={covidtracker} alt='Covid Tracker'></Card>
        </div>
    )
}

export default Projects;