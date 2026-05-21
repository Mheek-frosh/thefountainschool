import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyModal = ({ isOpen, onClose }: ApplyModalProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(3, 49, 113, 0.7)',
        backdropFilter: 'blur(5px)',
        zIndex: 2000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem'
      }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          style={{
            background: 'white',
            borderRadius: '24px',
            padding: '3rem 2rem',
            maxWidth: '500px',
            width: '100%',
            textAlign: 'center',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <button 
            onClick={onClose}
            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
          >
            <X size={24} />
          </button>
          
          <div style={{ 
            width: '80px', height: '80px', background: 'var(--color-secondary-light)', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
            margin: '0 auto 1.5rem auto' 
          }}>
            <span style={{ fontSize: '2rem' }}>🎓</span>
          </div>

          <h2 style={{ color: 'var(--color-primary)', fontSize: '2rem', marginBottom: '1rem' }}>Great Choice!</h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Admissions for the <strong>2025/2026</strong> academic session are currently ongoing. Hurry now to secure a spot for your child!
          </p>

          <button 
            onClick={() => {
              onClose();
              navigate('/application-form');
            }}
            className="btn btn-accent btn-large" 
            style={{ width: '100%' }}
          >
            Proceed to Application
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ApplyModal;
