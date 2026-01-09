import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { aedLocations, AEDLocation } from '../data/aedLocations';
import { NavigationIcon, MapPinIcon, ClockIcon } from 'lucide-react';
interface NearbyAEDListProps {
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
export function NearbyAEDList({
  userLocation
}: NearbyAEDListProps) {
  const {
    t
  } = useLanguage();
  const [sortedAEDs, setSortedAEDs] = useState<(AEDLocation & {
    distance: number;
  })[]>([]);
  useEffect(() => {
    if (!userLocation) return;
    const aedsWithDistance = aedLocations.map(aed => ({
      ...aed,
      distance: calculateDistance(userLocation[0], userLocation[1], aed.lat, aed.lng)
    })).sort((a, b) => a.distance - b.distance).slice(0, 5);
    setSortedAEDs(aedsWithDistance);
  }, [userLocation]);
  if (!userLocation || sortedAEDs.length === 0) return null;
  return <div className="mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4 px-1">NEARBY AEDs</h2>
      <div className="space-y-3">
        {sortedAEDs.map((aed, index) => {
        const walkingTime = getWalkingTime(aed.distance);
        const statusColor = aed.status === 'available24_7' ? 'bg-green-500' : aed.status === 'limitedHours' ? 'bg-yellow-500' : 'bg-red-500';
        return <div key={aed.id} className="bg-white rounded-xl shadow-md p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="bg-gray-200 text-gray-700 font-bold text-sm px-2 py-1 rounded mr-2">
                      #{index + 1}
                    </span>
                    <div className={`${statusColor} w-2 h-2 rounded-full`}></div>
                  </div>
                  <h3 className="font-bold text-base text-gray-900">
                    {aed.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{aed.address}</p>
                </div>
                <div className="text-right ml-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {aed.distance.toFixed(1)}
                  </div>
                  <div className="text-xs text-gray-600">km</div>
                  <div className="text-xs text-gray-500 mt-1">
                    ~{walkingTime} min
                  </div>
                </div>
              </div>

              {aed.accessHours && <div className="flex items-center text-sm text-gray-600 mb-3">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>{aed.accessHours}</span>
                </div>}

              <a href={getGoogleMapsDirectionsUrl(userLocation[0], userLocation[1], aed.lat, aed.lng)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors active:scale-95 transform">
                <NavigationIcon className="h-4 w-4 mr-2" />
                GET DIRECTIONS
              </a>
            </div>;
      })}
      </div>
    </div>;
}