import PageHeader from '../components/PageHeader';
import PromoBanner from '../components/PromoBanner';
import { motion } from 'framer-motion';

const Academics = () => {
  const academicLevels = [
    {
      title: "Early Years",
      desc: "A play-based approach focused on exploration, social skills, and foundational literacy and numeracy.",
      img: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Primary School",
      desc: "Building core competencies with an emphasis on project-based learning and creative problem-solving.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Middle School",
      desc: "Fostering independence and critical thinking through a diverse curriculum and practical applications.",
      img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "High School",
      desc: "Rigorous college-preparatory coursework, advanced placement options, and comprehensive career guidance.",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div>
      <PromoBanner />
      <PageHeader 
        title="Academics" 
        bgImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=2000" 
      />
      <div className="container section">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>A Curriculum for the Future</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
            Our academic programs are designed to challenge students, provoke inquiry, and develop deep analytical skills across all disciplines.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
          {academicLevels.map((level, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            >
              <img src={level.img} alt={level.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem', fontSize: '1.5rem' }}>{level.title}</h3>
                <p style={{ color: '#475569', lineHeight: 1.6 }}>{level.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;
