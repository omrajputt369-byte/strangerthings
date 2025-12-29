import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import AudioController from './components/AudioController';
import UpsideDown from './components/UpsideDown';
import MaxEscape from './components/MaxEscape';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('hero');

  return (
    <>
      <AudioController view={view} />
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <AnimatePresence mode="wait">
            {view === 'hero' && (
              <Hero key="hero" onEnter={() => setView('upsideDown')} />
            )}
            {view === 'upsideDown' && (
              <UpsideDown key="upsideDown" onReturn={() => setView('maxEscape')} />
            )}
            {view === 'maxEscape' && (
              <MaxEscape key="maxEscape" onRestart={() => setView('hero')} />
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
