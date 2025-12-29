
import React from 'react';
import { motion } from 'framer-motion';
import './MaxEscape.css';

const MaxEscape = ({ onRestart }) => {
    return (
        <motion.div
            className="max-escape-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="max-bg"></div>
            <div className="max-content">

                <button className="restart-btn" onClick={onRestart}>
                    PLAY THE TAPE
                </button>
            </div>
        </motion.div>
    );
};

export default MaxEscape;
