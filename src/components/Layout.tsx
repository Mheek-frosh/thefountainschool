
import { Outlet, useSearchParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ApplyModal from './ApplyModal';

const Layout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showApplyModal = searchParams.get('apply') === 'true';

  const closeApplyModal = () => {
    searchParams.delete('apply');
    setSearchParams(searchParams);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, marginTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
      <ApplyModal isOpen={showApplyModal} onClose={closeApplyModal} />
    </div>
  );
};

export default Layout;
