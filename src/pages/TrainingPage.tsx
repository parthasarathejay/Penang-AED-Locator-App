import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCapIcon, CalendarIcon, MapPinIcon, ExternalLinkIcon } from 'lucide-react';
// Sample training data
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
const TrainingPage = () => {
  const {
    t
  } = useLanguage();
  return <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <GraduationCapIcon className="h-6 w-6 text-red-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">
          {t('upcomingTraining')}
        </h1>
      </div>
      <div className="space-y-4">
        {trainings.map(training => <div key={training.id} className="bg-white rounded-lg shadow-md p-5">
            <h2 className="text-xl font-semibold text-gray-800">
              {training.title}
            </h2>
            <p className="text-gray-600 mb-3">{training.organization}</p>
            <div className="flex items-start mb-2">
              <CalendarIcon className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
              <div>
                <div>
                  {new Date(training.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
                </div>
                <div className="text-gray-600">{training.time}</div>
              </div>
            </div>
            <div className="flex items-start mb-3">
              <MapPinIcon className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
              <div className="text-gray-700">{training.location}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium">Cost: {training.cost}</div>
              <a href={training.link} className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                Register
                <ExternalLinkIcon className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>)}
      </div>
      <div className="bg-gray-100 rounded-lg p-5 mt-6">
        <h3 className="font-semibold mb-2">
          Want to organize a training session?
        </h3>
        <p className="text-gray-700 mb-3">
          We can help coordinate CPR and AED training sessions for your
          community, workplace, or school.
        </p>
        <a href="/contact" className="text-red-600 font-medium hover:text-red-800 transition-colors">
          Contact us for more information →
        </a>
      </div>
    </div>;
};
export default TrainingPage;