import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Users, Target, X } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "Excellence is not an act, but a habit – at HPI we live by it.",
    "Teamwork fuels innovation and drives success.",
    "Your security is our top priority, always.",
    "Great organizations are built by empowering their people.",
    "Innovation thrives in a culture of trust and collaboration.",
    "Every challenge is an opportunity to grow stronger.",
    "Sustainability and responsibility guide our future.",
    "Strong values create lasting impact.",
    "Reliable solutions, powered by passionate people.",
    "Together, we aim higher and achieve more."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 إضافة سكربت HeyGen
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `!function(window){const host="https://labs.heygen.com",url=host+"/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJlNDlhNzU1ODJmNzM0NzUwOTI1YTE2NGUw%0D%0ANGMwY2E1MiIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0AL2U0OWE3NTU4MmY3MzQ3NTA5MjVhMTY0ZTA0YzBjYTUyL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImY3%0D%0AMmM4NzY4MWM3NzQ0ZmU4YWYyMDUxOTQ5YjgzYzNkIiwidXNlcm5hbWUiOiI2ODA3YTliMjIxOWE0%0D%0AYzdiOGZhNWMyNTQ0NjQ2MTI5ZSJ9&inIFrame=1",clientWidth=document.body.clientWidth,wrapDiv=document.createElement("div");wrapDiv.id="heygen-streaming-embed";const container=document.createElement("div");container.id="heygen-streaming-container";const stylesheet=document.createElement("style");stylesheet.innerHTML=\`#heygen-streaming-embed{z-index:9999;position:fixed;left:40px;bottom:40px;width:200px;height:200px;border-radius:50%;border:2px solid #fff;box-shadow:0px 8px 24px rgba(0,0,0,0.12);transition:all linear 0.1s;overflow:hidden;opacity:0;visibility:hidden;}#heygen-streaming-embed.show{opacity:1;visibility:visible;}#heygen-streaming-embed.expand{\${clientWidth<540?"height:266px;width:96%;left:50%;transform:translateX(-50%);":"height:366px;width:calc(366px * 16 / 9);"}border:0;border-radius:8px;}#heygen-streaming-container{width:100%;height:100%;}#heygen-streaming-container iframe{width:100%;height:100%;border:0;}\`;const iframe=document.createElement("iframe");iframe.allowFullscreen=!1,iframe.title="Streaming Embed",iframe.role="dialog",iframe.allow="microphone",iframe.src=url;let visible=!1,initial=!1;window.addEventListener("message",(e=>{e.origin===host&&e.data&&e.data.type&&"streaming-embed"===e.data.type&&("init"===e.data.action?(initial=!0,wrapDiv.classList.toggle("show",initial)):"show"===e.data.action?(visible=!0,wrapDiv.classList.toggle("expand",visible)):"hide"===e.data.action&&(visible=!1,wrapDiv.classList.toggle("expand",visible)))})),container.appendChild(iframe),wrapDiv.appendChild(stylesheet),wrapDiv.appendChild(container),document.body.appendChild(wrapDiv)}(globalThis);`;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/hpihomepage.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {showPopup && (
        <div className="fixed bottom-10 right-5 bg-white text-gray-800 p-4 rounded-2xl shadow-2xl w-80 animate-slideIn z-50">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">💡 Insight</h3>
            <button onClick={() => setShowPopup(false)}>
              <X className="w-5 h-5 text-gray-600 hover:text-black" />
            </button>
          </div>
          <p className="mt-2 text-sm italic">{quotes[currentQuote]}</p>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to HPI Organization
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your comprehensive hub for company news, resources, and employee
            services. Stay connected, informed, and empowered.
          </p>
          <button
            className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            style={{
              backgroundColor: '#FFBD59',
              color: '#333333',
            }}
          >
            Explore Our Services
            <ArrowRight className="inline-block w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#FFBD59', color: '#333333' }}
            >
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Secure & Reliable
            </h3>
            <p>Your data and privacy are our top priority</p>
          </div>

          <div className="text-center group">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#FFBD59', color: '#333333' }}
            >
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Employee-Focused
            </h3>
            <p>Built to serve and empower our team</p>
          </div>

          <div className="text-center group">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#FFBD59', color: '#333333' }}
            >
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Excellence Driven
            </h3>
            <p>Committed to delivering outstanding results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
