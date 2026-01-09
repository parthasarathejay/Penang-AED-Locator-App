import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { aedLocations, AEDLocation } from '../data/aedLocations';
import { NavigationIcon, MapPinIcon, ClockIcon, AlertCircleIcon } from 'lucide-react';
interface NearestAEDCardProps {
  userLocation: [number, number] | null;
}
const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
const getWalkingTime = (distanceKm: number): number => {
  const walkingSpeedKmh = 5;
  return Math.ceil(distanceKm / walkingSpeedKmh * 60);
};
const getGoogleMapsDirectionsUrl = (userLat: number, userLng: number, destLat: number, destLng: number): string => {
  return `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destLat},${destLng}&travelmode=walking`;
};
const getWazeDirectionsUrl = (userLat: number, userLng: number, destLat: number, destLng: number): string => {
  return `https://waze.com/ul?ll=${destLat},${destLng}&navigate=yes&from=${userLat},${userLng}`;
};
export function NearestAEDCard({
  userLocation
}: NearestAEDCardProps) {
  const {
    t
  } = useLanguage();
  const [nearestAED, setNearestAED] = useState<(AEDLocation & {
    distance: number;
  }) | null>(null);
  useEffect(() => {
    if (!userLocation) return;
    const aedsWithDistance = aedLocations.filter(aed => aed.status !== 'outOfService').map(aed => ({
      ...aed,
      distance: calculateDistance(userLocation[0], userLocation[1], aed.lat, aed.lng)
    })).sort((a, b) => a.distance - b.distance);
    if (aedsWithDistance.length > 0) {
      setNearestAED(aedsWithDistance[0]);
    }
  }, [userLocation]);
  if (!userLocation || !nearestAED) {
    return <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-600 border-t-transparent"></div>
        </div>
      </div>;
  }
  const walkingTime = getWalkingTime(nearestAED.distance);
  const statusColor = nearestAED.status === 'available24_7' ? 'bg-green-500' : 'bg-yellow-500';
  return <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
      <div className="bg-red-600 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">NEAREST AED</h2>
          <div className={`${statusColor} w-3 h-3 rounded-full animate-pulse`}></div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-baseline mb-2">
            <span className="text-5xl font-bold text-gray-900">
              {nearestAED.distance.toFixed(1)}
            </span>
            <span className="text-2xl font-medium text-gray-600 ml-2">km</span>
          </div>
          <div className="flex items-center text-gray-600">
            <ClockIcon className="h-5 w-5 mr-2" />
            <span className="text-lg">~{walkingTime} min walk</span>
          </div>
        </div>

        <div className="mb-4 pb-4 border-b border-gray-200">
          <h3 className="font-bold text-lg text-gray-900 mb-1">
            {nearestAED.name}
          </h3>
          <p className="text-gray-600 text-sm">{nearestAED.address}</p>
          {nearestAED.accessHours && <div className="flex items-center mt-2 text-sm text-gray-600">
              <ClockIcon className="h-4 w-4 mr-1" />
              <span>{nearestAED.accessHours}</span>
            </div>}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <a href={getGoogleMapsDirectionsUrl(userLocation[0], userLocation[1], nearestAED.lat, nearestAED.lng)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-blue-600 text-white py-4 rounded-xl font-bold text-base hover:bg-blue-700 transition-colors active:scale-95 transform">
            <MapPinIcon className="h-5 w-5 mr-2" />
            Google Maps
          </a>
          <a href={getWazeDirectionsUrl(userLocation[0], userLocation[1], nearestAED.lat, nearestAED.lng)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-cyan-500 text-white py-4 rounded-xl font-bold text-base hover:bg-cyan-600 transition-colors active:scale-95 transform">
            <NavigationIcon className="h-5 w-5 mr-2" />
            Waze
          </a>
        </div>
      </div>
    </div>;
}