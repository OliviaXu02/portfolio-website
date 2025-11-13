import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'nspace',
    title: {
      en: 'n space',
      zh: 'n space'
    },
    description: {
      en: 'Mobile reservation platform built with Vue 3',
      zh: 'Vue 3 移动端预订平台'
    },
    details: {
      en: [
        'Developed a full-featured mobile reservation system using Vue 3 + TypeScript + Vite',
        'Implemented interactive map navigation with D3.js and real-time API integrations',
        'Built authentication system with mobile verification using Pinia for state management',
        'Integrated Baidu Maps API and weather services with custom styling using Less'
      ],
      zh: [
        '使用 Vue 3 + TypeScript + Vite 开发全功能移动端预订系统',
        '实现交互式地图导航(D3.js)和实时 API 集成',
        '构建手机验证码登录系统，使用 Pinia 进行状态管理',
        '集成百度地图 API 和天气服务，使用 Less 自定义样式'
      ]
    },
    techStack: ['Vue 3', 'TypeScript', 'Vite', 'Vant UI', 'Pinia', 'D3.js', 'Axios', 'Less'],
    image: '/projects/nspace.png',
    githubLink: 'https://github.com/yourusername/nspace',
    demoLink: ''
  },
  {
    id: 'uniflow',
    title: {
      en: 'Uniflow - Task Management',
      zh: 'Uniflow - 任务管理系统'
    },
    description: {
      en: 'Full-stack task management application for university students',
      zh: '面向大学生的全栈任务管理应用'
    },
    details: {
      en: [
        'Developed full-stack web application using MERN stack (MongoDB, Express, React, Node.js)',
        'Designed comprehensive UML diagrams (use case, class, sequence) for system architecture',
        'Created responsive interfaces with React and CSS, designed prototypes in Figma',
        'Collaborated in Agile team using Git for version control and code reviews'
      ],
      zh: [
        '使用 MERN 技术栈开发全栈 Web 应用',
        '设计完整的 UML 图表（用例图、类图、时序图）定义系统架构',
        '使用 React 和 CSS 创建响应式界面，在 Figma 设计原型',
        '在敏捷团队中使用 Git 进行版本控制和代码审查'
      ]
    },
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS', 'Figma'],
    image: '/projects/uniflow.png',
    githubLink: 'https://github.com/yourusername/uniflow',
    demoLink: ''
  },
  {
    id: 'portfolio',
    title: {
      en: 'Portfolio Website',
      zh: '个人作品集网站'
    },
    description: {
      en: 'Personal portfolio with dual theme system',
      zh: '双主题个人作品集网站'
    },
    details: {
      en: [
        'Built responsive portfolio website with React + TypeScript',
        'Implemented dual theme system (Professional & Stardew Valley mode)',
        'Created bilingual support (English/Chinese) with context-based state management',
        'Designed smooth animations and interactive user experience'
      ],
      zh: [
        '使用 React + TypeScript 构建响应式作品集网站',
        '实现双主题系统（专业版和星露谷模式）',
        '创建中英文双语支持，使用 Context 进行状态管理',
        '设计流畅的动画和交互式用户体验'
      ]
    },
    techStack: ['React', 'TypeScript', 'Vite', 'CSS'],
    image: '/projects/portfolio.png',
    githubLink: 'https://github.com/yourusername/portfolio',
    demoLink: 'https://yourdomain.com'
  }
];

export const aboutContent = {
  en: {
    title: 'About Me',
    paragraphs: [
      "Hi! I'm Youtong Xu, a frontend developer with hands-on experience in Vue 3 and React ecosystems. Currently pursuing a Master of Data Science at Monash University.",
      "I recently completed an internship at Huaxin Securities where I built a complete mobile reservation platform using Vue 3, TypeScript, and modern frontend technologies. I'm passionate about creating intuitive and efficient user interfaces.",
      "With a strong foundation in computer science and practical development skills, I'm always eager to learn new technologies and take on challenging projects."
    ]
  },
  zh: {
    title: '关于我',
    paragraphs: [
      "你好！我是徐有彤，一名具备 Vue 3 和 React 实战经验的前端开发者。目前在莫那什大学攻读数据科学硕士。",
      "最近在华鑫证券完成实习，使用 Vue 3、TypeScript 等现代前端技术开发了完整的移动端预订平台。我热衷于创建直观高效的用户界面。",
      "凭借扎实的计算机科学基础和实践开发技能，我始终渴望学习新技术并挑战各类项目。"
    ]
  }
};