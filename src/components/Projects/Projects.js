import './Projects.css';
import Card from './Card.js';
import drifting from './images/drifting.png'
import ukulelecv from './images/ukulele-cv.png';

function Projects() {
    return (
        <div>
            <div className="projects-headline">Projects</div>
            <div className="projects">
                <Card title='Drifting in the Water' role='Project Manager / Lead Game Developer' lang='C#, Unity' tech='N/A' body='Led a team of 13 students with an Agile approach to create a 2D side-scrolling bullet hell game that spreads awareness of ocean pollution solutions through gameplay mechanics and messaging' link='https://github.com/SCUGuildGamers/GuildGamers' image={drifting} alt='Drifting in the Water'></Card>
                <Card title='Ukulele Chord Recognition' role='Lead Engineer' lang='Python' tech='OpenCV' body='Led a team of 13 students with an Agile approach to create a 2D side-scrolling bullet hell game that spreads awareness of ocean pollution solutions through gameplay mechanics and messaging' link='https://github.com/jtsuchiyama/ukulele-cv' image={ukulelecv} alt='Ukulele Chord Recognition'></Card>
            </div>
        </div>
    )
}

export default Projects;