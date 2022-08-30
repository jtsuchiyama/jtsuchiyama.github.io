import './Projects.css';
import Card from './Card.js';
import headshot from './headshot.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import drifting from './images/drifting.png'
import ukulelecv from './images/ukulele-cv.png';
import workout from './images/workout.png';
import covidtracker from './images/covidtracker.png';
import oldresume from './images/oldresume.png';
import newresume from './images/newresume.png';

function Projects() {
    return (
        <div>
            <div className="projects-headline">Projects I Have Worked On</div>
            <div className="projects-info">
                <img className="projects-headshot" src={headshot} alt="headshot" />
                <p>In my freetime, I enjoy working on projects in whatever fields that I am currently interested in</p>
                <p>My project journey conveys my different interests throughout the years.</p>
                <div className="projects-links">
                    <a className="github" href="https://www.youtube.com/c/jtkulele" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2xl"/></a>
                </div>
            </div>
            <div className="projects">
                <Card title='New Resume Website' role='Lead Engineer' lang='JavaScript' tech='React' body='Created a new personal portfolio web app JavaScript and React to practice what I learned from my Nike summer internship and give myself more creative freedom by using a more powerful front-end library' link='https://github.com/jtsuchiyama/react-app' image={newresume} alt='New Resume Website'></Card>
                <Card title='Old Resume Website' role='Lead Engineer' lang='Python' tech='Flask' body='Created a personal portfolio web app with Python and Flask to better introduce myself and display my coding projects and ukulele covers' link='https://github.com/jtsuchiyama/flask-app' image={oldresume} alt='Old Resume Website'></Card>
                <Card title='Drifting in the Water' role='Project Manager / Lead Game Developer' lang='C#, Unity' tech='N/A' body='Led a team of 13 students with an Agile approach to create a 2D side-scrolling bullet hell game that spreads awareness of ocean pollution solutions through gameplay mechanics and messaging' link='https://github.com/SCUGuildGamers/GuildGamers' image={drifting} alt='Drifting in the Water'></Card>
                <Card title='Ukulele Chord Recognition' role='Lead Engineer' lang='Python' tech='OpenCV' body='Developed an ukulele chord recognition script that recognizes 4 finger positions relative to the strings and frets and determines what chord is being played' link='https://github.com/jtsuchiyama/ukulele-cv' image={ukulelecv} alt='Ukulele Chord Recognition'></Card>
                <Card title='Workout Tracker' role='Lead Engineer' lang='Python' tech='Flask, PostgreSQL, psycopg2' body='Created a web app that allows users to track their workouts with features such as workout create, read, update, and delete operations for ease of use and account creation for security' link='https://github.com/jtsuchiyama/workout' image={workout} alt='Workout Tracker'></Card>
                <Card title='Hawaii COVID Tracker' role='Lead Engineer' lang='Python' tech='Beautiful Soup 4, Matplotlib, Pandas, Twilio' body='Developed a Python script that automatically updates the COVID case count in Hawaii daily and sends SMS Hawaii case count messages to registered phone numbers' link='https://github.com/jtsuchiyama/hawaii-covid-tracker' image={covidtracker} alt='Hawaii COVID Tracker'></Card>
            </div>
        </div>
    )
}

export default Projects;