export interface Project {
  name: string;
  role: string;
  summary: string;
  problem: string;
  engineering: string;
  contributions: string[];
  result?: string;
  tech: string[];
  featured?: boolean;
  ai?: boolean;
  /** Direct repository URL. Left empty because the resume lists none; add one and a "View on GitHub" button appears. */
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    name: "Payment Processing System",
    role: "Backend Developer",
    summary:
      "A distributed payment processor built with Spring Boot, Kafka, Redis and PostgreSQL.",
    problem:
      "Moving money across services reliably, without losing or duplicating transfers when a step fails.",
    engineering:
      "Event-driven payment processor designed for 1M+ daily transactions, using Kafka for messaging, Redis, and PostgreSQL for persistence.",
    contributions: [
      "Implemented Saga orchestration for reliable distributed fund transfers.",
      "Solved dual-write issues using the Transactional Outbox pattern.",
      "Added Resilience4j circuit breakers for fault tolerance and graceful degradation.",
    ],
    result: "Built to handle 1M+ daily transactions.",
    tech: [
      "Java 21",
      "Spring Boot 3.2",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "Resilience4j",
      "Hibernate JPA",
      "Docker",
    ],
    featured: true,
  },
  {
    name: "AI Resume Analyzer & Optimizer",
    role: "Backend Developer (GenAI Integration)",
    summary:
      "An LLM-based workflow that compares a resume against a job description.",
    problem:
      "Candidates struggle to see how well a resume lines up with a specific job posting.",
    engineering:
      "An n8n workflow that calls LLM APIs with engineered prompts to score resume and job description alignment.",
    contributions: [
      "Built the LLM-based workflow that generates a matching score.",
      "Identified missing keywords against the job requirements.",
      "Generated improved resume content based on those requirements.",
    ],
    tech: ["n8n", "LLM APIs", "Prompt Engineering", "Workflow Automation"],
    featured: true,
    ai: true,
  },
  {
    name: "Byte Cycle",
    role: "Backend Developer",
    summary:
      "A backend that coordinates food donors and recipients in real time to address urban food waste.",
    problem: "Surplus food goes to waste because donors and recipients are hard to connect quickly.",
    engineering:
      "Secured REST backend with role-based access for donors and receivers.",
    contributions: [
      "Designed and implemented 8+ secure RESTful APIs covering user authorization, food donation management and booking workflows.",
      "Integrated Spring Security with JWT authentication and role-based access (donor/receiver).",
    ],
    tech: ["Spring Boot", "Spring Security", "Spring Data JPA (Hibernate)", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Service Locator",
    role: "Backend Developer",
    summary: "A backend connecting users with verified local service providers.",
    problem: "Finding trustworthy nearby service providers quickly.",
    engineering: "Layered Spring Boot backend with provider search and location filtering on PostgreSQL.",
    contributions: [
      "Optimized PostgreSQL queries for provider search and location filtering.",
      "Designed a scalable layered backend architecture.",
    ],
    result: "Reduced response latency by 20%.",
    tech: ["Spring Boot", "PostgreSQL", "REST APIs"],
  },
];
