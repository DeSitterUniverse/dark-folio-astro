/** Skills data organized into categorized sections */
export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C#", "C/C++", "SQL", "PowerShell", "Bash"],
  },
  {
    title: "Data & Cloud",
    items: ["Azure (ADF, Synapse)", "Snowflake", "Informatica Cloud", "AWS", "GCP", "Elasticsearch"],
  },
  {
    title: "Backend & Infrastructure",
    items: ["Node.js", "REST APIs", "Docker", "Linux", "CI/CD", "Git"],
  },
  {
    title: "Frontend",
    items: ["React", "Angular", "HTML/CSS", "Tailwind CSS", "Astro"],
  },
  {
    title: "Automation & Tools",
    items: ["UiPath (RPA)", "Data Pipelines", "ETL/ELT", "ONNX Runtime"],
  },
  {
    title: "Data & Analytics",
    items: ["Data Visualization", "Data Modeling", "Data Governance", "Statistical Analysis"],
  },
];
