export const personalInfo = {
  name: "MAHAK VERMA",
  title: "Aspiring Full Stack Developer",
  email: "vermamahak200@gmail.com",
  phone: "+91 8109255662",
  location: "Indore, India",
  linkedin: "https://www.linkedin.com/in/mahak-verma-554a99332",
  github: "https://github.com/mhk-verma",
  bio: "I am a second-year B.Tech student in Computer Science & Information Technology with a strong foundation in Python full-stack development. Passionate about building real-world applications and continuously improving my technical skills.",
}

export const education = [
  {
    degree: "Bachelor of Technology – Computer Science & Information Technology",
    institution: "Chameli Devi Group of Institutions, Indore",
    period: "2024 – 2028 (Expected)",
    details: "First Year CGPA: 7.95 / 10",
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "",
    period: "",
    details: "85%",
  },
  {
    degree: "Secondary (Class X)",
    institution: "",
    period: "",
    details: "90%",
  },
]

export const technicalSkills = {
  programmingLanguages: [
    "Python",
    "JavaScript",
    "SQL",
    "HTML5",
    "CSS3",
  ],
  frameworks: [
    "Django",
    "React.js",
    "Angular (Basics)",
  ],
  database: [
    "MySQL",
    "SQL",
  ],
  tools: [
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Postman (Basics)",
    "Chrome DevTools",
  ],
  operatingSystems: [
    "Windows",
    "Linux (Fundamentals)",
  ],
}

export const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Adaptability",
  "Time Management",
  "Quick Learner",
  "Good Communication",
]

export const languages = [
  "English",
  "Hindi",
]

export const certifications = [
  {
    title: "React JS Course",
    institution: "Megabyte Solutions",
  },
  {
    title: "Introduction to HTML",
    institution: "Infosys Springboard",
  },
  {
    title: "Git Training",
    institution: "EduPyramids, IIT Bombay",
    details: "Score: 80%",
  },
  {
    title: "Linux Fundamentals",
    institution: "Red Hat Training",
  },
]

export const achievements = [
  "Completed multiple online courses and hands-on projects to strengthen problem solving and development skills.",
  "Consistently improving DSA and aiming for strong problem solving skills.",
  "Passionate about learning new technologies and building real-world projects.",
]

export const areasOfInterest = [
  "Full Stack Development",
  "Backend Development",
  "Web Technologies",
  "Database Management",
  "Data Structures & Algorithms",
]

export interface Project {
  id: number
  title: string
  description: string
  category: string
  technologies: string[]
  liveDemo?: string
  github: string
  features: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Slice.exe — Gesture Fruit Ninja",
    description: "A browser Fruit Ninja clone played with your hand in the air: MediaPipe hand tracking drives the blade, backed by a custom canvas game engine with physics, particles and collision detection.",
    category: "Computer Vision / Game Development",
    technologies: ["React", "TypeScript", "MediaPipe", "Canvas", "Tailwind CSS", "Vite"],
    liveDemo: "https://mhk-verma.github.io/Fruit-Ninja/",
    github: "https://github.com/mhk-verma/Fruit-Ninja",
    features: [
      "Real-time hand tracking as game controller, with pointer fallback",
      "Custom game engine: physics, spawning, collision and particle effects",
      "Live HUD with score, combos and adjustable game settings",
      "Responsive, animated UI built with Tailwind and Framer Motion",
    ],
  },
  {
    id: 2,
    title: "AI Air Writing",
    description: "Draw in mid-air using just your webcam — fingertip positions from MediaPipe Hands are tracked and turned into smooth strokes on a canvas.",
    category: "Computer Vision / Frontend",
    technologies: ["React", "JavaScript", "MediaPipe Hands", "Canvas", "Vite"],
    liveDemo: "https://mhk-verma.github.io/ai-air-writing/",
    github: "https://github.com/mhk-verma/ai-air-writing",
    features: [
      "Fingertip tracking from live webcam feed",
      "Colour palette and adjustable brush size",
      "Emoji stickers placed by gesture",
      "Undo/clear controls over a real-time canvas",
    ],
  },
  {
    id: 3,
    title: "The House of Mehak",
    description: "A premium restaurant website with a cinematic opening animation, smooth scrolling and scroll-driven storytelling across menu, gallery and reservation sections.",
    category: "Web Development / Frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Lenis"],
    github: "https://github.com/mhk-verma/house-of-mehak",
    features: [
      "Cinematic opening animation and smooth scroll experience",
      "Menu, gallery, story and experience sections driven by structured data",
      "Reservation form and location details",
      "Fully responsive, animation-heavy design",
    ],
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "A dark, burgundy-themed personal portfolio built with React and Vite, featuring glass-morphism UI, a custom cursor and motion-driven sections.",
    category: "Web Development / Frontend",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/mhk-verma/portfolio",
    features: [
      "Glass-morphism UI with custom interactive cursor",
      "Framer Motion animations throughout",
      "SEO and Open Graph metadata",
      "Responsive layout for desktop, tablet and mobile",
    ],
  },
]
