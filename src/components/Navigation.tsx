import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Navigation - Static */}
      <div className="lg:hidden relative py-4 px-6">
        <Link to="/">
          <img 
            src="https://i.postimg.cc/BbSdBndC/67214d0664d9afbe71ca25b0-sentorov-2.png" 
            alt="Sentrovo" 
            className="h-8 mx-auto"
          />
        </Link>
      </div>

      {/* Desktop Navigation - Fixed */}
      <nav className="hidden lg:block fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 items-center">
            {/* Logo container */}
            <div className="justify-self-start">
              <AnimatePresence>
                {!isScrolled && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to="/">
                      <img 
                        src="https://i.postimg.cc/BbSdBndC/67214d0664d9afbe71ca25b0-sentorov-2.png" 
                        alt="Sentrovo" 
                        className="h-8"
                      />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation links - always centered */}
            <div className="justify-self-center">
              <NavLinks isHomePage={isHomePage} />
            </div>

            {/* CTA Button container */}
            <div className="justify-self-end">
              <AnimatePresence>
                {!isScrolled && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        Jetzt Loslegen
                      </motion.button>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;