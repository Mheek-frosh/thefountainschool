
/* Page: Admissions - admissions process overview and next steps */
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const Admissions = () => {
  return (
    <div>
      <PageHeader 
        title="Admissions" 
        bgImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2000" 
      />
      <div className="container section">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Join Our Community</h2>
          <p style={{ marginBottom: '3rem', fontSize: '1.1rem', color: '#475569' }}>
            We are excited that you are considering The Fountain School for your child's education. Our admissions process is designed to be transparent, welcoming, and thorough.
          </p>
          
          <div style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--color-primary)' }}>Application Steps</h3>
            <ol style={{ textAlign: 'left', display: 'inline-block', margin: '0 auto', lineHeight: '2' }}>
              <li><strong>Step 1:</strong> Complete the online inquiry form.</li>
              <li><strong>Step 2:</strong> Schedule a campus tour and meet our admissions team.</li>
              <li><strong>Step 3:</strong> Submit the formal application and required documents.</li>
              <li><strong>Step 4:</strong> Student assessment and interview.</li>
              <li><strong>Step 5:</strong> Receive your admissions decision.</li>
            </ol>
            <br />
            <Link to="/application-form" className="btn btn-accent" style={{ marginTop: '2rem' }}>Start Application Now</Link>
          </div>
        </div>

        <div style={{ maxWidth: '1080px', margin: '4rem auto 0', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '2rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
          >
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Important Dates</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2, color: '#475569' }}>
              <li><strong>Open House:</strong> June 12, 2025</li>
              <li><strong>Application Deadline:</strong> July 31, 2025</li>
              <li><strong>Interview Window:</strong> August 5–22, 2025</li>
              <li><strong>Offer Letters Sent:</strong> September 5, 2025</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
          >
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Admissions FAQ</h3>
            <div style={{ lineHeight: 1.8, color: '#475569' }}>
              <p><strong>Q:</strong> What documents are required for the application?<br /><strong>A:</strong> Birth certificate, previous school report, passport photo, and guardian contact details.</p>
              <p><strong>Q:</strong> Can I schedule a campus tour?<br /><strong>A:</strong> Yes. Our admissions team is happy to arrange a personalized campus visit.</p>
              <p><strong>Q:</strong> Is transportation available?<br /><strong>A:</strong> Yes, we offer a safe school bus service across the city.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
