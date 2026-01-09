import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { aedLocations, AEDLocation } from '../data/aedLocations';
import { useLanguage } from '../context/LanguageContext';
import { NavigationIcon, MapPinIcon } from 'lucide-react';
// Fix for default marker icons in Leaflet with React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});
// Custom icons for AED status
const createAEDIcon = (status: AEDLocation['status']) => {
  return new L.Icon({
    iconUrl: status === 'available24_7' ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png' : status === 'limitedHours' ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png' : 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};
// Helper function to calculate distance between coordinates
const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
// Generate Google Maps directions URL
const getGoogleMapsDirectionsUrl = (userLat: number, userLng: number, destLat: number, destLng: number): string => {
  return `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destLat},${destLng}&travelmode=walking`;
};
// Generate Waze directions URL
const getWazeDirectionsUrl = (userLat: number, userLng: number, destLat: number, destLng: number): string => {
  return `https://waze.com/ul?ll=${destLat},${destLng}&navigate=yes&from=${userLat},${userLng}`;
};
const AEDMap = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const {
    t
  } = useLanguage();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      }, error => {
        console.error('Error getting location:', error);
        // Default to central Penang if location access is denied
        setUserLocation([5.4164, 100.3092]);
      });
    } else {
      // Default to central Penang if geolocation not supported
      setUserLocation([5.4164, 100.3092]);
    }
  }, []);
  if (!userLocation) {
    return <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>;
  }
  return <div className="h-[60vh] w-full">
      <MapContainer center={userLocation} zoom={14} style={{
      height: '100%',
      width: '100%'
    }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* User location marker with 100m radius circle */}
        <Marker position={userLocation}>
          <Popup>
            <div className="text-center font-medium">{t('youAreHere')}</div>
          </Popup>
        </Marker>
        <Circle center={userLocation} radius={100} pathOptions={{
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.1
      }} />
        {/* AED location markers without clustering */}
        {aedLocations.map(aed => {
        const distance = calculateDistance(userLocation[0], userLocation[1], aed.lat, aed.lng);
        return <Marker key={aed.id} position={[aed.lat, aed.lng]} icon={createAEDIcon(aed.status)}>
              <Popup>
                <div>
                  <h3 className="font-bold">{aed.name}</h3>
                  <p className="text-sm">{aed.address}</p>
                  <p className="mt-1">
                    <span className="font-semibold">{t('aedStatus')}: </span>
                    <span className={`
                      ${aed.status === 'available24_7' ? 'text-green-600' : aed.status === 'limitedHours' ? 'text-yellow-600' : 'text-red-600'}
                    `}>
                      {t(aed.status)}
                    </span>
                  </p>
                  {aed.accessHours && <p className="text-sm">{aed.accessHours}</p>}
                  <p className="text-xs mt-1">
                    Last verified: {aed.lastVerified}
                  </p>
                  <p className="text-sm font-medium mt-2">
                    <span className="font-semibold">{t('distance')}: </span>
                    {distance.toFixed(2)} km
                  </p>
                  <div className="mt-3 pt-2 border-t border-gray-200">
                    <p className="text-sm font-medium mb-2">
                      {t('getDirections')}:
                    </p>
                    <div className="flex space-x-2">
                      <a href={getGoogleMapsDirectionsUrl(userLocation[0], userLocation[1], aed.lat, aed.lng)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        <MapPinIcon className="h-3 w-3 mr-1" />
                        {t('googleMaps')}
                      </a>
                      <a href={getWazeDirectionsUrl(userLocation[0], userLocation[1], aed.lat, aed.lng)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-cyan-500 text-white text-xs px-2 py-1 rounded">
                        <NavigationIcon className="h-3 w-3 mr-1" />
                        {t('waze')}
                      </a>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>;
      })}
      </MapContainer>
    </div>;
};
export default AEDMap;