import React from 'react';
import { 
  Home, 
  Newspaper, 
  Megaphone, 
  MessageCircle, 
  User, 
  Clock, 
  FolderOpen, 
  Book, 
  Award 
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'news', label: 'HPI News', icon: Newspaper },
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
    { id: 'assistant', label: 'Virtual Assistant', icon: MessageCircle },
    { id: 'gm-message', label: 'Word from GM', icon: User },
    { id: 'prayer', label: 'Prayer Times', icon: Clock },
    { id: 'shared-folder', label: 'My Shared Folder', icon: FolderOpen },
    { id: 'catalogue', label: 'Catalogue', icon: Book },
    { id: 'employee', label: 'Employee of Month', icon: Award },
  ];

  const textColor = "#737373";
  const highlight = "#FFBD59";
  const bgLight = "#F4F1F1";

  return (
    <nav className="fixed top-16 left-0 right-0 z-40 shadow-sm" style={{ backgroundColor: bgLight }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap font-medium`}
                  style={{
                    backgroundColor: isActive ? highlight : 'transparent',
                    color: isActive ? textColor : textColor,
                    fontFamily: 'Open Sans'
                  }}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#737373]'}`} />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
