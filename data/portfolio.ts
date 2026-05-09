export type SkillGroup = {
  label: string;
  title: string;
  badges: string[];
  skills: Array<{
    name: string;
    level: number;
  }>;
};

export type ProjectItem = {
  title: string;
  label: string;
  description: string;
  stack: string[];
};

export type InterestItem = {
  title: string;
  description: string;
  accent: string;
};

export type HobbyItem = {
  title: string;
  caption: string;
  description: string;
  image: string;
  alt: string;
  accent: string;
};

export const profile = {
  name: "Harsh Kumar Mishra",
  logo: "HKM",
  headline: "Robotics, AI/ML and cybersecurity focused developer.",
  intro:
    "I build intelligent systems that connect software, sensors, automation and thoughtful user experience. My work sits at the intersection of robotics, applied machine learning, privacy-first assistants and scientific computing.",
  summary:
    "B.Tech student in Information Technology and Mathematical Innovation at the University of Delhi, with internship experience across Robotics, IoT and Machine Learning. I like turning research-heavy ideas into practical systems that people can actually use.",
  avatar: "/images/profile-placeholder.png",
  heroImage: "/images/hero-lab.png",
  aboutIntro:
    "I am Harsh Kumar Mishra, a B.Tech student at the University of Delhi studying Information Technology and Mathematical Innovation with a minor in Economics. I enjoy work that blends engineering depth with real-world usefulness.",
  background:
    "My experience includes robotics and IoT research, AI-driven recruitment models, autonomous robotic systems, real-time monitoring, computer vision, NLP-powered desktop assistants and scientific computing research.",
  personalStory:
    "I am especially drawn to systems that feel intelligent but remain practical: offline AI assistants, sensor networks, anomaly detection, sign-language recognition, and privacy-aware automation. Long term, I want to build reliable AI products for robotics, cybersecurity and scientific discovery.",
  email: "harsh.mishra7225@cic.du.ac.in",
  phone: "+91 9958737531",
  location: "Delhi, India",
  degree: "B.Tech, Information Technology and Mathematical Innovation",
  university: "University of Delhi",
  graduation: "August 2026"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Hobbies", href: "/hobbies" },
  { label: "Contact Me", href: "/contact" }
];

export const coreInterests: InterestItem[] = [
  {
    title: "Robotics",
    description: "Autonomous systems, sensor fusion, real-time monitoring and adaptive control.",
    accent: "from-cyan to-sun"
  },
  {
    title: "AI/ML",
    description: "Computer vision, NLP, predictive analytics, anomaly detection and model integration.",
    accent: "from-plum to-rose"
  },
  {
    title: "Cybersecurity",
    description: "Privacy-first assistants, secure automation, anomaly detection and resilient systems.",
    accent: "from-aurora to-teal"
  }
];

export const featuredSummary = [
  {
    label: "Current Focus",
    title: "AI Systems",
    description:
      "Building privacy-first AI workflows, context-aware assistants and machine-learning powered tools that solve practical problems."
  },
  {
    label: "Engineering Edge",
    title: "Robotics and IoT",
    description:
      "Hands-on work with Arduino, ESP32, sensor calibration, Bluetooth-controlled robots and real-time monitoring systems."
  },
  {
    label: "Research Mindset",
    title: "Scientific Computing",
    description:
      "Interested in human-AI interaction, big data analytics, high-performance computing and AI for scientific research."
  }
];

export const storyHighlights = [
  { label: "Degree", value: profile.degree },
  { label: "University", value: profile.university },
  { label: "Expected Graduation", value: profile.graduation },
  { label: "Core Interests", value: "Robotics, AI/ML, Cybersecurity" }
];

export const milestones = [
  {
    year: "Aug 2026",
    title: "B.Tech at University of Delhi",
    description:
      "Information Technology and Mathematical Innovation with a minor in Economics, building a foundation across computing, math, systems and analytical thinking."
  },
  {
    year: "Jul-Sep 2024",
    title: "Robotics and IoT Intern at Hiprotech, Inc",
    description:
      "Researched robotics, IoT, AI and automation while working on sensor networks, ESP32, Arduino, real-time monitoring, adaptive robotics and anomaly detection."
  },
  {
    year: "Sep-Nov 2024",
    title: "Machine Learning Intern at Bullhorn Consultants",
    description:
      "Worked on data preprocessing, feature engineering and predictive models for recruitment automation, candidate selection and job matching."
  },
  {
    year: "Ongoing",
    title: "AI Assistant for Windows Workflows",
    description:
      "Developing a privacy-first assistant using Windows APIs, NLP models, Python frameworks and offline-friendly workflows for task automation and smart search."
  },
  {
    year: "Project",
    title: "Sign Language Detection App",
    description:
      "Built a real-time sign language detection application using TensorFlow, MediaPipe, computer vision and a user-friendly desktop interface."
  }
];

