export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}

export interface BoycottItem {
  id: string;
  companyName: string;
  description: string;
  categoryId: string;
  logoUrl?: string;
} 