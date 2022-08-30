import './Music.css';
import MusicCard from './MusicCard';

function Music() {
    return (
        <div>
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