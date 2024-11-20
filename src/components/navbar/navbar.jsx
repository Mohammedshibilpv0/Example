import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../../assets/images/Logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems=['Home', 'Product & Features', 'Contact']

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/20 backdrop-blur-md shadow-lg dark:bg-gray-900/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center ${
              isScrolled ? 'bg-blue-500/20' : 'bg-blue-500/30'
            } rounded-lg p-2 transition-all duration-300`}>
              <img
                src={Logo}
                alt="Logo"
                className="w-auto h-8 sm:h-10 md:h-12 object-contain bg- transition-all duration-300"
                style={{ maxWidth: '150px' }}
              />
            </div>
            <span className={`text-xl font-bold tracking-tight ${
              isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'
            }`}>
            </span>
          </div>
        

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400' 
                    : 'text-white hover:text-blue-300'
                } group`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <button className={`px-4 py-2 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-white/10 hover:bg-white/20 text-white'
            } font-medium text-sm`}>
              Get a Free Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-800 hover:bg-gray-100/50 dark:text-white dark:hover:bg-gray-800/50'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className={`px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2 ${
            isScrolled
              ? 'bg-white/50 backdrop-blur-lg dark:bg-gray-800/50'
              : 'bg-white/10 backdrop-blur-lg'
          }`}>
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-800 hover:bg-blue-500/10 hover:text-blue-600 dark:text-white dark:hover:bg-blue-500/20'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="px-4 py-2 mt-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300 font-medium text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;