
import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

// Social Media SVG Icons
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M18.89 0H1.11C.5 0 0 .5 0 1.11v17.78C0 19.5.5 20 1.11 20h9.56v-7.73H8.08V9.41h2.59V7.16c0-2.58 1.57-3.98 3.88-3.98 1.1 0 2.05.08 2.33.12v2.7h-1.6c-1.25 0-1.5.6-1.5 1.47v1.93h2.99l-.39 3.02h-2.6V20h5.09c.61 0 1.11-.5 1.11-1.11V1.11C20 .5 19.5 0 18.89 0z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M18.45 2.36c-.69.31-1.43.52-2.21.61.79-.48 1.4-1.24 1.69-2.15-.74.44-1.56.76-2.43.93-.7-.75-1.7-1.22-2.8-1.22-2.12 0-3.84 1.72-3.84 3.84 0 .3.04.6.1.88-3.19-.16-6.03-1.69-7.92-4.02-.33.57-.52 1.23-.52 1.94 0 1.33.68 2.51 1.71 3.2-.63-.02-1.23-.2-1.75-.48v.05c0 1.86 1.32 3.41 3.07 3.76-.32.09-.66.14-1 .14-.25 0-.5-.02-.73-.07.49 1.53 1.91 2.65 3.59 2.68-1.31 1.03-2.96 1.64-4.75 1.64-.31 0-.61-.02-.91-.05 1.71 1.1 3.74 1.73 5.93 1.73 7.12 0 11.01-5.9 11.01-11.01 0-.17 0-.34-.01-.51.76-.55 1.42-1.23 1.94-2.01z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 1.8c2.67 0 2.99.01 4.04.06 1.29.06 2.38.24 2.87.51.72.37 1.29.83 1.87 1.41.58.58 1.04 1.15 1.41 1.87.27.49.45 1.58.51 2.87.05 1.05.06 1.37.06 4.04 0 2.67-.01 2.99-.06 4.04-.06 1.29-.24 2.38-.51 2.87-.37.72-.83 1.29-1.41 1.87-.58.58-1.15 1.04-1.87 1.41-.49.27-1.58.45-2.87.51-1.05.05-1.37.06-4.04.06-2.67 0-2.99-.01-4.04-.06-1.29-.06-2.38-.24-2.87-.51-.72-.37-1.29-.83-1.87-1.41-.58-.58-1.04-1.15-1.41-1.87-.27-.49-.45-1.58-.51-2.87-.05-1.05-.06-1.37-.06-4.04 0-2.67.01-2.99.06-4.04.06-1.29.24-2.38.51-2.87.37-.72.83-1.29 1.41-1.87.58-.58 1.15-1.04 1.87-1.41.49-.27 1.58-.45 2.87-.51 1.05-.05 1.37-.06 4.04-.06m0-1.8C7.27 0 6.93.01 5.86.06 4.79.11 3.93.3 3.18.65c-.78.35-1.44.82-2.08 1.46C.46 2.41 0 3.07-.35 3.85-.7 4.6-.89 5.46-.94 6.53-.99 7.6-1 7.94-1 10c0 2.06.01 2.4.06 3.47.05 1.07.24 1.93.59 2.68.35.78.82 1.44 1.46 2.08.64.64 1.3 1.11 2.08 1.46.75.35 1.61.54 2.68.59 1.07.05 1.41.06 3.47.06 2.06 0 2.4-.01 3.47-.06 1.07-.05 1.93-.24 2.68-.59.78-.35 1.44-.82 2.08-1.46.64-.64 1.11-1.3 1.46-2.08.35-.75.54-1.61.59-2.68.05-1.07.06-1.41.06-3.47 0-2.06-.01-2.4-.06-3.47-.05-1.07-.24-1.93-.59-2.68-.35-.78-.82-1.44-1.46-2.08-.64-.64-1.3-1.11-2.08-1.46-.75-.35-1.61-.54-2.68-.59C13.07.01 12.73 0 10 0z" />
    <path d="M10 4.87c-2.84 0-5.13 2.29-5.13 5.13s2.29 5.13 5.13 5.13 5.13-2.29 5.13-5.13-2.29-5.13-5.13-5.13zm0 8.46c-1.84 0-3.33-1.49-3.33-3.33s1.49-3.33 3.33-3.33 3.33 1.49 3.33 3.33-1.49 3.33-3.33 3.33z" />
    <circle cx="15.4" cy="4.6" r="1.2" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

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
              <a href="https://facebook.com/thefountainschool" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook" title="Follow us on Facebook">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com/thefountainschool" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter" title="Follow us on Twitter">
                <TwitterIcon />
              </a>
              <a href="https://instagram.com/thefountainschool" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram" title="Follow us on Instagram">
                <InstagramIcon />
              </a>
            </div>

            <div className="newsletter-block">
              <h4 className="footer-heading">Stay Informed</h4>
              <p className="footer-desc">Subscribe for admissions updates, campus news, and important school announcements.</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn btn-accent newsletter-btn">Subscribe</button>
              </form>
              {subscribed && <p className="newsletter-success">Thank you! We will share updates with you shortly.</p>}
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
