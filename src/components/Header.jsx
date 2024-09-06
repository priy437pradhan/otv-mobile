import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaBook, FaMoon, FaSun, FaLanguage, FaSearch, FaEllipsisH, FaSearchPlus, FaSearchMinus, FaTimes } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [zoom, setZoom] = useState(1);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const increaseZoom = () => setZoom(zoom + 0.1);
  const decreaseZoom = () => setZoom(zoom - 0.1);

  return (
    <header className={`bg-white text-black p-4 shadow-md ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <motion.div
            className="text-2xl font-bold cursor-pointer flex items-center space-x-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>NewsChannel</span>
          </motion.div>
          {isMobile && (
            <button
              className="lg:hidden ml-4 text-black"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaEllipsisH size={24} />}
            </button>
          )}
        </div>

        {/* Desktop view */}
        <div className={`hidden lg:flex items-center space-x-4`}>
          <button className="hover:text-gray-600" aria-label="Video">
            <FaVideo size={24} />
          </button>
          <button className="hover:text-gray-600" aria-label="Web Story">
            <FaBook size={24} />
          </button>
          <button
            className="hover:text-gray-600"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
          <button className="hover:text-gray-600" aria-label="Language">
            <FaLanguage size={24} />
          </button>
          <button
            className="hover:text-gray-600"
            onClick={increaseZoom}
            aria-label="Zoom In"
          >
            <FaSearchPlus size={24} />
          </button>
          <button
            className="hover:text-gray-600"
            onClick={decreaseZoom}
            aria-label="Zoom Out"
          >
            <FaSearchMinus size={24} />
          </button>
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search..."
              className={`px-4 py-2 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
            />
            <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 bg-white text-black flex flex-col p-4 space-y-4 z-10"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
        >
          <button
            className="self-end text-black mb-4"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              className="text-xl hover:text-gray-600"
              aria-label="Video"
            >
              <FaVideo size={24} />
            </button>
            <button
              className="text-xl hover:text-gray-600"
              aria-label="Web Story"
            >
              <FaBook size={24} />
            </button>
            <button
              className="text-xl hover:text-gray-600"
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <button
              className="text-xl hover:text-gray-600"
              aria-label="Language"
            >
              <FaLanguage size={24} />
            </button>
            <button
              className="text-xl hover:text-gray-600"
              onClick={increaseZoom}
              aria-label="Zoom In"
            >
              <FaSearchPlus size={24} />
            </button>
            <button
              className="text-xl hover:text-gray-600"
              onClick={decreaseZoom}
              aria-label="Zoom Out"
            >
              <FaSearchMinus size={24} />
            </button>
            <div className="relative w-full mt-4">
              <input
                type="text"
                placeholder="Search..."
                className={`px-4 py-2 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
              />
              <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
