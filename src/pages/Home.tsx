/* Page: Home - main landing page with hero, features, and admissions call to action */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, Trophy, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PromoBanner from '../components/PromoBanner';
import HeroCarousel from '../components/HeroCarousel';
import './Home.css';

const Home = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="home">
      <PromoBanner />
      
      {/* Redesigned Split Hero Section */}
      <HeroCarousel />

      {/* NEW: Curriculum Highlights Section */}
      <section className="section">
        <div className="container">
          <div className="curriculum-split">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="section-title" style={{ textAlign: 'left' }}>A Curriculum Designed for the Future</h2>
              <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '2rem' }}>
                We don't just teach facts; we teach students how to think. Our globally recognized curriculum ensures that every child receives a well-rounded education.
              </p>
              <ul className="curriculum-list">
                <li><CheckCircle size={20} className="text-secondary" /> Project-Based Learning Approaches</li>
                <li><CheckCircle size={20} className="text-secondary" /> Advanced STEM and Robotics Labs</li>
                <li><CheckCircle size={20} className="text-secondary" /> Comprehensive Arts & Humanities</li>
                <li><CheckCircle size={20} className="text-secondary" /> Personal Character Development</li>
              </ul>
              <Link to="/academics" className="btn btn-primary mt-4">Discover Our Academics</Link>
            </motion.div>
            <motion.div className="curriculum-images" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" alt="Learning" className="curr-img-1" />
              <img src="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=800" alt="Activities" className="curr-img-2" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features bg-surface">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Why Choose The Fountain School?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon bg-primary-light">
                <BookOpen size={32} className="text-white" />
              </div>
              <h3 className="feature-title">Academic Excellence</h3>
              <p className="feature-desc">
                Our rigorous curriculum challenges students to think critically, 
                fostering a lifelong love for learning and discovery.
              </p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon bg-secondary">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="feature-title">Vibrant Community</h3>
              <p className="feature-desc">
                We celebrate diversity and nurture a supportive environment where 
                every student feels valued and empowered.
              </p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon bg-accent">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="feature-title">Holistic Development</h3>
              <p className="feature-desc">
                Beyond academics, we focus on character building, arts, athletics, 
                and leadership skills to ensure holistic growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Section: Watch Our Story */}
      <section className="section video-section bg-surface">
        <div className="container">
          <div className="video-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Watch Our Story: How Leaders Are Built</h2>
            <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Take a glimpse into the daily lives of our students and see how we foster a culture of excellence, curiosity, and leadership.
            </p>
          </div>

          <div className="video-thumbnail-container" onClick={() => setIsVideoModalOpen(true)}>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000" 
              alt="Video Thumbnail" 
              className="video-thumbnail" 
            />
            <div className="video-overlay">
              <div className="play-button">
                <Play size={40} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            className="video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div 
              className="video-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-video-btn" onClick={() => setIsVideoModalOpen(false)}>×</button>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="School Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-box glass-dark"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Join The Fountain Family?</h2>
            <p>Admissions are now open for the upcoming academic year. Secure your child's future today.</p>
            <div className="cta-actions">
              <Link to="?apply=true" className="btn btn-accent btn-large">Start Application</Link>
              <Link to="/contact" className="btn btn-outline-white btn-large">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
