import './Music.css';
import MusicCard from './MusicCard';
import headshot from './headshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Music() {
    return (
        <div>
            <div className="music-headline">My Ukulele Covers!</div>
            <div className="music-info">
                <img className="music-headshot" src={headshot} alt="headshot" />
                <p>When I was younger, I competed in ukulele competitions.</p> 
                <p>Nowadays, I enjoy composing ukulele covers for my favorite songs, posting YouTube videos, and playing for friends and family!</p>
                <div className="music-links">
                    <a href="https://www.youtube.com/c/jtkulele" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} size="lg"/></a>
                    <a href="https://drive.google.com/drive/folders/1M_o5XEoDZMH9rYeSdZE3gL9ZT7GX6YQ3?usp=sharing" target="_blank" rel="noreferrer">My Sheet Music!</a>
                </div>
            </div>
            <div className="music-headline">Recommended Anime Covers</div>
            <div className="covers">
                <MusicCard id="75Ih-GBTuhQ" title="Kaikai Kitan from Jujutsu Kaisen"></MusicCard>
                <MusicCard id="6QZD1eXyEFo" title="Hikaru Nara from Your Lie in April"></MusicCard>
                <MusicCard id="zqg28ZK1_XY" title="Fly High from Haikyu!!"></MusicCard>
            </div>

            <div className="music-headline">Recommended Pop Covers</div>
            <div className="covers">
                <MusicCard id="6dOvwBNhUIA" title="Yoru Ni Kakeru by YOASOBI"></MusicCard>
                <MusicCard id="TOqsFdNOlHA" title="Blinding Lights by The Weeknd"></MusicCard>
                <MusicCard id="NPnM0Trt74M" title="Sims by Lauv"></MusicCard>
            </div>
        </div>
    )
}

export default  Music;