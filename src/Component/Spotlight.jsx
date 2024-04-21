import React, { useState, useEffect } from 'react';
import './styles.css';

const Spotlight = ({ color, isActive, duration }) => {
    const [active, setActive] = useState(isActive);

    useEffect(() => {
        let timeoutId;
        if (isActive) {
            timeoutId = setTimeout(() => {
                setActive(false);
            }, duration);
        }

        return () => clearTimeout(timeoutId);  
    }, [isActive, duration]);

    useEffect(() => {
        setActive(isActive);
    }, [isActive]);

    return (
        <div className={`circle ${active ? color : 'gray'}`} />
    );
}

export default Spotlight;
