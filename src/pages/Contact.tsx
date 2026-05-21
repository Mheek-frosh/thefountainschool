import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        bgImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000" 
      />
      <div className="container section">
        <div className="grid grid-cols-2" style={{ maxWidth: '1200px', margin: '0 auto', gap: '4rem' }}>
          
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Get In Touch</h2>
            <p style={{ color: '#475569', marginBottom: '2rem', fontSize: '1.1rem' }}>We would love to hear from you. Whether you have questions about admissions, academics, or just want to say hello, feel free to reach out.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--color-primary-light)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Visit Us</h4>
                  <p style={{ margin: 0, color: '#475569' }}>123 Knowledge Avenue, Education City</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--color-primary-light)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Call Us</h4>
                  <p style={{ margin: 0, color: '#475569' }}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--color-primary-light)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Email Us</h4>
                  <p style={{ margin: 0, color: '#475569' }}>admissions@fountainschool.edu</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', height: '300px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14483017232236!3d40.69763123330689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1716301234567!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: 'white', padding: '3rem 2rem', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', fontSize: '2rem' }}>Send a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
              <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
              <input type="text" placeholder="Subject" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
              <textarea placeholder="Your Message" rows={6} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }}></textarea>
              <button type="button" className="btn btn-primary btn-large" style={{ width: '100%', marginTop: '1rem' }}>Send Message</button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
