import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhoneIcon, HeartPulseIcon, MapPinIcon } from 'lucide-react';
export function QuickActions() {
  const navigate = useNavigate();
  const handleEmergencyCall = () => {
    window.location.href = 'tel:999';
  };
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4 px-1">
        QUICK ACTIONS
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={handleEmergencyCall}
          className="bg-red-600 text-white rounded-2xl p-5 shadow-lg hover:bg-red-700 transition-colors active:scale-95 transform flex flex-col items-center justify-center min-h-[120px]">
          
          <div className="bg-white/20 rounded-full p-3 mb-2">
            <PhoneIcon className="h-7 w-7" />
          </div>
          <span className="font-bold text-sm text-center">CALL 999</span>
        </button>

        <button
          onClick={() => navigate('/cpr-guide')}
          className="bg-red-500 text-white rounded-2xl p-5 shadow-lg hover:bg-red-600 transition-colors active:scale-95 transform flex flex-col items-center justify-center min-h-[120px]">
          
          <div className="bg-white/20 rounded-full p-3 mb-2">
            <HeartPulseIcon className="h-7 w-7" />
          </div>
          <span className="font-bold text-sm text-center">CPR GUIDE</span>
        </button>

        <button
          onClick={() => {
            const mapElement = document.getElementById('aed-map-section');
            mapElement?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
          className="bg-blue-600 text-white rounded-2xl p-5 shadow-lg hover:bg-blue-700 transition-colors active:scale-95 transform flex flex-col items-center justify-center min-h-[120px]">
          
          <div className="bg-white/20 rounded-full p-3 mb-2">
            <MapPinIcon className="h-7 w-7" />
          </div>
          <span className="font-bold text-sm text-center">VIEW MAP</span>
        </button>
      </div>
    </div>);

}