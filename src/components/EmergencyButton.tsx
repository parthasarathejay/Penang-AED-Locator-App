import React from 'react';
import { PhoneIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
export function EmergencyButton() {
  const {
    t
  } = useLanguage();
  const handleEmergencyCall = () => {
    window.location.href = 'tel:999';
  };
  return <button onClick={handleEmergencyCall} className="fixed top-20 right-4 z-50 flex items-center justify-center bg-red-600 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:bg-red-700 transition-all active:scale-95 transform border-4 border-white" aria-label="Emergency Call 999">
      <div className="bg-white/20 rounded-full p-2 mr-2">
        <PhoneIcon className="h-6 w-6" />
      </div>
      <span className="font-bold text-base">999</span>
    </button>;
}
export default EmergencyButton;