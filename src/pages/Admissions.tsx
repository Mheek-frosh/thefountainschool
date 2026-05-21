
import PageHeader from '../components/PageHeader';

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
            <button className="btn btn-accent" style={{ marginTop: '2rem' }}>Start Application Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
