export type ChatAction =
  | { kind: "link"; label: string; href: string }
  | { kind: "section"; label: string; sectionId: string };

export interface ChatOption {
  label: string;
  nodeId: string;
}

export interface ChatAnswer {
  paragraphs: string[];
  actions: ChatAction[];
  options: ChatOption[];
}
