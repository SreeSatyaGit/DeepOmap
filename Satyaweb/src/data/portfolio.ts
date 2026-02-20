export const portfolioData = {
  hero: {
    name: "Satya Bharadwaja Nandivada",
    tagline: "",
    description: "Building deep learning systems that decode cellular complexity and transform single-cell data into actionable discoveries for precision medicine.",
    cta: {
      primary: "Get in Touch",
      secondary: "GitHub"
    }
  },

  projects: [
    {
      id: 1,
      title: "DeepOMAP - AI Cancer Diagnostics",
      description: "Revolutionary AI-powered platform for early cancer detection and personalized treatment planning. Built with Next.js, React Three Fiber, and advanced machine learning algorithms.",
      image: "/images/projects/project1.jpg", // TODO: Replace with your project image
      tags: ["Next.js", "React", "Three.js", "AI", "TypeScript"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Analytics Dashboard",
      description: "Real-time analytics dashboard for e-commerce businesses with interactive charts, sales forecasting, and customer behavior insights.",
      image: "/images/projects/project2.jpg", // TODO: Replace with your project image
      tags: ["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js"],
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "Task Management API",
      description: "RESTful API for collaborative task management with real-time updates, user authentication, and advanced filtering capabilities.",
      image: "/images/projects/project3.jpg", // TODO: Replace with your project image
      tags: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      link: "#",
      featured: true
    },
    {
      id: 4,
      title: "Mobile Weather App",
      description: "Cross-platform mobile weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image: "/images/projects/project4.jpg", // TODO: Replace with your project image
      tags: ["React Native", "Expo", "Weather API", "Redux", "TypeScript"],
      link: "#",
      featured: false
    },
    {
      id: 5,
      title: "Open Source Library",
      description: "Popular open-source React component library with 1000+ GitHub stars, comprehensive documentation, and TypeScript support.",
      image: "/images/projects/project5.jpg", // TODO: Replace with your project image
      tags: ["React", "TypeScript", "Storybook", "Jest", "NPM"],
      link: "#",
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
    bio: "I’m a Machine Learning Engineer and Computational Systems Biology researcher focused on building scalable intelligent systems. My work bridges deep learning, graph modeling, and biological data, with hands-on experience in PyTorch, Transformers, Graph Neural Networks, and single-cell RNA sequencing (scRNA-seq).\n\nI built DeepOMAPNet, a multimodal framework that predicts surface protein expression from RNA using kNN cell graphs, Graph Attention Networks, and Transformer-based fusion with cross-modal attention, graph positional encoding, and efficiency optimizations like sparsification and mixed precision. I’ve also developed end-to-end pipelines combining representation learning (parametric UMAP) with predictive modeling (sciPENN and logistic regression) to classify AML subtypes from large-scale single-cell datasets.\n\nBeyond data-driven models, I build hybrid mechanistic + learning systems, including universal differential equation (UDE) models to study drug response and resistance. I’m driven by challenging problems, strong engineering, and delivering reliable, interpretable, high-impact solutions.",
    extendedBio: "I’m a Machine Learning Engineer and Computational Systems Biology researcher focused on building scalable intelligent systems. My work bridges deep learning, graph modeling, and biological data, with hands-on experience in PyTorch, Transformers, Graph Neural Networks, and single-cell RNA sequencing (scRNA-seq).\n\nI built DeepOMAPNet, a multimodal framework that predicts surface protein expression from RNA using kNN cell graphs, Graph Attention Networks, and Transformer-based fusion with cross-modal attention, graph positional encoding, and efficiency optimizations like sparsification and mixed precision. I’ve also developed end-to-end pipelines combining representation learning (parametric UMAP) with predictive modeling (sciPENN and logistic regression) to classify AML subtypes from large-scale single-cell datasets.\n\nBeyond data-driven models, I build hybrid mechanistic + learning systems, including universal differential equation (UDE) models to study drug response and resistance. I’m driven by challenging problems, strong engineering, and delivering reliable, interpretable, high-impact solutions.",
    image: "/images/about/profile.jpg",
    highlights: [] as { label: string; value: string }[],
    location: "San Francisco, CA", // TODO: Update with your location
    availability: "Available for freelance projects"
  },

  github: {
    title: "GitHub Projects",
    subtitle: "Open source projects and repositories showcasing my development work",
    projects: [
      {
        id: 1,
        name: "DeepOMAPNet",
        description: "A deep learning model for analyzing single-cell omics data, combining GAT and Transformer layers for cross-modal attention between RNA and ADT.",
        language: "Python",
        stars: 0,
        forks: 0,
        lastUpdated: "2024-05-20",
        url: "https://github.com/SreeSatyaGit/DeepOMAPNet",
        topics: ["deep-learning", "bioinformatics", "single-cell", "omics", "transformer"]
      },
      {
        id: 2,
        name: "LabWebsite",
        description: "A professional research laboratory website project built using React, providing an interactive online presence for academic research activities.",
        language: "JavaScript",
        stars: 0,
        forks: 0,
        lastUpdated: "2024-05-18",
        url: "https://github.com/SreeSatyaGit/LabWebsite",
        topics: ["react", "web-development", "research-lab", "frontend"]
      },
      {
        id: 3,
        name: "Single-Cell Melanoma Pathway Analysis",
        description: "R-based computational pipeline for analyzing scRNA-seq data with a focus on pathway dynamics and drug treatment effects in melanoma.",
        language: "R",
        stars: 0,
        forks: 0,
        lastUpdated: "2024-05-15",
        url: "https://github.com/SreeSatyaGit/Single-Cell-Melanoma-Pathway-Analysis",
        topics: ["r", "bioinformatics", "melanoma", "scRNA-seq", "pathway-analysis"]
      },
      {
        id: 4,
        name: "ECE5642Final - Exoplanet Dashboard",
        description: "Interactive transit dashboard featuring a React/Tailwind frontend and a Flask/pyvo REST API to fetch NASA Exoplanet Archive data.",
        language: "JavaScript",
        stars: 0,
        forks: 0,
        lastUpdated: "2024-05-10",
        url: "https://github.com/SreeSatyaGit/ECE5642Final",
        topics: ["react", "flask", "data-visualization", "nasa-api", "astronomy"]
      },
      {
        id: 5,
        name: "SummitChatbot",
        description: "AI conversational onboarding system for student-athletes, using fine-tuned models for intelligent data extraction and multilingual support.",
        language: "Python",
        stars: 0,
        forks: 0,
        lastUpdated: "2024-05-05",
        url: "https://github.com/SreeSatyaGit/SummitChatbot",
        topics: ["ai", "chatbot", "python", "nlp", "startup"]
      },
      {
        id: 6,
        name: "DeepOmap Platform",
        description: "Modern Next.js application for genomics data visualization and advanced multi-omics analysis and discovery.",
        language: "TypeScript",
        stars: 0,
        forks: 0,
        lastUpdated: "2024-05-01",
        url: "https://github.com/SreeSatyaGit/DeepOmap",
        topics: ["nextjs", "typescript", "genomics", "data-viz", "biotech"]
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

    ]
  },

  contact: {
    email: "sreesatyanandivada@gmail.com",
    phone: "[YOUR PHONE]", // TODO: Replace with your phone
    location: "San Francisco, CA", // TODO: Update with your location
    social: {
      github: "https://github.com/[YOUR_USERNAME]", // TODO: Replace with your GitHub
      linkedin: "https://linkedin.com/in/[YOUR_USERNAME]", // TODO: Replace with your LinkedIn
      twitter: "https://twitter.com/[YOUR_USERNAME]", // TODO: Replace with your Twitter
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
