import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
import AnnouncementsSection from './components/AnnouncementsSection';
import VirtualAssistant from './components/VirtualAssistant';
import GMMessage from './components/GMMessage';
import PrayerTimes from './components/PrayerTimes';
import SharedFolder from './components/SharedFolder';
import Catalogue from './components/Catalogue';
import EmployeeOfTheMonth from './components/EmployeeOfMonth';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'news':
        return <NewsSection />;
      case 'announcements':
        return <AnnouncementsSection />;
      case 'assistant':
        return <VirtualAssistant />;
      case 'gm-message':
        return <GMMessage />;
      case 'prayer':
        return <PrayerTimes />;
      case 'shared-folder':
        return <SharedFolder />;
      case 'catalogue':
        return <Catalogue />;
      case 'employee':
        return <EmployeeOfTheMonth />;
      default:
        return (
          <>
            <HeroSection />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-16">
              <NewsSection preview />
              <AnnouncementsSection preview />
              <GMMessage preview />
              <PrayerTimes preview />
              <EmployeeOfTheMonth preview />
              <div className="lg:col-span-2 xl:col-span-1">
                {/* بدون preview لكي يعمل الشات */}
                <VirtualAssistant />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-32">
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
