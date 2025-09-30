import React from 'react';
import AEDMap from '../components/AEDMap';
import AEDStatusLegend from '../components/AEDStatusLegend';
import { useLanguage } from '../context/LanguageContext';
import { MapPinIcon } from 'lucide-react';
const HomePage = () => {
  const {
    t
  } = useLanguage();
  return <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-4">
        <MapPinIcon className="h-6 w-6 text-red-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">{t('nearbyAEDs')}</h1>
      </div>
      <div className="mb-4">
        <AEDMap />
      </div>
      <div className="mb-6">
        <AEDStatusLegend />
      </div>
    </div>;
};
export default HomePage;