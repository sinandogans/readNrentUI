import {BookReviewModel} from "./book-review.model";

export interface BookDetailModel {
  name: string;
  imagePath: string;
  description: string;
  pages: number;
  publisher: string;
  publicationDate: Date;
  statistics: {
    review: number;
    reviewCount: number;
    likes: number;
    views: number;
    readCount: number;
    readingCount: number;
    toBeReadCount: number;
  }
  categories: {
    id: number;
    name: string;
  }[];
  authors: {
    id: number;
    fullName: string;
  }[];
  reviews: BookReviewModel[];
}
