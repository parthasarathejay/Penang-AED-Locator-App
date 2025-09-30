import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, MapIcon } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    t
  } = useLanguage();
  return <header className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <MapIcon className="h-6 w-6" />
            <span className="font-bold text-lg">{t('appName')}</span>
          </Link>
          <div className="flex items-center">
            <LanguageSelector />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-white md:hidden">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="hover:text-red-200 transition-colors">
              {t('home')}
            </Link>
            <Link to="/submit-aed" className="hover:text-red-200 transition-colors">
              {t('submitAED')}
            </Link>
            <Link to="/report-issue" className="hover:text-red-200 transition-colors">
              {t('reportIssue')}
            </Link>
            <Link to="/cpr-guide" className="hover:text-red-200 transition-colors">
              {t('cprGuide')}
            </Link>
            <Link to="/training" className="hover:text-red-200 transition-colors">
              {t('training')}
            </Link>
            <Link to="/contact" className="hover:text-red-200 transition-colors">
              {t('contact')}
            </Link>
          </nav>
        </div>
        {isMenuOpen && <nav className="mt-3 pb-2 space-y-2 md:hidden">
            <Link to="/" className="block py-2 px-4 hover:bg-red-700 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('home')}
            </Link>
            <Link to="/submit-aed" className="block py-2 px-4 hover:bg-red-700 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('submitAED')}
            </Link>
            <Link to="/report-issue" className="block py-2 px-4 hover:bg-red-700 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('reportIssue')}
            </Link>
            <Link to="/cpr-guide" className="block py-2 px-4 hover:bg-red-700 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('cprGuide')}
            </Link>
            <Link to="/training" className="block py-2 px-4 hover:bg-red-700 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('training')}
            </Link>
            <Link to="/contact" className="block py-2 px-4 hover:bg-red-700 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('contact')}
            </Link>
          </nav>}
      </div>
    </header>;
};
export default Header;