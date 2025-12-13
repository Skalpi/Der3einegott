export type Category = "Jesus ist Gott" | "Der Heilige Geist ist Gott" | "Die Einheit Gottes";

export interface Reference {
  verse: string;
  text: string;
  source?: string; // e.g. "Elberfelder 2006"
}

export interface TheologicalProof {
  id: string;
  title: string;
  shortDescription: string;
  category: Category;
  primaryVerse: Reference;
  contextVerses?: Reference[];
  commentary: string; // HTML or Markdown string for rich text
  authorOrSource?: string; // e.g. "Basierend auf Roger Liebi"
}