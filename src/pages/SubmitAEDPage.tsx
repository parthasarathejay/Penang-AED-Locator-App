import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PlusCircleIcon, MapPinIcon, ClockIcon, ImageIcon, SendIcon } from 'lucide-react';
const SubmitAEDPage = () => {
  const {
    t
  } = useLanguage();
  const [location, setLocation] = useState('');
  const [accessHours, setAccessHours] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setPhoto(selectedFile);
      // Create preview URL
      const reader = new FileReader();
      reader.onload = event => {
        setPhotoPreview(event.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setLocation('');
      setAccessHours('');
      setPhoto(null);
      setPhotoPreview(null);
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
            Your AED submission has been received. Our team will verify the
            information.
          </p>
          <button onClick={() => setSubmitted(false)} className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Submit Another AED
          </button>
        </div>
      </div>;
  }
  return <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <PlusCircleIcon className="h-6 w-6 text-red-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">
          {t('submitNewAED')}
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
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="accessHours">
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-1" />
                {t('accessHours')}
              </div>
            </label>
            <select id="accessHours" value={accessHours} onChange={e => setAccessHours(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required>
              <option value="">Select access hours</option>
              <option value="24/7">Available 24/7</option>
              <option value="limited">
                Limited hours (please specify in notes)
              </option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="photo">
              <div className="flex items-center">
                <ImageIcon className="h-5 w-5 mr-1" />
                {t('photo')}
              </div>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} className="hidden" />
              {photoPreview ? <div className="relative">
                  <img src={photoPreview} alt="AED Preview" className="mx-auto h-48 object-contain mb-2" />
                  <button type="button" onClick={() => {
                setPhoto(null);
                setPhotoPreview(null);
              }} className="text-red-600 hover:text-red-800">
                    Remove photo
                  </button>
                </div> : <label htmlFor="photo" className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center py-4">
                    <ImageIcon className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-gray-600">
                      Click to upload a photo of the AED
                    </p>
                    <p className="text-gray-400 text-sm">
                      (Optional but helpful)
                    </p>
                  </div>
                </label>}
            </div>
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
export default SubmitAEDPage;