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
];
