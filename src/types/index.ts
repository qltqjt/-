export interface Student {
  id: string;
  name: string;
  grade: 'primary' | 'middle' | 'high';
  level: number;
  spiritPower: number;
  spellsLearned: string[];
  tribulationRecord: TribulationEntry[];
}

export interface TribulationEntry {
  spellId: string;
  passed: boolean;
  date: string;
}

export interface Spell {
  id: string;
  name: string;
  category: string;
  difficulty: 1 | 2 | 3;
  pptUrl?: string;
  description: string;
  quiz: Question[];
}

export interface Question {
  id: string;
  type: 'choice';
  stem: string;
  options: string[];
  answer: number;
}

export interface Realm {
  name: string;
  emoji: string;
  minLevel: number;
  maxLevel: number;
  titles: string[];
  wordRequirement: number;
  spellRequirement: number;
}
