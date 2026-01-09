import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { HeartIcon } from 'lucide-react';
export function TopBar() {
  const {
    t
  } = useLanguage();
  return <div className="bg-white shadow-md py-4 px-4 flex justify-between items-center sticky top-0 z-30">
      <Link to="/" className="flex items-center space-x-3">
        <div className="bg-red-600 rounded-lg p-2">
          <HeartIcon className="h-6 w-6 text-white" fill="white" />
        </div>
        <div>
          <span className="font-bold text-lg text-gray-900 block leading-tight">
            {t('appName')}
          </span>
          <span className="text-xs text-gray-500">Emergency AED Finder</span>
        </div>
      </Link>
      <LanguageSelector />
    </div>;
}
export default TopBar;