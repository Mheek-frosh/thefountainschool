import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy, Globe, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PromoBanner from '../components/PromoBanner';
import './Home.css';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000"
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      
      {/* Hero Section with Carousel */}
      <section className="hero">
        <div className="hero-bg">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              alt="School Campus" 
              style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-text"
          >
            <span className="hero-badge">Welcome to Excellence</span>
            <h1 className="hero-title">Shaping Tomorrow's Leaders Today.</h1>
            <p className="hero-desc">
              The Fountain School offers a world-class education rooted in tradition, 
              driven by innovation, and committed to developing well-rounded individuals.
            </p>
            <div className="hero-actions">
              <Link to="?apply=true" className="btn btn-accent btn-large">
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link to="/about/history" className="btn btn-outline-white btn-large">
                Discover Our History
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
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

      {/* Stats Section */}
      <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
        <div className="container">
          <div className="grid grid-cols-3" style={{ textAlign: 'center', gap: '2rem' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <Globe size={48} style={{ color: 'var(--color-secondary)', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>30+</h3>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>Nationalities</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Award size={48} style={{ color: 'var(--color-secondary)', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>100%</h3>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>College Acceptance</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <Heart size={48} style={{ color: 'var(--color-secondary)', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>1:8</h3>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>Teacher to Student Ratio</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery / Showcase Section */}
      <section className="section showcase bg-surface">
        <div className="container">
          <div className="showcase-grid">
            <motion.div 
              className="showcase-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Empowering Minds, Inspiring Futures</h2>
              <p>
                Our modern classrooms and dedicated faculty ensure that students 
                receive personalized attention. We believe in learning by doing, 
                equipping our students with the skills they need for the 21st century.
              </p>
              <ul style={{ listStyle: 'none', marginBottom: '2rem', color: '#475569' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ State of the art science labs</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Comprehensive sports facilities</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Global curriculum standards</li>
              </ul>
              <Link to="/academics" className="btn btn-primary mt-4">
                Explore Academics <ArrowRight size={18} />
              </Link>
            </motion.div>
            
            <motion.div 
              className="showcase-images"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" 
                alt="Classroom" 
                className="showcase-img img-main"
              />
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000" 
                alt="Students" 
                className="showcase-img img-float glass-dark"
              />
            </motion.div>
          </div>
        </div>
      </section>

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
