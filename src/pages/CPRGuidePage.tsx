import React from 'react';
import CPRMetronome from '../components/CPRMetronome';
import { useLanguage } from '../context/LanguageContext';
import { HeartPulseIcon, PhoneIcon, AlertCircleIcon } from 'lucide-react';
export function CPRGuidePage() {
  const {
    t
  } = useLanguage();
  const handleEmergencyCall = () => {
    window.location.href = 'tel:999';
  };
  return <div className="bg-gray-50 min-h-screen pb-24">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white px-4 py-4">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center mb-3">
            <AlertCircleIcon className="h-6 w-6 mr-2 flex-shrink-0" />
            <h1 className="text-xl font-bold">EMERGENCY CPR GUIDE</h1>
          </div>
          <button onClick={handleEmergencyCall} className="w-full bg-white text-red-600 py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-gray-100 transition-colors active:scale-95 transform">
            <PhoneIcon className="h-6 w-6 mr-2" />
            CALL 999 NOW
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* CPR Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-6">
            <HeartPulseIcon className="h-7 w-7 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              {t('cprSteps')}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-xl">
                1
              </div>
              <div>
                <p className="font-bold text-lg text-gray-900 mb-2">
                  Check Responsiveness
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  Shake and shout. Check for normal breathing. If no response,
                  proceed immediately.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-xl">
                2
              </div>
              <div>
                <p className="font-bold text-lg text-gray-900 mb-2">
                  Call for Help (999)
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  Ask someone to call 999 and find an AED. If alone, call first,
                  then start CPR.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-xl">
                3
              </div>
              <div>
                <p className="font-bold text-lg text-gray-900 mb-2">
                  Start Chest Compressions
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-2">
                  Place heel of hand on center of chest. Push hard and fast at
                  100-120 compressions per minute.
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-3 rounded">
                  <p className="text-sm font-medium text-red-900">
                    Push at least 2 inches deep. Allow full chest recoil between
                    compressions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-xl">
                4
              </div>
              <div>
                <p className="font-bold text-lg text-gray-900 mb-2">
                  Give Rescue Breaths
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  If trained, give 2 rescue breaths after every 30 compressions.
                  If not trained, continue compressions only.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-xl">
                5
              </div>
              <div>
                <p className="font-bold text-lg text-gray-900 mb-2">
                  Continue Until Help Arrives
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  Continue CPR until medical help arrives or the person shows
                  signs of life. Don't stop.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CPR Metronome */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            CPR Timing Assistant
          </h2>
          <p className="text-gray-700 mb-6 text-base">
            Use this metronome to maintain the correct compression rate of 110
            beats per minute. Match your compressions to the beat.
          </p>
          <CPRMetronome />
        </div>

        {/* Important Note */}
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 mt-6">
          <div className="flex items-start">
            <AlertCircleIcon className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-yellow-900 mb-2">Important</p>
              <p className="text-yellow-800 text-sm leading-relaxed">
                Even if you're not trained, hands-only CPR (compressions only)
                can save a life. Don't hesitate to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export default CPRGuidePage;