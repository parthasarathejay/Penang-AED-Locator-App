import React, { useEffect, useState } from 'react';
import AEDMap from '../components/AEDMap';
import { NearestAEDCard } from '../components/NearestAEDCard';
import { QuickActions } from '../components/QuickActions';
import { NearbyAEDList } from '../components/NearbyAEDList';
import { useLanguage } from '../context/LanguageContext';
import { AlertCircleIcon } from 'lucide-react';
export function HomePage() {
  const {
    t
  } = useLanguage();
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      }, error => {
        console.error('Error getting location:', error);
        setUserLocation([5.4164, 100.3092]);
      });
    } else {
      setUserLocation([5.4164, 100.3092]);
    }
  }, []);
  return <div className="bg-gray-50 min-h-screen pb-24">
      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white px-4 py-3">
        <div className="flex items-center justify-center">
          <AlertCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" />
          <p className="text-sm font-medium text-center">
            In a cardiac emergency, every second counts
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Nearest AED Card */}
        <NearestAEDCard userLocation={userLocation} />

        {/* Quick Actions */}
        <QuickActions />

        {/* Nearby AEDs List */}
        <NearbyAEDList userLocation={userLocation} />

        {/* Map Section */}
        <div id="aed-map-section" className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 px-1">
            ALL AEDs MAP
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <AEDMap />
          </div>
        </div>

        {/* Status Legend */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="font-bold text-base mb-3 text-gray-800">AED Status</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-700">Available 24/7</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-700">Limited Hours</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-700">Out of Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export default HomePage;