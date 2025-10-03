import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Sidebar from './components/Sidebar';
import PageFlipTransition from './components/PageFlipTransition';
import { usePageDirection } from './hooks/usePageDirection';

const HomePage = lazy(() => import('./pages/HomePage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const EducationPage = lazy(() => import('./pages/EducationPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));

function AnimatedRoutes() {
  const location = useLocation();
  const direction = usePageDirection();

  return (
    <PageFlipTransition locationKey={location.pathname} direction={direction}>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div></div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
    </PageFlipTransition>
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
