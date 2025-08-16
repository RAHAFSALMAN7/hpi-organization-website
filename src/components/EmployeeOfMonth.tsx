import React from 'react';
import { Award, Calendar, Star, Trophy, MapPin, Mail, ArrowRight } from 'lucide-react';

interface EmployeeOfTheMonthProps {
  preview?: boolean;
}

const EmployeeOfTheMonth: React.FC<EmployeeOfTheMonthProps> = ({ preview = false }) => {
  const currentEmployee = {
    id: 1,
    name: "Sarah Michelle Johnson",
    position: "Senior Project Manager",
    department: "Operations",
    photo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400",
    achievements: [
      "Successfully led the Q4 digital transformation project",
      "Improved team productivity by 35% through process optimization",
      "Mentored 5 junior team members with excellent results",
      "Implemented new workflow system adopted company-wide"
    ],
    quote: "Success isn't just about individual achievements, but about lifting up the entire team and creating an environment where everyone can thrive.",
    yearsWithCompany: 3,
    location: "Kuala Lumpur Office",
    email: "sarah.johnson@hpi.com",
    previousAwards: 2,
    month: "January 2025"
  };

  const previousWinners = [
    { name: "David Chen", position: "Software Developer", month: "December 2024", photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" },
    { name: "Lisa Rodriguez", position: "Marketing Manager", month: "November 2024", photo: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" },
    { name: "Ahmad Rahman", position: "Sales Director", month: "October 2024", photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" }
  ];

  // Company Colors
  const textColor = "#737373";
  const bgLight = "#F4F1F1";
  const highlight = "#FFBD59";

  if (preview) {
    return (
      <div className="bg-[#F4F1F1] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-[#FFBD59]/20 p-2 rounded-lg">
              <Award className="w-6 h-6 text-[#FFBD59]" />
            </div>
            <h2 className="text-xl font-bold" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>Employee of the Month</h2>
          </div>
          <div className="flex items-center space-x-1 text-sm" style={{ color: textColor }}>
            <Calendar className="w-4 h-4" />
            <span>{currentEmployee.month}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <img
            src={currentEmployee.photo}
            alt={currentEmployee.name}
            className="w-16 h-16 rounded-full object-cover shadow-md"
          />
          <div className="flex-1">
            <h3 className="font-bold text-lg" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>{currentEmployee.name}</h3>
            <p className="text-sm" style={{ color: textColor, fontFamily: 'Open Sans' }}>{currentEmployee.position}</p>
            <p className="text-xs" style={{ color: textColor, fontFamily: 'Open Sans' }}>{currentEmployee.department}</p>
          </div>
        </div>

        <div className={`bg-[${highlight}]/10 p-4 rounded-lg mb-4 relative`}>
          <div className="absolute top-2 right-2">
            <Trophy className="w-5 h-5 text-[#FFBD59]" />
          </div>
          <p className="text-sm line-clamp-3 italic" style={{ color: textColor, fontFamily: 'Open Sans' }}>
            "{currentEmployee.quote}"
          </p>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="text-sm font-semibold" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>Key Achievements:</h4>
          {currentEmployee.achievements.slice(0, 2).map((achievement, index) => (
            <div key={index} className="flex items-start space-x-2">
              <Star className="w-4 h-4 text-[#FFBD59] mt-0.5 flex-shrink-0" />
              <p className="text-xs line-clamp-2" style={{ color: textColor, fontFamily: 'Open Sans' }}>{achievement}</p>
            </div>
          ))}
        </div>

        <button className={`w-full text-[#FFBD59] hover:text-[#FFBD59]/80 font-medium text-sm flex items-center justify-center space-x-1 hover:bg-[#FFBD59]/10 py-2 rounded-lg transition-colors`}>
          <span>View Full Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>Employee of the Month</h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: textColor, fontFamily: 'Open Sans' }}>
          Celebrating excellence, dedication, and outstanding contributions to our organization.
        </p>
      </div>

      {/* Current Employee of the Month */}
      <div className="bg-[#F4F1F1] rounded-2xl shadow-2xl overflow-hidden mb-12">
        <div className={`bg-[#FFBD59]/30 p-8 text-[#737373] relative overflow-hidden rounded-t-2xl`}>
          <div className="absolute top-0 right-0 opacity-20">
            <Trophy className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-8 h-8 text-[#FFBD59]" />
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'Barlow Semi Condensed' }}>{currentEmployee.month}</h2>
            </div>
            <p style={{ fontFamily: 'Open Sans' }}>Recognizing Outstanding Excellence</p>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Employee Photo and Info */}
            <div className="lg:w-1/3">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={currentEmployee.photo}
                    alt={currentEmployee.name}
                    className="w-48 h-48 rounded-full object-cover shadow-xl mx-auto border-4 border-[#FFBD59]/50"
                  />
                  <div className="absolute -top-2 -right-2 bg-[#FFBD59] text-white p-3 rounded-full shadow-lg">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mt-6 mb-2" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>{currentEmployee.name}</h2>
                <p className="text-lg" style={{ color: textColor, fontFamily: 'Open Sans' }}>{currentEmployee.position}</p>
                <p className="text-sm" style={{ color: textColor, fontFamily: 'Open Sans' }}>{currentEmployee.department}</p>
              </div>

              {/* Quick Stats */}
              <div className="bg-[#F4F1F1] rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span style={{ color: textColor, fontFamily: 'Open Sans' }}>Years with HPI:</span>
                    <span className="font-semibold" style={{ fontFamily: 'Open Sans' }}>{currentEmployee.yearsWithCompany} years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{ color: textColor, fontFamily: 'Open Sans' }}>Previous Awards:</span>
                    <span className="font-semibold" style={{ fontFamily: 'Open Sans' }}>{currentEmployee.previousAwards}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#737373]/70" />
                    <span style={{ color: textColor, fontFamily: 'Open Sans' }}>{currentEmployee.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-[#737373]/70" />
                    <span style={{ color: textColor, fontFamily: 'Open Sans' }}>{currentEmployee.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements and Quote */}
            <div className="lg:w-2/3">
              {/* Quote Section */}
              <div className={`bg-[#FFBD59]/20 rounded-xl p-6 mb-8 relative`}>
                <blockquote className="text-lg italic leading-relaxed" style={{ color: textColor, fontFamily: 'Open Sans' }}>
                  "{currentEmployee.quote}"
                </blockquote>
                <div className="flex justify-end mt-4">
                  <Trophy className="w-6 h-6 text-[#FFBD59]" />
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>Outstanding Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentEmployee.achievements.map((achievement, index) => (
                    <div key={index} className="bg-[#F4F1F1] border border-[#737373]/30 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#FFBD59]/20 p-2 rounded-lg">
                          <Star className="w-5 h-5 text-[#FFBD59]" />
                        </div>
                        <p style={{ color: textColor, fontFamily: 'Open Sans' }}>{achievement}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Congratulations Button */}
              <div className="mt-8 text-center">
                <button className="bg-[#FFBD59] text-[#737373] px-8 py-4 rounded-xl hover:bg-[#FFBD59]/90 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                  Send Congratulations 🎉
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Winners */}
      <div className="bg-[#F4F1F1] rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>Previous Winners</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previousWinners.map((winner, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative inline-block mb-4">
                <img
                  src={winner.photo}
                  alt={winner.name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute -top-1 -right-1 bg-[#737373] text-white p-2 rounded-full">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <h4 className="font-semibold mb-1" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>{winner.name}</h4>
              <p className="text-sm mb-1" style={{ color: textColor, fontFamily: 'Open Sans' }}>{winner.position}</p>
              <p className="text-xs" style={{ color: textColor, fontFamily: 'Open Sans' }}>{winner.month}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-[#737373] hover:text-[#737373]/80 font-medium flex items-center justify-center space-x-1 mx-auto hover:bg-[#737373]/10 px-4 py-2 rounded-lg transition-colors" style={{ fontFamily: 'Open Sans' }}>
            <span>View All Past Winners</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeOfTheMonth;
