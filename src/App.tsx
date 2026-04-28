import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import { BottomNav } from './components/BottomNav';
import { LanguageProvider } from './context/LanguageContext';
// Lazy load pages for faster initial load (Performance Optimization)
const HomePage = lazy(() =>
import('./pages/HomePage').then((module) => ({
  default: module.HomePage
}))
);
const CPRGuidePage = lazy(() =>
import('./pages/CPRGuidePage').then((module) => ({
  default: module.CPRGuidePage
}))
);
const TrainingPage = lazy(() =>
import('./pages/TrainingPage').then((module) => ({
  default: module.TrainingPage
}))
);
const ContactPage = lazy(() =>
import('./pages/ContactPage').then((module) => ({
  default: module.ContactPage
}))
);
const SubmitAEDPage = lazy(() =>
import('./pages/SubmitAEDPage').then((module) => ({
  default: module.SubmitAEDPage
}))
);
export function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <TopBar />
          <main className="flex-grow pb-24">
            <Suspense
              fallback={
              <div className="flex items-center justify-center h-[60vh]">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-600 border-t-transparent"></div>
                </div>
              }>
              
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cpr-guide" element={<CPRGuidePage />} />
                <Route path="/training" element={<TrainingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/submit-aed" element={<SubmitAEDPage />} />
              </Routes>
            </Suspense>
          </main>
          <BottomNav />
        </div>
      </Router>
    </LanguageProvider>);

}