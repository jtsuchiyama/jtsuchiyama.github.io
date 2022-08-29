import './Card.css';
import { useState } from 'react';

function Card(props) {
    const [isCardExpanded, setIsCardExpanded] = useState(false);

    const toggleCard = () => {
        setIsCardExpanded(!isCardExpanded);
    }

    return (
        <div>
            <div className={isCardExpanded ? "card-back" : "card-front"} onClick={toggleCard}>
                <div className="front">
                    <img src={props.image} alt={props.alt}/>
                </div>
                <div className="back">
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
            <div className={isCardExpanded ? "card-title-hide" : "card-title-show"}>{props.title}</div>
        </div>
        
    )
}

export default Card;