import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/content';
import './Projects.css';

const Projects: React.FC = () => {
  const { language, t } = useLanguage();

  if (projects.length === 0) {
    return (
      <section id="projects" className="projects">
        <div className="projects-container">
          <h2 className="section-title">{t('projects.title')}</h2>
          <p>No projects available.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">{t('projects.title')}</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-content">
                <h3 className="project-title">{project.title[language]}</h3>
                
                <p className="project-description">{project.description[language]}</p>

                <ul className="project-details">
                  {project.details[language].map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;