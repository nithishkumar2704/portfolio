export interface Experience {
  title: string;
  company: string;
  period: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "Arnik Technologies",
    period: "July 2024 – August 2024",
    points: [
      "Contributed to end-to-end SDLC activities by implementing and testing 5+ software modules focused on data validation and user authentication services.",
      "Integrated 2 third-party services (Email/SMS notifications and Geolocation APIs) into existing systems, reducing manual processing.",
      "Identified and resolved 10+ high-priority defects related to API response timeouts and UI rendering consistency, improving application stability.",
      "Worked with Git-based workflows and sprint planning, gaining exposure to real-world production practices.",
    ],
  },
];
