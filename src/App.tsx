import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
