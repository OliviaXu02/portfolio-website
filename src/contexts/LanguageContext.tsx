import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageType = 'en' | 'zh';

interface LanguageContextType {
  language: LanguageType;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<LanguageType, Record<string, string>> = {
  en: {
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Frontend Developer',
    'hero.viewProjects': 'View Projects',
    'hero.downloadCV': 'Download CV',
    'about.title': 'About Me',
    'projects.title': 'My Projects',
    'skills.title': 'Technical Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend & Database',
    'skills.tools': 'Tools',
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's create something together!",
    'contact.or': 'OR Send me a message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'footer.copyright': '© 2025 Youtong Xu',
    'theme.professional': 'Professional',
    'theme.stardew': 'Stardew Valley',
  },
  zh: {
    'nav.projects': '项目',
    'nav.skills': '技能',
    'nav.about': '关于',
    'nav.contact': '联系',
    'hero.title': '前端开发者',
    'hero.viewProjects': '查看项目',
    'hero.downloadCV': '下载简历',
    'about.title': '关于我',
    'projects.title': '我的项目',
    'skills.title': '技术栈',
    'skills.frontend': '前端技术',
    'skills.backend': '后端与数据库',
    'skills.tools': '工具',
    'contact.title': '联系我',
    'contact.subtitle': '让我们一起创造些什么吧！',
    'contact.or': '或者发送消息给我',
    'contact.name': '姓名',
    'contact.email': '邮箱',
    'contact.message': '消息',
    'contact.send': '发送消息',
    'footer.copyright': '© 2025 徐有彤',
    'theme.professional': '专业版',
    'theme.stardew': '星露谷模式',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return (saved === 'zh' ? 'zh' : 'en') as LanguageType;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};