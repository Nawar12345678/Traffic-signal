import React, { useState, useEffect } from 'react';
import Spotlight from './Spotlight';
import './styles.css';

const Rectangular = () => {
    const colors = [
        { color: 'red', duration: 5000 },
        { color: 'yellow', duration: 1000 },
        { color: 'green', duration: 2000 }
    ];

    const [activeColor, setActiveColor] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveColor((prevIndex) => (prevIndex + 1) % colors.length);
        }, colors[activeColor].duration);
        return () => clearInterval(interval);
    }, [activeColor, colors]);

    return (
        <div className="container">
            <div className="rectangle">
                {colors.map((color, index) => (
                    <Spotlight
                        key={index}
                        color={color.color}
                        isActive={index === activeColor}
                        duration={color.duration}
                    />
                ))}
            </div>
        </div>
    );
}

export default Rectangular;
