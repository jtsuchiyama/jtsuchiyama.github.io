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
        <div>
            {!isIconExpanded && 
                <div className="icon-front">
                    <FontAwesomeIcon icon={props.type} size={props.size} onClick={toggleIcon} />
                </div>
            }

            {isIconExpanded && 
                <div className="icon-back">
                    Hello!
                </div>
            }
        </div>
    )
}

export default Icon;