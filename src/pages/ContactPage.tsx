import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MailIcon, UserIcon, MessageSquareIcon, SendIcon } from 'lucide-react';
const ContactPage = () => {
  const {
    t
  } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };
  if (submitted) {
    return <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <SendIcon className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your message. We'll get back to you as soon as
            possible.
          </p>
          <button onClick={() => setSubmitted(false)} className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Send Another Message
          </button>
        </div>
      </div>;
  }
  return <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <MailIcon className="h-6 w-6 text-red-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-800">
          {t('feedbackForm')}
        </h1>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-1" />
                Name
              </div>
            </label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              <div className="flex items-center">
                <MailIcon className="h-5 w-5 mr-1" />
                Email
              </div>
            </label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="your.email@example.com" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              <div className="flex items-center">
                <MessageSquareIcon className="h-5 w-5 mr-1" />
                {t('message')}
              </div>
            </label>
            <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 h-32" placeholder="Your message or feedback" required></textarea>
          </div>
          <button type="submit" disabled={submitting} className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            {submitting ? <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                Processing...
              </div> : t('send')}
          </button>
        </form>
      </div>
      <div className="mt-8 bg-gray-100 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">About This Project</h2>
        <p className="text-gray-700 mb-4">
          The Penang AED Locator is a community-driven initiative to make AED
          access clear, simple, and immediate. We are a team of volunteers
          working to map all AEDs in Penang to help save lives during cardiac
          emergencies.
        </p>
        <p className="text-gray-700">
          If you'd like to join our team, contribute to the project, or have any
          questions, please reach out through this form.
        </p>
      </div>
    </div>;
};
export default ContactPage;