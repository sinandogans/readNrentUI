export interface UserBookModel {
  rating: number;
  liked: boolean;
  startDate: Date;
  finishDate: Date;
  note: string;
  readType: string;
  book: {
    name: string;
    imagePath: string;
    category: {
      name: string;
    };
    authors: {
      name: string
      imagePath: string;
    }[]
  };
}
