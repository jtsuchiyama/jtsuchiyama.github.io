import './Card.css';
import { useState } from 'react';

function Card(props) {
    const [isCardExpanded, setIsCardExpanded] = useState(false);

    const toggleCard = () => {
        setIsCardExpanded(!isCardExpanded);
    }

    return (
        <div className="card">
            <div className={isCardExpanded ? "card-back" : "card-front"} onClick={toggleCard}>
                <div className="front">
                    <img src={props.image} alt={props.alt}/>
                    <div className="front-title">{props.title}</div>
                </div>
                <div className="back">
                    <div className="back-content">
                        <div className="back-title">
                            {props.title}
                        </div>

                        <div className="back-lang">
                            <b>Languages:</b> {props.lang}
                        </div>

                        <div className="back-tech">
                            <b>Technologies:</b> {props.tech}
                        </div>

                        <div className="back-link">
                            <a href={props.link} target="_blank" rel="noreferrer"><b>Click me for GitHub repo!</b></a>
                        </div>

                        <div className="back-body">
                            {props.body}
                        </div>

                        
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Card;