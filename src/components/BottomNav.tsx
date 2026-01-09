import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, PlusCircleIcon, AlertTriangleIcon, HeartPulseIcon, GraduationCapIcon, MailIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
export function BottomNav() {
  const location = useLocation();
  const {
    t
  } = useLanguage();
  const isActive = (path: string) => location.pathname === path;
  return <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 border-t border-gray-200">
      <div className="grid grid-cols-6 gap-1 px-2 py-3">
        <Link to="/" className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${isActive('/') ? 'text-red-600 bg-red-50' : 'text-gray-600'}`}>
          <HomeIcon className="h-6 w-6 mb-1" />
          <span className="text-xs font-medium text-center leading-tight">
            {t('home')}
          </span>
        </Link>

        <Link to="/cpr-guide" className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${isActive('/cpr-guide') ? 'text-red-600 bg-red-50' : 'text-gray-600'}`}>
          <HeartPulseIcon className="h-6 w-6 mb-1" />
          <span className="text-xs font-medium text-center leading-tight">
            {t('cprGuide')}
          </span>
        </Link>

        <Link to="/report-issue" className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${isActive('/report-issue') ? 'text-red-600 bg-red-50' : 'text-gray-600'}`}>
          <AlertTriangleIcon className="h-6 w-6 mb-1" />
          <span className="text-xs font-medium text-center leading-tight">
            {t('reportIssue')}
          </span>
        </Link>

        <Link to="/submit-aed" className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${isActive('/submit-aed') ? 'text-red-600 bg-red-50' : 'text-gray-600'}`}>
          <PlusCircleIcon className="h-6 w-6 mb-1" />
          <span className="text-xs font-medium text-center leading-tight">
            {t('submitAED')}
          </span>
        </Link>

        <Link to="/training" className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${isActive('/training') ? 'text-red-600 bg-red-50' : 'text-gray-600'}`}>
          <GraduationCapIcon className="h-6 w-6 mb-1" />
          <span className="text-xs font-medium text-center leading-tight">
            {t('training')}
          </span>
        </Link>

        <Link to="/contact" className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${isActive('/contact') ? 'text-red-600 bg-red-50' : 'text-gray-600'}`}>
          <MailIcon className="h-6 w-6 mb-1" />
          <span className="text-xs font-medium text-center leading-tight">
            {t('contact')}
          </span>
        </Link>
      </div>
    </div>;
}
export default BottomNav;