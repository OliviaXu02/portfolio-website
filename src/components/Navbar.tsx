import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </div>

        <div className="navbar-links">
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            {t('nav.projects')}
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">
            {t('nav.skills')}
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            {t('nav.about')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            {t('nav.contact')}
          </button>
        </div>

        <div className="navbar-controls">
          <button className="language-toggle" onClick={toggleLanguage}>
            <span className={language === 'en' ? 'active' : ''}>EN</span>
            <span className="separator">|</span>
            <span className={language === 'zh' ? 'active' : ''}>中</span>
          </button>

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'professional' ? t('theme.professional') : t('theme.stardew')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;