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
      <div className="flex items-center space-x-1 cursor-pointer">
        <GlobeIcon className="h-5 w-5" />
        <select value={language} onChange={e => setLanguage(e.target.value as 'en' | 'ms' | 'zh')} className="bg-transparent border-none text-white focus:outline-none cursor-pointer text-sm">
          <option value="en" className="bg-red-600 text-white">
            EN
          </option>
          <option value="ms" className="bg-red-600 text-white">
            MS
          </option>
          <option value="zh" className="bg-red-600 text-white">
            中文
          </option>
        </select>
      </div>
    </div>;
};
export default LanguageSelector;