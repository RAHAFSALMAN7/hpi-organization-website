import React from 'react';
import { Building2, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'signin' | 'signup'>('signin');

  const textColor = "#737373";
  const bgLight = "#F4F1F1";
  const highlight = "#FFBD59";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-lg" style={{ backgroundColor: bgLight }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: highlight }}>
                <Building2 className="w-8 h-8" style={{ color: textColor }} />
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{ color: textColor, fontFamily: 'Barlow Semi Condensed' }}>HPI Organization</h1>
                <p className="text-sm" style={{ color: textColor, fontFamily: 'Open Sans' }}>Excellence in Service</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="transition-colors hover:text-[#FFBD59]" style={{ color: textColor, fontFamily: 'Open Sans' }}>About</a>
              <a href="#contact" className="transition-colors hover:text-[#FFBD59]" style={{ color: textColor, fontFamily: 'Open Sans' }}>Contact</a>
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-[#FFBD59]/90"
                style={{ backgroundColor: highlight, color: textColor, fontFamily: 'Barlow Semi Condensed' }}
              >
                Sign In
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: textColor }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t" style={{ borderColor: textColor }}>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="py-2 hover:text-[#FFBD59]" style={{ color: textColor, fontFamily: 'Open Sans' }}>About</a>
                <a href="#contact" className="py-2 hover:text-[#FFBD59]" style={{ color: textColor, fontFamily: 'Open Sans' }}>Contact</a>
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="px-4 py-2 rounded-lg font-semibold transition-colors w-fit hover:bg-[#FFBD59]/90"
                  style={{ backgroundColor: highlight, color: textColor, fontFamily: 'Barlow Semi Condensed' }}
                >
                  Sign In 
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button 
              onClick={() => setIsAuthModalOpen(false)} 
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Tabs */}
            <div className="flex mb-4 border-b">
              <button 
                onClick={() => setActiveTab('signin')}
                className={`flex-1 py-2 font-semibold ${activeTab === 'signin' ? 'border-b-2 border-yellow-500 text-yellow-600' : 'text-gray-500'}`}
              >
                Sign In
              </button>
              <button 
                onClick={() => setActiveTab('signup')}
                className={`flex-1 py-2 font-semibold ${activeTab === 'signup' ? 'border-b-2 border-yellow-500 text-yellow-600' : 'text-gray-500'}`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            {activeTab === 'signin' ? (
              <form className="space-y-4">
                <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
                <button className="w-full bg-yellow-500 text-white py-2 rounded">Login</button>
              </form>
            ) : (
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
                <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
                <button className="w-full bg-yellow-500 text-white py-2 rounded">Create Account</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
