
/* Page: ApplicationForm - student application form page */
import { FormEvent } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const ApplicationForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <PageHeader 
        title="Application Form 2025/2026" 
        bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000" 
      />
      <div className="container section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
          >
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem', textAlign: 'center' }}>Student Application</h2>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2.5rem' }}>Please fill out all required fields to begin the admission process.</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="grid grid-cols-2">
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>First Name *</label>
                  <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Last Name *</label>
                  <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} required />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Date of Birth *</label>
                <input type="date" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} required />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Applying for Grade *</label>
                <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} required>
                  <option value="">Select Grade</option>
                  <option value="early_years">Early Years (Pre-K / K)</option>
                  <option value="primary">Primary (Grade 1 - 5)</option>
                  <option value="middle">Middle School (Grade 6 - 8)</option>
                  <option value="high">High School (Grade 9 - 12)</option>
                </select>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Preferred Start Term *</label>
                  <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} required>
                    <option value="">Select Term</option>
                    <option value="august_2025">August 2025</option>
                    <option value="january_2026">January 2026</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>How Did You Hear About Us?</label>
                  <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                    <option value="">Choose an option</option>
                    <option value="online_search">Online Search</option>
                    <option value="friend_family">Friend / Family</option>
                    <option value="social_media">Social Media</option>
                    <option value="event">School Event</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Parent/Guardian Email *</label>
                <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} required />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Parent/Guardian Phone *</label>
                <input type="tel" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} required />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Additional Information (Optional)</label>
                <textarea rows={4} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}></textarea>
              </div>

              <button type="submit" className="btn btn-accent btn-large" style={{ marginTop: '1rem' }}>
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
