# Neelkamal Rana - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. Showcase your projects, experience, education, and resume in a beautiful, professional format.

## Features

- 🏠 **Home Page** - Personal introduction with call-to-action buttons
- 📁 **Projects** - Showcase your GitHub projects with technology tags and images
- 💼 **Experience** - Display your work history with detailed descriptions
- 🎓 **Education** - Highlight your academic achievements
- 📄 **Resume** - Online resume with download option
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- ⚡ **Fast Loading** - Optimized for performance

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/neelkamalrana/neelkamalrana.github.io.git
cd neelkamalrana.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Updating Your Information

All your personal information is stored in `src/data/portfolioData.js`. Simply edit this file to update:

- **Personal Information**: Name, email, phone, location, social links
- **Projects**: Add new projects with descriptions, technologies, and images
- **Experience**: Update work history and responsibilities
- **Education**: Modify academic background and achievements
- **Skills**: Update technical skills and technologies

### Example: Adding a New Project

```javascript
// In src/data/portfolioData.js
export const projects = [
  // ... existing projects
  {
    title: 'Your New Project',
    description: 'Description of your amazing project and what it does.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/project-name',
    image: 'https://images.unsplash.com/photo-...?w=400&h=300&fit=crop'
  }
];
```

### Customizing Styling

The portfolio uses Tailwind CSS for styling. You can:

1. Modify colors in `tailwind.config.js`
2. Update component styles in `src/App.js`
3. Add custom CSS in `src/index.css`

### Adding Your Resume

1. Place your resume PDF file in the `public/` directory
2. Name it `resume.pdf`
3. The resume page will automatically link to it

## Deployment

### GitHub Pages (Recommended)

This project is already configured for GitHub Pages deployment:

1. Push your changes to GitHub
2. Run the deployment command:
```bash
npm run deploy
```

3. Your portfolio will be available at `https://neelkamalrana.github.io`

### Other Hosting Options

You can also deploy to:
- **Netlify**: Connect your GitHub repository
- **Vercel**: Import your project
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload the build folder

## Project Structure

```
neelkamalrana.github.io/
├── public/
│   ├── index.html
│   ├── resume.pdf (add your resume here)
│   └── ...
├── src/
│   ├── data/
│   │   └── portfolioData.js (update your information here)
│   ├── App.js (main component)
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- **React 19** - Frontend framework
- **React Router** - Navigation and routing
- **Tailwind CSS** - Styling and responsive design
- **Lucide React** - Icons
- **GitHub Pages** - Hosting

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio or have questions, feel free to reach out!

---

**Happy coding! 🚀**
