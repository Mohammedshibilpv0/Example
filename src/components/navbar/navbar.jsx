import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation(); // To get the current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', route: '/' },
    { name: 'Product & Features', route: null }, // Dropdown for this
    { name: 'Contact', route: '/contact' },
  ];

  // Check if the current route is `/product/aupay`
  const isAupayRoute = location.pathname === '/product/aupay';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isAupayRoute
          ? 'bg-white backdrop-blur-md' // Set background to white for this route
          : isScrolled
          ? 'bg-white/20 backdrop-blur-md shadow-lg dark:bg-gray-900/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center justify-center ${
                isScrolled || isAupayRoute ? 'bg-blue-500/20' : 'bg-blue-500/30'
              } rounded-lg p-2 transition-all duration-300`}
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-auto h-8 sm:h-10 md:h-12 object-contain transition-all duration-300"
                style={{ maxWidth: '150px' }}
              />
            </div>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group cursor-pointer"
                onMouseEnter={() => item.name === 'Product & Features' && setIsDropdownOpen(true)}
                onMouseLeave={() => item.name === 'Product & Features' && setIsDropdownOpen(false)}
              >
                {item.route ? (
                  <Link
                    to={item.route}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isAupayRoute
                        ? 'text-gray-800' // Text color for the /product/aupay route
                        : isScrolled
                        ? 'text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                        : 'text-white hover:text-blue-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isAupayRoute
                        ? 'text-gray-800' // Text color for the /product/aupay route
                        : isScrolled
                        ? 'text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                        : 'text-white hover:text-blue-300'
                    }`}
                  >
                    {item.name}
                  </span>
                )}

                {/* Dropdown for "Product & Features" */}
                {item.name === 'Product & Features' && isDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2"
                  >
                    <Link
                      to="/product/aupay"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white dark:text-gray-200 dark:hover:bg-blue-600"
                    >
                      Au Pay
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <button
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled || isAupayRoute
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              } font-medium text-sm`}
            >
              Get a Free Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isAupayRoute
                  ? 'text-gray-800 hover:bg-gray-100/50 dark:text-white dark:hover:bg-gray-800/50'
                  : isScrolled
                  ? 'text-gray-800 hover:bg-gray-100/50 dark:text-white dark:hover:bg-gray-800/50'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div
            className={`px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2 ${
              isAupayRoute
                ? 'bg-white/50 backdrop-blur-lg'
                : isScrolled
                ? 'bg-white/50 backdrop-blur-lg dark:bg-gray-800/50'
                : 'bg-white/10 backdrop-blur-lg'
            }`}
          >
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.route ? (
                  <Link
                    to={item.route}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      isAupayRoute
                        ? 'text-gray-800 hover:bg-blue-500/10 hover:text-blue-600 dark:text-white dark:hover:bg-blue-500/20'
                        : isScrolled
                        ? 'text-gray-800 hover:bg-blue-500/10 hover:text-blue-600 dark:text-white dark:hover:bg-blue-500/20'
                        : 'text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      isAupayRoute
                        ? 'text-gray-800 hover:bg-blue-500/10 hover:text-blue-600 dark:text-white dark:hover:bg-blue-500/20'
                        : isScrolled
                        ? 'text-gray-800 hover:bg-blue-500/10 hover:text-blue-600 dark:text-white dark:hover:bg-blue-500/20'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </span>
                )}

                {/* Dropdown for "Product & Features" */}
                {item.name === 'Product & Features' && isDropdownOpen && (
                  <div className="mt-2 pl-4">
                    <Link
                      to="/product/aupay"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white dark:text-gray-200 dark:hover:bg-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Au Pay
                    </Link>
                  </div>
                )}
              </div>
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
