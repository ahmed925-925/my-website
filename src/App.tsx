import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

function HomePage() {
  return (
    <main className="lg:ml-20">
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden">
        <Sidebar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
