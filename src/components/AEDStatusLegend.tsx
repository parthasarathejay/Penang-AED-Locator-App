import React from 'react';
import { useLanguage } from '../context/LanguageContext';
const AEDStatusLegend = () => {
  const {
    t
  } = useLanguage();
  return <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-2">{t('aedStatus')}</h3>
      <div className="space-y-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
          <span>{t('available24_7')}</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
          <span>{t('limitedHours')}</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
          <span>{t('outOfService')}</span>
        </div>
      </div>
    </div>;
};
export default AEDStatusLegend;