import React from 'react';
import CPRMetronome from '../components/CPRMetronome';
import { PhoneIcon, AlertCircleIcon, ActivityIcon, ZapIcon } from 'lucide-react';
export function CPRGuidePage() {
  const handleEmergencyCall = () => {
    window.location.href = 'tel:999';
  };
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white px-4 py-4">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center mb-3">
            <AlertCircleIcon className="h-6 w-6 mr-2 flex-shrink-0" />
            <h1 className="text-xl font-bold">EMERGENCY CPR GUIDE</h1>
          </div>
          <button
            onClick={handleEmergencyCall}
            className="w-full bg-white text-red-600 py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-gray-100 transition-colors active:scale-95 transform shadow-lg">
            
            <PhoneIcon className="h-6 w-6 mr-2" />
            CALL 999 NOW
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        {/* When to give CPR */}
        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-red-600">
          <div className="flex items-center mb-4">
            <ActivityIcon className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-900">
              When to give CPR?
            </h2>
          </div>
          <div className="space-y-3">
            <p className="text-lg font-bold text-gray-900 bg-red-50 p-3 rounded-lg">
              Start CPR IMMEDIATELY if the person is:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>Unconscious or unresponsive</li>
              <li>Not breathing normally (or only gasping)</li>
              <li>Has no pulse</li>
            </ul>
            <p className="text-sm text-gray-500 italic mt-2">
              *When in doubt, start CPR. It is better to perform CPR on someone
              who doesn't need it than to withhold it from someone who does.
            </p>
          </div>
        </div>

        {/* CPR Steps */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">CPR Steps</h2>

          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-shrink-0">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Check & Call
                </h3>
                <p className="text-gray-700 mb-3">
                  Shake shoulders and shout. If no response, call 999
                  immediately.
                </p>
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center text-gray-500 font-medium">
                  [GIF: Checking responsiveness & calling 999]
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-shrink-0">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Position Hands
                </h3>
                <p className="text-gray-700 mb-3">
                  Place heel of one hand on center of chest. Place other hand on
                  top and interlock fingers.
                </p>
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center text-gray-500 font-medium">
                  [GIF: Hand placement on chest]
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-shrink-0">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Push Hard & Fast
                </h3>
                <p className="text-gray-700 mb-3">
                  Push down at least 2 inches at a rate of 100-120 pushes a
                  minute. Let chest rise completely.
                </p>
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center text-gray-500 font-medium">
                  [GIF: Chest compressions motion]
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CPR Metronome */}
        <div className="bg-gray-900 rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-xl font-bold mb-2">CPR Timing Assistant</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Use this metronome to maintain the correct compression rate. The
            screen will flash for deaf accessibility.
          </p>
          <CPRMetronome />
        </div>

        {/* How to use AED */}
        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-yellow-500">
          <div className="flex items-center mb-4">
            <ZapIcon className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold text-gray-900">
              How to use an AED
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">
              As soon as an AED arrives, turn it on and follow the voice
              prompts.
            </p>
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center text-gray-500 font-medium mb-3">
              [GIF: Attaching AED pads to bare chest]
            </div>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 font-medium">
              <li>Turn on the AED.</li>
              <li>
                Wipe chest dry. Attach pads to bare chest as shown on pads.
              </li>
              <li>Plug in connector if necessary.</li>
              <li>Stand clear. Let AED analyze heart rhythm.</li>
              <li>If shock advised, stand clear and press SHOCK button.</li>
              <li>Immediately resume CPR starting with compressions.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>);

}