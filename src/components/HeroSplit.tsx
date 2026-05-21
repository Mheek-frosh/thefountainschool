import React from 'react';
import { motion } from 'framer-motion';
import './HeroSplit.css';

const heroImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1524135326847-d1c2b9d8a8e0?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=800',
];

const HeroSplit = () => {
  return (
    <section className="hero-split">
      <div className="hero-text">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="hero-badge">Welcome to The Fountain School</span>
          <h1 className="hero-title">Shaping Future Leaders</h1>
          <p className="hero-desc">
            Experience a world‑class education that blends academic rigor with holistic development. Join our community of innovators and leaders.
          </p>
          <div className="hero-actions">
            <a href="?apply=true" className="btn btn-primary btn-large">Apply Now</a>
            <a href="#learn-more" className="btn btn-outline btn-large">Learn More</a>
          </div>
        </motion.div>
      </div>
      <div className="hero-gallery">
        {heroImages.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`Hero ${idx + 1}`}
            className="hero-img"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.2 }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSplit;
