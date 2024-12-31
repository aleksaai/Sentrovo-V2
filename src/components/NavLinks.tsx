import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useNavigateSmooth } from '../hooks/useNavigateSmooth';

interface NavLinksProps {
  isHomePage: boolean;
}

const NavLinks = ({ isHomePage }: NavLinksProps) => {
  const { scrollToSection } = useNavigateSmooth();
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <div className="bg-[#131313]/30 backdrop-blur-md rounded-full px-6 py-2 border border-[#ffffff0f]">
      <div className="flex items-center gap-8 text-sm">
        <motion.a
          href="#consulting"
          onClick={(e) => handleNavigation(e, 'consulting')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-[#CCAFFF] hover:text-white transition-colors cursor-pointer"
        >
          Lösungen
        </motion.a>
        <motion.a
          href="#team"
          onClick={(e) => handleNavigation(e, 'team')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-[#CCAFFF] hover:text-white transition-colors cursor-pointer"
        >
          Über uns
        </motion.a>
        <motion.a
          href="#testimonials"
          onClick={(e) => handleNavigation(e, 'testimonials')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-[#CCAFFF] hover:text-white transition-colors cursor-pointer"
        >
          Testimonials
        </motion.a>
        <Link to="/blog">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#CCAFFF] hover:text-white transition-colors cursor-pointer"
          >
            Blog
          </motion.span>
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;