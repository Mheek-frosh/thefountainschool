
import { motion } from 'framer-motion';

const PageHeader = ({ title, bgImage }: { title: string, bgImage: string }) => (
  <div style={{
    position: 'relative',
    height: '40vh',
    minHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center'
  }}>
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(3, 49, 113, 0.7)'
    }} />
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(2rem, 5vw, 3rem)', margin: 0 }}
    >
      {title}
    </motion.h1>
  </div>
);

export default PageHeader;
