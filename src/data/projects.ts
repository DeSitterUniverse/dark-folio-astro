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
      "A fully self-contained, locally-hosted intelligence platform. This language-agnostic system can load any model via its .gguf file, ensuring compatibility with future releases. It processes all file types, including multi-sheet Excel documents, allowing you to instantly retrieve answers with explicit citations using completely local AI. All of this is housed in an ultra-lightweight frontend featuring zero-dependency native windowing via Tauri v2, backed by the out-of-core scalability of LanceDB.",
    tech: ["TypeScript", "Python", "Rust", "Tauri", "React", "LanceDB", "ONNX"],
    github: "https://github.com/DeSitterUniverse/Cephalon",
  },
];
