import { useState, useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'night';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'day') {
      document.documentElement.classList.add('day-mode');
      document.body.classList.add('day-mode');
    } else {
      document.documentElement.classList.remove('day-mode');
      document.body.classList.remove('day-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'night' ? 'day' : 'night'));
  };

  return (
    <SmoothScroll>
      <div className={`theme-container transition-colors duration-700 ${theme === 'day' ? 'day-mode' : ''} overflow-x-hidden min-h-screen relative`}
           style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Showreel theme={theme} />
      <Portfolio theme={theme} />
      <Services theme={theme} />
      <Skills theme={theme} />
      <About theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
      </div>
    </SmoothScroll>
  );
}
