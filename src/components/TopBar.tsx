import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { HeartPulseIcon } from 'lucide-react';
export function TopBar() {
  const { t } = useLanguage();
  return (
    <div className="bg-white shadow-sm py-3 px-4 flex justify-between items-center sticky top-0 z-50 border-b border-gray-100">
      <Link to="/" className="flex items-center space-x-2.5">
        <div className="bg-red-600 rounded-xl p-2">
          <HeartPulseIcon className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-xl text-gray-900 tracking-tight leading-none">
            NADI
          </span>
          <span className="text-[10px] text-gray-500 font-medium tracking-wide">
            AED EMERGENCY FINDER
          </span>
        </div>
      </Link>
      <LanguageSelector />
    </div>);

}
export default TopBar;