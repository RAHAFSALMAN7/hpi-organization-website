import React from 'react';
import { Megaphone, Clock, AlertCircle, Info, CheckCircle, ArrowRight } from 'lucide-react';

interface AnnouncementsSectionProps {
  preview?: boolean;
}

const AnnouncementsSection: React.FC<AnnouncementsSectionProps> = ({ preview = false }) => {
  const announcements = [
    {
      id: 1,
      title: "Mandatory Safety Training - January 25th",
      content: "All employees must attend the annual safety training session. Sessions will be held in Conference Room A from 9:00 AM to 12:00 PM.",
      type: "urgent",
      date: "2025-01-15",
      deadline: "2025-01-25"
    },
    {
      id: 2,
      title: "New Parking Policy Effective February 1st",
      content: "Updated parking assignments and guidelines will be implemented. Please review the new policy document available in the shared folder.",
      type: "info",
      date: "2025-01-14",
      deadline: null
    },
    {
      id: 3,
      title: "Office Holiday Schedule Update",
      content: "Please note the updated holiday schedule for the remainder of 2025. Plan your vacation requests accordingly.",
      type: "general",
      date: "2025-01-12",
      deadline: null
    },
    {
      id: 4,
      title: "Employee Performance Reviews Begin",
      content: "Annual performance review process starts next week. HR will be scheduling individual meetings with all employees.",
      type: "info",
      date: "2025-01-10",
      deadline: "2025-02-15"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'urgent':
        return <AlertCircle className="w-5 h-5 text-[#FFBD59]" />;
      case 'info':
        return <Info className="w-5 h-5 text-[#737373]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#737373]" />;
    }
  };

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'border-l-[#FFBD59] bg-[#F4F1F1]';
      case 'info':
        return 'border-l-[#737373] bg-[#F4F1F1]';
      default:
        return 'border-l-[#737373] bg-[#F4F1F1]';
    }
  };

  const displayItems = preview ? announcements.slice(0, 2) : announcements;

  if (preview) {
    return (
      <div className="bg-[#F4F1F1] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-[#FFBD59] p-2 rounded-lg">
              <Megaphone className="w-6 h-6 text-[#737373]" />
            </div>
            <h2 className="text-xl font-bold text-[#737373] font-barlow">Announcements</h2>
          </div>
          <span className="bg-[#FFBD59] text-[#737373] px-3 py-1 rounded-full text-sm font-medium">
            {announcements.length} active
          </span>
        </div>
        
        <div className="space-y-4">
          {displayItems.map((item) => (
            <div key={item.id} className={`border-l-4 p-4 rounded-r-lg transition-all hover:shadow-md ${getTypeStyle(item.type)}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {getTypeIcon(item.type)}
                    <h3 className="font-semibold text-[#737373] font-barlow line-clamp-1">{item.title}</h3>
                  </div>
                  <p className="text-[#737373] text-sm line-clamp-2 mb-2 font-open-sans">{item.content}</p>
                  <div className="flex items-center space-x-4 text-xs text-[#737373] font-open-sans">
                    <span>{item.date}</span>
                    {item.deadline && (
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>Deadline: {item.deadline}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 bg-[#FFBD59] text-[#737373] hover:bg-[#E6AC47] font-medium text-sm flex items-center justify-center space-x-1 py-2 rounded-lg transition-colors">
          <span>View All Announcements</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#737373] mb-4 font-barlow">Company Announcements</h1>
        <p className="text-xl text-[#737373] max-w-3xl mx-auto font-open-sans">
          Important updates, policy changes, and company-wide communications.
        </p>
      </div>

      <div className="space-y-6">
        {announcements.map((item) => (
          <div key={item.id} className={`border-l-4 p-6 rounded-r-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${getTypeStyle(item.type)}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getTypeIcon(item.type)}
                <h2 className="text-xl font-bold text-[#737373] font-barlow">{item.title}</h2>
              </div>
              <span className="text-sm text-[#737373] bg-[#F4F1F1] px-3 py-1 rounded-full shadow-sm">
                {item.date}
              </span>
            </div>
            
            <p className="text-[#737373] mb-4 leading-relaxed font-open-sans">{item.content}</p>
            
            <div className="flex items-center justify-between">
              {item.deadline && (
                <div className="flex items-center space-x-2 text-sm text-[#737373] bg-[#F4F1F1] px-3 py-2 rounded-lg shadow-sm font-open-sans">
                  <Clock className="w-4 h-4" />
                  <span>Deadline: {item.deadline}</span>
                </div>
              )}
              <button className="ml-auto bg-[#FFBD59] text-[#737373] hover:bg-[#E6AC47] font-medium text-sm flex items-center space-x-1 px-4 py-2 rounded-lg transition-all shadow-sm font-open-sans">
                <span>More Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsSection;
