
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <BookOpen size={28} className="text-secondary" />
              <span>The Fountain School</span>
            </Link>
            <p className="footer-desc">
              Empowering minds and shaping futures through excellence in education, character, and leadership.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">TW</a>
              <a href="#" className="social-link">IG</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about/history">About Us</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} className="text-secondary" />
                <span>123 Knowledge Avenue, Education City</span>
              </li>
              <li>
                <Phone size={18} className="text-secondary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Mail size={18} className="text-secondary" />
                <span>admissions@fountainschool.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Fountain School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
