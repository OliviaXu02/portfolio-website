import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;