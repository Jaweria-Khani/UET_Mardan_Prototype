import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Departments from './components/Departments';
import StudentLife from './components/StudentLife';
import Facilities from './components/Facilities';
import News from './components/News';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Qec from "./pages/Qec";
import Admissions from './pages/Admission';
import HostelPage from './pages/Hostel';
import AcademicPrograms from './pages/AcademicPrograms';
import CampusEventsPage from './pages/CampusEvents';
import CommunityServicePage from './pages/CommunityService';
import Faculty from './pages/Faculty';
import ProgramPage from './pages/Program';
import SportsPage from './pages/Sports';
import StudentSocietiesPage from './pages/StudentSocieties.tsx';
import Students from './pages/Students';
import Timeline from './pages/Timeline.tsx';
import TransportPage from './pages/Transport.tsx';


function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const windowHeight = window.innerHeight;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const HomePage = () => (
    <>
      <Header />y
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
        <Hero />
        <About />
        <Departments />
        <StudentLife />
        <Facilities />
        <News />
        <Footer />
      </main>
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qec" element={<Qec />} />
          <Route path="/hostelPage" element={<HostelPage />} />
          <Route path="/academic-programs" element={<AcademicPrograms />} />
          <Route path="/CampusEventsPage" element={<CampusEventsPage />} />
          <Route path="/CommunityServicePage" element={<CommunityServicePage />} />
          <Route path="/Admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/Program/:programId" element={<ProgramPage />} />
          <Route path="/SportsPage" element={<SportsPage />} />
          <Route path="/StudentSocietiesPage" element={<StudentSocietiesPage />} />
          <Route path="/students" element={<Students />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/TransportPage" element={<TransportPage />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
