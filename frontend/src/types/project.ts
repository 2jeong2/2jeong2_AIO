
export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  technologies: string[];
}
