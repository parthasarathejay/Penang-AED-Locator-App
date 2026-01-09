import React, { useEffect, useState, useRef } from 'react';
import { PlayIcon, PauseIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
const CPRMetronome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm] = useState(110); // Standard CPR rate is 100-120 BPM
  const [flashActive, setFlashActive] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const flashIntervalRef = useRef<number | null>(null);
  const {
    t
  } = useLanguage();
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (flashIntervalRef.current) {
        clearInterval(flashIntervalRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);
  const playClick = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const context = audioContextRef.current;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    oscillator.frequency.value = 800;
    gainNode.gain.value = 1;
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.1);
    // Visual flash effect
    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 100);
  };
  const toggleMetronome = () => {
    if (isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (flashIntervalRef.current) {
        clearInterval(flashIntervalRef.current);
        flashIntervalRef.current = null;
      }
    } else {
      playClick(); // Play first click immediately
      const interval = 60000 / bpm; // Calculate interval in ms
      intervalRef.current = window.setInterval(playClick, interval);
    }
    setIsPlaying(!isPlaying);
  };
  return <div className="flex flex-col items-center">
      <div className={`relative w-32 h-32 rounded-full flex items-center justify-center mb-6 ${isPlaying ? 'bg-red-600' : 'bg-gray-300'} ${flashActive ? 'ring-4 ring-red-300' : ''}`}>
        <span className="text-white text-3xl font-bold">{bpm}</span>
        {isPlaying && <div className={`absolute inset-0 rounded-full ${flashActive ? 'bg-red-400 opacity-50' : 'bg-transparent'} transition-colors duration-100`}></div>}
        {isPlaying && <div className="absolute -inset-3 rounded-full border-4 border-red-400 animate-ping opacity-75"></div>}
      </div>
      <div className="w-full max-w-xs bg-gray-200 h-2 mb-4 rounded-full overflow-hidden">
        {isPlaying && <div className="h-full bg-red-600 animate-pulse" style={{
        animation: `pulse ${60 / bpm}s infinite`,
        width: flashActive ? '100%' : '30%'
      }}></div>}
      </div>
      <button onClick={toggleMetronome} className={`flex items-center justify-center px-8 py-4 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${isPlaying ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500' : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'}`}>
        {isPlaying ? <>
            <PauseIcon className="h-5 w-5 mr-2" />
            {t('stopMetronome')}
          </> : <>
            <PlayIcon className="h-5 w-5 mr-2" />
            {t('startMetronome')}
          </>}
      </button>
      {isPlaying && <p className="text-sm text-gray-600 mt-4 text-center">
          Follow the visual and audio cues to maintain the correct compression
          rhythm.
        </p>}
    </div>;
};
export default CPRMetronome;