import React from 'react';
import { User, Calendar, Quote, ArrowRight } from 'lucide-react';

interface GMMessageProps {
  preview?: boolean;
}

const GMMessage: React.FC<GMMessageProps> = ({ preview = false }) => {
  const currentMessage = {
    title: "Leading with Purpose in 2025",
    content: `Dear HPI Team,

As we begin this new year, I want to take a moment to reflect on our incredible achievements in 2024 and share my vision for the exciting journey ahead.

Our success has always been built on three fundamental pillars: innovation, integrity, and our people. These values continue to guide us as we navigate new opportunities and challenges in an ever-evolving business landscape.

In 2025, we're focusing on sustainable growth, enhanced employee development programs, and strengthening our commitment to excellence in everything we do. Your dedication and hard work make all the difference, and I'm grateful to work alongside such a talented and passionate team.

I encourage each of you to embrace the opportunities ahead, continue learning and growing, and remember that your contributions matter. Together, we're not just building a successful company – we're creating a legacy of excellence.

Thank you for your continued commitment to HPI's mission and values.

Best regards,`,
    author: "Michael Thompson",
    position: "General Manager",
    date: "January 15, 2025",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
  };

  const textColor = "#737373";
  const bgLight = "#F4F1F1";
  const highlight = "#FFBD59";

  if (preview) {
    return (
      <div className="bg-[#F4F1F1] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`bg-[${highlight}]/20 p-2 rounded-lg`}>
              <User className="w-6 h-6 text-[#FFBD59]" />
            </div>
            <h2 className="text-xl font-bold" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>Word from GM</h2>
          </div>
          <div className="flex items-center space-x-1 text-sm" style={{ color: textColor }}>
            <Calendar className="w-4 h-4" />
            <span>{currentMessage.date}</span>
          </div>
        </div>

        <div className="flex items-start space-x-4 mb-4">
          <img
            src={currentMessage.image}
            alt={currentMessage.author}
            className="w-12 h-12 rounded-full object-cover shadow-md"
          />
          <div>
            <h3 className="font-semibold" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>{currentMessage.title}</h3>
            <p className="text-sm" style={{ color: textColor, fontFamily: 'Open Sans' }}>{currentMessage.author}</p>
            <p className="text-xs" style={{ color: textColor, fontFamily: 'Open Sans' }}>{currentMessage.position}</p>
          </div>
        </div>

        <div className={`bg-[${highlight}]/10 p-4 rounded-lg mb-4 relative`}>
          <Quote className="absolute top-2 left-2 w-4 h-4 text-[#FFBD59]/70" />
          <p className="text-sm line-clamp-3 ml-6" style={{ color: textColor, fontFamily: 'Open Sans' }}>
            {currentMessage.content.split('\n\n')[1]}
          </p>
        </div>

        <button className={`w-full text-[#FFBD59] hover:text-[#FFBD59]/80 font-medium text-sm flex items-center justify-center space-x-1 hover:bg-[${highlight}]/10 py-2 rounded-lg transition-colors`}>
          <span>Read Full Message</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>Word from the General Manager</h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: textColor, fontFamily: 'Open Sans' }}>
          Leadership insights, company updates, and personal messages from our General Manager.
        </p>
      </div>

      <div className={`bg-[${bgLight}] rounded-2xl shadow-xl overflow-hidden`}>
        <div className={`bg-[${highlight}]/30 p-8 text-[#737373] rounded-t-2xl`}>
          <div className="flex items-center space-x-6">
            <img
              src={currentMessage.image}
              alt={currentMessage.author}
              className="w-20 h-20 rounded-full object-cover border-4 border-[#FFBD59]/30 shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Barlow Semi Condensed' }}>{currentMessage.title}</h2>
              <p className="text-lg font-medium" style={{ fontFamily: 'Open Sans' }}>{currentMessage.author}</p>
              <p className="text-[#FFBD59]">{currentMessage.position}</p>
              <div className="flex items-center space-x-2 mt-2" style={{ color: textColor }}>
                <Calendar className="w-4 h-4" />
                <span>{currentMessage.date}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="relative">
            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#FFBD59]/40" />
            <div className="ml-6">
              {currentMessage.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-[#737373] leading-relaxed mb-4 text-lg" style={{ fontFamily: 'Open Sans' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#737373]/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`bg-[${highlight}]/20 p-2 rounded-lg`}>
                  <User className="w-5 h-5 text-[#FFBD59]" />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>{currentMessage.author}</p>
                  <p className="text-sm" style={{ color: textColor, fontFamily: 'Open Sans' }}>{currentMessage.position}</p>
                </div>
              </div>
              <button className={`bg-[#FFBD59] text-[#737373] px-6 py-3 rounded-lg hover:bg-[#FFBD59]/90 transition-colors font-medium`} style={{ fontFamily: 'Barlow Semi Condensed' }}>
                Share Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-8 bg-[${bgLight}] rounded-xl p-6`}>
        <h3 className="text-lg font-semibold mb-3" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>Previous Messages</h3>
        <div className="space-y-3">
          {[
            { title: "Year-End Reflection and Gratitude", date: "December 20, 2024" },
            { title: "Celebrating Our Q4 Achievements", date: "December 5, 2024" },
            { title: "Preparing for Holiday Season", date: "November 15, 2024" }
          ].map((message, index) => (
            <div key={index} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="font-medium hover:text-[#FFBD59] transition-colors" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>{message.title}</h4>
                <span className="text-sm" style={{ color: textColor, fontFamily: 'Open Sans' }}>{message.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GMMessage;
