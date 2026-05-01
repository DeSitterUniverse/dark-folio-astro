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
      "A fully self-contained, locally-hosted intelligence platform. Merges zero-dependency native windowing via Tauri v2 with the extreme out-of-core scalability of LanceDB. It can take any file type, multi-sheet Excel files and more! Instantly retrieve explicitly cited answers using completely local AI",
    tech: ["TypeScript", "Python", "Rust", "Tauri", "React", "LanceDB", "ONNX"],
    github: "https://github.com/DeSitterUniverse/Cephalon",
  },
];
