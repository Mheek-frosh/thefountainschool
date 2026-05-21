import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';

const images = [
  "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/256494/pexels-photo-256494.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/4144172/pexels-photo-4144172.jpeg?auto=compress&cs=tinysrgb&w=1200"
];

const heroTexts = [
  {
    title: "Empower Your Child's Future",
    subtitle: "Quality education rooted in excellence, character, and innovation"
  },
  {
    title: "Leaders Are Made Here",
    subtitle: "Discover a learning environment that nurtures excellence and builds confident leaders"
  },
  {
    title: "Excellence in Every Aspect",
    subtitle: "From academics to character development, we prepare students for success"
  }
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // Auto play every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-carousel">
      <div className="carousel-wrapper">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Hero slide ${index + 1}`}
            className="carousel-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        
        {/* Dim overlay */}
        <div className="carousel-overlay"></div>
        
        {/* Hero text content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          key={`hero-${index}`}
        >
          <h1 className="hero-title">{heroTexts[index].title}</h1>
          <p className="hero-subtitle">{heroTexts[index].subtitle}</p>
          <Link to="/?apply=true" className="hero-cta">Explore Admissions</Link>
        </motion.div>
        
        <button className="carousel-arrow left" onClick={prev} aria-label="Previous slide">
          <ArrowLeft size={32} />
        </button>
        <button className="carousel-arrow right" onClick={next} aria-label="Next slide">
          <ArrowRight size={32} />
        </button>
        <div className="carousel-indicators">
          {images.map((_, i) => (
            <span key={i} className={`dot ${i === index ? 'active' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
