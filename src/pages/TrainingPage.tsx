import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCapIcon, CalendarIcon, MapPinIcon, ExternalLinkIcon, ClockIcon, DollarSignIcon } from 'lucide-react';
const trainings = [{
  id: 1,
  title: 'Basic CPR & AED Training',
  organization: 'Penang Heart Safe Society',
  date: '2023-12-10',
  time: '10:00 AM - 1:00 PM',
  location: 'Penang General Hospital, Training Room 2',
  cost: 'Free',
  link: '#'
}, {
  id: 2,
  title: 'Community First Aid & CPR',
  organization: 'Malaysian Red Crescent Society',
  date: '2023-12-15',
  time: '9:00 AM - 5:00 PM',
  location: 'MRCS Penang Branch, George Town',
  cost: 'RM 150',
  link: '#'
}, {
  id: 3,
  title: 'Workplace First Aid Certification',
  organization: 'St. John Ambulance',
  date: '2023-12-22',
  time: '8:30 AM - 4:30 PM',
  location: 'St. John Ambulance HQ, Jalan Macalister',
  cost: 'RM 200',
  link: '#'
}];
export function TrainingPage() {
  const {
    t
  } = useLanguage();
  return <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-6">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center mb-2">
            <GraduationCapIcon className="h-7 w-7 mr-3" />
            <h1 className="text-2xl font-bold">{t('upcomingTraining')}</h1>
          </div>
          <p className="text-red-50 text-sm">
            Learn life-saving skills. Get certified in CPR and AED use.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="space-y-4">
          {trainings.map(training => <div key={training.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {training.title}
                </h2>
                <p className="text-gray-600 font-medium mb-4">
                  {training.organization}
                </p>

                <div className="space-y-3 mb-5">
                  <div className="flex items-start">
                    <CalendarIcon className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">
                        {new Date(training.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                      </div>
                      <div className="text-gray-600 text-sm flex items-center mt-1">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {training.time}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-700">{training.location}</div>
                  </div>

                  <div className="flex items-center">
                    <DollarSignIcon className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                    <div className="font-bold text-gray-900">
                      {training.cost}
                    </div>
                  </div>
                </div>

                <a href={training.link} className="flex items-center justify-center w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors active:scale-95 transform">
                  Register Now
                  <ExternalLinkIcon className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>)}
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mt-6">
          <h3 className="font-bold text-lg text-gray-900 mb-3">
            Want to organize a training session?
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We can help coordinate CPR and AED training sessions for your
            community, workplace, or school. Get your team trained and ready to
            save lives.
          </p>
          <a href="/contact" className="inline-flex items-center text-red-600 font-bold hover:text-red-700 transition-colors">
            Contact us for more information →
          </a>
        </div>
      </div>
    </div>;
}
export default TrainingPage;