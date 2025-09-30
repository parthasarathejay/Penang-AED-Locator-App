import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AlertTriangleIcon, MapPinIcon, MessageSquareIcon, SendIcon } from 'lucide-react';
const ReportIssuePage = () => {
  const {
    t
  } = useLanguage();
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setLocation('');
      setDescription('');
    }, 1500);
  };
  if (submitted) {
    return <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <SendIcon className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your report has been received. Our team will investigate this issue.
          </p>
          <button onClick={() => setSubmitted(false)} className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Report Another Issue
          </button>
        </div>
      </div>;
  }
  return <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <AlertTriangleIcon className="h-6 w-6 text-red-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">
          {t('reportMissingAED')}
        </h1>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-1" />
                {t('location')}
              </div>
            </label>
            <input type="text" id="location" value={location} onChange={e => setLocation(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Building name and address" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
              <div className="flex items-center">
                <MessageSquareIcon className="h-5 w-5 mr-1" />
                {t('description')}
              </div>
            </label>
            <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 h-32" placeholder="Describe the issue (missing AED, damaged, etc.)" required></textarea>
          </div>
          <button type="submit" disabled={submitting} className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            {submitting ? <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                Processing...
              </div> : t('submit')}
          </button>
        </form>
      </div>
    </div>;
};
export default ReportIssuePage;