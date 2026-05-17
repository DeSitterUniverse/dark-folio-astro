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
      "Cephalon is a local-first desktop RAG workbench for private document intelligence. It indexes local files, Obsidian vaults, Office documents, PDFs, spreadsheets, and text-like unknown files into a transparent retrieval pipeline using SQLite metadata, SQLite FTS5 lexical search, LanceDB dense vectors, Jina ONNX embeddings, and Jina ONNX reranking. Local GGUF chat models are explicitly loaded through Vulkan-enabled llama.cpp, with model/backend diagnostics exposed in the app. Answers stream with citations, source scores, confidence/no-answer diagnostics, retrieval traces, chat history, index health, eval metrics, and numeric metrics written locally for later analysis.",
    tech: ["TypeScript", "Python", "Rust", "Tauri", "React", "LanceDB", "ONNX", "SQLite"],
    github: "https://github.com/DeSitterUniverse/Cephalon",
  },
];
