// Portfolio Data - Update this file with your information
export const personalInfo = {
  name: "Neelkamal Rana",
  title: "Full Stack Developer | Java Developer | Spring Boot | React | AWS | Always Learning",
  email: "nkrneelkamalrana@gmail.com",
  phone: "+1 206-665-4686",
  location: "New York",
  github: "https://github.com/neelkamalrana",
  linkedin: "https://linkedin.com/in/neelkamalrana",
  summary: "Passionate software developer with expertise in building scalable web applications. I love solving complex problems and creating user-friendly solutions that make a difference."
};

export const projects = [  
  {
    title: 'CyberSentinel',
    description: 'AI-powered tool for detecting and monitoring email security threats like phishing and suspicious emails, with interactive visualizations in real time.',
    technologies: ['React.js', 'Flask', 'Python', 'BERT', 'MongoDB', 'OpenAI API'],
    link: 'https://github.com/neelkamalrana/CyberSentinel',
    image: '/resources/cybersentinel.jpg'
  },
  {
    title: 'SkyConnect',
    description: 'Shortest path finder between airports using Dijkstra\'s algorithm. Built with Java and implements efficient graph algorithms for optimal route calculation.',
    technologies: ['React.js', 'Java', 'Spring Boot', 'Dijkstra Algorithm', 'Graph Theory', 'Data Structures'],
    link: 'https://github.com/neelkamalrana/SkyConnect',
    image: '/resources/skyconnect.jpg'
  },
  {
    title: 'Swastha Sanchar',
    description: 'Community-driven wellness Android app using Firebase and Jetpack Compose. Features real-time health tracking and community support.',
    technologies: ['Android', 'Kotlin', 'Firebase', 'Jetpack Compose', 'Material Design'],
    link: 'https://github.com/neelkamalrana/SwasthaSanchar',
    image: '/resources/swastha-sanchar.jpg'
  },
  {
    title: 'MoveEasy',
    description: 'Pay-as-you-go delivery platform for individuals and small businesses. Streamlines logistics with real-time tracking and payment integration.',
    technologies: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'Express', 'AWS'],
    link: 'https://github.com/neelkamalrana/MoveEasy',
    image: '/resources/moveeasy.jpg'
  },
  {
    title: 'Attendify',
    description: 'Face recognition-based attendance system for meetings and classes. Upload screenshots, auto-mark attendance, and track insights via a modern dashboard.',
    technologies: ['React', 'Vite', 'Python', 'Flask', 'face_recognition', 'OpenCV', 'Pillow', 'NumPy'],
    link: 'https://github.com/neelkamalrana/Attendify',
    image: '/resources/attendify.jpg' 
  }
  // Add more projects here as you complete them
];

export const certifications = [
   {
     name: 'AWS Certified Cloud Practitioner',
     image: '/resources/AWS Certified Cloud Practitioner certificate_page-0001.jpg'
   },
   {
    name: 'HackerRank Software Engineer',
    image: '/resources/software_engineer certificate_page-0001.jpg'
  },
  {
    name: 'HackerRank Frontend Developer (React)',
    image: '/resources/frontend_developer_react certificate_page-0001.jpg'
  },
  {
    name: 'HackerRank Problem Solving (Intermediate)',
    image: '/resources/problem_solving_intermediate certificate_page-0001.jpg'
  }
];

export const education = [
  {
    degree: 'MS in Computer Science',
    institution: 'Pace University',
    duration: '2023 - 2025',
    location: 'New York, NY',
    gpa: '3.8/4.0',
    highlights: [
      'Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development',
      'Final Year Project: AI-Powered Phishing and Fraud Detection System',
      'Dean\'s List for academic excellence'
    ]
  },
  
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Uttarakhand Technical University',
    duration: '2017 - 2021',
    location: 'Dehradun, Uttarakhand, India',
    gpa: '3.8/4.0',
    highlights: [
      'Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development',
      'Final Year Project: Face Recognition Attendance System',
      'This application was used by the college to track attendance of students during the pandemic.'
    ]
  }
  // Add more education entries if needed
];

export const experience = [
  {
    title: 'Associate Software Developer',
    company: 'HCL Technologies',
    duration: 'November 2021 - August 2023',
    location: 'Bangalore, India',
    description: [
      'Designed and deployed a real-time courier tracking module used by 125+ companies, enabling tracking of 60M+ parcel statuses daily.',
      'Built a reusable JAR to transform EDI logistics data to JSON/XML and deployed it across partner systems.',
      'Migrated code from Camel to Java DSL, boosting shipment processing from 40M to 60M per day.',
      'Implemented Redis caching, reducing API response time and enhancing performance.',
      'Re-architected the data pipeline using ELK and RabbitMQ, increasing polling speed and system load capacity.'
    ],
    technologies: ['Java', 'Spring Boot', 'Apache Camel', 'Java DSL', 'Redis', 'ELK', 'RabbitMQ', 'EDI', 'JSON', 'XML', 'Docker', 'AWS']
  },
  {
    title: 'Software Engineering Intern',
    company: 'Bharat Heavy Electricals Limited',
    duration: 'May 2021 - August 2021',
    location: 'Haridwar, India',
    description: [
      'Built a real-time Android application for ground workers to update operational data remotely.',
      'Integrated Java networking APIs and SQLite for efficient data transmission and offline caching.',
      'Connected with a proprietary backend server to ensure secure, reliable data synchronization.',
      'Enabled managerial tracking of field activities with seamless syncing and optimized performance, even offline.'
    ],
    technologies: ['Java', 'Spring', 'MySQL', 'Git', 'JUnit']
  }
  // Add more experience entries as you gain them
];

export const skills = {
  Programming: ['Java (Advanced)', 'Python', 'JavaScript/TypeScript', 'C++', 'MySQL', 'Android(Kotlin)'],
  Frameworks: ['React JS', 'Node JS/Express', 'PyTorch', 'Spring Boot', 'Tailwind CSS'],
  "AWS & DevOps": ['EC2', 'S3', 'Lambda', 'DynamoDB', 'Aurora', 'CDN', 'Fargate', 'Lightsail', 'Docker', 'GitHub Actions'],
  Database: ['MySQL', 'MongoDB', 'PostgreSQL', 'DynamoDB'],
  Concepts: ['Object-Oriented Design', 'Data Structures & Algorithms', 'Design Patterns', 'RESTful Services', 'Distributed Systems', 'CI/CD', 'Agile', 'Scrum', 'Jira']
}; 
