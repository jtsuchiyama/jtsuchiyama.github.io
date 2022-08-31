import './Icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function Icon(props) {
    const [isIconExpanded, setIsIconExpanded] = useState(false);

    const toggleIcon = () => {
        setIsIconExpanded(!isIconExpanded);
        console.log(isIconExpanded);
    }

    return (
        <div className="icon" onClick={toggleIcon} >
            {!isIconExpanded && 
                <div className="icon-front">
                    <FontAwesomeIcon icon={props.type} size={props.size} />
                </div>
            }

            {isIconExpanded && 
                <div className="icon-back">
                    <div className="icon-title">
                        {props.title}
                        <FontAwesomeIcon icon={props.type} size="s" />
                    </div>
                    <p>{props.body}</p>
                </div>
            }
        </div>
    )
}

export default Icon;