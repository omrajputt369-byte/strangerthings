import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import openGif from '../assets/images/open.gif';

const LoadingScreen = ({ onFinished }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Determine how long to show the loader. 
        // The gif might need a few seconds (e.g. 4s)
        const timer = setTimeout(() => {
            setFadeOut(true);
            // Wait for fade out animation to finish before unmounting
            setTimeout(onFinished, 1000);
        }, 4000);

        return () => clearTimeout(timer);
    }, [onFinished]);

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="gif-container">
                <img src={openGif} alt="Loading..." className="loading-gif" />
                <div className="click-hint">Click anywhere to start</div>
            </div>
        </div>
    );
};

export default LoadingScreen;
