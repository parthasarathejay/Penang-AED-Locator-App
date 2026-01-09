import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubmitAEDPage from './pages/SubmitAEDPage';
import ReportIssuePage from './pages/ReportIssuePage';
import CPRGuidePage from './pages/CPRGuidePage';
import TrainingPage from './pages/TrainingPage';
import ContactPage from './pages/ContactPage';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import EmergencyButton from './components/EmergencyButton';
import { LanguageProvider } from './context/LanguageContext';
export function App() {
  return <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <TopBar />
          <main className="flex-grow pb-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/submit-aed" element={<SubmitAEDPage />} />
              <Route path="/report-issue" element={<ReportIssuePage />} />
              <Route path="/cpr-guide" element={<CPRGuidePage />} />
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <BottomNav />
          <EmergencyButton />
        </div>
      </Router>
    </LanguageProvider>;
}