/* Page: Vision - vision and mission overview */
import PageHeader from '../../components/PageHeader';
import PromoBanner from '../../components/PromoBanner';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <div>
      <PromoBanner />
      <PageHeader 
        title="Vision & Mission" 
        bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000" 
      />
      <div className="container section">
        <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Our Vision</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
              To be a global beacon of educational excellence, inspiring students to reach their highest potential and become compassionate leaders who positively impact the world. We envision a future where every child is equipped with the knowledge and moral compass to thrive.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <img 
              src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=1000" 
              alt="Students exploring" 
              style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1000" 
              alt="Library" 
              style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Our Mission</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
              We provide a rigorous, holistic education in a nurturing and inclusive environment. We are committed to fostering critical thinking, creativity, and a lifelong passion for learning. Our educators dedicate themselves to understanding the unique strengths of every individual.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
