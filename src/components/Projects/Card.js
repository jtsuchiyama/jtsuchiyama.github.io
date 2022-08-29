import './Card.css';
import { useState } from 'react';

function Card(props) {
    const [isCardExpanded, setIsCardExpanded] = useState(false);

    const toggleCard = () => {
        setIsCardExpanded(!isCardExpanded);
    }

    return (
        <div className="card" onClick={toggleCard}>
            <div className={isCardExpanded ? "front-close" : "front-open"}>
                <img src={props.image} alt={props.alt}/>
                <div className="card-title">
                    {props.title}
                </div>
            </div>
            <div className={isCardExpanded ? "back-open" : "back-close"}>
                <div className="card-title">
                    {props.title}
                </div>

                <div className="body">
                    {props.body}
                </div>

                <div className="link">
                    <a href={props.link} target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Card;