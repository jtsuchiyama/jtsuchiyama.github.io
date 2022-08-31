import './About.css';
import headshot from './headshot.jpg'
import Icon from './Icon.js'
import { faGuitar, faDumbbell, faPersonRunning, faGamepad, faBookOpenReader } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div>
      <div className="about-headline">I am a...</div>
      <div className="about-info">
        <img className="about-headshot" src={headshot} alt="headshot" />
        <p>Like anyone else, there are a lot more parts of me besides being a Software Engineer.</p> 
        <p>This page can help you to learn about some of my other interests!</p>
      </div>
      <div className="about">
        <Icon type={faGuitar} size="5x" title="Performer"></Icon>
        <Icon type={faDumbbell} size="5x" title="Lifter"></Icon>
        <Icon type={faPersonRunning} size="5x" title="Runner"></Icon>
        <Icon type={faGamepad} size="5x" title="Gamer"></Icon>
        <Icon type={faBookOpenReader} size="5x" title="Reader"></Icon>
      </div>

    </div>
  )
}

export default About;
