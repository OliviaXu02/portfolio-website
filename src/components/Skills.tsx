import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Skills.css';

interface SkillItem {
  name: string;
  logo: string;
  category: 'frontend' | 'backend' | 'tools';
}

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skills: SkillItem[] = [
    // Frontend
    { name: 'React', logo: '/React.png', category: 'frontend' },
    { name: 'Vue 3', logo: '/Vue.png', category: 'frontend' },
    { name: 'TypeScript', logo: '/Typescript.png', category: 'frontend' },
    { name: 'JavaScript', logo: '/JavaScript-logo.png', category: 'frontend' },
    { name: 'HTML', logo: '/HTML.png', category: 'frontend' },
    { name: 'CSS', logo: '/CSS.png', category: 'frontend' },
    { name: 'Vite', logo: '/Vitejs.png', category: 'frontend' },
    { name: 'Vant UI', logo: '/Vant.png', category: 'frontend' },
    
    // Backend & Database
    { name: 'Node.js', logo: '/Nodejs.png', category: 'backend' },
    { name: 'MongoDB', logo: '/MongoDB_Logo.svg.png', category: 'backend' },
    { name: 'Python', logo: '/Python.png', category: 'backend' },
    { name: 'Java', logo: '/java.png', category: 'backend' },
    { name: 'R', logo: '/R.png', category: 'backend' },
    { name: 'MySQL', logo: '/mysql.png', category: 'backend' },
    
    // Tools
    { name: 'Git', logo: '/Git.png', category: 'tools' },
    { name: 'Figma', logo: '/Figmasvg.svg', category: 'tools' },
    { name: 'VS Code', logo: '/Vscode.svg', category: 'tools' },
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
                  <div className="skill-logo">
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/60/667eea/ffffff?text=' + skill.name.charAt(0);
                      }}
                    />
                  </div>
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
                  <div className="skill-logo">
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/60/667eea/ffffff?text=' + skill.name.charAt(0);
                      }}
                    />
                  </div>
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
                  <div className="skill-logo">
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/60/667eea/ffffff?text=' + skill.name.charAt(0);
                      }}
                    />
                  </div>
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