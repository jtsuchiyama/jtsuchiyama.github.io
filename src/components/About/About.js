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
        <Icon type={faGuitar} size="5x" title="Ukulele Musician" body="From competing, to playing for family and friends, to playing in the car ride to school, I have grown up with the ukulele. Now I write and record ukulele covers!" link="https://www.youtube.com/c/jtkulele" linkTitle="My YouTube!"></Icon>
        <Icon type={faDumbbell} size="5x" title="Lifter" body="I have been lifting since December 2018. I love seeing the weight go up every workout and that post-workout mental clarity. My favorite lift is by far bench press."></Icon>
        <Icon type={faPersonRunning} size="5x" title="Runner" body="I enjoy training my running between my heavy lifting sessions. I ran the Rock 'n' Roll San Jose half marathon in October 2021 and am planning to run a marathon in the future."></Icon>
        <Icon type={faGamepad} size="5x" title="Gamer" body="Having grown up playing Pokemon, I am inclined to say Pokemon is my favorite game. I currently play Teamfight Tactics (Masters) and Valorant (Gold)."></Icon>
        <Icon type={faBookOpenReader} size="5x" title="Reader" body="I have recently refound my love for reading. My favorite genres/books include manga (My Hero Academia and Tokyo Revengers) and self-help books (Atomic Habits by James Clear)."></Icon>
      </div>

    </div>
  )
}

export default About;
