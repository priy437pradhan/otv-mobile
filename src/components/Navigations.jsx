import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaBeer, FaUser, FaCog } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleMenuClick = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-6">
          {isMobile && (
            <button
              className="text-2xl text-teal-400 md:hidden"
              onClick={toggleMobileMenu}
            >
              <FaBars />
            </button>
          )}
          
          {/* Desktop Menu Items */}
          <div className={`flex ${isMobile ? 'hidden' : 'space-x-6'}`}>
            {[...Array(4).keys()].map(i => (
              <div key={i} className="relative group flex items-center">
                <FaBeer className="mr-2 text-2xl text-teal-400" />
                <span
                  className="cursor-pointer hover:text-teal-300 transition duration-150 ease-in-out"
                  onClick={() => handleMenuClick(`main${i + 1}`)}
                >
                  Menu {i + 1}
                </span>
                {activeMenu === `main${i + 1}` && (
                  <motion.div
                    className="absolute top-full left-0 bg-gray-800 border border-gray-700 mt-2 rounded-md shadow-lg w-64 z-50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {[...Array(2).keys()].map(j => (
                      <a
                        key={j}
                        href="#"
                        className="flex items-center px-4 py-3 hover:bg-gray-700 transition duration-150 ease-in-out"
                      >
                        <FaUser className="mr-3 text-xl text-green-400" />
                        Submenu {i + 1}-{j + 1}
                      </a>
                    ))}
                    <div className="relative group">
                      <span
                        className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-700 transition duration-150 ease-in-out"
                        onClick={() => handleMenuClick(`sub${i + 1}-3`)}
                      >
                        <FaBeer className="mr-3 text-xl text-teal-400" />
                        Submenu {i + 1}-3
                      </span>
                      {activeMenu === `sub${i + 1}-3` && (
                        <motion.div
                          className="absolute top-0 left-full bg-gray-700 border border-gray-600 mt-2 rounded-md shadow-lg w-64 z-50"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                        >
                          {[...Array(2).keys()].map(k => (
                            <a
                              key={k}
                              href="#"
                              className="flex items-center px-4 py-3 hover:bg-gray-600 transition duration-150 ease-in-out"
                            >
                              <FaUser className="mr-3 text-xl text-green-400" />
                              Sub-Submenu {i + 1}-3-{k + 1}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobile && isMobileMenuOpen && (
            <div className="absolute top-full left-0 bg-gray-800 border border-gray-700 mt-2 rounded-md shadow-lg w-full z-50">
              {[...Array(4).keys()].map(i => (
                <div key={i} className="relative group">
                  <button
                    className="flex items-center px-4 py-3 w-full text-left hover:bg-gray-700 transition duration-150 ease-in-out"
                    onClick={() => handleMenuClick(`main${i + 1}`)}
                  >
                    <FaBeer className="mr-3 text-xl text-teal-400" />
                    Menu {i + 1}
                  </button>
                  {activeMenu === `main${i + 1}` && (
                    <motion.div
                      className="bg-gray-700 border border-gray-600 mt-2 rounded-md shadow-lg w-full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      {[...Array(2).keys()].map(j => (
                        <a
                          key={j}
                          href="#"
                          className="flex items-center px-4 py-3 hover:bg-gray-600 transition duration-150 ease-in-out"
                        >
                          <FaUser className="mr-3 text-xl text-green-400" />
                          Submenu {i + 1}-{j + 1}
                        </a>
                      ))}
                      <div className="relative group">
                        <button
                          className="flex items-center px-4 py-3 w-full text-left cursor-pointer hover:bg-gray-600 transition duration-150 ease-in-out"
                          onClick={() => handleMenuClick(`sub${i + 1}-3`)}
                        >
                          <FaBeer className="mr-3 text-xl text-teal-400" />
                          Submenu {i + 1}-3
                        </button>
                        {activeMenu === `sub${i + 1}-3` && (
                          <motion.div
                            className="bg-gray-600 border border-gray-500 mt-2 rounded-md shadow-lg w-full"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                          >
                            {[...Array(2).keys()].map(k => (
                              <a
                                key={k}
                                href="#"
                                className="flex items-center px-4 py-3 hover:bg-gray-500 transition duration-150 ease-in-out"
                              >
                                <FaUser className="mr-3 text-xl text-green-400" />
                                Sub-Submenu {i + 1}-3-{k + 1}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
