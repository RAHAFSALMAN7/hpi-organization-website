import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Calendar, Sunrise, Sun, Sunset, Moon, ArrowRight } from 'lucide-react';

interface PrayerTimesProps {
  preview?: boolean;
}

const PrayerTimes: React.FC<PrayerTimesProps> = ({ preview = false }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const prayerTimes = [
    { name: 'Fajr', time: '05:45', icon: Sunrise, passed: currentTime.getHours() > 5 || (currentTime.getHours() === 5 && currentTime.getMinutes() >= 45) },
    { name: 'Dhuhr', time: '12:30', icon: Sun, passed: currentTime.getHours() > 12 || (currentTime.getHours() === 12 && currentTime.getMinutes() >= 30) },
    { name: 'Asr', time: '15:45', icon: Sun, passed: currentTime.getHours() > 15 || (currentTime.getHours() === 15 && currentTime.getMinutes() >= 45) },
    { name: 'Maghrib', time: '18:15', icon: Sunset, passed: currentTime.getHours() > 18 || (currentTime.getHours() === 18 && currentTime.getMinutes() >= 15) },
    { name: 'Isha', time: '19:45', icon: Moon, passed: currentTime.getHours() > 19 || (currentTime.getHours() === 19 && currentTime.getMinutes() >= 45) }
  ];

  const getNextPrayer = () => {
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    for (const prayer of prayerTimes) {
      const [hours, minutes] = prayer.time.split(':').map(Number);
      const prayerMinutes = hours * 60 + minutes;
      if (currentMinutes < prayerMinutes) return prayer;
    }
    return prayerTimes[0];
  };

  const nextPrayer = getNextPrayer();
  const location = "Kuala Lumpur, Malaysia";
  const hijriDate = "15 Rajab 1446";

  if (preview) {
    return (
      <div className="bg-[#F4F1F1] rounded-xl shadow-lg p-6 transition-shadow duration-300 font-sans">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-[#FFBD59] p-2 rounded-lg">
              <Clock className="w-6 h-6 text-[#737373]" />
            </div>
            <h2 className="text-xl font-bold text-[#737373] font-bar">Prayer Times</h2>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#737373]">{currentTime.toLocaleTimeString()}</p>
            <p className="text-xs text-[#737373]">{hijriDate}</p>
          </div>
        </div>

        <div className="bg-[#FFFFFF] p-4 rounded-lg mb-4 border border-[#737373]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#737373]">Next Prayer</p>
              <div className="flex items-center space-x-2">
                <nextPrayer.icon className="w-5 h-5 text-[#FFBD59]" />
                <span className="font-bold text-lg text-[#737373]">{nextPrayer.name}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-[#FFBD59]">{nextPrayer.time}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {prayerTimes.slice(0, 3).map((prayer) => {
            const Icon = prayer.icon;
            return (
              <div key={prayer.name} className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                prayer.passed ? 'bg-[#F4F1F1] text-[#737373]' : 'hover:bg-[#FFBD59]/20'
              }`}>
                <div className="flex items-center space-x-3">
                  <Icon className={`w-4 h-4 ${prayer.passed ? 'text-[#737373]' : 'text-[#FFBD59]'}`} />
                  <span className="font-medium">{prayer.name}</span>
                </div>
                <span className="font-mono text-sm">{prayer.time}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-1 text-xs text-[#737373]">
            <MapPin className="w-3 h-3" />
            <span>KL, Malaysia</span>
          </div>
          <button className="text-[#FFBD59] hover:text-[#737373] font-medium text-sm flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#737373] mb-4 font-bar">Daily Prayer Times</h1>
        <p className="text-xl text-[#737373] max-w-3xl mx-auto font-open">Accurate prayer times for your daily spiritual practice, updated daily for your convenience.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Time & Location */}
        <div className="lg:col-span-1">
          <div className="bg-[#FFFFFF] rounded-2xl p-6 text-[#737373] shadow-xl border border-[#737373]">
            <div className="text-center mb-6">
              <Clock className="w-12 h-12 mx-auto mb-4 text-[#737373]" />
              <div className="text-4xl font-mono font-bold mb-2">{currentTime.toLocaleTimeString()}</div>
              <p>{currentTime.toLocaleDateString()}</p>
              <p className="text-sm">{hijriDate}</p>
            </div>

            <div className="bg-[#F4F1F1] rounded-lg p-4 border border-[#737373]">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{location}</span>
              </div>
              <div className="text-sm">Local prayer times calculated according to Islamic calendar</div>
            </div>
          </div>

          <div className="mt-6 bg-[#FFFFFF] rounded-xl shadow-lg p-6 border border-[#737373]">
            <h3 className="text-lg font-semibold text-[#737373] mb-4 font-bar">Next Prayer</h3>
            <div className="bg-[#F4F1F1] p-4 rounded-lg border border-[#737373]">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <nextPrayer.icon className="w-6 h-6 text-[#FFBD59]" />
                  <div>
                    <p className="font-bold text-[#737373]">{nextPrayer.name}</p>
                    <p className="text-sm text-[#737373]">Next prayer time</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#FFBD59]">{nextPrayer.time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prayer Times List */}
        <div className="lg:col-span-2">
          <div className="bg-[#FFFFFF] rounded-2xl shadow-xl overflow-hidden border border-[#737373]">
            <div className="bg-[#F4F1F1] p-6 text-[#737373]">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold font-bar">Today's Prayer Times</h2>
                <Calendar className="w-6 h-6" />
              </div>
              <p className="mt-2">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {prayerTimes.map((prayer) => {
                  const Icon = prayer.icon;
                  const isNext = prayer.name === nextPrayer.name && !prayer.passed;
                  
                  return (
                    <div
                      key={prayer.name}
                      className={`p-4 rounded-xl transition-all duration-300 border border-[#737373] ${
                        isNext ? 'bg-[#FFBD59]/20' : prayer.passed ? 'bg-[#F4F1F1]' : 'bg-[#FFFFFF]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg ${isNext ? 'bg-[#FFBD59]' : prayer.passed ? 'bg-[#737373]' : 'bg-[#FFBD59]/30'}`}>
                            <Icon className={`w-6 h-6 ${isNext ? 'text-[#737373]' : prayer.passed ? 'text-[#FFFFFF]' : 'text-[#FFBD59]'}`} />
                          </div>
                          <div>
                            <h3 className={`text-xl font-bold ${prayer.passed ? 'text-[#737373]' : 'text-[#737373]'}`}>{prayer.name}</h3>
                            {isNext && <p className="text-[#FFBD59] text-sm font-medium">Next prayer</p>}
                            {prayer.passed && <p className="text-[#737373] text-sm">Completed</p>}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-3xl font-mono font-bold ${isNext ? 'text-[#FFBD59]' : prayer.passed ? 'text-[#737373]' : 'text-[#737373]'}`}>{prayer.time}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#F4F1F1] rounded-xl p-6 border border-[#737373]">
            <h3 className="text-lg font-semibold text-[#737373] mb-3 font-bar">Prayer Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#737373] font-open">
              <div>
                <p className="font-medium mb-2">Prayer Room Location:</p>
                <p>Level 2, Room 201</p>
                <p>Quiet space available 24/7</p>
              </div>
              <div>
                <p className="font-medium mb-2">Calculation Method:</p>
                <p>JAKIM Malaysia Standard</p>
                <p>Updated daily for accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimes;
