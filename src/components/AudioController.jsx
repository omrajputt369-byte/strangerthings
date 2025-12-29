
import React, { useEffect, useRef } from 'react';

const AudioController = ({ view }) => {
    const audioRef = useRef(new Audio());
    const hasUserInteracted = useRef(false);

    useEffect(() => {
        const audio = audioRef.current;

        // Set properties
        audio.preload = 'auto';
        audio.loop = true;
        audio.volume = 0.5;

        // Determine track
        let targetSrc = '';
        if (view === 'hero' || view === 'upsideDown') {
            targetSrc = '/music/theme.mp3';
        } else if (view === 'maxEscape') {
            targetSrc = '/music/new.mp3';
        }

        // Update source if needed
        if (targetSrc && !audio.src.endsWith(targetSrc)) {
            audio.src = targetSrc;
            // If we already have interaction permission, play immediately
            if (hasUserInteracted.current) {
                audio.play().catch(e => console.error("Play failed even with interaction:", e));
            } else {
                // Try autoplay
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        console.log("Autoplay blocked. Waiting for interaction.");
                    });
                }
            }
        }

        // Global listener to unlock audio on FIRST interaction anywhere
        const unlockAudio = () => {
            if (!hasUserInteracted.current) {
                hasUserInteracted.current = true;
                // Try play if we have a source
                if (audio.src) {
                    audio.play().catch(e => console.error("Play failed on interaction:", e));
                }
            }
            // Clean up listeners immediately after first success
            ['click', 'keydown', 'mousedown', 'touchstart'].forEach(event =>
                document.removeEventListener(event, unlockAudio)
            );
        };

        // Add listeners immediately on mount/update
        ['click', 'keydown', 'mousedown', 'touchstart'].forEach(event =>
            document.addEventListener(event, unlockAudio)
        );

        return () => {
            // Optional cleanup
            ['click', 'keydown', 'mousedown', 'touchstart'].forEach(event =>
                document.removeEventListener(event, unlockAudio)
            );
        };
    }, [view]);

    return null;
};

export default AudioController;
