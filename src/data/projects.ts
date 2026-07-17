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
      "Cephalon is a local-first document intelligence workbench for private retrieval-augmented generation (RAG). It indexes local files, Office documents, PDFs, spreadsheets, and text-based files into a transparent retrieval pipeline with SQLite metadata, SQLite FTS5 lexical search, LanceDB vector search, configurable ONNX embedding models, and configurable ONNX reranking models. Connect Cephalon to your own externally running llama.cpp server to chat with the model it has loaded. Answers stream with source citations, retrieval scores and traces, confidence and no-answer diagnostics, chat history, index-health views, evaluation metrics, and locally stored numeric telemetry for later analysis.\n\nRecommended for use with LLMs fine-tuned for a specific domain, task, or behavior, such as, but not limited to, models fine-tuned on personal writing styles, programming conventions, academic subjects, technical terminology, document-extraction formats, accessibility preferences, creative genres, and specialized knowledge.",
    tech: ["TypeScript", "Python", "Rust", "Tauri", "React", "LanceDB", "ONNX", "SQLite"],
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
