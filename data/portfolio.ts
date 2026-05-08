export type SkillGroup = {
  label: string;
  title: string;
  badges: string[];
  skills: Array<{
    name: string;
    level: number;
  }>;
};

// Replace these placeholders with your real name, bio, links, and image paths.
export const profile = {
  name: "Your Name",
  logo: "YN",
  headline: "Aspiring full-stack developer crafting thoughtful web experiences.",
  intro:
    "I enjoy turning ideas into polished, accessible products with clean code, careful design, and a strong sense of user experience.",
  summary:
    "A portfolio for someone who values clarity, practical problem-solving, and design that feels effortless. Customize the copy, projects, and images to make it fully yours.",
  avatar: "/images/profile-placeholder.png",
  aboutIntro:
    "I am a motivated learner and builder with a growing focus on modern web development, product thinking, and clean user interfaces. My work combines technical curiosity with a calm, reliable approach to collaboration.",
  background:
    "My background includes academic projects, self-directed learning, and hands-on practice with frontend and backend concepts. I enjoy understanding how systems fit together, from interface details to deployment workflows.",
  personalStory:
    "I started exploring technology by trying to make simple pages feel more useful and human. Over time, that curiosity grew into a deeper interest in building products that are elegant, readable, and genuinely helpful.",
  email: "hello@example.com",
  phone: "+1 (555) 000-0000",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Hobbies", href: "/hobbies" },
  { label: "Contact Me", href: "/contact" }
];

export const featuredSummary = [
  {
    label: "Focus",
    title: "Modern Web",
    description:
      "Building responsive interfaces with a strong foundation in component architecture, accessibility, and performance."
  },
  {
    label: "Approach",
    title: "Clear Thinking",
    description:
      "Breaking complex goals into small, testable steps while keeping the user experience at the center."
  },
  {
    label: "Personality",
    title: "Warm Professional",
    description:
      "Communicating with care, learning quickly, and bringing steady energy to collaborative work."
  }
];

export const storyHighlights = [
  { label: "Current Role", value: "Student / Emerging Developer" },
  { label: "Education", value: "Computer Science and Web Design" },
  { label: "Interests", value: "Frontend, product design, clean systems" },
  { label: "Goal", value: "Build useful products with thoughtful teams" }
];

export const milestones = [
  {
    year: "2023",
    title: "Started building web projects",
    description:
      "Created foundational layouts and interactive pages while learning HTML, CSS, JavaScript, and responsive design."
  },
  {
    year: "2024",
    title: "Expanded into modern frameworks",
    description:
      "Explored React, Next.js, TypeScript, and component-driven development through practical portfolio and coursework projects."
  },
  {
    year: "2025",
    title: "Focused on polish and accessibility",
    description:
      "Improved UI quality, form validation, semantic markup, motion design, and deployment workflows."
  },
  {
    year: "2026",
    title: "Preparing for real-world opportunities",
    description:
      "Refining a professional portfolio, documenting projects clearly, and pursuing internships or junior developer roles."
  }
];

// Update skill names and levels to reflect your actual proficiency.
export const skillGroups: SkillGroup[] = [
  {
    label: "Programming",
    title: "Programming Foundations",
    badges: ["TypeScript", "JavaScript", "Problem Solving"],
    skills: [
      { name: "TypeScript", level: 82 },
      { name: "JavaScript", level: 86 },
      { name: "Python", level: 74 },
      { name: "Data Structures", level: 70 }
    ]
  },
  {
    label: "Web Development",
    title: "Frontend and App Development",
    badges: ["Next.js", "React", "Responsive UI"],
    skills: [
      { name: "React", level: 84 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Accessibility", level: 78 }
    ]
  },
  {
    label: "Tools",
    title: "Development Workflow",
    badges: ["Git", "Vercel", "Figma"],
    skills: [
      { name: "Git and GitHub", level: 82 },
      { name: "Vercel Deployment", level: 78 },
      { name: "Figma Basics", level: 72 },
      { name: "Debugging", level: 80 }
    ]
  },
  {
    label: "Soft Skills",
    title: "Collaboration Strengths",
    badges: ["Communication", "Ownership", "Learning"],
    skills: [
      { name: "Communication", level: 90 },
      { name: "Adaptability", level: 86 },
      { name: "Time Management", level: 82 },
      { name: "Team Collaboration", level: 88 }
    ]
  }
];

export const toolsHighlights = [
  {
    title: "Readable Code",
    description:
      "Prefer simple component boundaries, descriptive naming, and patterns that are easy for another developer to extend."
  },
  {
    title: "Product Awareness",
    description:
      "Think beyond the screen by considering user goals, navigation clarity, content hierarchy, and deployment quality."
  },
  {
    title: "Growth Mindset",
    description:
      "Comfortable learning new tools, asking better questions, and improving work through feedback and iteration."
  }
];

// Swap these image paths with your real hobby photos in public/images.
export const hobbies = [
  {
    title: "Photography",
    caption: "Framing quiet details",
    description:
      "Exploring light, composition, and everyday scenes that sharpen visual taste for interface design.",
    image: "/images/hobby-photography.png",
    alt: "Stylized camera and city-light hobby placeholder"
  },
  {
    title: "Reading",
    caption: "Ideas between pages",
    description:
      "Reading technology, design, and personal growth books to build broader perspective and better judgment.",
    image: "/images/hobby-reading.png",
    alt: "Stylized open book hobby placeholder"
  },
  {
    title: "Travel",
    caption: "Learning from places",
    description:
      "Finding inspiration in new environments, architecture, culture, and the small patterns of daily life.",
    image: "/images/hobby-travel.png",
    alt: "Stylized travel landscape hobby placeholder"
  },
  {
    title: "Music",
    caption: "Rhythm and focus",
    description:
      "Using music to reset energy, stay focused, and bring a bit more rhythm into the creative process.",
    image: "/images/hobby-music.png",
    alt: "Stylized headphones and sound waves hobby placeholder"
  },
  {
    title: "Fitness",
    caption: "Discipline in motion",
    description:
      "Staying active to build consistency, resilience, and a clearer mind for problem-solving.",
    image: "/images/hobby-fitness.png",
    alt: "Stylized running trail hobby placeholder"
  }
];

export const contactDetails = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/your-profile", href: profile.linkedin },
  { label: "GitHub", value: "github.com/your-username", href: profile.github },
  { label: "Phone", value: profile.phone, href: "tel:+15550000000" }
];
