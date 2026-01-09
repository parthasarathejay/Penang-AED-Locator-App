import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MailIcon, UserIcon, MessageSquareIcon, SendIcon, QuoteIcon, HeartIcon } from 'lucide-react';
export function ContactPage() {
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
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };
  if (submitted) {
    return <div className="bg-gray-50 min-h-screen pb-24">
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SendIcon className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              Message Sent!
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Thank you for your message. We'll get back to you as soon as
              possible.
            </p>
            <button onClick={() => setSubmitted(false)} className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors active:scale-95 transform">
              Send Another Message
            </button>
          </div>
        </div>
      </div>;
  }
  return <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-6">
        <div className="container mx-auto max-w-2xl">
          <div className="flex items-center mb-2">
            <MailIcon className="h-7 w-7 mr-3" />
            <h1 className="text-2xl font-bold">{t('feedbackForm')}</h1>
          </div>
          <p className="text-red-50 text-sm">
            Get in touch with us. We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Founder Quote */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border-l-4 border-red-600">
          <div className="flex items-start mb-4">
            <QuoteIcon className="h-8 w-8 text-red-600 mr-3 flex-shrink-0 mt-1" />
            <blockquote className="text-gray-700 leading-relaxed italic">
              "In a cardiac emergency, every second counts. This AED locator is
              not just an app—it's a lifeline connecting people to the nearest
              help when it matters most. Our mission is to ensure no one in
              Penang is ever more than a few minutes away from a lifesaving
              AED."
            </blockquote>
          </div>
          <div className="flex items-center justify-end">
            <div className="text-right">
              <p className="font-bold text-gray-900">
                Parthasarathe Jayashanker
              </p>
              <p className="text-sm text-gray-600">
                Founder, Penang AED Locator
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 mb-6 border border-red-100">
          <div className="flex items-center mb-4">
            <div className="bg-red-600 rounded-full p-2 mr-3">
              <HeartIcon className="h-6 w-6 text-white" fill="white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              About This Project
            </h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The Penang AED Locator is a community-driven initiative to make AED
            access clear, simple, and immediate. We are a team of volunteers
            working to map all AEDs in Penang to help save lives during cardiac
            emergencies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you'd like to join our team, contribute to the project, or have
            any questions, please reach out through the form below.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2 text-base" htmlFor="name">
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2 text-red-600" />
                  Name
                </div>
              </label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-base" placeholder="Your name" required />
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2 text-base" htmlFor="email">
                <div className="flex items-center">
                  <MailIcon className="h-5 w-5 mr-2 text-red-600" />
                  Email
                </div>
              </label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-base" placeholder="your.email@example.com" required />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 text-base" htmlFor="message">
                <div className="flex items-center">
                  <MessageSquareIcon className="h-5 w-5 mr-2 text-red-600" />
                  {t('message')}
                </div>
              </label>
              <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent h-40 text-base resize-none" placeholder="Your message or feedback" required></textarea>
            </div>

            <button type="submit" disabled={submitting} className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95 transform disabled:opacity-50 disabled:cursor-not-allowed">
              {submitting ? <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-3 border-white border-t-transparent mr-3"></div>
                  Sending...
                </div> : <div className="flex items-center justify-center">
                  <SendIcon className="h-5 w-5 mr-2" />
                  {t('send')}
                </div>}
            </button>
          </form>
        </div>
      </div>
    </div>;
}
export default ContactPage;