import React from 'react';
import { PhoneIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
const EmergencyButton = () => {
  const {
    t
  } = useLanguage();
  const handleEmergencyCall = () => {
    window.location.href = 'tel:999';
  };
  return <div className="fixed bottom-6 right-6 z-50">
      <button onClick={handleEmergencyCall} className="flex items-center justify-center bg-red-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
        <PhoneIcon className="h-6 w-6 mr-2" />
        <span className="font-bold">{t('emergency')}</span>
      </button>
    </div>;
};
export default EmergencyButton;