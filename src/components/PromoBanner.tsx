import { motion } from 'framer-motion';
import './PromoBanner.css';

const messages = [
  "★ 2025/2026 Admissions are ongoing! Secure your child's future today. ★",
  "U CAN FOLLOW US ON OUR SOCIAL MEDIA OR WWW.THEFOUNTAINSCHOOL.COM.NG"
];

const PromoBanner = () => {
  return (
    <motion.div
      className="promo-banner"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div className="marquee">
        <div className="marquee-content">
          {messages.map((msg, i) => (
            <span key={i} className="marquee-item">{msg}</span>
          ))}
        </div>
      </div>
      <div className="social-links">
        <a href="https://facebook.com/thefountainschool" target="_blank" rel="noopener noreferrer">FB</a>
        <a href="https://twitter.com/thefountainschool" target="_blank" rel="noopener noreferrer">TW</a>
        <a href="https://instagram.com/thefountainschool" target="_blank" rel="noopener noreferrer">IG</a>
      </div>
    </motion.div>
  );
};

export default PromoBanner;