export const projects: ProjectItem[] = [
  {
    title: "AI Assistant",
    label: "Privacy-first productivity",
    description:
      "A Windows-integrated assistant for task automation, smart search and context-aware suggestions using NLP models and local workflow integration.",
    stack: ["Python", "Windows APIs", "Llama 3", "Mistral", "NLP"]
  },
  {
    title: "Sign Language Detection",
    label: "Computer vision app",
    description:
      "A real-time gesture recognition application that processes hand landmarks and recognizes sign language symbols through deep learning.",
    stack: ["TensorFlow", "MediaPipe", "Computer Vision", "Python"]
  },
  {
    title: "Smart Surveillance System",
    label: "AI anomaly detection",
    description:
      "An AI-powered surveillance concept for real-time anomaly detection, designed around sensor intelligence and automated decision support.",
    stack: ["AI/ML", "Sensors", "Anomaly Detection", "IoT"]
  },
  {
    title: "Image Stitching Tool",
    label: "MATLAB vision project",
    description:
      "Built an image stitching interface using SURF feature detection and RANSAC affine transformation to align and merge images.",
    stack: ["MATLAB", "SURF", "RANSAC", "UI"]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming",
    title: "Languages and Core Logic",
    badges: ["Python", "C", "SQL", "MATLAB"],
    skills: [
      { name: "Python", level: 88 },
      { name: "C", level: 72 },
      { name: "SQL", level: 76 },
      { name: "MATLAB", level: 78 }
    ]
  },
  {
    label: "AI/ML",
    title: "Applied Machine Intelligence",
    badges: ["TensorFlow", "MediaPipe", "NLP", "Sensor Fusion"],
    skills: [
      { name: "Machine Learning", level: 84 },
      { name: "Computer Vision", level: 82 },
      { name: "NLP Models", level: 76 },
      { name: "Predictive Analytics", level: 78 }
    ]
  },
  {
    label: "Robotics and IoT",
    title: "Hardware-Aware Systems",
    badges: ["Arduino", "ESP32", "Automation"],
    skills: [
      { name: "Arduino and ESP32", level: 84 },
      { name: "Sensor Calibration", level: 80 },
      { name: "Real-time Monitoring", level: 82 },
      { name: "Robotic Prototyping", level: 78 }
    ]
  },
  {
    label: "Tools and Data",
    title: "Research and Development Stack",
    badges: ["MySQL", "SQLite", "QGIS", "AutoDock Vina"],
    skills: [
      { name: "MySQL and SQLite", level: 78 },
      { name: "REST APIs", level: 72 },
      { name: "Scientific Data Analysis", level: 80 },
      { name: "Research Communication", level: 84 }
    ]
  },
  {
    label: "Cybersecurity",
    title: "Security-Aware Thinking",
    badges: ["Privacy", "Anomaly Detection", "Resilience"],
    skills: [
      { name: "Privacy-first Design", level: 82 },
      { name: "Anomaly Detection", level: 78 },
      { name: "Secure Automation Concepts", level: 72 },
      { name: "Systems Thinking", level: 84 }
    ]
  },
  {
    label: "Soft Skills",
    title: "Collaboration Strengths",
    badges: ["Research", "Communication", "Ownership"],
    skills: [
      { name: "Interdisciplinary Collaboration", level: 88 },
      { name: "Technical Communication", level: 86 },
      { name: "Problem Solving", level: 90 },
      { name: "Adaptability", level: 86 }
    ]
  }
];

export const toolsHighlights = [
  {
    title: "Production-Minded ML",
    description:
      "Experience moving beyond notebook experiments into model evaluation, integration thinking and practical decision support."
  },
  {
    title: "Human-AI Interaction",
    description:
      "Interested in assistants, visualization and scientific computing interfaces that make complex systems easier to use."
  },
  {
    title: "Research Breadth",
    description:
      "Work spans robotics, recruitment automation, sign language recognition, image stitching, bioinformatics and nanotechnology review writing."
  }
];

export const hobbies: HobbyItem[] = [
  {
    title: "Reading",
    caption: "Books that sharpen strategy",
    description:
      "Reading business, technology and self-improvement books to build judgment, discipline and long-term thinking.",
    image: "/images/hobby-reading.png",
    alt: "Bright illustrated reading desk with books",
    accent: "from-sun to-clay"
  },
  {
    title: "Astronomy",
    caption: "Curiosity at cosmic scale",
    description:
      "Following space, stars and big scientific questions that make engineering feel connected to something larger.",
    image: "/images/hobby-astronomy.png",
    alt: "Illustrated telescope under a star field",
    accent: "from-cyan to-plum"
  },
  {
    title: "Watching Anime",
    caption: "Story, motion and imagination",
    description:
      "Enjoying expressive worlds, character arcs and visual storytelling that keep creativity playful and bold.",
    image: "/images/hobby-anime.png",
    alt: "Stylized anime-inspired screen and motion streaks",
    accent: "from-rose to-sun"
  },
  {
    title: "Drawing",
    caption: "Sketching ideas into form",
    description:
      "Using drawing to slow down, observe details and explore visual composition before ideas become interfaces.",
    image: "/images/hobby-drawing.png",
    alt: "Illustrated sketchbook with pencil and color shapes",
    accent: "from-aurora to-cyan"
  }
];

export const bookStack = [
  "The Personal MBA",
  "Zero to One",
  "48 Laws of Power",
  "Rich Dad Poor Dad",
  "The E-Myth Revisited"
];

export const contactDetails = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: "tel:+919958737531" },
  { label: "Location", value: profile.location, href: "https://www.google.com/maps/place/Delhi" },
  { label: "University", value: "Cluster Innovation Centre, University of Delhi", href: "https://cic.du.ac.in/" }
];
