import React from 'react';
import { Newspaper, Megaphone, Bot, MessageSquare, Clock, FolderOpen, Cat as Catalog, Award, ArrowRight } from 'lucide-react';

type Section = 'dashboard' | 'news' | 'announcements' | 'assistant' | 'gm' | 'prayer' | 'folder' | 'catalogue' | 'employee';

interface DashboardGridProps {
  onSectionClick: (section: Section) => void;
}

const DashboardGrid: React.FC<DashboardGridProps> = ({ onSectionClick }) => {
  const cards = [
    { id: 'news' as Section, title: 'HPI News', description: 'Latest updates and news articles from our organization', icon: Newspaper },
    { id: 'announcements' as Section, title: 'Announcements', description: 'Important company announcements and updates', icon: Megaphone },
    { id: 'assistant' as Section, title: 'HPI Virtual Assistant', description: 'AI-powered assistant to help navigate resources', icon: Bot },
    { id: 'gm' as Section, title: 'Word from GM', description: 'Messages and updates from our General Manager', icon: MessageSquare },
    { id: 'prayer' as Section, title: 'Prayer Times', description: 'Daily prayer times and Islamic calendar', icon: Clock },
    { id: 'folder' as Section, title: 'My Shared Folder', description: 'Secure access to shared documents and files', icon: FolderOpen },
    { id: 'catalogue' as Section, title: 'Catalogue', description: 'Browse our products and services catalogue', icon: Catalog },
    { id: 'employee' as Section, title: 'Employee of the Month', description: 'Celebrating outstanding team members', icon: Award },
  ];

  return (
    <div className="space-y-8 px-4 py-8 bg-white min-h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#737373] font-barlow">Welcome to HPI Portal</h1>
        <p className="text-xl max-w-3xl mx-auto text-[#737373] font-open-sans">
          Your comprehensive organizational dashboard for news, announcements, resources, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map(({ id, title, description, icon: Icon }) => (
          <div
            key={id}
            onClick={() => onSectionClick(id)}
            className="group border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 border-[#737373] bg-[#F4F1F1]"
          >
            <div className="space-y-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-colors duration-300 group-hover:bg-[#FFBD59]"
                style={{ backgroundColor: '#FFBD59' }}
              >
                <Icon className="w-8 h-8 text-[#F4F1F1]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#737373] font-barlow">{title}</h3>
                <p className="text-sm leading-relaxed text-[#737373] font-open-sans">{description}</p>
              </div>

              <div className="flex items-center transition-colors text-[#737373] font-medium">
                <span className="text-sm">Explore</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardGrid;
