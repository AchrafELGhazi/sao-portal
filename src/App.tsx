import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import SaoTeamPage from './pages/SaoTeamPagee';
import ScrollToTop from './utils/ScrollToTop';
import ClubsPage from './pages/ClubsPage';
import ScrollToTopButton from './utils/ScrollToTopButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='flex flex-col min-h-screen bg-gradient-to-br from-[#0F0F1A] via-[#1A1A2F] to-[#2A2A3F]'>
        <Header />
        <main className='flex-grow '>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/events' element={<EventsPage />} />
            <Route path='/resources' element={<ResourcesPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/gallery' element={<GalleryPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms' element={<TermsOfUse />} />
            <Route path='/sao-team' element={<SaoTeamPage />} />
            <Route path='/clubs' element={<ClubsPage />} />
          </Routes>
        </main>
        <Footer /> <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
