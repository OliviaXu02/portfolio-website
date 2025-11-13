import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const About: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    en: {
      title: 'About Me',
      paragraphs: [
        "Hi! I'm Youtong Xu, a frontend developer passionate about creating intuitive and engaging user experiences. I graduated from Monash University with a bachelor's degree in Computer Scicence. Currently pursuing a Master of Data Science at Monash University, I bring a unique blend of technical expertise and analytical thinking to web development.",
        "I recently completed an internship at Huaxin Securities where I developed a complete mobile reservation platform using Vue 3, TypeScript, and modern frontend technologies. This experience strengthened my skills in building production-ready applications with clean, maintainable code.",
        "My journey into frontend development started with a Computer Science degree from Monash University, where I built a strong foundation in algorithms, data structures, and software engineering principles. I'm particularly drawn to the intersection of design and functionality, always seeking to create interfaces that are both beautiful and efficient.",
        "Beyond coding, I'm fascinated by data visualization and how technology can tell compelling stories. My background in data science complements my frontend skills, allowing me to build applications that not only look great but also make data accessible and meaningful to users.",
        "I'm always eager to learn new technologies and take on challenging projects. Whether it's mastering the latest React features, exploring new UI frameworks, or diving into system architecture, I believe in continuous growth as a developer."
      ]
    },
    zh: {
      title: '关于我',
      paragraphs: [
        "你好！我是徐有彤，一名热衷于创建直观且引人入胜的用户体验的前端开发者。莫纳什大学计算机科学本科毕业，目前在莫那什大学攻读数据科学硕士，我将技术专长与分析思维独特地融入 Web 开发中。",
        "最近在华鑫证券完成实习，使用 Vue 3、TypeScript 等现代前端技术开发了完整的移动端预订平台。这段经历增强了我构建生产级应用的能力，让我能够编写简洁、可维护的代码。",
        "我的前端开发之旅始于莫那什大学的计算机科学学位，在那里我建立了扎实的算法、数据结构和软件工程原理基础。我特别着迷于设计与功能的结合，始终致力于创建既美观又高效的界面。",
        "除了编程，我对数据可视化以及技术如何讲述引人入胜的故事充满兴趣。我的数据科学背景补充了我的前端技能，使我能够构建不仅外观出色，而且让数据对用户易于理解和有意义的应用。",
        "我始终渴望学习新技术并挑战各类项目。无论是掌握最新的 React 特性、探索新的 UI 框架，还是深入研究系统架构，我相信作为开发者要持续成长。"
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">{t('about.title')}</h2>
        
        <div className="about-content">
          <div className="about-text-only">
            {currentContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;