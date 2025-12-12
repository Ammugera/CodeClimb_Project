export type Difficulty = "Easy" | "Medium" | "Hard";
export type Language = "JavaScript" | "TypeScript" | "Python" | "Java" | "C++";

export interface Challenge {
  id: string;
  title: string;
  language: Language;
  difficulty: Difficulty;
  codeSnippet: string;
  correctAnswer: string;
  description?: string;
}
