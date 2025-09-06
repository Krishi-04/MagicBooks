export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  pages: number;
  year: number;
  currentPage: number;
  readCount: number;
  coverImage: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  content: string;
  date: string;
  helpfulCount: number;
}