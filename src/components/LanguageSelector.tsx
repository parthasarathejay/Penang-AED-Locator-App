import React from 'react';
import { GlobeIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
const LanguageSelector = () => {
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  return <div className="relative inline-block text-left">
      <div className="flex items-center space-x-1">
        <GlobeIcon className="h-5 w-5" />
        <select value={language} onChange={e => setLanguage(e.target.value as 'en' | 'ms' | 'zh' | 'ta')} className="bg-transparent border-none text-gray-800 focus:outline-none cursor-pointer text-sm" aria-label={t('languageSelector')}>
          <option value="en" className="bg-white text-gray-800">
            EN
          </option>
          <option value="ms" className="bg-white text-gray-800">
            MS
          </option>
          <option value="zh" className="bg-white text-gray-800">
            中文
          </option>
          <option value="ta" className="bg-white text-gray-800">
            தமிழ்
          </option>
        </select>
      </div>
    </div>;
};
export default LanguageSelector;