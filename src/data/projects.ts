/** Project data for the Projects showcase section */
export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Cephalon",
    description:
      "A fully self-contained, locally-hosted intelligence platform. Merges zero-dependency native windowing via Tauri v2 with the extreme out-of-core scalability of LanceDB. Feed it anything — from dense PDFs to colossal multi-sheet Excel files — and instantly retrieve explicitly cited answers. No cloud. No telemetry.",
    tech: ["TypeScript", "Python", "Rust", "Tauri", "React", "LanceDB", "ONNX"],
    github: "https://github.com/DeSitterUniverse/Cephalon",
  },
  {
    title: "Synapse Pipeline Orchestrator",
    description:
      "End-to-end data pipeline framework automating ingestion, transformation, and quality checks across Azure Data Factory and Snowflake. Features dynamic parameterization, incremental loading patterns, and automated lineage tracking.",
    tech: ["Python", "Azure ADF", "Snowflake", "SQL", "PowerShell"],
    github: "#",
  },
  {
    title: "Document Intelligence Engine",
    description:
      "Automated document processing system using UiPath RPA bots and custom Python OCR microservices. Processes thousands of invoices and contracts daily with 99.2% extraction accuracy and automatic exception routing.",
    tech: ["UiPath", "Python", "REST API", "Docker", "Elasticsearch"],
    github: "#",
  },
  {
    title: "Cloud Infrastructure Monitor",
    description:
      "Real-time observability dashboard aggregating metrics across multi-cloud environments. Built with React frontend consuming telemetry from custom Node.js collectors, backed by Elasticsearch for log analytics.",
    tech: ["React", "Node.js", "Elasticsearch", "Docker", "AWS"],
    github: "#",
  },
];
