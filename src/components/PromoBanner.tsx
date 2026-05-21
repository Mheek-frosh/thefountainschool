import { motion } from 'framer-motion';

const PromoBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      style={{
        background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '0.75rem',
        fontWeight: 500,
        fontSize: '0.95rem'
      }}
    >
      <span style={{ color: 'var(--color-secondary)' }}>★</span> 2025/2026 Admissions are ongoing! Secure your child's future today. <span style={{ color: 'var(--color-secondary)' }}>★</span>
    </motion.div>
  );
};

export default PromoBanner;
