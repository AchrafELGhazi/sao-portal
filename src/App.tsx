import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
