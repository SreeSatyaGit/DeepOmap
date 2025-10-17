export const portfolioData = {
  hero: {
    name: "Satya Nandivada",
    tagline: "",
    description: "Building deep learning systems that decode cellular complexity and transform single-cell data into actionable discoveries for precision medicine.",
    cta: { 
      primary: "View Resume", 
      secondary: "Get in Touch" 
    }
  },
  
  projects: [
    {
      id: 1,
      title: "DeepOMAP - AI Cancer Diagnostics",
      description: "Revolutionary AI-powered platform for early cancer detection and personalized treatment planning. Built with Next.js, React Three Fiber, and advanced machine learning algorithms.",
      image: "/images/projects/project1.jpg", // TODO: Replace with your project image
      tags: ["Next.js", "React", "Three.js", "AI", "TypeScript"],
      link: null,
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Analytics Dashboard",
      description: "Real-time analytics dashboard for e-commerce businesses with interactive charts, sales forecasting, and customer behavior insights.",
      image: "/images/projects/project2.jpg", // TODO: Replace with your project image
      tags: ["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js"],
      link: null,
      featured: true
    },
    {
      id: 3,
      title: "Task Management API",
      description: "RESTful API for collaborative task management with real-time updates, user authentication, and advanced filtering capabilities.",
      image: "/images/projects/project3.jpg", // TODO: Replace with your project image
      tags: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      link: null,
      featured: true
    },
    {
      id: 4,
      title: "Mobile Weather App",
      description: "Cross-platform mobile weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image: "/images/projects/project4.jpg", // TODO: Replace with your project image
      tags: ["React Native", "Expo", "Weather API", "Redux", "TypeScript"],
      link: null,
      featured: false
    },
    {
      id: 5,
      title: "Open Source Library",
      description: "Popular open-source React component library with 1000+ GitHub stars, comprehensive documentation, and TypeScript support.",
      image: "/images/projects/project5.jpg", // TODO: Replace with your project image
      tags: ["React", "TypeScript", "Storybook", "Jest", "NPM"],
      link: null,
      featured: false
    }
  ],
  
  skills: {
    frontend: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "TypeScript", level: 88, icon: "📘" },
      { name: "JavaScript", level: 92, icon: "🟨" },
      { name: "Tailwind CSS", level: 85, icon: "🎨" }
    ],
    backend: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "R", level: 90, icon: "📊" },
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "Express", level: 75, icon: "🚀" }
    ],
    tools: [
      { name: "TensorFlow", level: 92, icon: "🧠" },
      { name: "PyTorch", level: 90, icon: "🔥" },
      { name: "AWS", level: 80, icon: "☁️" },
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "Git", level: 95, icon: "📝" }
    ],
    research: [
      { name: "Single-cell Analysis", level: 95, icon: "🔬" },
      { name: "Bioinformatics", level: 90, icon: "🧬" },
      { name: "Machine Learning", level: 93, icon: "🤖" },
      { name: "Data Visualization", level: 88, icon: "📈" },
      { name: "Precision Medicine", level: 85, icon: "⚕️" }
    ]
  },
  
  about: {
    bio: "An engineer, researcher, and founder working at the intersection of AI and biology. I build deep learning systems that decode cellular complexity and turn them into insights for precision medicine. As the founder of DeepOMAP, I'm developing AI-driven platforms to transform single-cell data into actionable discoveries for leukemia research, while also leading GAME LLC, a sports-tech startup empowering athletes through intelligent onboarding and matchmaking. My work bridges computational biology, scalable systems, and human-centered design — driven by a single mission: to make complex science and technology both explainable and impactful.",
    extendedBio: "Throughout my career, I've had the privilege of working with diverse teams and tackling complex challenges across various industries. From healthcare AI platforms to e-commerce solutions, I've learned that great software comes from understanding both the technical requirements and the human needs behind every project.\n\nWhen I'm not coding, you'll find me contributing to open-source projects, exploring new technologies, or sharing knowledge with the developer community. I believe in continuous learning and staying curious about emerging trends in web development.",
    image: "/images/about/profile.jpg",
    highlights: [
    ],
    location: "San Francisco, CA", // TODO: Update with your location
    availability: "Available for freelance projects"
  },
  
  resume: {
    title: "Professional Resume",
    subtitle: "A comprehensive overview of my experience, skills, and achievements",
    pdfPath: "/resume/Satya_Nandivada_Resume.pdf", // TODO: Place your resume PDF here
    sections: [
      {
        title: "Experience",
        items: [
          {
            position: "Founder & CEO",
            company: "DeepOMAP",
            duration: "2024 - Present",
            description: "Leading AI-driven platform development for single-cell data analysis and leukemia research. Building deep learning systems that decode cellular complexity for precision medicine.",
            highlights: ["AI platform development", "Single-cell data analysis", "Leukemia research", "Team leadership"]
          },
          {
            position: "Founder & CEO", 
            company: "GAME LLC",
            duration: "2023 - Present",
            description: "Sports-tech startup empowering athletes through intelligent onboarding and matchmaking systems.",
            highlights: ["Sports technology", "Athlete empowerment", "Intelligent systems", "Startup leadership"]
          }
        ]
      },
      {
        title: "Education",
        items: [
          {
            position: "Master of Science",
            company: "Northeastern University",
            duration: "2022 - 2024",
            description: "Advanced studies in computational biology and AI applications in healthcare.",
            highlights: ["Computational Biology", "AI in Healthcare", "Research"]
          }
        ]
      },
      {
        title: "Key Skills",
        items: [
          {
            position: "Technical Expertise",
            company: "Core Competencies",
            duration: "5+ Years",
            description: "Deep learning, computational biology, single-cell analysis, AI system development, and precision medicine applications.",
            highlights: ["Deep Learning", "Computational Biology", "AI Systems", "Precision Medicine"]
          }
        ]
      }
    ]
  },
  
  achievements: {
    title: "Achievements & Recognition",
    subtitle: "Milestones and accomplishments in my career journey",
    items: [
      {
        id: 1,
        title: "MaineHealth Innovation Lab Demo Day Invitation",
        organization: "MaineHealth Innovation",
        description: "Invited as a distinguished guest and innovation expert to provide constructive feedback and mentorship at the Spring Innovation Cohort Demo Day. Recognized for expertise in innovation and pitching, bringing diversity of thought to healthcare innovation solutions.",
        date: "June 2024",
        category: "Recognition",
        icon: "🏥",
        pdfPath: "/achievements/Pitch_Day.pdf"
      },
      {
        id: 2,
        title: "ICSB2024 Conference Poster Presentation",
        organization: "International Conference on Systems Biology",
        description: "Presented a research talk at the International Conference on Systems Biology 2024, delivering a concise overview of my project findings to an international audience of systems biology researchers.",
        date: "2024",
        category: "Research",
        icon: "🔬",
        pdfPath: "/achievements/ICSB2024_Satya.pdf"
      },
      
    ]
  },
  
  contact: {
    email: "sreesatyanandivada@gmail.com",
    phone: "[YOUR PHONE]", 
    location: "Boston, MA", 
    social: {
      github: "https://github.com/SreeSatyaGit", 
      linkedin: "https://www.linkedin.com/in/satya-nandivada-a5902b179", 
      email: "sreesatyanandivada@gmail.com"
    }
  },
  
  blog: {
    posts: [
      {
        id: 1,
        title: "Building Scalable React Applications",
        excerpt: "Best practices for structuring large React applications with proper state management and performance optimization.",
        date: "2024-01-15",
        readTime: "5 min read",
        tags: ["React", "Architecture", "Performance"]
      },
      {
        id: 2,
        title: "The Future of Web Development",
        excerpt: "Exploring emerging trends in web development including AI integration, WebAssembly, and modern frameworks.",
        date: "2024-01-08",
        readTime: "7 min read",
        tags: ["Web Development", "AI", "Trends"]
      }
    ]
  }
};

export type PortfolioData = typeof portfolioData;
