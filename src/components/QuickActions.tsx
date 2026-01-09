import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PhoneIcon, HeartPulseIcon, MapPinIcon, AlertTriangleIcon } from 'lucide-react';
export function QuickActions() {
  const {
    t
  } = useLanguage();
  const navigate = useNavigate();
  const handleEmergencyCall = () => {
    window.location.href = 'tel:999';
  };
  return <div className="mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4 px-1">
        QUICK ACTIONS
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={handleEmergencyCall} className="bg-red-600 text-white rounded-2xl p-6 shadow-lg hover:bg-red-700 transition-colors active:scale-95 transform flex flex-col items-center justify-center min-h-[140px]">
          <div className="bg-white/20 rounded-full p-4 mb-3">
            <PhoneIcon className="h-8 w-8" />
          </div>
          <span className="font-bold text-lg text-center">CALL 999</span>
        </button>

        <button onClick={() => navigate('/cpr-guide')} className="bg-red-500 text-white rounded-2xl p-6 shadow-lg hover:bg-red-600 transition-colors active:scale-95 transform flex flex-col items-center justify-center min-h-[140px]">
          <div className="bg-white/20 rounded-full p-4 mb-3">
            <HeartPulseIcon className="h-8 w-8" />
          </div>
          <span className="font-bold text-lg text-center">CPR GUIDE</span>
        </button>

        <button onClick={() => {
        const mapElement = document.getElementById('aed-map-section');
        mapElement?.scrollIntoView({
          behavior: 'smooth'
        });
      }} className="bg-blue-600 text-white rounded-2xl p-6 shadow-lg hover:bg-blue-700 transition-colors active:scale-95 transform flex flex-col items-center justify-center min-h-[140px]">
          <div className="bg-white/20 rounded-full p-4 mb-3">
            <MapPinIcon className="h-8 w-8" />
          </div>
          <span className="font-bold text-lg text-center">VIEW MAP</span>
        </button>

        <button onClick={() => navigate('/report-issue')} className="bg-orange-500 text-white rounded-2xl p-6 shadow-lg hover:bg-orange-600 transition-colors active:scale-95 transform flex flex-col items-center justify-center min-h-[140px]">
          <div className="bg-white/20 rounded-full p-4 mb-3">
            <AlertTriangleIcon className="h-8 w-8" />
          </div>
          <span className="font-bold text-lg text-center">REPORT ISSUE</span>
        </button>
      </div>
    </div>;
}