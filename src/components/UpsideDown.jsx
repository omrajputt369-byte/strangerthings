
import React from 'react';
import { motion } from 'framer-motion';
import './UpsideDown.css';

const UpsideDown = ({ onReturn }) => {
    return (
        <motion.div
            className="upside-down-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="upside-bg"></div>
            <div className="upside-content">
                <h1 className="upside-title" data-text="The Mind Flayer">The Mind Flayer</h1>
                <p className="upside-desc">
                    Shadows creep from another dimension, consuming everything in their path.
                    Unravel the mystery and face the darkness head-on.
                    Will you survive the terror of the Upside Down?
                </p>
                <button className="return-btn" onClick={onReturn}>
                    ESCAPE
                </button>
            </div>
        </motion.div>
    );
};

export default UpsideDown;
