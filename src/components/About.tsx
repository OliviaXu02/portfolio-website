import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { aboutContent } from '../data/content';
import './About.css';

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const content = aboutContent[language];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">{t('about.title')}</h2>
        
        <div className="about-content">
          <div className="about-text">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3 className="stat-number">2+</h3>
              <p className="stat-label">
                {language === 'en' ? 'Years Experience' : '年经验'}
              </p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">
                {language === 'en' ? 'Projects Completed' : '完成项目'}
              </p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">3</h3>
              <p className="stat-label">
                {language === 'en' ? 'Languages' : '语言能力'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;