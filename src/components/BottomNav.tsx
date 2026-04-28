import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  HeartPulseIcon,
  GraduationCapIcon,
  MailIcon,
  PlusCircleIcon } from
'lucide-react';
import { useLanguage } from '../context/LanguageContext';
const GOOGLE_FORM_SUBMIT_AED = 'https://forms.google.com/submit-aed-placeholder';
export function BottomNav() {
  const location = useLocation();
  const { t } = useLanguage();
  const isActive = (path: string) => location.pathname === path;
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.12)] z-40 border-t border-gray-200">
      <div className="flex items-end justify-around px-3 pt-2 pb-3 max-w-lg mx-auto">
        {/* Left 1: CPR Guide */}
        <Link
          to="/cpr-guide"
          className={`flex flex-col items-center justify-center px-2 py-2 rounded-xl transition-all min-w-[60px] ${isActive('/cpr-guide') ? 'text-red-600' : 'text-gray-500'}`}>
          
          <HeartPulseIcon className="h-6 w-6 mb-1" />
          <span className="text-[10px] font-medium text-center leading-tight">
            CPR
          </span>
        </Link>

        {/* Left 2: Training */}
        <Link
          to="/training"
          className={`flex flex-col items-center justify-center px-2 py-2 rounded-xl transition-all min-w-[60px] ${isActive('/training') ? 'text-red-600' : 'text-gray-500'}`}>
          
          <GraduationCapIcon className="h-6 w-6 mb-1" />
          <span className="text-[10px] font-medium text-center leading-tight">
            {t('training')}
          </span>
        </Link>

        {/* Center: Home - elevated priority button */}
        <Link
          to="/"
          className="flex flex-col items-center justify-center -mt-6 relative">
          
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${isActive('/') ? 'bg-red-600 text-white shadow-red-300' : 'bg-red-600 text-white shadow-red-200'}`}>
            
            <HomeIcon className="h-7 w-7" />
          </div>
          <span
            className={`text-[10px] font-bold mt-1 ${isActive('/') ? 'text-red-600' : 'text-gray-600'}`}>
            
            {t('home')}
          </span>
        </Link>

        {/* Right 1: Contact */}
        <Link
          to="/contact"
          className={`flex flex-col items-center justify-center px-2 py-2 rounded-xl transition-all min-w-[60px] ${isActive('/contact') ? 'text-red-600' : 'text-gray-500'}`}>
          
          <MailIcon className="h-6 w-6 mb-1" />
          <span className="text-[10px] font-medium text-center leading-tight">
            {t('contact')}
          </span>
        </Link>

        {/* Right 2: Submit AED / Report Issue */}
        <Link
          to="/submit-aed"
          className={`flex flex-col items-center justify-center px-2 py-2 rounded-xl transition-all min-w-[60px] ${isActive('/submit-aed') ? 'text-red-600' : 'text-gray-500'}`}>
          
          <PlusCircleIcon className="h-6 w-6 mb-1" />
          <span className="text-[10px] font-medium text-center leading-tight">
            Contribute
          </span>
        </Link>
      </div>
    </div>);

}
export default BottomNav;