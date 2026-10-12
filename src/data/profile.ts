// Single source of truth for personal details and links.
// LinkedIn is intentionally unset: it does not appear in the resume.
// Add it below and it will show up in the hero, contact section and footer.

export const profile = {
  name: "Nithish Kumar B",
  role: "Software Engineer",
  location: "Kanchipuram, Tamil Nadu",
  tagline:
    "Software Engineer building reliable backend systems with Java, Spring Boot and PostgreSQL, with hands-on experience integrating LLM APIs into practical workflows.",
  email: "nithishkumar27052005@gmail.com",
  github: "https://github.com/nithishkumar2704",
  linkedin: "" as string, // e.g. "https://www.linkedin.com/in/your-handle"
  resume: "/Nithish_Kumar_B_Resume.pdf",
  about: [
    "I'm a Computer Science and Business Systems graduate (2026) from Rajalakshmi Institute of Technology. My focus is backend engineering: designing REST APIs, modelling data in PostgreSQL, and securing services with Spring Security.",
    "I interned as a Software Engineering Intern at Arnik Technologies, where I worked across the SDLC, from implementing modules to fixing defects. Since then I've built projects around distributed payment processing, role-based APIs and an LLM-driven resume analysis workflow.",
    "I'm looking for a software engineering role where I can build reliable, scalable, customer-centric systems and keep learning from experienced engineers.",
  ],
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
