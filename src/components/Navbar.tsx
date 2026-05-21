import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, BookOpen } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <BookOpen className="logo-icon" size={28} />
          <span className="logo-text">The Fountain School</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          
          <div 
            className="dropdown-container"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              About Us <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {aboutDropdownOpen && (
                <motion.div 
                  className="dropdown-menu glass"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to="/about/history" className="dropdown-item">History & Heritage</Link>
                  <Link to="/about/vision" className="dropdown-item">Vision & Mission</Link>
                  <Link to="/about/leadership" className="dropdown-item">Leadership</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/academics" className="nav-link">Academics</Link>
          <Link to="/admissions" className="nav-link">Admissions</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="nav-actions desktop-only">
          <Link to="?apply=true" className="btn btn-accent">Apply Now</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle mobile-only" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu glass"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="mobile-nav-links">
              <Link to="/" className="mobile-link">Home</Link>
              <div className="mobile-dropdown">
                <span className="mobile-link" onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}>
                  About Us <ChevronDown size={16} />
                </span>
                <AnimatePresence>
                  {aboutDropdownOpen && (
                    <motion.div 
                      className="mobile-dropdown-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <Link to="/about/history" className="mobile-sublink">History & Heritage</Link>
                      <Link to="/about/vision" className="mobile-sublink">Vision & Mission</Link>
                      <Link to="/about/leadership" className="mobile-sublink">Leadership</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/academics" className="mobile-link">Academics</Link>
              <Link to="/admissions" className="mobile-link">Admissions</Link>
              <Link to="/contact" className="mobile-link">Contact</Link>
              <Link to="?apply=true" className="btn btn-accent mobile-btn">Apply Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
