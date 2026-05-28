/* Page: History - school history and heritage */
import PageHeader from '../../components/PageHeader';
import PromoBanner from '../../components/PromoBanner';
import { motion } from 'framer-motion';

const History = () => {
  return (
    <div>
      <PromoBanner />
      <PageHeader 
        title="History & Heritage" 
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
      />
      <div className="container section">
        <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Our Journey</h2>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
              Founded over three decades ago, The Fountain School was established with a singular vision: to create an environment where academic excellence meets character development. From a small cohort of just 50 students, we have grown into a premier institution recognized globally.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
              Over the years, our commitment to innovation and tradition has guided thousands of students toward successful futures, deeply rooted in the values that have always defined us. We are proud of our legacy and excited for the future.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000" 
              alt="Historical Campus" 
              style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default History;
