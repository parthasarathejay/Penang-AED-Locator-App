import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { aedLocations, AEDLocation } from '../data/aedLocations';
import { useLanguage } from '../context/LanguageContext';
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
        {/* User location marker */}
        <Marker position={userLocation}>
          <Popup>You are here</Popup>
        </Marker>
        {/* AED location markers */}
        {aedLocations.map(aed => <Marker key={aed.id} position={[aed.lat, aed.lng]} icon={createAEDIcon(aed.status)}>
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
              </div>
            </Popup>
          </Marker>)}
      </MapContainer>
    </div>;
};
export default AEDMap;