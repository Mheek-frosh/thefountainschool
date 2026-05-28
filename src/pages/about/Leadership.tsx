/* Page: Leadership - leadership team profiles */
import PageHeader from '../../components/PageHeader';
import PromoBanner from '../../components/PromoBanner';
import { motion } from 'framer-motion';

const Leadership = () => {
  return (
    <div>
      <PromoBanner />
      <PageHeader 
        title="Leadership" 
        bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
      />
      <div className="container section">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Meet Our Leadership</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
            Our dedicated team of educators and administrators work tirelessly to ensure that The Fountain School remains a place of inspiration, growth, and excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
          {[
            { name: 'Dr. Sarah Jenkins', title: 'Principal', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
            { name: 'Mr. David Okafor', title: 'Vice Principal, Academics', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800' },
            { name: 'Mrs. Emily Chen', title: 'Head of Student Affairs', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800' }
          ].map((leader, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
            >
              <img src={leader.img} alt={leader.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{leader.name}</h3>
                <p style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{leader.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
