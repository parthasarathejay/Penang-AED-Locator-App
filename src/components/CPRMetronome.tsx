import React, { useEffect, useState, useRef } from 'react';
import { PlayIcon, PauseIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
const CPRMetronome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm] = useState(110); // Standard CPR rate is 100-120 BPM
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const {
    t
  } = useLanguage();
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
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
  };
  const toggleMetronome = () => {
    if (isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      playClick(); // Play first click immediately
      const interval = 60000 / bpm; // Calculate interval in ms
      intervalRef.current = window.setInterval(playClick, interval);
    }
    setIsPlaying(!isPlaying);
  };
  return <div className="flex flex-col items-center">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isPlaying ? 'animate-pulse bg-red-600' : 'bg-gray-300'}`}>
        <span className="text-white font-bold">{bpm}</span>
      </div>
      <button onClick={toggleMetronome} className={`flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${isPlaying ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500' : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'}`}>
        {isPlaying ? <>
            <PauseIcon className="h-5 w-5 mr-2" />
            {t('stopMetronome')}
          </> : <>
            <PlayIcon className="h-5 w-5 mr-2" />
            {t('startMetronome')}
          </>}
      </button>
    </div>;
};
export default CPRMetronome;