import React from 'react';
import { PlusCircleIcon, AlertTriangleIcon, MapPinIcon } from 'lucide-react';
const GOOGLE_FORM_SUBMIT_AED = 'https://forms.google.com/submit-aed-placeholder';
const GOOGLE_FORM_REPORT_ISSUE =
'https://forms.google.com/report-issue-placeholder';
export function SubmitAEDPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-8">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPinIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Help Us Map Penang</h1>
          <p className="text-red-50 text-sm leading-relaxed max-w-md mx-auto">
            Your contributions help save lives. Add new AED locations or report
            issues with existing ones to keep our community safe.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl space-y-6">
        <a
          href={GOOGLE_FORM_SUBMIT_AED}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all active:scale-95 transform border-2 border-transparent hover:border-blue-500">
          
          <div className="flex items-center">
            <div className="bg-blue-100 p-4 rounded-full mr-4">
              <PlusCircleIcon className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Submit New AED
              </h2>
              <p className="text-gray-600 text-sm">
                Know an AED location that isn't on our map? Add it here.
              </p>
            </div>
          </div>
        </a>

        <a
          href={GOOGLE_FORM_REPORT_ISSUE}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all active:scale-95 transform border-2 border-transparent hover:border-orange-500">
          
          <div className="flex items-center">
            <div className="bg-orange-100 p-4 rounded-full mr-4">
              <AlertTriangleIcon className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Report an Issue
              </h2>
              <p className="text-gray-600 text-sm">
                AED missing, damaged, or details incorrect? Let us know.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>);

}