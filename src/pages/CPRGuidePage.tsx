import React from 'react';
import CPRMetronome from '../components/CPRMetronome';
import { useLanguage } from '../context/LanguageContext';
import { HeartPulseIcon } from 'lucide-react';
const CPRGuidePage = () => {
  const {
    t
  } = useLanguage();
  return <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <HeartPulseIcon className="h-6 w-6 text-red-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">{t('cprGuide')}</h1>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">{t('cprSteps')}</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
              1
            </div>
            <div>
              <p className="font-medium">{t('step1')}</p>
              <p className="text-gray-600 mt-1">
                Shake and shout. Check for normal breathing.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
              2
            </div>
            <div>
              <p className="font-medium">{t('step2')}</p>
              <p className="text-gray-600 mt-1">
                Ask someone to call 999 and find an AED.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
              3
            </div>
            <div>
              <p className="font-medium">{t('step3')}</p>
              <p className="text-gray-600 mt-1">
                Place the heel of your hand on the center of the chest. Push
                hard and fast (100-120 compressions per minute).
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
              4
            </div>
            <div>
              <p className="font-medium">{t('step4')}</p>
              <p className="text-gray-600 mt-1">
                If trained, give 2 rescue breaths after every 30 compressions.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
              5
            </div>
            <div>
              <p className="font-medium">{t('step5')}</p>
              <p className="text-gray-600 mt-1">
                Continue CPR until medical help arrives or the person shows
                signs of life.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">CPR Metronome</h2>
        <p className="text-gray-600 mb-6">
          Use this metronome to maintain the correct compression rate of 110
          beats per minute.
        </p>
        <CPRMetronome />
      </div>
    </div>;
};
export default CPRGuidePage;