import './MusicCard.css';

function MusicCard(props) {
    return (
        <div className="music-card">
            <a href={"https://youtu.be/" + props.id}  target="_blank" rel="noreferrer">
                    <img src={"https://img.youtube.com/vi/" + props.id + "/0.jpg"} alt="Thumbnail"/>
                    <div className="music-card-title">
                        {props.title}
                    </div> 
            </a>
        </div>       
    )
}

export default MusicCard;