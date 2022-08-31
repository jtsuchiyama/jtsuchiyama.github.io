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
        <p>Like anyone else, there are a lot more parts of me besides my interest in Software Engineering.</p> 
        <p>This page can help you to meet those sides of me!</p> 
      </div>
      <div className="about">
        <Icon type={faGuitar} size="5x"></Icon>
        <Icon type={faDumbbell} size="5x"></Icon>
        <Icon type={faPersonRunning} size="5x"></Icon>
        <Icon type={faGamepad} size="5x"></Icon>
        <Icon type={faBookOpenReader} size="5x"></Icon>
      </div>

    </div>
  )
}

export default About;
