// Portfolio Data - Update this file with your information
export const personalInfo = {
  name: "Neelkamal Rana",
  title: "Full Stack Developer | Java Developer | Spring Boot | React | AWS | Always Learning",
  email: "nkrneelkamalrana@gmail.com",
  phone: "+1 (206) 665 4686",
  location: "New York",
  github: "https://github.com/neelkamalrana",
  linkedin: "https://linkedin.com/in/neelkamalrana",
  summary: "Passionate software developer with expertise in building scalable web applications. I love solving complex problems and creating user-friendly solutions that make a difference."
};

export const projects = [
  {
    title: 'SkyConnect',
    description: 'Shortest path finder between airports using Dijkstra\'s algorithm. Built with Java and implements efficient graph algorithms for optimal route calculation.',
    technologies: ['Java', 'Spring Boot', 'Dijkstra Algorithm', 'Graph Theory', 'Data Structures'],
    link: 'https://github.com/neelkamalrana/SkyConnect',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop'
  },
  {
    title: 'Swastha Sanchar',
    description: 'Community-driven wellness Android app using Firebase and Jetpack Compose. Features real-time health tracking and community support.',
    technologies: ['Android', 'Kotlin', 'Firebase', 'Jetpack Compose', 'Material Design'],
    link: 'https://github.com/neelkamalrana/SwasthaSanchar',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  },
  {
    title: 'MoveEasy',
    description: 'Pay-as-you-go delivery platform for individuals and small businesses. Streamlines logistics with real-time tracking and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateway', 'Real-time Tracking'],
    link: 'https://github.com/neelkamalrana/MoveEasy',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop'
  }
  // Add more projects here as you complete them
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
      'Developed and maintained web applications using React and Spring Boot',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented CI/CD pipelines and automated testing procedures',
      'Optimized database queries and improved application performance by 30%'
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'AWS']
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
  programmingLanguages: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
  frameworks: ['Spring Boot', 'React', 'Node.js', 'Express.js'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB'],
  tools: ['Git', 'Docker', 'AWS', 'Jenkins', 'JUnit']
}; 