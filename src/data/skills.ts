/** Skills data organized into categorized sections */
export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C#", "C/C++", "SQL", "PowerShell", "Bash", "R"],
  },
  {
    title: "Data & Cloud",
    items: ["Azure (ADF, Synapse)", "Snowflake", "Informatica Cloud", "AWS", "GCP", "Elasticsearch", "Oracle / SQL Server", "Qlik Enterprise Manager", "LanceDB", "Databricks", "Snowflake", "SQLite"]
  },
  {
    title: "Backend & Infrastructure",
    items: ["Node.js", "REST APIs", "FastAPI", "Kubernetes", "ServiceNow", "Docker", "Linux", "CI/CD", "Git"],
  },
  {
    title: "Frontend",
    items: ["React", "Angular", "HTML/CSS", "Tailwind CSS", "Astro", "jQuery"],
  },
  {
    title: "Automation & Tools",
    items: ["UiPath (RPA)", "Data Pipelines", "ETL/ELT", "ONNX Runtime", "Kibana", "SMSS/Oracle SQL Developer"],
  },
  {
    title: "Data & Analytics",
    items: ["Data Visualization", "Data Modeling", "Data Governance", "Statistical Analysis", "Tableau / PowerBI", "CDC (Change Data Capture)", "RAG (Retrieval-Augmented Generation)"],
  },
];
