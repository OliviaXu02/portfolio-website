import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Skills.css';

interface SkillItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skills: SkillItem[] = [
    // Frontend
    { name: 'React', icon: '⚛️', category: 'frontend' },
    { name: 'Vue 3', icon: '💚', category: 'frontend' },
    { name: 'TypeScript', icon: '📘', category: 'frontend' },
    { name: 'JavaScript', icon: '📜', category: 'frontend' },
    { name: 'HTML', icon: '🌐', category: 'frontend' },
    { name: 'CSS', icon: '🎨', category: 'frontend' },
    { name: 'Vite', icon: '⚡', category: 'frontend' },
    { name: 'Vant UI', icon: '📱', category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: '🟢', category: 'backend' },
    { name: 'Express', icon: '🚂', category: 'backend' },
    { name: 'MongoDB', icon: '🍃', category: 'backend' },
    { name: 'Pinia', icon: '🍍', category: 'backend' },
    { name: 'Redux', icon: '🔮', category: 'backend' },
    
    // Tools
    { name: 'Git', icon: '🔧', category: 'tools' },
    { name: 'Figma', icon: '🎭', category: 'tools' },
    { name: 'VS Code', icon: '💻', category: 'tools' },
    { name: 'Postman', icon: '📮', category: 'tools' },
  ];

  const frontendSkills = skills.filter(s => s.category === 'frontend');
  const backendSkills = skills.filter(s => s.category === 'backend');
  const toolsSkills = skills.filter(s => s.category === 'tools');

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">{t('skills.title')}</h2>

        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">{t('skills.frontend')}</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">{t('skills.backend')}</h3>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">{t('skills.tools')}</h3>
            <div className="skills-list">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;