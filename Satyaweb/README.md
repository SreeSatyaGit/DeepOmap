# Satya Nandivada - Personal Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS showcasing my work as an AI Engineer, Researcher, and Founder.

## 🚀 Live Demo

Visit the live portfolio: [https://bharadwaja2000.github.io/Satyaweb/](https://bharadwaja2000.github.io/Satyaweb/)

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **3D Visualizations**: Interactive 3D hero section using Three.js
- **Contact Form**: Functional contact form with email integration
- **Achievements**: Showcase of professional achievements with PDF attachments
- **Skills Display**: Animated skill bars and technology showcases

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber
- **Email**: Nodemailer
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── AchievementCard.tsx
│   ├── ContactForm.tsx
│   ├── HeroVisualization.tsx
│   ├── ProjectCard.tsx
│   ├── ScrollReveal.tsx
│   └── SkillBar.tsx
├── config/             # Configuration files
│   └── theme.ts
└── data/               # Data files
    └── portfolio.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bharadwaja2000/Satyaweb.git
cd Satyaweb
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Contact Form Setup

To enable the contact form email functionality:

1. Create a `.env.local` file in the root directory
2. Add your Gmail credentials:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

3. Enable 2-factor authentication on your Gmail account
4. Generate an App Password for this application
5. Use the App Password (not your regular password) in `EMAIL_PASS`

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory
3. Deploy the contents of the `out/` directory to your hosting platform

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as the source
4. The deployment will happen automatically on every push to main branch

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

**Satya Nandivada**
- Email: sreesatyanandivada@gmail.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [@bharadwaja2000](https://github.com/bharadwaja2000)

---

Built with ❤️ by Satya Nandivada