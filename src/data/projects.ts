/** Project data for the Projects showcase section */
export interface Project {
  title: string;
  description: string;
  descriptionLink?: {
    text: string;
    url: string;
  };
  tech: string[];
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Cephalon",
    description:
      "Cephalon is a local-first desktop workbench for asking grounded questions about private document collections. It imports PDFs, Office documents, spreadsheets, text files, and structured data into a transparent hybrid retrieval pipeline combining LanceDB semantic search, SQLite FTS5 keyword search, reciprocal-rank fusion, and full-set listwise reranking.\n\nCephalon preserves exact source provenance such as PDF pages, layout, tables, captions, and bounding boxes. It validates evidence and claim coverage before returning answers with stable citations, retrieval traces, confidence diagnostics, and fail-safe no-answer behaviour.\n\nConnect your own locally running llama.cpp chat model while keeping documents, indexes, metadata, telemetry, and chat history on your computer. Cephalon is particularly useful with models fine-tuned for specialised knowledge domains, tasks, writing styles, programming conventions, academic subjects, accessibility preferences, or creative work.",
    tech: ["TypeScript", "Python", "Rust", "Tauri", "React", "LanceDB", "SQLite", "llama.cpp", "Transformers"],
    github: "https://github.com/DeSitterUniverse/Cephalon",
  },
  {
    title: "Titchy-rs",
    description:
      "A Rust implementation of Titchy for lossless compression of fixed-width sensor time series, with bounded-memory streaming, adaptive deduplication, and indexed random access.",
    descriptionLink: {
      text: "Titchy",
      url: "https://doi.org/10.1109/JIOT.2021.3081868",
    },
    tech: ["Rust", "Streaming Data", "Sensor Data", "Lossless Compression"],
    github: "https://github.com/DeSitterUniverse/Titchy-rs",
  },
  {
    title: "ssd-flash-id",
    description:
      "Ported and extended the open-source ssd-flash-id project for Windows, preserving its controller and NAND identification logic while implementing native Windows NVMe/ATA transports, hardware discovery, safety enforcement, diagnostics, and compatibility improvements.",
    tech: ["Rust", "Windows API", "Systems Programming", "FFI"],
    github: "https://github.com/DeSitterUniverse/ssd-flash-id",
  },
];
