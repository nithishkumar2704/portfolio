export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { title: "Languages", items: ["Java", "SQL"] },
  {
    title: "Backend",
    items: ["Spring Boot", "Spring Security", "Spring Data JPA (Hibernate)", "REST APIs"],
  },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  {
    title: "Distributed Systems (project work)",
    items: ["Apache Kafka", "Redis", "Resilience4j", "Docker"],
  },
  {
    title: "AI / LLM Integration",
    items: ["LLM APIs", "Prompt Engineering", "Workflow Automation (n8n)"],
  },
  {
    title: "Engineering",
    items: ["Data Structures & Algorithms", "OOP", "SDLC", "Agile"],
  },
  { title: "Tools", items: ["Git", "Postman", "IntelliJ IDEA", "n8n"] },
];
