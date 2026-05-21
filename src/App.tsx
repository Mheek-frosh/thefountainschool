
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import History from './pages/about/History';
import Vision from './pages/about/Vision';
import Leadership from './pages/about/Leadership';
import ApplicationForm from './pages/ApplicationForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about">
            <Route path="history" element={<History />} />
            <Route path="vision" element={<Vision />} />
            <Route path="leadership" element={<Leadership />} />
          </Route>
          <Route path="academics" element={<Academics />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="application-form" element={<ApplicationForm />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
