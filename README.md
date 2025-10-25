# Shrey Nigam - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. This professional portfolio showcases my skills, projects, and experience as a MERN Stack Developer.

## 🚀 Live Demo

[View Live Portfolio](https://shrey-nigam-portfolio.vercel.app)

## ✨ Features

- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with subtle animations
- **Interactive Navigation**: Smooth scrolling and animated transitions
- **Project Showcase**: Detailed project cards with live demos and GitHub links
- **Skills Visualization**: Interactive skill badges with proficiency levels
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance Optimized**: Fast loading times and smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Footer.jsx          # Footer component
│   ├── ProjectCard.jsx     # Project display card
│   └── SkillBadge.jsx      # Skill proficiency badge
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── About.jsx           # About section
│   ├── Projects.jsx        # Projects showcase
│   ├── Skills.jsx          # Skills section
│   └── Contact.jsx         # Contact form
├── data/
│   ├── projects.js         # Project data
│   └── skills.js           # Skills data
├── App.jsx                 # Main app component
├── main.jsx               # App entry point
└── index.css              # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shrey2343/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Personal Information

Update the following files with your personal information:

1. **Contact Information** (`src/pages/Contact.jsx`)
   - Email, phone, location
   - Social media links

2. **About Section** (`src/pages/About.jsx`)
   - Professional bio
   - Experience details
   - Education information
   - Achievements

3. **Projects** (`src/data/projects.js`)
   - Add your projects
   - Update project details, images, and links

4. **Skills** (`src/data/skills.js`)
   - Update skill categories and proficiency levels
   - Add or remove technologies

### Styling

The website uses Tailwind CSS for styling. Key customization points:

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Modify font families in `src/index.css`
- **Animations**: Adjust animation timings in component files

### Images

Replace placeholder images in the `public/images/` directory:

- `profile.jpg` - Your profile picture
- Project images for each project

### Resume Setup

To add your resume:

1. **Option 1: Direct Download**
   - Add your `resume.pdf` file to the `public/` directory
   - Update all resume links to point to `/resume.pdf`

2. **Option 2: Email Request (Current Setup)**
   - Resume links currently open email client with pre-filled subject
   - This is the default setup for better user experience
   - No file management needed

3. **Option 3: External Link**
   - Upload resume to Google Drive, Dropbox, or similar
   - Update resume links to point to the external URL

## 🎨 Design Features

- **Color Scheme**: Navy blue (#0f172a) and blue accent (#0ea5e9)
- **Typography**: Inter and Poppins fonts
- **Animations**: Smooth transitions and hover effects
- **Layout**: Grid-based responsive design
- **Components**: Reusable, modular components

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any static hosting service:

- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shrey2343/portfolio/issues).

## 📞 Contact

**Shrey Nigam**
- Email: shreyn82@gmail.com
- LinkedIn: [linkedin.com/in/shrey-nigam](https://linkedin.com/in/shrey-nigam)
- GitHub: [github.com/shrey2343](https://github.com/shrey2343)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

---

⭐ If you found this project helpful, please give it a star!