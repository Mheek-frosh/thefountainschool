import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        bgImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000" 
      />
      <div className="container section">
        
        {/* Split Screen Layout - Responsive */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 0,
          background: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.08)'
        }}>
          
          {/* Left Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}
          >
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>Get In Touch</h2>
            <p style={{ color: '#475569', marginBottom: '2.5rem', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>Whether you have questions about admissions, academics, or just want to say hello, feel free to drop us a message.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1.5rem' }}>
                <input type="text" placeholder="First Name" style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
                <input type="text" placeholder="Last Name" style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
              </div>
              <input type="email" placeholder="Email Address" style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
              <input type="text" placeholder="Subject" style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} />
              <textarea placeholder="Write your message here..." rows={6} style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', resize: 'vertical' }}></textarea>
              <button type="button" className="btn btn-primary btn-large" style={{ marginTop: '1rem', width: 'fit-content' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Right Side: Map & Contact Info overlay */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            style={{ position: 'relative', minHeight: 'clamp(300px, 60vh, 600px)' }}
          >
            <iframe 
              src="https://www.google.com/maps?q=Fountain+School,+Kabusa,+Abuja&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Fountain School Kabusa Abuja map"
            ></iframe>
            
            {/* Contact Info Overlay Panel */}
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', left: '1rem', background: 'var(--color-primary)', color: 'white', padding: 'clamp(1.5rem, 4vw, 2rem)', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <MapPin size={24} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', marginBottom: '0.25rem' }}>Visit Us</h4>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)' }}>123 Knowledge Avenue, Education City</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Phone size={24} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', marginBottom: '0.25rem' }}>Call Us</h4>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)' }}>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Mail size={24} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: 0, fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', marginBottom: '0.25rem' }}>Email Us</h4>
                    <p style={{ margin: 0, opacity: 0.8, fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)' }}>admissions@fountainschool.edu</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
